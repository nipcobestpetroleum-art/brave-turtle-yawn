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
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-03" }],
  },
  {
    date: "2026-03-02",
    shifts: {
      morning: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2544748.11, closingReading: 2549275.61, pricePerLiter: 860, cashCollected: 1185900, posAmount: 2459836, shortageResolutions: [{ type: "debt", amount: 129000, liters: 150, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 79059.80, liters: 91.93, purpose: "Official use" }, { type: "official use", amount: 40007.20, liters: 46.52, purpose: "Official use" }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 64000.13, closingReading: 65902.18, pricePerLiter: 860, cashCollected: 438100, posAmount: 1198033 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 225965.84, closingReading: 226291.14, pricePerLiter: 860, cashCollected: 217700, posAmount: 61895 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-B", product: "PMS", openingReading: 19956.23, closingReading: 20524.86, pricePerLiter: 860, cashCollected: 415850, posAmount: 72400 },
        { attendant: "Favour", pumpId: "PMP-006-A", product: "PMS", openingReading: 832021.57, closingReading: 833547.61, pricePerLiter: 860, cashCollected: 512450, posAmount: 799470 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 672159.31, closingReading: 673592.39, pricePerLiter: 860, cashCollected: 869100, posAmount: 250700, shortageResolutions: [{ type: "debt", amount: 108360, liters: 126, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 3000, liters: 3.49, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2549275.61, closingReading: 2551685.79, pricePerLiter: 860, cashCollected: 532600, posAmount: 1428161.80, shortageResolutions: [{ type: "debt", amount: 111800, liters: 130, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-004-A", product: "PMS", openingReading: 65902.18, closingReading: 66667.18, pricePerLiter: 860, cashCollected: 156200, posAmount: 501650 },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 226291.14, closingReading: 226724.61, pricePerLiter: 860, cashCollected: 57100, posAmount: 315633 },
        { attendant: "Goodness", pumpId: "PMP-006-A", product: "PMS", openingReading: 833547.61, closingReading: 834169.94, pricePerLiter: 860, cashCollected: 171100, posAmount: 306700, shortageResolutions: [{ type: "debt", amount: 57267, liters: 66.59, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 673592.39, closingReading: 674042.91, pricePerLiter: 860, cashCollected: 253100, posAmount: 133500 },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-02" }],
  },
  // PRICE CHANGE: PMS ₦860 → ₦950 on March 3
  {
    date: "2026-03-03",
    shifts: {
      morning: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2551685.79, closingReading: 2552109.17, pricePerLiter: 950, cashCollected: 56900, posAmount: 250314, shortageResolutions: [{ type: "debt", amount: 95000, liters: 100, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-A", product: "PMS", openingReading: 492559.64, closingReading: 493487.22, pricePerLiter: 950, cashCollected: 27500, posAmount: 108024.50, shortageResolutions: [{ type: "debt", amount: 745674, liters: 784.92, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 226724.64, closingReading: 226943.60, pricePerLiter: 950, cashCollected: 84800, posAmount: 123036 },
        { attendant: "Ogochukwu", pumpId: "PMP-005-A", product: "PMS", openingReading: 1280003.73, closingReading: 1280421.74, pricePerLiter: 950, cashCollected: 200200, posAmount: 196762 },
        { attendant: "Favour", pumpId: "PMP-006-B", product: "PMS", openingReading: 792466.35, closingReading: 792675.27, pricePerLiter: 950, cashCollected: 162250, posAmount: 36000 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 217556.99, closingReading: 217663.60, pricePerLiter: 1200, cashCollected: 7950, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 120000, liters: 100, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 474784.85, closingReading: 474834.85, pricePerLiter: 1200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 60000, liters: 50, purpose: "Official use" }] },
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2552109.17, closingReading: 2554520.69, pricePerLiter: 950, cashCollected: 601800, posAmount: 1479706, shortageResolutions: [{ type: "debt", amount: 180500, liters: 190, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 28500, liters: 30, purpose: "Official use" }] },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 493487.22, closingReading: 496536.78, pricePerLiter: 950, cashCollected: 822630, posAmount: 2006777, shortageResolutions: [{ type: "debt", amount: 67250, liters: 70.79, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 226943.60, closingReading: 227781.18, pricePerLiter: 950, cashCollected: 485000, posAmount: 258161, shortageResolutions: [{ type: "debt", amount: 50350, liters: 53, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1280421.74, closingReading: 1280746.07, pricePerLiter: 950, cashCollected: 94400, posAmount: 118600, shortageResolutions: [{ type: "debt", amount: 95000, liters: 100, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-005-B", product: "PMS", openingReading: 792675.27, closingReading: 793810.50, pricePerLiter: 950, cashCollected: 496450, posAmount: 581056 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 217663.60, closingReading: 217688.37, pricePerLiter: 1300, cashCollected: 32200, posAmount: 0 },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 474834.85, closingReading: 474854.08, pricePerLiter: 1300, cashCollected: 25000, posAmount: 0 },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-03" }],
  },
  // PRICE CHANGE: PMS ₦950 → ₦960 on March 4; AGO ₦1300 continues
  {
    date: "2026-03-04",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2554520.71, closingReading: 2556247.14, pricePerLiter: 960, cashCollected: 585700, posAmount: 838500, shortageResolutions: [{ type: "debt", amount: 118377.60, liters: 123.31, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 80409.60, liters: 83.76, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 28800, liters: 30, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 4800, liters: 5, reason: "Priming" }] },
        { attendant: "Favour", pumpId: "PMP-003-A", product: "PMS", openingReading: 496536.80, closingReading: 500569.32, pricePerLiter: 960, cashCollected: 908270, posAmount: 2130282.80, shortageResolutions: [{ type: "debt", amount: 832694.40, liters: 867.39, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 227781.18, closingReading: 228859.74, pricePerLiter: 960, cashCollected: 869850, posAmount: 164758 },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 834170.00, closingReading: 835692.95, pricePerLiter: 960, cashCollected: 495250, posAmount: 868441, shortageResolutions: [{ type: "debt", amount: 57600, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 5760, liters: 6, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 34560, liters: 36, purpose: "Official use" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-006-B", product: "PMS", openingReading: 674042.91, closingReading: 675421.31, pricePerLiter: 960, cashCollected: 850750, posAmount: 426700, shortageResolutions: [{ type: "debt", amount: 44092.80, liters: 45.93, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2556247.14, closingReading: 2558353.34, pricePerLiter: 960, cashCollected: 388050, posAmount: 1571133, shortageResolutions: [{ type: "debt", amount: 62400, liters: 65, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 500569.32, closingReading: 503164.84, pricePerLiter: 960, cashCollected: 625500, posAmount: 1865271 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 228859.74, closingReading: 229944.05, pricePerLiter: 960, cashCollected: 647250, posAmount: 391854 },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1280746.14, closingReading: 1280987.24, pricePerLiter: 960, cashCollected: 62100, posAmount: 111600, shortageResolutions: [{ type: "debt", amount: 57600, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-B", product: "PMS", openingReading: 793810.50, closingReading: 794872.66, pricePerLiter: 960, cashCollected: 702950, posAmount: 314900 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 675421.34, closingReading: 675472.47, pricePerLiter: 960, cashCollected: 38900, posAmount: 10000 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 217688.37, closingReading: 218361.90, pricePerLiter: 1300, cashCollected: 410000, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 426543, liters: 328.11, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 39000, liters: 30, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-04" }],
  },
  {
    date: "2026-03-05",
    shifts: {
      morning: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2558353.34, closingReading: 2561748.33, pricePerLiter: 960, cashCollected: 1214500, posAmount: 1728697, shortageResolutions: [{ type: "debt", amount: 240000, liters: 250, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 9600, liters: 10, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 65808, liters: 68.55, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-004-A", product: "PMS", openingReading: 66667.26, closingReading: 67828.53, pricePerLiter: 960, cashCollected: 407850, posAmount: 706550 },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1280987.26, closingReading: 1284544.88, pricePerLiter: 960, cashCollected: 1513750, posAmount: 1681880, shortageResolutions: [{ type: "debt", amount: 38400, liters: 40, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 180960, liters: 188.50, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 229944.05, closingReading: 230724.10, pricePerLiter: 960, cashCollected: 410780, posAmount: 317354, shortageResolutions: [{ type: "return to tank", amount: 20092.80, liters: 20.93, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 675472.47, closingReading: 676275.91, pricePerLiter: 960, cashCollected: 604700, posAmount: 165000 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-A", product: "PMS", openingReading: 835692.98, closingReading: 835963.66, pricePerLiter: 960, cashCollected: 163630, posAmount: 96000 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-B", product: "PMS", openingReading: 20524.86, closingReading: 20531.77, pricePerLiter: 960, cashCollected: 6600, posAmount: 0 },
      ],
      afternoon: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2561748.33, closingReading: 2561925.34, pricePerLiter: 960, cashCollected: 46950, posAmount: 58750, shortageResolutions: [{ type: "debt", amount: 64166.40, liters: 66.84, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 67828.53, closingReading: 67876.33, pricePerLiter: 960, cashCollected: 19300, posAmount: 26600 },
        { attendant: "Goodness", pumpId: "PMP-005-A", product: "PMS", openingReading: 1284544.88, closingReading: 1285436.57, pricePerLiter: 960, cashCollected: 44500, posAmount: 811522.40 },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 230724.10, closingReading: 230776.40, pricePerLiter: 960, cashCollected: 23700, posAmount: 26300 },
        { attendant: "Miracle", pumpId: "PMP-005-B", product: "PMS", openingReading: 794872.66, closingReading: 795106.18, pricePerLiter: 960, cashCollected: 164000, posAmount: 60000 },
        { attendant: "Joy", pumpId: "PMP-005-B", product: "PMS", openingReading: 795106.18, closingReading: 795204.44, pricePerLiter: 960, cashCollected: 11620, posAmount: 81650 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 218361.90, closingReading: 219034.87, pricePerLiter: 1300, cashCollected: 1800, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 678200, liters: 521.69, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 130000, liters: 100, purpose: "Official use" }, { type: "official use", amount: 65000, liters: 50, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-05" }],
  },
  // PRICE CHANGE: PMS ₦960 → ₦1050 on March 6 afternoon; AGO ₦1300 → ₦1500
  {
    date: "2026-03-06",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2561965.39, closingReading: 2564844.27, pricePerLiter: 960, cashCollected: 987200, posAmount: 1734434, shortageResolutions: [{ type: "debt", amount: 36969.60, liters: 38.51, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 4800, liters: 5, reason: "Priming" }] },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 503164.88, closingReading: 503528.63, pricePerLiter: 960, cashCollected: 62050, posAmount: 97000, shortageResolutions: [{ type: "debt", amount: 187200, liters: 195, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 2918.40, liters: 3.04, reason: "Priming" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 230776.40, closingReading: 230987.71, pricePerLiter: 960, cashCollected: 57900, posAmount: 144900 },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 67876.35, closingReading: 69015.33, pricePerLiter: 960, cashCollected: 194200, posAmount: 893128.40, shortageResolutions: [{ type: "debt", amount: 5760, liters: 6, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-004-B", product: "PMS", openingReading: 20531.77, closingReading: 21284.74, pricePerLiter: 960, cashCollected: 248400, posAmount: 473800 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-A", product: "PMS", openingReading: 835963.65, closingReading: 837220.47, pricePerLiter: 960, cashCollected: 487850, posAmount: 650853, shortageResolutions: [{ type: "debt", amount: 67200, liters: 70, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-006-B", product: "PMS", openingReading: 676275.91, closingReading: 676892.85, pricePerLiter: 960, cashCollected: 484900, posAmount: 70300, shortageResolutions: [{ type: "debt", amount: 34560, liters: 36, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 1920, liters: 2, reason: "Priming" }] },
      ],
      afternoon: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2564844.27, closingReading: 2564882.71, pricePerLiter: 1050, cashCollected: 18800, posAmount: 0, shortageResolutions: [{ type: "return to tank", amount: 21535.50, liters: 20.51, reason: "Priming" }] },
        { attendant: "Joy", pumpId: "PMP-003-A", product: "PMS", openingReading: 503528.63, closingReading: 503538.56, pricePerLiter: 1050, cashCollected: 900, posAmount: 0, shortageResolutions: [{ type: "return to tank", amount: 9418.50, liters: 8.97, reason: "Priming" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1285436.61, closingReading: 1287240.59, pricePerLiter: 1050, cashCollected: 540300, posAmount: 483571, shortageResolutions: [{ type: "debt", amount: 864612, liters: 823.44, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 5250, liters: 5, reason: "Priming" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 795204.44, closingReading: 795673.97, pricePerLiter: 1050, cashCollected: 228800, posAmount: 264000 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-B", product: "PMS", openingReading: 676892.83, closingReading: 676899.43, pricePerLiter: 1050, cashCollected: 1700, posAmount: 0, shortageResolutions: [{ type: "return to tank", amount: 5250, liters: 5, reason: "Priming" }] },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 219034.87, closingReading: 219104.86, pricePerLiter: 1500, cashCollected: 29900, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 75000, liters: 50, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 474854.08, closingReading: 474873.36, pricePerLiter: 1500, cashCollected: 29000, posAmount: 0 },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-06" }],
  },
];