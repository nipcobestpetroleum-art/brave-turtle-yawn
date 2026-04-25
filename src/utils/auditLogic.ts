import { DailyReport, PumpReport } from "../types/sales";

export const TOLERANCE = 0.05;

export interface AuditResult {
  pumpId: string;
  diff: number;
  isBalanced: boolean;
  morning: PumpReport | null;
  afternoon: PumpReport | null;
  prevDate?: string; // Added to track which date we found the predecessor on
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
 * Refactored to scan history backwards until a predecessor is found
 */
export const auditCrossDate = (allData: DailyReport[], targetDate: string): AuditResult[] => {
  const sortedData = [...allData].sort((a, b) => a.date.localeCompare(b.date));
  const targetIndex = sortedData.findIndex(d => d.date === targetDate);
  
  if (targetIndex < 0) return [];

  const currentDay = sortedData[targetIndex];
  
  // Find all pumps used on the current target day
  const pumpIds = new Set([
    ...currentDay.shifts.morning.map(p => p.pumpId),
    ...currentDay.shifts.afternoon.map(p => p.pumpId)
  ]);

  return Array.from(pumpIds).map(pumpId => {
    // Find the first reading of the target day
    const currMorning = currentDay.shifts.morning.find(p => p.pumpId === pumpId);
    const currAfternoon = currentDay.shifts.afternoon.find(p => p.pumpId === pumpId);
    const firstReading = currMorning ? currMorning.openingReading : (currAfternoon ? currAfternoon.openingReading : null);
    const currentReport = currMorning || currAfternoon || null;

    let lastReading = null;
    let prevDateFound = undefined;
    let prevReportFound = null;

    // Scan backwards from the day before to find the last known closing reading for this pump
    for (let i = targetIndex - 1; i >= 0; i--) {
      const checkDay = sortedData[i];
      
      // Check Afternoon shift first (as it's the latest in that day)
      const prevAfternoon = checkDay.shifts.afternoon.find(p => p.pumpId === pumpId);
      if (prevAfternoon) {
        lastReading = prevAfternoon.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevAfternoon;
        break;
      }

      // Check Morning shift
      const prevMorning = checkDay.shifts.morning.find(p => p.pumpId === pumpId);
      if (prevMorning) {
        lastReading = prevMorning.closingReading;
        prevDateFound = checkDay.date;
        prevReportFound = prevMorning;
        break;
      }
    }

    let diff = 0;
    let isBalanced = false;

    if (lastReading !== null && firstReading !== null) {
      diff = firstReading - lastReading;
      isBalanced = Math.abs(diff) < TOLERANCE;
    }

    return { 
      pumpId, 
      diff, 
      isBalanced, 
      morning: prevReportFound, // For cross-date, 'morning' represents the previous record
      afternoon: currentReport,  // and 'afternoon' represents the current record
      prevDate: prevDateFound
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