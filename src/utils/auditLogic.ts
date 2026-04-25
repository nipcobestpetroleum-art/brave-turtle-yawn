import { DailyReport, PumpReport } from "../types/sales";

export const TOLERANCE = 0.05;

export interface AuditResult {
  pumpId: string;
  diff: number;
  isBalanced: boolean;
  morning: PumpReport | null;
  afternoon: PumpReport | null;
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
  
  if (targetIndex <= 0) return [];

  const prevDay = sortedData[targetIndex - 1];
  const currentDay = sortedData[targetIndex];

  const pumpIds = new Set([
    ...prevDay.shifts.morning.map(p => p.pumpId),
    ...prevDay.shifts.afternoon.map(p => p.pumpId),
    ...currentDay.shifts.morning.map(p => p.pumpId),
    ...currentDay.shifts.afternoon.map(p => p.pumpId)
  ]);

  return Array.from(pumpIds).map(pumpId => {
    // Find last reading of previous day
    const prevAfternoon = prevDay.shifts.afternoon.find(p => p.pumpId === pumpId);
    const prevMorning = prevDay.shifts.morning.find(p => p.pumpId === pumpId);
    const lastReading = prevAfternoon ? prevAfternoon.closingReading : (prevMorning ? prevMorning.closingReading : null);

    // Find first reading of current day
    const currMorning = currentDay.shifts.morning.find(p => p.pumpId === pumpId);
    const currAfternoon = currentDay.shifts.afternoon.find(p => p.pumpId === pumpId);
    const firstReading = currMorning ? currMorning.openingReading : (currAfternoon ? currAfternoon.openingReading : null);

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
      morning: prevAfternoon || prevMorning || null, 
      afternoon: currMorning || currAfternoon || null 
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