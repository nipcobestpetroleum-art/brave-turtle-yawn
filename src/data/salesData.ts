import { october2025 } from "./reports/october2025";
import { november2025 } from "./reports/november2025";
import { DailyReport } from "../types/sales";

/**
 * Main sales database aggregator. 
 * Combine monthly modules here to maintain station records.
 */
export const salesData: DailyReport[] = [
  ...october2025,
  ...november2025
];