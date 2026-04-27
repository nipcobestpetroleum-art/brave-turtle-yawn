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
  },
  {
    date: "2026-01-03",
    shifts: {
      morning: [
        { attendant: "Dogood", pumpId: "PMP-002-A", product: "PMS", openingReading: 2371556.75, closingReading: 2372898.15, pricePerLiter: 830, cashCollected: 327900, posAmount: 734701, shortageResolutions: [{ type: "debt", amount: 50000, liters: 60.24, debtor: "Customer" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-003-A", product: "PMS", openingReading: 337043.98, closingReading: 342719.81, pricePerLiter: 830, cashCollected: 791300, posAmount: 3629358, shortageResolutions: [{ type: "debt", amount: 215800, liters: 260, debtor: "First patriot" }, { type: "debt", amount: 12450, liters: 15, debtor: "Multipro company" }, { type: "official use", amount: 62304.78, liters: 75.07, purpose: "MD", reason: "MD approved" }] },
        { attendant: "Julie", pumpId: "PMP-006-A", product: "PMS", openingReading: 742110.27, closingReading: 743307.14, pricePerLiter: 830, cashCollected: 483900, posAmount: 509200 },
        { attendant: "Lukeman", pumpId: "PMP-006-B", product: "PMS", openingReading: 602728.39, closingReading: 603768.61, pricePerLiter: 830, cashCollected: 610450, posAmount: 226766, shortageResolutions: [{ type: "official use", amount: 24900, liters: 30, purpose: "Afikpo", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Chisom", pumpId: "PMP-002-A", product: "PMS", openingReading: 2372898.15, closingReading: 2374295.78, pricePerLiter: 830, cashCollected: 117700, posAmount: 896300, shortageResolutions: [{ type: "debt", amount: 145250, liters: 175, debtor: "First patriot", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-01-04",
    shifts: {
      morning: [
        { 
          attendant: "Miracle", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 342820.99, 
          closingReading: 345485.95, 
          pricePerLiter: 830, 
          cashCollected: 254750, 
          posAmount: 1737879, 
          shortageResolutions: [
            { type: "debt", amount: 190900, liters: 230, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 20000.51, liters: 24.10, purpose: "Driver", reason: "MD approved" },
            { type: "official use", amount: 8300, liters: 10, purpose: "House", reason: "MD" }
          ] 
        },
      ],
      afternoon: []
    },
    bankDeposits: []
  }
];