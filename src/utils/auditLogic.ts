import { DailyReport, PumpReport, ShiftType } from "../types/sales";

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
  type: "intraday" | "crossdate";
  prevDate?: string;
  currDate?: string;
  currShift?: ShiftType;
  prevShift?: ShiftType;
  priceAtIncident?: number;
  valueLost?: number;
  expectedRevenue?: number;
  actualReceived?: number;
  shortage?: number;
  timeGap?: {
    days: number;
    hours: number;
  };
}

export const classifyGap = (diff: number): { category: GapCategory; label: string } => {
  if (Math.abs(diff) < TOLERANCE) return { category: "balanced", label: "Verified Balanced" };
  if (diff < -TOLERANCE || diff > 6000) return { category: "reset", label: "Pump Reset" };
  if (diff >= 25 && diff <= 6000) return { category: "theft", label: "Unrecorded sales" };
  return { category: "minor", label: "Minor Discrepancy" };
};

export const calculateSessionFinancials = (pump: PumpReport) => {
  const litersSold = Math.max(0, pump.closingReading - pump.openingReading);
  const expectedRevenue = litersSold * pump.pricePerLiter;
  const actualReceived = pump.cashCollected + pump.posAmount + (pump.shortageResolutions?.reduce((acc, curr) => acc + curr.amount, 0) || 0);
  const shortage = expectedRevenue - actualReceived;
  return { expectedRevenue, actualReceived, shortage };
};

export const calculateProductTotals = (allData: DailyReport[], product?: string) => {
  let totalSales = 0;
  let totalLiters = 0;
  let totalCash = 0;
  let totalPos = 0;
  let totalLostLiters = 0;
  let totalLostValue = 0;
  let totalFinancialShortage = 0;
  const theftRecords: AuditResult[] = [];
  const resetRecords: AuditResult[] = [];

  allData.forEach(day => {
    const allShifts = [...day.shifts.morning, ...day.shifts.afternoon, ...(day.shifts.night || [])];
    
    allShifts.forEach(pump => {
      if (product && pump.product !== product) return;
      const { expectedRevenue, shortage } = calculateSessionFinancials(pump);
      
      const litersSold = Math.max(0, pump.closingReading - pump.openingReading);
      totalLiters += litersSold;
      totalSales += expectedRevenue;
      totalCash += pump.cashCollected;
      totalPos += pump.posAmount;
      
      // Track financial shortages (cash/POS gaps)
      if (shortage > 10) {
        totalFinancialShortage += shortage;
      }
    });

    auditIntraDay(day, product).forEach(res => {
      if (res.category === "theft") {
        totalLostLiters += res.diff;
        totalLostValue += (res.valueLost || 0);
        theftRecords.push({ ...res, currDate: day.date, type: "intraday" });
      } else if (res.category === "reset") {
        resetRecords.push({ ...res, currDate: day.date, type: "intraday" });
      }
    });

    auditCrossDate(allData, day.date, product).forEach(res => {
      if (res.category === "theft") {
        totalLostLiters += res.diff;
        totalLostValue += (res.valueLost || 0);
        theftRecords.push({ ...res, currDate: day.date, type: "crossdate" });
      } else if (res.category === "reset") {
        resetRecords.push({ ...res, currDate: day.date, type: "crossdate" });
      }
    });
  });

  return { 
    totalSales, 
    totalLiters, 
    totalCash, 
    totalPos, 
    totalLostLiters, 
    totalLostValue, 
    totalFinancialShortage,
    theftRecords, 
    resetRecords 
  };
};

export const calculateGeneratorLog = (allData: DailyReport[]) => {
  const log: any[] = [];
  let totalLiters = 0;
  let totalValue = 0;

  allData.forEach(day => {
    const allShifts = [...day.shifts.morning, ...day.shifts.afternoon, ...(day.shifts.night || [])];
    allShifts.forEach(pump => {
      pump.shortageResolutions?.forEach(res => {
        const purpose = res.purpose?.toLowerCase() || "";
        const reason = res.reason?.toLowerCase() || "";
        if (res.type === 'official use' && (purpose.includes('generator') || reason.includes('generator'))) {
          totalLiters += res.liters;
          totalValue += res.amount;
          log.push({
            date: day.date,
            attendant: pump.attendant,
            pumpId: pump.pumpId,
            liters: res.liters,
            amount: res.amount,
            reason: res.reason || res.purpose
          });
        }
      });
    });
  });
  return { log: log.reverse(), totalLiters, totalValue };
};

export const auditIntraDay = (report: DailyReport, product?: string): AuditResult[] => {
  const results: AuditResult[] = [];
  const allPumpReports = [
    ...report.shifts.morning.map(p => ({ ...p, shift: "Morning" as ShiftType })),
    ...report.shifts.afternoon.map(p => ({ ...p, shift: "Afternoon" as ShiftType })),
    ...(report.shifts.night || []).map(p => ({ ...p, shift: "Night" as ShiftType }))
  ].filter(p => !product || p.product === product);

  const pumpIds = Array.from(new Set(allPumpReports.map(p => p.pumpId)));

  pumpIds.forEach(pumpId => {
    const pumpSessions = allPumpReports
      .filter(p => p.pumpId === pumpId)
      .sort((a, b) => a.openingReading - b.openingReading);

    for (let i = 1; i < pumpSessions.length; i++) {
      const prev = pumpSessions[i - 1];
      const curr = pumpSessions[i];
      const diff = curr.openingReading - prev.closingReading;
      const { category, label } = classifyGap(diff);
      const price = curr.pricePerLiter || prev.pricePerLiter || 0;

      results.push({
        pumpId,
        diff,
        isBalanced: category === "balanced",
        category,
        categoryLabel: label,
        morning: prev,
        afternoon: curr,
        type: "intraday",
        prevShift: prev.shift,
        currShift: curr.shift,
        priceAtIncident: price,
        valueLost: category === "theft" ? diff * price : 0
      });
    }
  });

  return results;
};

export const auditCrossDate = (allData: DailyReport[], targetDate: string, product?: string): AuditResult[] => {
  const sortedData = [...allData].sort((a, b) => a.date.localeCompare(b.date));
  const targetIndex = sortedData.findIndex(d => d.date === targetDate);
  if (targetIndex < 0) return [];

  const currentDay = sortedData[targetIndex];
  const allCurrentPumps = [
    ...currentDay.shifts.morning,
    ...currentDay.shifts.afternoon,
    ...(currentDay.shifts.night || [])
  ].filter(p => !product || p.product === product);

  const pumpIds = new Set(allCurrentPumps.map(p => p.pumpId));

  return Array.from(pumpIds).map(pumpId => {
    const currSessions = [
      ...currentDay.shifts.morning,
      ...currentDay.shifts.afternoon,
      ...(currentDay.shifts.night || [])
    ].filter(p => p.pumpId === pumpId).sort((a, b) => a.openingReading - b.openingReading);
    
    const currentReport = currSessions[0] || null;
    const firstReading = currentReport?.openingReading || null;

    let lastReading = null;
    let prevDateFound = undefined;
    let prevReportFound = null;

    for (let i = targetIndex - 1; i >= 0; i--) {
      const checkDay = sortedData[i];
      const prevSessions = [
        ...checkDay.shifts.morning,
        ...checkDay.shifts.afternoon,
        ...(checkDay.shifts.night || [])
      ].filter(p => p.pumpId === pumpId).sort((a, b) => b.closingReading - a.closingReading);

      const found = prevSessions[0];
      if (found) {
        lastReading = found.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = found;
        break;
      }
    }

    let diff = 0;
    if (lastReading !== null && firstReading !== null && prevDateFound) {
      diff = firstReading - lastReading;
    }

    const { category, label } = classifyGap(diff);
    const price = currentReport?.pricePerLiter || 0;

    return { 
      pumpId, diff, isBalanced: category === "balanced", category, categoryLabel: label,
      morning: prevReportFound, afternoon: currentReport, prevDate: prevDateFound,
      currDate: targetDate, type: "crossdate",
      priceAtIncident: price,
      valueLost: category === "theft" ? diff * price : 0
    };
  });
};

export const formatCurrency = (amount: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
export const formatLiters = (liters: number) => `${liters.toFixed(2)} L`;