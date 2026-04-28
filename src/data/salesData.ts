import { october2025 } from "./reports/october2025";
import { november2025 } from "./reports/november2025";
import { december2025 } from "./reports/december2025";
import { january2026 } from "./reports/january2026";
import { february2026 } from "./reports/february2026";
import { february2026b } from "./reports/february2026b";
import { february2026c } from "./reports/february2026c";
import { february2026d } from "./reports/february2026d";
import { DailyReport } from "../types/sales";

export const salesData: DailyReport[] = [
  ...october2025,
  ...november2025,
  ...december2025,
  ...january2026,
  ...february2026,
  ...february2026b,
  ...february2026c,
  ...february2026d,
];