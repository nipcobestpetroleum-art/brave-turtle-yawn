import { DailyReport } from "../../types/sales";

export const april2026: DailyReport[] = [
  {
    date: "2026-04-01",
    shifts: {
      morning: [
        { 
          attendant: "Chidimma Okoro", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2633808.77, 
          closingReading: 2635120.45, 
          pricePerLiter: 1350, 
          cashCollected: 450000, 
          posAmount: 1320768 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 252370.94, 
          closingReading: 253105.20, 
          pricePerLiter: 1350, 
          cashCollected: 680000, 
          posAmount: 311251 
        },
        { 
          attendant: "Goodness", 
          pumpId: "PMP-004-A", 
          product: "PMS", 
          openingReading: 93372.12, 
          closingReading: 94108.33, 
          pricePerLiter: 1350, 
          cashCollected: 320000, 
          posAmount: 673883.50 
        }
      ],
      afternoon: [
        { 
          attendant: "Chidera", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2635120.45, 
          closingReading: 2636450.12, 
          pricePerLiter: 1350, 
          cashCollected: 512000, 
          posAmount: 1283054.50 
        }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-02",
    shifts: {
      morning: [
        { 
          attendant: "Esther", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2636450.12, 
          closingReading: 2637890.55, 
          pricePerLiter: 1350, 
          cashCollected: 620000, 
          posAmount: 1324580.50 
        }
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-04-03",
    shifts: {
      morning: [
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2637890.55, 
          closingReading: 2639120.33, 
          pricePerLiter: 1320, 
          cashCollected: 410000, 
          posAmount: 1213309.60,
          shortageResolutions: [
            { type: "debt", amount: 13200, liters: 10, debtor: "Unknown", reason: "Price change adjustment" }
          ]
        }
      ],
      afternoon: []
    },
    bankDeposits: []
  }
];