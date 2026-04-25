import { DailyReport } from "../types/sales";

export const salesData: DailyReport[] = [
  {
    date: "2025-10-25",
    shifts: {
      morning: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2177672.10, closingReading: 2178674.84, pricePerLiter: 940, cashCollected: 312000, posAmount: 629231.60 },
        { attendant: "Ugochi", pumpId: "PMP-002-B", product: "PMS", openingReading: 2366789.69, closingReading: 2368126.62, pricePerLiter: 940, cashCollected: 296550, posAmount: 945404.20, shortageResolutions: [{ type: "debt", amount: 10000, liters: 10.64, debtor: "Lukeman", reason: "Debt" }, { type: "return to tank", amount: 4700, liters: 5, reason: "Priming" }] },
        { attendant: "Mulakor", pumpId: "PMP-004-A", product: "PMS", openingReading: 806705.84, closingReading: 807563.07, pricePerLiter: 940, cashCollected: 384000, posAmount: 393248, shortageResolutions: [{ type: "debt", amount: 28200, liters: 30, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 47903.57, closingReading: 48400.64, pricePerLiter: 940, cashCollected: 216500, posAmount: 165100, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 30000, liters: 31.91, debtor: "Donald", reason: "No idea" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-005-B", product: "PMS", openingReading: 699520.62, closingReading: 700117.35, pricePerLiter: 940, cashCollected: 448590, posAmount: 111380 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-A", product: "PMS", openingReading: 657503.90, closingReading: 658230.13, pricePerLiter: 940, cashCollected: 165100, posAmount: 374400, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "Approved" }, { type: "debt", amount: 8460, liters: 9, debtor: "Multipro company", reason: "Approved" }, { type: "debt", amount: 78000, liters: 82.98, debtor: "Dogood", reason: "No idea" }] },
        { attendant: "Miriam", pumpId: "PMP-006-B", product: "PMS", openingReading: 530735.57, closingReading: 531103.86, pricePerLiter: 940, cashCollected: 226500, posAmount: 118980 },
      ],
      afternoon: [
        { attendant: "Celestina", pumpId: "PMP-002-A", product: "PMS", openingReading: 2368126.62, closingReading: 2369762.21, pricePerLiter: 940, cashCollected: 810900, posAmount: 726988 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-A", product: "PMS", openingReading: 807563.07, closingReading: 808476.27, pricePerLiter: 940, cashCollected: 304850, posAmount: 553100 },
        { attendant: "Chisom", pumpId: "PMP-002-A", product: "PMS", openingReading: 2178674.84, closingReading: 2179866.05, pricePerLiter: 940, cashCollected: 476370, posAmount: 643067 },
        { attendant: "Amarachi", pumpId: "PMP-006-A", product: "PMS", openingReading: 658230.13, closingReading: 659036.76, pricePerLiter: 940, cashCollected: 177250, posAmount: 524165, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-003-A", product: "PMS", openingReading: 48400.64, closingReading: 49277.63, pricePerLiter: 940, cashCollected: 442600, posAmount: 380400 },
        { attendant: "Mary-cynthia", pumpId: "PMP-005-B", product: "PMS", openingReading: 700117.35, closingReading: 700904.99, pricePerLiter: 940, cashCollected: 543760, posAmount: 194212 },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1125352.06, closingReading: 1126651.83, pricePerLiter: 940, cashCollected: 261200, posAmount: 563000, shortageResolutions: [{ type: "debt", amount: 329000, liters: 350, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 40420, liters: 43, debtor: "Multipro company", reason: "Approved" }, { type: "debt", amount: 22000, liters: 23.4, debtor: "Lukeman", reason: "No idea" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-10-26",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2369762.21, closingReading: 2372432.78, pricePerLiter: 940, cashCollected: 0, posAmount: 0 },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2025-10-27",
    shifts: {
      morning: [
        { attendant: "Mary-cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2179866.13, closingReading: 2180973.26, pricePerLiter: 940, cashCollected: 272900, posAmount: 734108, shortageResolutions: [{ type: "debt", amount: 36105.40, liters: 38.41, debtor: "Fidelity Bank", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-002-B", product: "PMS", openingReading: 2372432.78, closingReading: 2375310.03, pricePerLiter: 940, cashCollected: 1057080, posAmount: 1647730 },
        { attendant: "Mulakor", pumpId: "PMP-003-B", product: "PMS", openingReading: 49277.63, closingReading: 50245.37, pricePerLiter: 940, cashCollected: 659750, posAmount: 249000 },
        { attendant: "Ugochi", pumpId: "PMP-004-A", product: "PMS", openingReading: 808476.33, closingReading: 809537.46, pricePerLiter: 940, cashCollected: 248100, posAmount: 683188, shortageResolutions: [{ type: "debt", amount: 61100, liters: 65, debtor: "First patriot", reason: "MD approved" }, { type: "return to tank", amount: 4700, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1126651.98, closingReading: 1127882.65, pricePerLiter: 940, cashCollected: 201000, posAmount: 671582, shortageResolutions: [{ type: "debt", amount: 253800, liters: 270, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 30000, liters: 31.91, debtor: "Miracle", reason: "No idea" }] },
        { attendant: "Amarachi", pumpId: "PMP-006-B", product: "PMS", openingReading: 531103.86, closingReading: 532396.17, pricePerLiter: 940, cashCollected: 971800, posAmount: 241800 },
      ],
      afternoon: [
        { attendant: "Miriam", pumpId: "PMP-002-A", product: "PMS", openingReading: 2180973.26, closingReading: 2181887.43, pricePerLiter: 940, cashCollected: 368580, posAmount: 490611 },
        { attendant: "Chidera", pumpId: "PMP-002-B", product: "PMS", openingReading: 2375310.03, closingReading: 2380565.29, pricePerLiter: 940, cashCollected: 414300, posAmount: 2860608, shortageResolutions: [{ type: "debt", amount: 1664505, liters: 1770.75, debtor: "Maco oil", reason: "Approved" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 202319.37, closingReading: 204558.74, pricePerLiter: 940, cashCollected: 361790, posAmount: 1536029.60, shortageResolutions: [{ type: "debt", amount: 188000, liters: 200, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 20000, liters: 21.28, debtor: "Donald" }] },
        { attendant: "Chisom", pumpId: "PMP-003-B", product: "PMS", openingReading: 50245.37, closingReading: 50938.71, pricePerLiter: 940, cashCollected: 429600, posAmount: 174300, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-004-A", product: "PMS", openingReading: 809537.46, closingReading: 810145.34, pricePerLiter: 940, cashCollected: 177750, posAmount: 360300, shortageResolutions: [{ type: "debt", amount: 32900, liters: 35, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-005-A", product: "PMS", openingReading: 1127882.65, closingReading: 1130061.23, pricePerLiter: 940, cashCollected: 375100, posAmount: 1559360, shortageResolutions: [{ type: "debt", amount: 112800, liters: 120, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 700904.99, closingReading: 701535.62, pricePerLiter: 940, cashCollected: 453600, posAmount: 138378.66 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 532396.17, closingReading: 533114.80, pricePerLiter: 940, cashCollected: 503900, posAmount: 170662.80 },
      ]
    },
    bankDeposits: [
      { amount: 11712560, reference: "24th and 25th Oct cash", date: "2025-10-27" }
    ]
  },
  {
    date: "2025-10-28",
    shifts: {
      morning: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2181887.44, closingReading: 2183364.22, pricePerLiter: 940, cashCollected: 499120, posAmount: 855423.40, shortageResolutions: [{ type: "debt", amount: 32900, liters: 35, debtor: "Fidelity Bank", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-002-B", product: "PMS", openingReading: 2380565.29, closingReading: 2381898.16, pricePerLiter: 940, cashCollected: 797100, posAmount: 425748, shortageResolutions: [{ type: "debt", amount: 30000, liters: 31.91, debtor: "Miracle", reason: "No idea" }] },
        { attendant: "Mary-cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 50938.71, closingReading: 51685.93, pricePerLiter: 940, cashCollected: 499700, posAmount: 201127 },
        { attendant: "Celestina", pumpId: "PMP-004-A", product: "PMS", openingReading: 810145.34, closingReading: 811124.29, pricePerLiter: 940, cashCollected: 425700, posAmount: 463036, shortageResolutions: [{ type: "official use", amount: 30004.80, liters: 31.92, purpose: "Bread bus", reason: "Bread supply" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1130061.27, closingReading: 1131019.89, pricePerLiter: 940, cashCollected: 276600, posAmount: 482600, shortageResolutions: [{ type: "debt", amount: 141000, liters: 0.12, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Ugochi", pumpId: "PMP-006-B", product: "PMS", openingReading: 533114.80, closingReading: 534352.53, pricePerLiter: 940, cashCollected: 908310, posAmount: 253280 },
      ],
      afternoon: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2183364.22, closingReading: 2184521.09, pricePerLiter: 940, cashCollected: 705632.66, posAmount: 271000, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 39658.60, liters: 42.19, debtor: "Chief Bestman", reason: "Debt" }, { type: "debt", amount: 5000, liters: 5.32, debtor: "Okoye", reason: "No idea" }] },
        { attendant: "Chisom", pumpId: "PMP-002-B", product: "PMS", openingReading: 2381898.16, closingReading: 2383351.13, pricePerLiter: 940, cashCollected: 438430, posAmount: 859400, shortageResolutions: [{ type: "debt", amount: 68000, liters: 72.34, debtor: "Chief Bestman", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 204558.74, closingReading: 205740.02, pricePerLiter: 940, cashCollected: 352750, posAmount: 686900, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }, { type: "return to tank", amount: 5000.80, liters: 5.32, reason: "Priming" }] },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 51685.93, closingReading: 52221.12, pricePerLiter: 940, cashCollected: 314800, posAmount: 187631 },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 811124.29, closingReading: 811913.10, pricePerLiter: 940, cashCollected: 236500, posAmount: 481190.40, shortageResolutions: [{ type: "debt", amount: 23500, liters: 25, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Mulakor", pumpId: "PMP-005-A", product: "PMS", openingReading: 1131019.89, closingReading: 1132041.68, pricePerLiter: 940, cashCollected: 349300, posAmount: 610800 },
        { attendant: "Sarah chidiebere", pumpId: "PMP-005-B", product: "PMS", openingReading: 701535.62, closingReading: 702135.07, pricePerLiter: 940, cashCollected: 418000, posAmount: 144500 },
        { attendant: "Chizoba", pumpId: "PMP-006-A", product: "PMS", openingReading: 659036.81, closingReading: 659347.93, pricePerLiter: 940, cashCollected: 188000, posAmount: 104000 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-B", product: "PMS", openingReading: 534352.53, closingReading: 535349.88, pricePerLiter: 940, cashCollected: 567690, posAmount: 321800, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  }
];