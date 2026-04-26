import { DailyReport } from "../../types/sales";

export const december2025: DailyReport[] = [
  {
    date: "2025-12-01",
    shifts: {
      morning: [
        { 
          attendant: "Miracle", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2267384.18, 
          closingReading: 2270164.81, 
          pricePerLiter: 940, 
          cashCollected: 194030, 
          posAmount: 1757137.60, 
          shortageResolutions: [
            { type: "debt", amount: 399500, liters: 425, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 56804.20, liters: 60.43, purpose: "Rice", reason: "MD and okoye" },
            { type: "debt", amount: 91180, liters: 97, debtor: "Multipro", reason: "MD approved" },
            { type: "debt", amount: 62322, liters: 66.30, debtor: "Chief Bestman", reason: "No idea" },
            { type: "debt", amount: 47000, liters: 50, debtor: "SASCP", reason: "MD approved" },
            { type: "return to tank", amount: 4700, liters: 5, reason: "Donald" }
          ] 
        },
        { 
          attendant: "Miriam", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2530056.39, 
          closingReading: 2534210.51, 
          pricePerLiter: 940, 
          cashCollected: 354370, 
          posAmount: 3242546, 
          shortageResolutions: [
            { type: "debt", amount: 308000, liters: 327.66, debtor: "Exodus", reason: "Donald" }
          ] 
        },
        { attendant: "Osinachi", pumpId: "PMP-003-A", product: "PMS", openingReading: 253853.66, closingReading: 255153.95, pricePerLiter: 940, cashCollected: 297600, posAmount: 923269 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 104114.82, 
          closingReading: 105494.05, 
          pricePerLiter: 940, 
          cashCollected: 594100, 
          posAmount: 609596.60, 
          shortageResolutions: [
            { type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 735899.19, closingReading: 737008.11, pricePerLiter: 940, cashCollected: 305600, posAmount: 735800 },
        { attendant: "Goodluck", pumpId: "PMP-006-A", product: "PMS", openingReading: 700775.42, closingReading: 702204.75, pricePerLiter: 940, cashCollected: 402070, posAmount: 900565 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 565643.47, closingReading: 565920.07, pricePerLiter: 940, cashCollected: 230500, posAmount: 29500 },
      ],
      afternoon: [
        { 
          attendant: "Chisom", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2270164.81, 
          closingReading: 2271803.31, 
          pricePerLiter: 940, 
          cashCollected: 411500, 
          posAmount: 1055883, 
          shortageResolutions: [
            { type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 6580, liters: 7, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2534210.51, closingReading: 2538957.15, pricePerLiter: 940, cashCollected: 449120, posAmount: 4012703 },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 255155.95, closingReading: 256425.74, pricePerLiter: 940, cashCollected: 387790, posAmount: 805822 },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 105494.05, closingReading: 106449.51, pricePerLiter: 940, cashCollected: 168950, posAmount: 727600 },
        { attendant: "Chukwuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 737008.11, closingReading: 737027.83, pricePerLiter: 940, cashCollected: 17400, posAmount: 1000 },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-005-B", 
          product: "PMS", 
          openingReading: 737027.83, 
          closingReading: 737950.65, 
          pricePerLiter: 940, 
          cashCollected: 337450, 
          posAmount: 416323.20, 
          shortageResolutions: [
            { type: "debt", amount: 112800, liters: 120, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Amarachi", pumpId: "PMP-006-A", product: "PMS", openingReading: 702204.75, closingReading: 702252.65, pricePerLiter: 940, cashCollected: 28000, posAmount: 17000 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 192605.61, 
          closingReading: 193092.65, 
          pricePerLiter: 1050, 
          cashCollected: 2000, 
          posAmount: 0, 
          shortageResolutions: [
            { type: "debt", amount: 404388, liters: 385.13, debtor: "Debt", reason: "No idea" },
            { type: "official use", amount: 105000, liters: 100, purpose: "Generator", reason: "Generator" }
          ] 
        },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 457043.69, closingReading: 457053.21, pricePerLiter: 1050, cashCollected: 10000, posAmount: 0 },
      ]
    },
    bankDeposits: []
  }
];