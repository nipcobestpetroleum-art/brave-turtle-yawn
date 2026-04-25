import { DailyReport, PumpReport } from "../types/sales";
import { TOLERANCE } from "./auditLogic";

export interface StaffLogEntry {
  date: string;
  shift: "Morning" | "Afternoon";
  pumpId: string;
  attendant: string;
  openingReading: number;
  closingReading: number;
  prevAttendant: string | null;
  prevClosing: number | null;
  diff: number;
  isBalanced: boolean;
  timeGap?: { days: number; hours: number };
}

/**
 * Generates a complete history of shifts for a specific staff member
 */
export const getStaffLog = (allData: DailyReport[], staffName: string): StaffLogEntry[] => {
  const log: StaffLogEntry[] = [];
  const sortedData = [...allData].sort((a, b) => a.date.localeCompare(b.date));

  sortedData.forEach((day, dayIdx) => {
    const shifts = [
      { type: "morning" as const, data: day.shifts.morning },
      { type: "afternoon" as const, data: day.shifts.afternoon }
    ];

    shifts.forEach((shiftType) => {
      shiftType.data.forEach((pump) => {
        if (pump.attendant.toLowerCase() === staffName.toLowerCase()) {
          // Found a shift for this staff. Now find the "Previous" record for this pump
          let prevReport: PumpReport | null = null;
          let prevDateFound: string | null = null;
          let prevShiftType: "Morning" | "Afternoon" | null = null;

          // 1. Check same day morning if we are in afternoon
          if (shiftType.type === "afternoon") {
            const morningSameDay = day.shifts.morning.find(p => p.pumpId === pump.pumpId);
            if (morningSameDay) {
              prevReport = morningSameDay;
              prevDateFound = day.date;
              prevShiftType = "Morning";
            }
          }

          // 2. If not found, search backwards through previous days
          if (!prevReport) {
            for (let i = dayIdx - 1; i >= 0; i--) {
              const checkDay = sortedData[i];
              // Check afternoon then morning (reverse chronological)
              const pAfternoon = checkDay.shifts.afternoon.find(p => p.pumpId === pump.pumpId);
              if (pAfternoon) {
                prevReport = pAfternoon;
                prevDateFound = checkDay.date;
                prevShiftType = "Afternoon";
                break;
              }
              const pMorning = checkDay.shifts.morning.find(p => p.pumpId === pump.pumpId);
              if (pMorning) {
                prevReport = pMorning;
                prevDateFound = checkDay.date;
                prevShiftType = "Morning";
                break;
              }
            }
          }

          let diff = 0;
          let isBalanced = true;
          let timeGap = undefined;

          if (prevReport && prevDateFound) {
            diff = pump.openingReading - prevReport.closingReading;
            isBalanced = Math.abs(diff) < TOLERANCE;

            // Calculate Gap
            const start = new Date(prevDateFound);
            if (prevShiftType === "Afternoon") start.setHours(22, 0, 0); else start.setHours(14, 0, 0);
            const end = new Date(day.date);
            if (shiftType.type === "morning") end.setHours(8, 0, 0); else end.setHours(14, 0, 0);

            const msGap = Math.max(0, end.getTime() - start.getTime());
            timeGap = {
              days: Math.floor(msGap / (1000 * 60 * 60 * 24)),
              hours: Math.floor((msGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            };
          }

          log.push({
            date: day.date,
            shift: shiftType.type === "morning" ? "Morning" : "Afternoon",
            pumpId: pump.pumpId,
            attendant: pump.attendant,
            openingReading: pump.openingReading,
            closingReading: pump.closingReading,
            prevAttendant: prevReport?.attendant || null,
            prevClosing: prevReport?.closingReading || null,
            diff,
            isBalanced,
            timeGap
          });
        }
      });
    });
  });

  return log.reverse(); // Newest first
};

export const getAllStaffNames = (allData: DailyReport[]): string[] => {
  const names = new Set<string>();
  allData.forEach(day => {
    [...day.shifts.morning, ...day.shifts.afternoon].forEach(p => names.add(p.attendant));
  });
  return Array.from(names).sort();
};