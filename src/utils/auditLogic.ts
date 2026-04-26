import { DailyReport, PumpReport } from "../types/sales";

export const TOLERANCE = 0.05;

export type GapCategory = "balanced" | "minor" | "theft" | "reset";

export interface AuditResult {
  pumpId: string;
  diff: number;
  isBalanced: boolean;
  category: GapCategory;
  categoryLabel: string;
  morning: PumpReport | null;
  afternoon: PumpReport | null;
  prevDate?: string;
  currDate?: string;
  currShift?: "Morning" | "Afternoon";
  prevShift?: "Morning" | "Afternoon";
  timeGap?: {
    days: number;
    hours: number;
  };
}

/**
 * Classifies the nature of a reading discrepancy based on volume thresholds
 */
export const classifyGap = (diff: number): { category: GapCategory; label: string } => {
  if (Math.abs(diff) < TOLERANCE) {
    return { category: "balanced", label: "Verified Balanced" };
  }
  
  if (diff < -TOLERANCE || diff > 6000) {
    return { category: "reset", label: "Pump Reset (under enquiry)" };
  }
  
  if (diff >= 25 && diff <= 6000) {
    return { category: "theft", label: "Unrecorded sales or theft" };
  }
  
  return { category: "minor", label: "Minor Discrepancy" };
};

/**
 * Aggregates grand totals and extracts detailed theft records
 */
export const calculateGrandTotals = (allData: DailyReport[]) => {
  let totalSales = 0;
  let totalCash = 0;
  let totalPos = 0;
  let totalLostLiters = 0;
  const theftRecords: AuditResult[] = [];

  allData.forEach(day => {
    const allShifts = [...day.shifts.morning, ...day.shifts.afternoon];
    
    allShifts.forEach(pump => {
      const litersSold = Math.max(0, pump.closingReading - pump.openingReading);
      totalSales += (litersSold * pump.pricePerLiter);
      totalCash += pump.cashCollected;
      totalPos += pump.posAmount;
    });

    // Intra-day transitions
    auditIntraDay(day).forEach(res => {
      if (res.category === "theft") {
        totalLostLiters += res.diff;
        theftRecords.push({ ...res, currDate: day.date });
      }
    });

    // Cross-date transitions
    auditCrossDate(allData, day.date).forEach(res => {
      if (res.category === "theft") {
        totalLostLiters += res.diff;
        theftRecords.push({ ...res, currDate: day.date });
      }
    });
  });

  return { totalSales, totalCash, totalPos, totalLostLiters, theftRecords };
};

export const calculateGeneratorUsage = (allData: DailyReport[]) => {
  let totalLiters = 0;
  let totalValue = 0;
  allData.forEach(day => {
    const allShifts = [...day.shifts.morning, ...day.shifts.afternoon];
    allShifts.forEach(pump => {
      pump.shortageResolutions?.forEach(res => {
        const isGenerator = res.purpose?.toLowerCase().includes('generator') || res.reason?.toLowerCase().includes('generator');
        if (res.type === 'official use' && isGenerator) {
          totalLiters += res.liters;
          totalValue += res.amount;
        }
      });
    });
  });
  return { totalLiters, totalValue };
};

export const auditIntraDay = (report: DailyReport): AuditResult[] => {
  const pumpIds = new Set([
    ...report.shifts.morning.map(p => p.pumpId),
    ...report.shifts.afternoon.map(p => p.pumpId)
  ]);

  return Array.from(pumpIds).map(pumpId => {
    const morning = report.shifts.morning.find(p => p.pumpId === pumpId) || null;
    const afternoon = report.shifts.afternoon.find(p => p.pumpId === pumpId) || null;

    let diff = 0;
    if (morning && afternoon) {
      diff = afternoon.openingReading - morning.closingReading;
    }

    const { category, label } = classifyGap(diff);

    return { 
      pumpId, 
      diff, 
      isBalanced: category === "balanced", 
      category, 
      categoryLabel: label,
      morning, 
      afternoon 
    };
  });
};

export const auditCrossDate = (allData: DailyReport[], targetDate: string): AuditResult[] => {
  const sortedData = [...allData].sort((a, b) => a.date.localeCompare(b.date));
  const targetIndex = sortedData.findIndex(d => d.date === targetDate);
  if (targetIndex < 0) return [];

  const currentDay = sortedData[targetIndex];
  const pumpIds = new Set([
    ...currentDay.shifts.morning.map(p => p.pumpId),
    ...currentDay.shifts.afternoon.map(p => p.pumpId)
  ]);

  return Array.from(pumpIds).map(pumpId => {
    const currMorning = currentDay.shifts.morning.find(p => p.pumpId === pumpId);
    const currAfternoon = currentDay.shifts.afternoon.find(p => p.pumpId === pumpId);
    const currentReport = currMorning || currAfternoon || null;
    const currShiftLabel = currMorning ? "Morning" : "Afternoon";
    const firstReading = currentReport?.openingReading || null;

    let lastReading = null;
    let prevDateFound = undefined;
    let prevReportFound = null;
    let prevShiftLabel: "Morning" | "Afternoon" | undefined = undefined;

    for (let i = targetIndex - 1; i >= 0; i--) {
      const checkDay = sortedData[i];
      const prevAfternoon = checkDay.shifts.afternoon.find(p => p.pumpId === pumpId);
      if (prevAfternoon) {
        lastReading = prevAfternoon.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevAfternoon;
        prevShiftLabel = "Afternoon";
        break;
      }
      const prevMorning = checkDay.shifts.morning.find(p => p.pumpId === pumpId);
      if (prevMorning) {
        lastReading = prevMorning.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevMorning;
        prevShiftLabel = "Morning";
        break;
      }
    }

    let diff = 0;
    let timeGap = undefined;

    if (lastReading !== null && firstReading !== null && prevDateFound) {
      diff = firstReading - lastReading;
      const start = new Date(prevDateFound);
      if (prevShiftLabel === "Afternoon") start.setHours(22, 0, 0); else start.setHours(14, 0, 0);
      const end = new Date(targetDate);
      if (currShiftLabel === "Morning") end.setHours(8, 0, 0); else end.setHours(14, 0, 0);
      const msGap = Math.max(0, end.getTime() - start.getTime());
      timeGap = {
        days: Math.floor(msGap / (1000 * 60 * 60 * 24)),
        hours: Math.floor((msGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      };
    }

    const { category, label } = classifyGap(diff);

    return { 
      pumpId, 
      diff, 
      isBalanced: category === "balanced",
      category,
      categoryLabel: label,
      morning: prevReportFound, 
      afternoon: currentReport, 
      prevDate: prevDateFound,
      currDate: targetDate,
      currShift: currShiftLabel,
      prevShift: prevShiftLabel,
      timeGap
    };
  });
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};

export const formatLiters = (liters: number) => {
  return `${liters.toFixed(2)} L`;
};