import { DailyReport, PumpReport } from "../types/sales";

export const TOLERANCE = 0.05;

export interface AuditResult {
  pumpId: string;
  diff: number;
  isBalanced: boolean;
  morning: PumpReport | null;
  afternoon: PumpReport | null;
  prevDate?: string;
  timeGap?: {
    days: number;
    hours: number;
  };
}

/**
 * Intra-Day Handover Logic
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
    
    // Determine which shift started the day for this pump
    const isMorningStart = !!currMorning;
    const firstReading = currMorning ? currMorning.openingReading : (currAfternoon ? currAfternoon.openingReading : null);
    const currentReport = currMorning || currAfternoon || null;

    let lastReading = null;
    let prevDateFound = undefined;
    let prevReportFound = null;
    let wasNightShift = false;

    for (let i = targetIndex - 1; i >= 0; i--) {
      const checkDay = sortedData[i];
      const prevAfternoon = checkDay.shifts.afternoon.find(p => p.pumpId === pumpId);
      if (prevAfternoon) {
        lastReading = prevAfternoon.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevAfternoon;
        wasNightShift = true;
        break;
      }

      const prevMorning = checkDay.shifts.morning.find(p => p.pumpId === pumpId);
      if (prevMorning) {
        lastReading = prevMorning.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevMorning;
        wasNightShift = false;
        break;
      }
    }

    let diff = 0;
    let isBalanced = false;
    let timeGap = undefined;

    if (lastReading !== null && firstReading !== null && prevDateFound) {
      diff = firstReading - lastReading;
      isBalanced = Math.abs(diff) < TOLERANCE;

      // Calculate time gap
      const start = new Date(prevDateFound);
      // Assume Morning shift starts at 8:00 AM, Afternoon shift ends at 10:00 PM
      if (wasNightShift) start.setHours(22, 0, 0); else start.setHours(14, 0, 0);

      const end = new Date(targetDate);
      if (isMorningStart) end.setHours(8, 0, 0); else end.setHours(14, 0, 0);

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
      morning: prevReportFound,
      afternoon: currentReport,
      prevDate: prevDateFound,
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