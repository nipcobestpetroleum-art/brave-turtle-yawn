import { DailyReport } from "../../types/sales";

export const march2026: DailyReport[] = [
  {
    date: "2026-03-01",
    shifts: {
      morning: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 217154.19, closingReading: 217501.17, pricePerLiter: 1050, cashCollected: 361700, posAmount: 0 },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 472898.87, closingReading: 474514.37, pricePerLiter: 1050, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 932400, liters: 888, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 735000, liters: 700, purpose: "Official use" }, { type: "official use", amount: 31500, liters: 30, purpose: "Official use" }] },
      ],
      afternoon: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 217501.17, closingReading: 217556.99, pricePerLiter: 1200, cashCollected: 6700, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 60000, liters: 50, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 474514.37, closingReading: 474784.85, pricePerLiter: 1200, cashCollected: 10000, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 314832, liters: 262.36, debtor: "Unknown", reason: "Debt" }] },
      ],
    },
    bankDeposits: [
      { amount: 0, reference: "", date: "2026-03-03" },
    ],
  },
];
