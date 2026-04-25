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
  },
  {
    date: "2025-10-29",
    shifts: {
      morning: [
        { attendant: "Ugochi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2184521.10, closingReading: 2185987.92, pricePerLiter: 940, cashCollected: 306800, posAmount: 977776, shortageResolutions: [{ type: "debt", amount: 94000, liters: 100, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Amarachi", pumpId: "PMP-002-B", product: "PMS", openingReading: 2383351.13, closingReading: 2385513.28, pricePerLiter: 940, cashCollected: 1092750, posAmount: 939766.80 },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 52221.12, closingReading: 53122.63, pricePerLiter: 940, cashCollected: 671850, posAmount: 149473, shortageResolutions: [{ type: "debt", amount: 25000, liters: 26.60, debtor: "Dogood", reason: "No idea" }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 811913.11, closingReading: 812974.17, pricePerLiter: 940, cashCollected: 157450, posAmount: 492500, shortageResolutions: [{ type: "debt", amount: 308000, liters: 327.66, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 39450, liters: 41.97, debtor: "Multipro company", reason: "Approved" }] },
        { attendant: "Mary-cynthia", pumpId: "PMP-006-A", product: "PMS", openingReading: 659347.94, closingReading: 660586.35, pricePerLiter: 940, cashCollected: 423700, posAmount: 740036 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 535349.88, closingReading: 536447.47, pricePerLiter: 940, cashCollected: 839600, posAmount: 190700 },
      ],
      afternoon: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2185987.92, closingReading: 2187306.81, pricePerLiter: 940, cashCollected: 286100, posAmount: 802718, shortageResolutions: [{ type: "debt", amount: 122200, liters: 130, debtor: "First patriot", reason: "MD approved" }, { type: "official use", amount: 28200, liters: 30, purpose: "School/house", reason: "No" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-B", product: "PMS", openingReading: 2385513.28, closingReading: 2388930.37, pricePerLiter: 940, cashCollected: 588370, posAmount: 2619710, shortageResolutions: [{ type: "debt", amount: 4000, liters: 4.26, debtor: "No idea", reason: "No idea" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 205740.02, closingReading: 206280.49, pricePerLiter: 940, cashCollected: 38250, posAmount: 263000, shortageResolutions: [{ type: "debt", amount: 206800, liters: 220, debtor: "First patriot", reason: "No idea" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 53122.63, closingReading: 53844.41, pricePerLiter: 940, cashCollected: 546450, posAmount: 131042.20 },
        { attendant: "Sarah chidiebere", pumpId: "PMP-004-A", product: "PMS", openingReading: 812974.17, closingReading: 813654.94, pricePerLiter: 940, cashCollected: 364050, posAmount: 275387 },
        { attendant: "Chisom", pumpId: "PMP-005-A", product: "PMS", openingReading: 1132041.70, closingReading: 1132975.71, pricePerLiter: 940, cashCollected: 474100, posAmount: 403600 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 660586.35, closingReading: 661344.38, pricePerLiter: 940, cashCollected: 196850, posAmount: 515241 },
        { attendant: "Mulakor", pumpId: "PMP-006-B", product: "PMS", openingReading: 536447.47, closingReading: 537404.54, pricePerLiter: 940, cashCollected: 722850, posAmount: 175713 },
      ]
    },
    bankDeposits: [
      { amount: 14579020, reference: "27th and 28th Oct cash", date: "2025-10-29" }
    ]
  },
  {
    date: "2025-10-30",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2187306.84, closingReading: 2188596.62, pricePerLiter: 940, cashCollected: 374400, posAmount: 837757 },
        { attendant: "Ugochi", pumpId: "PMP-002-B", product: "PMS", openingReading: 2388935.02, closingReading: 2392062.46, pricePerLiter: 940, cashCollected: 1236000, posAmount: 1382285, shortageResolutions: [{ type: "debt", amount: 223000, liters: 237.23, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 94000, liters: 100, debtor: "Exodus", reason: "Debt" }, { type: "return to tank", amount: 4700, liters: 5, reason: "Priming" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 53844.41, closingReading: 54908.51, pricePerLiter: 940, cashCollected: 647650, posAmount: 336600, shortageResolutions: [{ type: "debt", amount: 15040, liters: 16, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Amarachi", pumpId: "PMP-004-A", product: "PMS", openingReading: 813654.95, closingReading: 814601.20, pricePerLiter: 940, cashCollected: 288900, posAmount: 600240 },
        { attendant: "Celestina", pumpId: "PMP-006-A", product: "PMS", openingReading: 661344.39, closingReading: 662844.99, pricePerLiter: 940, cashCollected: 691550, posAmount: 717850 },
        { attendant: "Mary-cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 537404.54, closingReading: 538455.11, pricePerLiter: 940, cashCollected: 727350, posAmount: 258420 },
      ],
      afternoon: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2392062.46, closingReading: 2393561.20, pricePerLiter: 940, cashCollected: 589420, posAmount: 819491 },
        { attendant: "Mulakor", pumpId: "PMP-002-A", product: "PMS", openingReading: 2188596.62, closingReading: 2189275.74, pricePerLiter: 940, cashCollected: 228600, posAmount: 404300, shortageResolutions: [{ type: "debt", amount: 5000, liters: 5.32, debtor: "Debt", reason: "Precious 4000 and Rebecca 1000" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 206280.49, closingReading: 207547.09, pricePerLiter: 940, cashCollected: 143600, posAmount: 685836, shortageResolutions: [{ type: "debt", amount: 45860, liters: 48.79, debtor: "Multipro company", reason: "MD approved" }, { type: "debt", amount: 314900, liters: 335, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-003-B", product: "PMS", openingReading: 54908.51, closingReading: 55375.37, pricePerLiter: 940, cashCollected: 348500, posAmount: 89390 },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 814601.20, closingReading: 815493.96, pricePerLiter: 940, cashCollected: 255700, posAmount: 529398, shortageResolutions: [{ type: "debt", amount: 34000, liters: 36.17, debtor: "Debt", reason: "No idea" }, { type: "debt", amount: 19740, liters: 21, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Chisom", pumpId: "PMP-005-B", product: "PMS", openingReading: 702135.07, closingReading: 702875.66, pricePerLiter: 940, cashCollected: 528200, posAmount: 120000, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 662844.99, closingReading: 664131.15, pricePerLiter: 940, cashCollected: 357700, posAmount: 827296.20, shortageResolutions: [{ type: "debt", amount: 23500, liters: 25, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Miriam", pumpId: "PMP-006-B", product: "PMS", openingReading: 538455.10, closingReading: 539101.15, pricePerLiter: 940, cashCollected: 496500, posAmount: 106580 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-10-31",
    shifts: {
      morning: [
        { attendant: "Mary-cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2189275.77, closingReading: 2190616.74, pricePerLiter: 940, cashCollected: 427450, posAmount: 786080, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-B", product: "PMS", openingReading: 2393561.20, closingReading: 2396212.52, pricePerLiter: 940, cashCollected: 1500240, posAmount: 987308.66, shortageResolutions: [{ type: "return to tank", amount: 4700, liters: 5, reason: "RTT" }] },
        { attendant: "Amarachi", pumpId: "PMP-003-B", product: "PMS", openingReading: 55375.37, closingReading: 56225.84, pricePerLiter: 940, cashCollected: 599460, posAmount: 198240 },
        { attendant: "Ugochi", pumpId: "PMP-004-A", product: "PMS", openingReading: 815493.97, closingReading: 816727.56, pricePerLiter: 940, cashCollected: 484100, posAmount: 675200 },
        { attendant: "Chizoba", pumpId: "PMP-005-A", product: "PMS", openingReading: 1132975.76, closingReading: 1133142.55, pricePerLiter: 940, cashCollected: 18200, posAmount: 35000, shortageResolutions: [{ type: "debt", amount: 103400, liters: 110, debtor: "Chief Bestman", reason: "House" }] },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 664131.16, closingReading: 665311.52, pricePerLiter: 940, cashCollected: 493900, posAmount: 615154 },
        { attendant: "Celestina", pumpId: "PMP-006-B", product: "PMS", openingReading: 539101.15, closingReading: 540236.28, pricePerLiter: 940, cashCollected: 852250, posAmount: 213400 },
      ],
      afternoon: [
        { attendant: "Mariam", pumpId: "PMP-002-A", product: "PMS", openingReading: 2190616.74, closingReading: 2191418.24, pricePerLiter: 940, cashCollected: 246550, posAmount: 506645 },
        { attendant: "Mulakor", pumpId: "PMP-002-B", product: "PMS", openingReading: 2396212.52, closingReading: 2398395.27, pricePerLiter: 940, cashCollected: 224200, posAmount: 1112139.60, shortageResolutions: [{ type: "debt", amount: 715452.80, liters: 761.12, debtor: "Maco oil", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 207547.09, closingReading: 208812.19, pricePerLiter: 940, cashCollected: 250000, posAmount: 708900, shortageResolutions: [{ type: "debt", amount: 230300, liters: 245, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 56225.84, closingReading: 56845.33, pricePerLiter: 940, cashCollected: 458810, posAmount: 122600 },
        { attendant: "Ogochukwu", pumpId: "PMP-004-A", product: "PMS", openingReading: 816727.56, closingReading: 817666.82, pricePerLiter: 940, cashCollected: 374300, posAmount: 508300 },
        { attendant: "Chisom", pumpId: "PMP-005-A", product: "PMS", openingReading: 1133142.55, closingReading: 1133857.74, pricePerLiter: 940, cashCollected: 122600, posAmount: 182900, shortageResolutions: [{ type: "debt", amount: 366600, liters: 390, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-006-A", product: "PMS", openingReading: 665311.52, closingReading: 665867.61, pricePerLiter: 940, cashCollected: 263700, posAmount: 258722 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 540236.28, closingReading: 541119.44, pricePerLiter: 940, cashCollected: 708850, posAmount: 120400 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-01",
    shifts: {
      morning: [
        { attendant: "Celestina", pumpId: "PMP-002-A", product: "PMS", openingReading: 2191418.25, closingReading: 2192999.16, pricePerLiter: 940, cashCollected: 333050, posAmount: 1152508 },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2398395.27, closingReading: 2401811.31, pricePerLiter: 940, cashCollected: 1204350, posAmount: 1836725, shortageResolutions: [{ type: "debt", amount: 20000, liters: 21.28, debtor: "Okoye", reason: "No idea" }, { type: "debt", amount: 60000, liters: 63.83, debtor: "No idea", reason: "Debt" }, { type: "debt", amount: 90000, liters: 95.74, debtor: "No idea", reason: "Debt" }] },
        { attendant: "Ugochi", pumpId: "PMP-003-B", product: "PMS", openingReading: 56845.33, closingReading: 57814.40, pricePerLiter: 940, cashCollected: 581600, posAmount: 327700 },
        { attendant: "Amarachi", pumpId: "PMP-006-A", product: "PMS", openingReading: 665867.62, closingReading: 667090.58, pricePerLiter: 940, cashCollected: 174600, posAmount: 947254, shortageResolutions: [{ type: "debt", amount: 27440, liters: 29.19, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1133857.75, closingReading: 1135090.25, pricePerLiter: 940, cashCollected: 192250, posAmount: 910016.66, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 541119.44, closingReading: 542218.94, pricePerLiter: 940, cashCollected: 777200, posAmount: 209776, shortageResolutions: [{ type: "debt", amount: 16920, liters: 18.00, debtor: "Multipro", reason: "MD approved" }, { type: "debt", amount: 25000, liters: 26.60, debtor: "No idea", reason: "No idea" }] },
      ],
      afternoon: [
        { attendant: "Sarah chidiebere", pumpId: "PMP-002-B", product: "PMS", openingReading: 2401811.31, closingReading: 2404088.63, pricePerLiter: 940, cashCollected: 696050, posAmount: 1444662 },
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2192999.16, closingReading: 2194528.56, pricePerLiter: 940, cashCollected: 368000, posAmount: 1069296.60 },
        { attendant: "Mulakor", pumpId: "PMP-005-A", product: "PMS", openingReading: 1135090.25, closingReading: 1136233.79, pricePerLiter: 940, cashCollected: 418200, posAmount: 543000, shortageResolutions: [{ type: "debt", amount: 112800, liters: 120, debtor: "Donald", reason: "No idea" }] },
        { attendant: "Mary-cynthia", pumpId: "PMP-005-B", product: "PMS", openingReading: 702875.69, closingReading: 703698.18, pricePerLiter: 940, cashCollected: 599850, posAmount: 171703 },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 57814.40, closingReading: 58521.19, pricePerLiter: 940, cashCollected: 457250, posAmount: 206300 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-A", product: "PMS", openingReading: 667090.58, closingReading: 667860.77, pricePerLiter: 940, cashCollected: 204300, posAmount: 473103, shortageResolutions: [{ type: "debt", amount: 32900, liters: 35, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 13400, liters: 14.26, debtor: "Donald", reason: "No idea" }] },
        { attendant: "Chisom", pumpId: "PMP-006-B", product: "PMS", openingReading: 542218.94, closingReading: 543096.53, pricePerLiter: 940, cashCollected: 467000, posAmount: 112800, shortageResolutions: [{ type: "debt", amount: 244400, liters: 260, debtor: "First patriot", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-02",
    shifts: {
      morning: [
        { attendant: "Donald", pumpId: "PMP-002-A", product: "PMS", openingReading: 2194528.57, closingReading: 2194765.62, pricePerLiter: 940, cashCollected: 0, posAmount: 222827 },
        { attendant: "Donald", pumpId: "PMP-002-B", product: "PMS", openingReading: 2404088.63, closingReading: 2409979.35, pricePerLiter: 940, cashCollected: 1217600, posAmount: 3133970, shortageResolutions: [{ type: "debt", amount: 385400, liters: 410, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 790446, liters: 840.90, debtor: "Maco oil", reason: "MD approved" }, { type: "official use", amount: 10001.60, liters: 10.64, purpose: "Hired truck feeding" }] },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2025-11-03",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2194765.63, closingReading: 2196371.09, pricePerLiter: 940, cashCollected: 153420, posAmount: 1242312, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 56400, liters: 60, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-002-B", product: "PMS", openingReading: 2409979.35, closingReading: 2413864.76, pricePerLiter: 940, cashCollected: 1103550, posAmount: 2440789.60, shortageResolutions: [{ type: "debt", amount: 108000, liters: 114.89, debtor: "Okoye", reason: "No idea" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-003-A", product: "PMS", openingReading: 58521.19, closingReading: 59673.87, pricePerLiter: 940, cashCollected: 710800, posAmount: 371652 },
        { attendant: "Sarah chidiebere", pumpId: "PMP-004-A", product: "PMS", openingReading: 817666.85, closingReading: 817695.65, pricePerLiter: 940, cashCollected: 11500, posAmount: 1500, shortageResolutions: [{ type: "return to tank", amount: 14100, liters: 15, reason: "Priming" }] },
        { attendant: "Ugochi", pumpId: "PMP-004-A", product: "PMS", openingReading: 817695.65, closingReading: 819448.85, pricePerLiter: 940, cashCollected: 605800, posAmount: 1041758 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 667860.77, closingReading: 669008.50, pricePerLiter: 940, cashCollected: 483170, posAmount: 595198 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 543096.52, closingReading: 544613.77, pricePerLiter: 940, cashCollected: 1140320, posAmount: 281206.66, shortageResolutions: [{ type: "debt", amount: 3760, liters: 4, debtor: "Multipro", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2196371.09, closingReading: 2198982.98, pricePerLiter: 940, cashCollected: 720750, posAmount: 1450500, shortageResolutions: [{ type: "debt", amount: 282000, liters: 300, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-002-B", product: "PMS", openingReading: 2413864.76, closingReading: 2416998.77, pricePerLiter: 940, cashCollected: 669090, posAmount: 2276915.60 },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 208812.24, closingReading: 210691.79, pricePerLiter: 940, cashCollected: 422100, posAmount: 1209600, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 56400, liters: 60, debtor: "House", reason: "No idea" }, { type: "debt", amount: 22200, liters: 23.62, reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 59673.87, closingReading: 60619.20, pricePerLiter: 940, cashCollected: 645900, posAmount: 241170 },
        { attendant: "Mary-cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1136233.83, closingReading: 1136538.99, pricePerLiter: 940, cashCollected: 119500, posAmount: 166500 },
        { attendant: "Amarachi", pumpId: "PMP-006-B", product: "PMS", openingReading: 544613.77, closingReading: 545802.46, pricePerLiter: 940, cashCollected: 716100, posAmount: 348223, shortageResolutions: [{ type: "debt", amount: 51549.60, liters: 54.84, debtor: "Donald", reason: "Debt" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-04",
    shifts: {
      morning: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2198982.99, closingReading: 2200304.92, pricePerLiter: 940, cashCollected: 525200, posAmount: 613000, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 38154.60, liters: 40.59, debtor: "Fidelity Bank", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-002-B", product: "PMS", openingReading: 2416998.77, closingReading: 2419145.35, pricePerLiter: 940, cashCollected: 860790, posAmount: 1117555, shortageResolutions: [{ type: "debt", amount: 94000, liters: 10, debtor: "Multipro", reason: "MD approved" }, { type: "debt", amount: 30000, liters: 31.91, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Ugochi", pumpId: "PMP-003-B", product: "PMS", openingReading: 60619.20, closingReading: 61852.14, pricePerLiter: 940, cashCollected: 866400, posAmount: 262694, shortageResolutions: [{ type: "debt", amount: 23500, liters: 25, debtor: "Multipro", reason: "MD approved" }, { type: "return to tank", amount: 4700, liters: 5, reason: "Priming" }] },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 819448.87, closingReading: 820703.39, pricePerLiter: 940, cashCollected: 392200, posAmount: 786622 },
        { attendant: "Mulakor", pumpId: "PMP-005-A", product: "PMS", openingReading: 1136539.00, closingReading: 1137026.25, pricePerLiter: 940, cashCollected: 132900, posAmount: 324822 },
        { attendant: "Sarah chidiebere", pumpId: "PMP-006-A", product: "PMS", openingReading: 669008.52, closingReading: 670135.16, pricePerLiter: 940, cashCollected: 589040, posAmount: 469442 },
        { attendant: "Miriam", pumpId: "PMP-006-B", product: "PMS", openingReading: 545802.46, closingReading: 546886.68, pricePerLiter: 940, cashCollected: 847190, posAmount: 171000 },
      ],
      afternoon: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2200304.92, closingReading: 2201562.41, pricePerLiter: 940, cashCollected: 206950, posAmount: 880664.60, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }, { type: "official use", amount: 28200, liters: 30, purpose: "House use", reason: "AKL_626_BK" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2419145.38, closingReading: 2421317.28, pricePerLiter: 940, cashCollected: 802150, posAmount: 1239320 },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 210691.79, closingReading: 211113.27, pricePerLiter: 940, cashCollected: 69600, posAmount: 154182, shortageResolutions: [{ type: "debt", amount: 117500, liters: 125, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 52828, liters: 56.20, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Chisom", pumpId: "PMP-003-B", product: "PMS", openingReading: 61852.14, closingReading: 62751.86, pricePerLiter: 940, cashCollected: 752690, posAmount: 92100 },
        { attendant: "Celestina", pumpId: "PMP-004-A", product: "PMS", openingReading: 820703.39, closingReading: 821538.87, pricePerLiter: 940, cashCollected: 227200, posAmount: 557753.20 },
        { attendant: "Celestina", pumpId: "PMP-005-A", product: "PMS", openingReading: 1137026.25, closingReading: 1137315.40, pricePerLiter: 940, cashCollected: 138200, posAmount: 133500 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-A", product: "PMS", openingReading: 670135.16, closingReading: 671358.07, pricePerLiter: 940, cashCollected: 389450, posAmount: 693370, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Mary-cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 546886.68, closingReading: 547898.77, pricePerLiter: 940, cashCollected: 649200, posAmount: 300496 },
        { attendant: "Oga John", pumpId: "PMP-003-A", product: "PMS", openingReading: 211113.27, closingReading: 213113.27, pricePerLiter: 940, cashCollected: 0, posAmount: 0 }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-05",
    shifts: {
      morning: [
        { attendant: "Mariam", pumpId: "PMP-002-A", product: "PMS", openingReading: 2201562.42, closingReading: 2202776.00, pricePerLiter: 940, cashCollected: 276560, posAmount: 863964 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-B", product: "PMS", openingReading: 2421317.28, closingReading: 2423884.21, pricePerLiter: 940, cashCollected: 752200, posAmount: 811745, shortageResolutions: [{ type: "debt", amount: 18800, liters: 20, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 830198.60, liters: 883.19, debtor: "Maco oil", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 62751.86, closingReading: 63611.19, pricePerLiter: 940, cashCollected: 486250, posAmount: 210600, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 62980, liters: 67, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 821538.90, closingReading: 823082.08, pricePerLiter: 940, cashCollected: 202150, posAmount: 850383, shortageResolutions: [{ type: "debt", amount: 230300, liters: 245, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 31960, liters: 34, debtor: "Multipro company", reason: "MD approved" }, { type: "official use", amount: 135811.20, liters: 144.48, purpose: "Farm", reason: "For farm" }] },
        { attendant: "Mulakor", pumpId: "PMP-005-B", product: "PMS", openingReading: 703698.18, closingReading: 704471.40, pricePerLiter: 940, cashCollected: 408850, posAmount: 317000 },
        { attendant: "Ugochi", pumpId: "PMP-006-A", product: "PMS", openingReading: 671358.09, closingReading: 672693.65, pricePerLiter: 940, cashCollected: 457100, posAmount: 723694, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 8460, liters: 9, debtor: "Multipro company" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-006-B", product: "PMS", openingReading: 547898.77, closingReading: 548831.91, pricePerLiter: 940, cashCollected: 692650, posAmount: 183936 },
      ],
      afternoon: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2202776.00, closingReading: 2204473.72, pricePerLiter: 940, cashCollected: 560600, posAmount: 1034766 },
        { attendant: "Amarachi", pumpId: "PMP-002-B", product: "PMS", openingReading: 2423884.21, closingReading: 2426033.35, pricePerLiter: 940, cashCollected: 453440, posAmount: 1566801.80 },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 213113.27, closingReading: 213929.21, pricePerLiter: 940, cashCollected: 118400, posAmount: 563520, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 28200, liters: 30, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 63611.19, closingReading: 64478.60, pricePerLiter: 940, cashCollected: 678000, posAmount: 135656.20 },
        { attendant: "Chizoba", pumpId: "PMP-004-A", product: "PMS", openingReading: 823082.08, closingReading: 823782.20, pricePerLiter: 940, cashCollected: 236000, posAmount: 391541, shortageResolutions: [{ type: "official use", amount: 28200, liters: 30, purpose: "Okoye", reason: "No idea" }] },
        { attendant: "Chisom", pumpId: "PMP-005-A", product: "PMS", openingReading: 1137315.42, closingReading: 1138580.95, pricePerLiter: 940, cashCollected: 404300, posAmount: 611025, shortageResolutions: [{ type: "debt", amount: 173900, liters: 185, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 704471.40, closingReading: 705543.29, pricePerLiter: 940, cashCollected: 813000, posAmount: 193300 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-06",
    shifts: {
      morning: [
        { attendant: "Sarah chidiebere", pumpId: "PMP-002-A", product: "PMS", openingReading: 2204473.73, closingReading: 2205788.48, pricePerLiter: 940, cashCollected: 424800, posAmount: 726447, shortageResolutions: [{ type: "debt", amount: 79400, liters: 84.47, debtor: "Chief Bestman", reason: "Debt" }, { type: "return to tank", amount: 4700, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 64478.60, closingReading: 65433.28, pricePerLiter: 940, cashCollected: 612810, posAmount: 167050, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 40000, liters: 42.55, debtor: "Oga Benji", reason: "Debt" }, { type: "debt", amount: 30000, liters: 31.91, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-A", product: "PMS", openingReading: 823782.21, closingReading: 824814.51, pricePerLiter: 940, cashCollected: 345950, posAmount: 506406.60, shortageResolutions: [{ type: "debt", amount: 117500, liters: 125, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Mulakor", pumpId: "PMP-005-A", product: "PMS", openingReading: 1138580.96, closingReading: 1140736.10, pricePerLiter: 940, cashCollected: 786250, posAmount: 1239469.28 },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 672693.66, closingReading: 673783.38, pricePerLiter: 940, cashCollected: 348900, posAmount: 628157.60, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Ugochi", pumpId: "PMP-006-B", product: "PMS", openingReading: 705543.29, closingReading: 706707.08, pricePerLiter: 940, cashCollected: 885850, posAmount: 203180, shortageResolutions: [{ type: "debt", amount: 3760, liters: 4, debtor: "Multipro", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2205788.48, closingReading: 2206920.07, pricePerLiter: 940, cashCollected: 375300, posAmount: 592920, shortageResolutions: [{ type: "debt", amount: 37600, liters: 40, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 57000, liters: 60.64, debtor: "Donald", reason: "Debt" }] },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 65433.28, closingReading: 66128.90, pricePerLiter: 940, cashCollected: 479250, posAmount: 172650 },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 213929.21, closingReading: 214736.36, pricePerLiter: 940, cashCollected: 506000, posAmount: 196000, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Amarachi", pumpId: "PMP-004-A", product: "PMS", openingReading: 824814.51, closingReading: 827079.37, pricePerLiter: 940, cashCollected: 306700, posAmount: 1726220, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 39151, liters: 41.65, debtor: "Chief Bestman", reason: "Debt" }] },
        { attendant: "Chisom", pumpId: "PMP-005-A", product: "PMS", openingReading: 1140736.10, closingReading: 1141995.89, pricePerLiter: 940, cashCollected: 407850, posAmount: 776239 },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 706707.08, closingReading: 707978.89, pricePerLiter: 940, cashCollected: 831250, posAmount: 357306, shortageResolutions: [{ type: "debt", amount: 4500, liters: 4.79, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Celestina", pumpId: "PMP-006-A", product: "PMS", openingReading: 673783.38, closingReading: 674806.87, pricePerLiter: 940, cashCollected: 399650, posAmount: 561940 },
        { attendant: "AGO Operator", pumpId: "AGO-001-B", product: "AGO", openingReading: 450482.99, closingReading: 450828.87, pricePerLiter: 1050, cashCollected: 16650, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 315000, liters: 300, purpose: "For truck", reason: "Abduraman" }, { type: "official use", amount: 31500, liters: 30, purpose: "Generator", reason: "To generator" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-07",
    shifts: {
      morning: [
        { attendant: "Test", pumpId: "PMP-001-A", product: "PMS", openingReading: 1000.00, closingReading: 3000.00, pricePerLiter: 940, cashCollected: 880000, posAmount: 950000, shortageResolutions: [{ type: "debt", amount: 50000, liters: 53.19, debtor: "Test", reason: "Test" }] },
        { attendant: "Ugochi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2206920.08, closingReading: 2208540.69, pricePerLiter: 940, cashCollected: 660700, posAmount: 862240 },
        { attendant: "Chidimma", pumpId: "PMP-003-B", product: "PMS", openingReading: 66128.90, closingReading: 67071.00, pricePerLiter: 940, cashCollected: 738600, posAmount: 135500, shortageResolutions: [{ type: "debt", amount: 10340, liters: 11, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 827079.38, closingReading: 828683.09, pricePerLiter: 940, cashCollected: 450310, posAmount: 1052020, shortageResolutions: [{ type: "debt", amount: 4700, liters: 5, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 674806.88, closingReading: 675879.68, pricePerLiter: 940, cashCollected: 154500, posAmount: 409425, shortageResolutions: [{ type: "debt", amount: 376000, liters: 400, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 67600, liters: 71.91, debtor: "Chief Bestman", reason: "House" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-005-A", product: "PMS", openingReading: 1141995.90, closingReading: 1143836.56, pricePerLiter: 940, cashCollected: 358620, posAmount: 1248900, shortageResolutions: [{ type: "debt", amount: 122200, liters: 130, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Mulakor", pumpId: "PMP-005-B", product: "PMS", openingReading: 707978.89, closingReading: 708986.59, pricePerLiter: 940, cashCollected: 744350, posAmount: 200540 },
        { attendant: "AGO Operator", pumpId: "AGO-001-B", product: "AGO", openingReading: 451397.78, closingReading: 451397.78, pricePerLiter: 1200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 36000, liters: 30, purpose: "Generator", reason: "Daily usage" }] }
      ],
      afternoon: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2208540.69, closingReading: 2210321.70, pricePerLiter: 940, cashCollected: 581300, posAmount: 900300, shortageResolutions: [{ type: "debt", amount: 98700, liters: 105, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 93400, liters: 99.36, debtor: "Debt", reason: "Donald" }] },
        { attendant: "Chisom", pumpId: "PMP-003-B", product: "PMS", openingReading: 67071.00, closingReading: 67976.50, pricePerLiter: 940, cashCollected: 440900, posAmount: 352891, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Miriam", pumpId: "PMP-004-A", product: "PMS", openingReading: 828683.09, closingReading: 829855.60, pricePerLiter: 940, cashCollected: 438700, posAmount: 642300, shortageResolutions: [{ type: "debt", amount: 20680, liters: 22, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-005-A", product: "PMS", openingReading: 1143836.56, closingReading: 1145808.48, pricePerLiter: 940, cashCollected: 793630, posAmount: 1060509 },
        { attendant: "Amarachi", pumpId: "PMP-006-B", product: "PMS", openingReading: 708986.59, closingReading: 710192.54, pricePerLiter: 940, cashCollected: 366550, posAmount: 765712 },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 450828.87, closingReading: 451397.78, pricePerLiter: 1050, cashCollected: 0, posAmount: 555355, shortageResolutions: [{ type: "debt", amount: 42000, liters: 40, debtor: "Chief Bestman", reason: "House" }] }
      ]
    },
    bankDeposits: [
      { amount: 1830000, reference: "Daily Deposit", date: "2025-11-07" }
    ]
  },
  {
    date: "2025-11-08",
    shifts: {
      morning: [
        { attendant: "Chisom", pumpId: "PMP-002-A", product: "PMS", openingReading: 2210321.71, closingReading: 2211678.89, pricePerLiter: 940, cashCollected: 489800, posAmount: 719161, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 10000, liters: 10.64, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Ugochi", pumpId: "PMP-002-B", product: "PMS", openingReading: 2426033.35, closingReading: 2429544.65, pricePerLiter: 940, cashCollected: 962400, posAmount: 1602511.40, shortageResolutions: [{ type: "debt", amount: 735033, liters: 781.95, debtor: "Maco oil", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 67976.50, closingReading: 69010.74, pricePerLiter: 940, cashCollected: 698300, posAmount: 272900 },
        { attendant: "Sarah chidiebere", pumpId: "PMP-004-A", product: "PMS", openingReading: 829855.63, closingReading: 831280.08, pricePerLiter: 940, cashCollected: 571110, posAmount: 678257, shortageResolutions: [{ type: "debt", amount: 31772, liters: 33.80, debtor: "Chief Bestman", reason: "Oga Peter" }, { type: "debt", amount: 37600, liters: 40.00, debtor: "Collins", reason: "For Enugu/MD order" }, { type: "debt", amount: 19740, liters: 21.00, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-005-B", product: "PMS", openingReading: 710192.54, closingReading: 711399.94, pricePerLiter: 940, cashCollected: 736500, posAmount: 222122, shortageResolutions: [{ type: "debt", amount: 141000, liters: 150.00, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 8460, liters: 9.00, debtor: "Multipro company", reason: "MD approved" }, { type: "debt", amount: 25000, liters: 26.60, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-A", product: "PMS", openingReading: 675879.69, closingReading: 677360.90, pricePerLiter: 940, cashCollected: 440400, posAmount: 931736.40, shortageResolutions: [{ type: "debt", amount: 19740, liters: 21.00, debtor: "Multipro", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2211678.89, closingReading: 2213408.98, pricePerLiter: 940, cashCollected: 256070, posAmount: 1303957.80, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2429544.65, closingReading: 2432390.54, pricePerLiter: 940, cashCollected: 410650, posAmount: 2256476, shortageResolutions: [{ type: "debt", amount: 8000, liters: 8.51, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 69010.74, closingReading: 69873.12, pricePerLiter: 940, cashCollected: 614900, posAmount: 194751 },
        { attendant: "Celestina", pumpId: "PMP-005-B", product: "PMS", openingReading: 711399.94, closingReading: 712616.93, pricePerLiter: 940, cashCollected: 477520, posAmount: 618445, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Mulakor", pumpId: "PMP-006-A", product: "PMS", openingReading: 677360.90, closingReading: 678513.30, pricePerLiter: 940, cashCollected: 437900, posAmount: 644880 },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 214736.36, closingReading: 216331.40, pricePerLiter: 940, cashCollected: 289000, posAmount: 752274.60, shortageResolutions: [{ type: "debt", amount: 122200, liters: 130.00, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 15040, liters: 16.00, debtor: "Multipro company", reason: "MD approved" }, { type: "debt", amount: 320450, liters: 340.90, debtor: "Nwoke mgbo", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-09",
    shifts: {
      morning: [
        { 
          attendant: "Miracle", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2432390.54, 
          closingReading: 2434174.78, 
          pricePerLiter: 940, 
          cashCollected: 333500, 
          posAmount: 811549, 
          shortageResolutions: [
            { type: "debt", amount: 408900, liters: 435, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 123200, liters: 131.06, debtor: "Obinna", reason: "No idea" }
          ] 
        },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2025-11-10",
    shifts: {
      morning: [
        { attendant: "Celestina", pumpId: "PMP-002-A", product: "PMS", openingReading: 2213408.99, closingReading: 2215528.14, pricePerLiter: 940, cashCollected: 336220, posAmount: 1507992, shortageResolutions: [{ type: "debt", amount: 131600, liters: 140, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 15700, liters: 16.70, debtor: "Exodus", reason: "Approved" }] },
        { attendant: "Miracle", pumpId: "PMP-002-B", product: "PMS", openingReading: 2434174.78, closingReading: 2436897.72, pricePerLiter: 940, cashCollected: 786700, posAmount: 1570519, shortageResolutions: [{ type: "debt", amount: 188000, liters: 200, debtor: "First patriot", reason: "MD" }, { type: "debt", amount: 12247, liters: 13.03, debtor: "Debt" }] },
        { attendant: "Amarachi", pumpId: "PMP-003-B", product: "PMS", openingReading: 69873.12, closingReading: 71185.83, pricePerLiter: 940, cashCollected: 796000, posAmount: 410497, shortageResolutions: [{ type: "debt", amount: 26320, liters: 28, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Ugochi", pumpId: "PMP-004-A", product: "PMS", openingReading: 831280.10, closingReading: 832314.38, pricePerLiter: 940, cashCollected: 295900, posAmount: 675904 },
        { attendant: "Rose", pumpId: "PMP-005-A", product: "PMS", openingReading: 1145808.60, closingReading: 1146712.14, pricePerLiter: 940, cashCollected: 382500, posAmount: 466374 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 678513.31, closingReading: 679278.56, pricePerLiter: 940, cashCollected: 246900, posAmount: 471435 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 548831.91, closingReading: 549880.47, pricePerLiter: 940, cashCollected: 773900, posAmount: 210300 },
      ],
      afternoon: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2215528.14, closingReading: 2217130.45, pricePerLiter: 940, cashCollected: 557600, posAmount: 885123.40, shortageResolutions: [{ type: "debt", amount: 62989.40, liters: 67.01, debtor: "Fidelity Bank", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-002-B", product: "PMS", openingReading: 2436897.72, closingReading: 2440720.91, pricePerLiter: 940, cashCollected: 1092050, posAmount: 1716474.26, shortageResolutions: [{ type: "debt", amount: 785445.20, liters: 835.58, debtor: "Maco", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 216331.42, closingReading: 217418.27, pricePerLiter: 940, cashCollected: 224200, posAmount: 764128, shortageResolutions: [{ type: "debt", amount: 32900, liters: 35, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Sarah chidiebere", pumpId: "PMP-003-B", product: "PMS", openingReading: 71185.83, closingReading: 71938.84, pricePerLiter: 940, cashCollected: 553000, posAmount: 153700 },
        { attendant: "Ogochukwu", pumpId: "PMP-004-A", product: "PMS", openingReading: 832314.38, closingReading: 833352.44, pricePerLiter: 940, cashCollected: 272000, posAmount: 543250, shortageResolutions: [{ type: "debt", amount: 159800, liters: 170, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Mulakor", pumpId: "PMP-005-A", product: "PMS", openingReading: 1146712.14, closingReading: 1147954.26, pricePerLiter: 940, cashCollected: 350010, posAmount: 760760.08, shortageResolutions: [{ type: "debt", amount: 56400, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chisom", pumpId: "PMP-006-B", product: "PMS", openingReading: 549880.47, closingReading: 550806.98, pricePerLiter: 940, cashCollected: 430150, posAmount: 392820, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 184767.57, closingReading: 185377.85, pricePerLiter: 1050, cashCollected: 501000, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 139794, liters: 133.14, debtor: "Debt", reason: "No idea" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 451592.78, closingReading: 451622.78, pricePerLiter: 1050, cashCollected: 2700, posAmount: 14800 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-11-11",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2217130.46, closingReading: 2219252.24, pricePerLiter: 940, cashCollected: 559850, posAmount: 1405867, shortageResolutions: [{ type: "debt", amount: 28200, liters: 30, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-002-B", product: "PMS", openingReading: 2440720.91, closingReading: 2444240.21, pricePerLiter: 940, cashCollected: 598760, posAmount: 1973559, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 670050, liters: 712.82, debtor: "Maco oil", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 71938.84, closingReading: 73265.83, pricePerLiter: 940, cashCollected: 669100, posAmount: 535080, shortageResolutions: [{ type: "debt", amount: 42300, liters: 45, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Amarachi", pumpId: "PMP-004-A", product: "PMS", openingReading: 833352.45, closingReading: 835098.01, pricePerLiter: 940, cashCollected: 157350, posAmount: 1422447, shortageResolutions: [{ type: "debt", amount: 31020, liters: 33, debtor: "Multipro", reason: "MD approved" }, { type: "official use", amount: 28200, liters: 30, purpose: "Bread", reason: "By okoye" }] },
        { attendant: "Miriam", pumpId: "PMP-006-B", product: "PMS", openingReading: 550806.98, closingReading: 552036.34, pricePerLiter: 940, cashCollected: 741160, posAmount: 407270 },
      ],
      afternoon: [
        { attendant: "Chisom", pumpId: "PMP-002-A", product: "PMS", openingReading: 2219252.24, closingReading: 2219284.89, pricePerLiter: 940, cashCollected: 5700, posAmount: 25000 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-B", product: "PMS", openingReading: 2444240.21, closingReading: 2444558.07, pricePerLiter: 940, cashCollected: 146900, posAmount: 151920 },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 217418.27, closingReading: 217601.30, pricePerLiter: 940, cashCollected: 2000, posAmount: 105000, shortageResolutions: [{ type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chisom", pumpId: "PMP-003-A", product: "PMS", openingReading: 217601.30, closingReading: 218524.52, pricePerLiter: 940, cashCollected: 272400, posAmount: 411890, shortageResolutions: [{ type: "debt", amount: 183300, liters: 195, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-003-B", product: "PMS", openingReading: 73265.83, closingReading: 74343.29, pricePerLiter: 940, cashCollected: 563660, posAmount: 354165, shortageResolutions: [{ type: "debt", amount: 94000, liters: 100, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 835098.01, closingReading: 836219.79, pricePerLiter: 940, cashCollected: 195650, posAmount: 811500, shortageResolutions: [{ type: "debt", amount: 47000, liters: 50, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1147954.27, closingReading: 1149610.55, pricePerLiter: 940, cashCollected: 569400, posAmount: 987225.20 },
        { attendant: "Mulakor", pumpId: "PMP-005-B", product: "PMS", openingReading: 712616.93, closingReading: 713531.20, pricePerLiter: 940, cashCollected: 318200, posAmount: 539516 },
        { attendant: "Sarah", pumpId: "PMP-006-A", product: "PMS", openingReading: 679278.58, closingReading: 680298.21, pricePerLiter: 940, cashCollected: 217500, posAmount: 740429 },
      ]
    },
    bankDeposits: []
  }
];