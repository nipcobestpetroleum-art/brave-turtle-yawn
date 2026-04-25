import { DailyReport, PumpReport } from "../types/sales";

export const TOLERANCE = 0.05;

export interface AuditResult {
  pumpId: string;
  diff: number;
  isBalanced: boolean;
  morning: PumpReport | null; // Used as 'previous' in cross-date
  afternoon: PumpReport | null; // Used as 'current' in cross-date
  prevDate?: string;
  currShift?: "Morning" | "Afternoon";
  prevShift?: "Morning" | "Afternoon";
  timeGap?: {
    days: number;
    hours: number;
  };
}

/**
 * Aggregates total generator usage across all reports
 */
export const calculateGeneratorUsage = (allData: DailyReport[]) => {
  let totalLiters = 0;
  let totalValue = 0;

  allData.forEach(day => {
    const allShifts = [...day.shifts.morning, ...day.shifts.afternoon];
    allShifts.forEach(pump => {
      pump.shortageResolutions?.forEach(res => {
        const isGenerator = res.purpose?.toLowerCase().includes('generator') || 
                           res.reason?.toLowerCase().includes('generator');
        
        if (res.type === 'official use' && isGenerator) {
          totalLiters += res.liters;
          totalValue += res.amount;
        }
      });
    });
  });

  return { totalLiters, totalValue };
};

/**
 * Intra-Day Handover Logic (Same Day M -> A)
 */
export const auditIntraDay = (report: DailyReport): AuditResult[] => {
  const pumpIds = new Set([
    ...report.shifts.morning.map(p => p.pumpId),
    ...report.shifts.afternoon.map(p => p.pumpId)
  ]);

  return Array.from(pumpIds).map(pumpId => {
    const morning = report.shifts.morning.find(p => p.pumpId === pumpId) || null;
    const afternoon = report.shifts.afternoon.find(p => p.pumpId === pumpId) || null;

    let diff = 0;
    let isBalanced = false;

    if (morning && afternoon) {
      diff = afternoon.openingReading - morning.closingReading;
      isBalanced = Math.abs(diff) < TOLERANCE;
    }

    return { pumpId, diff, isBalanced, morning, afternoon };
  });
};

/**
 * Cross-Date Continuity Algorithm
 * Compares the first usage of a pump on targetDate with its last known usage in history.
 */
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
    
    // The "Current" point for continuity is the earliest shift the pump was used today
    const currentReport = currMorning || currAfternoon || null;
    const currShiftLabel = currMorning ? "Morning" : "Afternoon";
    const firstReading = currentReport?.openingReading || null;

    let lastReading = null;
    let prevDateFound = undefined;
    let prevReportFound = null;
    let prevShiftLabel: "Morning" | "Afternoon" | undefined = undefined;

    // Search backwards through days for the last time this pump was used
    for (let i = targetIndex - 1; i >= 0; i--) {
      const checkDay = sortedData[i];
      
      // Check afternoon shift first (most recent)
      const prevAfternoon = checkDay.shifts.afternoon.find(p => p.pumpId === pumpId);
      if (prevAfternoon) {
        lastReading = prevAfternoon.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevAfternoon;
        prevShiftLabel = "Afternoon";
        break;
      }

      // Then check morning shift
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
    let isBalanced = false;
    let timeGap = undefined;

    if (lastReading !== null && firstReading !== null && prevDateFound) {
      diff = firstReading - lastReading;
      isBalanced = Math.abs(diff) < TOLERANCE;

      // Calculate time gap for visibility
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

    return { 
      pumpId, 
      diff, 
      isBalanced, 
      morning: prevReportFound, // Mapping to Card component's Left side
      afternoon: currentReport, // Mapping to Card component's Right side
      prevDate: prevDateFound,
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