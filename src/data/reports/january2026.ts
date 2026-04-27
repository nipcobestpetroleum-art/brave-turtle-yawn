import { DailyReport } from "../../types/sales";

export const january2026: DailyReport[] = [
  {
    date: "2026-01-01",
    shifts: {
      morning: [
        { attendant: "Chukwuma", pumpId: "PMP-002-A", product: "PMS", openingReading: 2366275.27, closingReading: 2371463.43, pricePerLiter: 830, cashCollected: 961200, posAmount: 3273997, shortageResolutions: [{ type: "debt", amount: 71010, liters: 85.55, debtor: "Exodus", reason: "MD approved" }] },
        { attendant: "Lukeman", pumpId: "PMP-003-A", product: "PMS", openingReading: 334885.27, closingReading: 337043.97, pricePerLiter: 830, cashCollected: 542700, posAmount: 1236403.12, shortageResolutions: [{ type: "debt", amount: 11600, liters: 13.98, debtor: "Customer", reason: "No idea" }] },
        { attendant: "Julie", pumpId: "PMP-005-A", product: "PMS", openingReading: 1211926.88, closingReading: 1213405.69, pricePerLiter: 830, cashCollected: 209450, posAmount: 1017468.88 },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 759388.32, closingReading: 761064.65, pricePerLiter: 830, cashCollected: 738850, posAmount: 367161, shortageResolutions: [{ type: "debt", amount: 259790, liters: 313, debtor: "First patriot", reason: "MD approved" }, { type: "official use", amount: 24900, liters: 30, purpose: "House and office", reason: "Okoye" }] },
        { attendant: "Dogood", pumpId: "PMP-006-A", product: "PMS", openingReading: 741160.53, closingReading: 742110.26, pricePerLiter: 830, cashCollected: 496500, posAmount: 291500 },
      ],
      afternoon: []
    },
    bankDeposits: []
  }
];