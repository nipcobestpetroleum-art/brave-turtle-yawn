import { DailyReport, PumpReport } from "../types/sales";
import { TOLERANCE } from "./auditLogic";

export interface StaffLogEntry {
  date: string;
  shift: string;
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

export const getStaffLog = (allData: DailyReport[], staffName: string): StaffLogEntry[] => {
  const log: StaffLogEntry[] = [];
  const sortedData = [...allData].sort((a, b) => a.date.localeCompare(b.date));

  sortedData.forEach((day, dayIdx) => {
    const shifts = [
      { type: "Morning", data: day.shifts.morning },
      { type: "Afternoon", data: day.shifts.afternoon },
      { type: "Night", data: day.shifts.night || [] }
    ];

    shifts.forEach((shiftType, shiftIdx) => {
      shiftType.data.forEach((pump) => {
        if (pump.attendant.toLowerCase() === staffName.toLowerCase()) {
          let prevReport: PumpReport | null = null;
          let prevDateFound: string | null = null;
          let prevShiftType: string | null = null;

          // 1. Check previous shifts in same day
          for (let s = shiftIdx - 1; s >= 0; s--) {
            const p = shifts[s].data.find(p => p.pumpId === pump.pumpId);
            if (p) {
              prevReport = p;
              prevDateFound = day.date;
              prevShiftType = shifts[s].type;
              break;
            }
          }

          // 2. Search backwards through previous days
          if (!prevReport) {
            for (let i = dayIdx - 1; i >= 0; i--) {
              const checkDay = sortedData[i];
              const pNight = checkDay.shifts.night?.find(p => p.pumpId === pump.pumpId);
              const pAfternoon = checkDay.shifts.afternoon.find(p => p.pumpId === pump.pumpId);
              const pMorning = checkDay.shifts.morning.find(p => p.pumpId === pump.pumpId);

              if (pNight) {
                prevReport = pNight; prevDateFound = checkDay.date; prevShiftType = "Night"; break;
              } else if (pAfternoon) {
                prevReport = pAfternoon; prevDateFound = checkDay.date; prevShiftType = "Afternoon"; break;
              } else if (pMorning) {
                prevReport = pMorning; prevDateFound = checkDay.date; prevShiftType = "Morning"; break;
              }
            }
          }

          let diff = 0;
          let isBalanced = true;
          let timeGap = undefined;

          if (prevReport && prevDateFound) {
            diff = pump.openingReading - prevReport.closingReading;
            isBalanced = Math.abs(diff) < TOLERANCE;

            const start = new Date(prevDateFound);
            if (prevShiftType === "Night") start.setHours(23, 59, 0);
            else if (prevShiftType === "Afternoon") start.setHours(22, 0, 0);
            else start.setHours(14, 0, 0);

            const end = new Date(day.date);
            if (shiftType.type === "Morning") end.setHours(8, 0, 0);
            else if (shiftType.type === "Afternoon") end.setHours(14, 0, 0);
            else end.setHours(22, 0, 0);

            const msGap = Math.max(0, end.getTime() - start.getTime());
            timeGap = {
              days: Math.floor(msGap / (1000 * 60 * 60 * 24)),
              hours: Math.floor((msGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            };
          }

          log.push({
            date: day.date, shift: shiftType.type, pumpId: pump.pumpId, attendant: pump.attendant,
            openingReading: pump.openingReading, closingReading: pump.closingReading,
            prevAttendant: prevReport?.attendant || null, prevClosing: prevReport?.closingReading || null,
            diff, isBalanced, timeGap
          });
        }
      });
    });
  });

  return log.reverse();
};

export const getAllStaffNames = (allData: DailyReport[]): string[] => {
  const names = new Set<string>();
  allData.forEach(day => {
    [...day.shifts.morning, ...day.shifts.afternoon, ...(day.shifts.night || [])].forEach(p => names.add(p.attendant));
  });
  return Array.from(names).sort();
};