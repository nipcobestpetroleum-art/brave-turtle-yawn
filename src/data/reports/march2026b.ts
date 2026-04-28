import { DailyReport } from "../../types/sales";

export const march2026b: DailyReport[] = [
  // PRICE CHANGE: PMS ₦1050 → ₦1080 on March 7; AGO ₦1500 continues
  {
    date: "2026-03-07",
    shifts: {
      morning: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2564882.73, closingReading: 2566048.29, pricePerLiter: 1080, cashCollected: 833600, posAmount: 319886, shortageResolutions: [{ type: "debt", amount: 54000, liters: 50, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 51418.80, liters: 47.61, purpose: "Official use" }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 503538.60, closingReading: 504186.20, pricePerLiter: 1080, cashCollected: 142300, posAmount: 513876.40, shortageResolutions: [{ type: "debt", amount: 43200, liters: 40, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 230987.74, closingReading: 231271.67, pricePerLiter: 1080, cashCollected: 119500, posAmount: 97250, shortageResolutions: [{ type: "official use", amount: 89607.60, liters: 82.97, purpose: "Official use" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 795673.97, closingReading: 795978.78, pricePerLiter: 1080, cashCollected: 210900, posAmount: 117963 },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1287240.59, closingReading: 1288382.79, pricePerLiter: 1050, cashCollected: 24400, posAmount: 318600, shortageResolutions: [{ type: "debt", amount: 157500, liters: 150, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 693552.50, liters: 660.53, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 5250, liters: 5, reason: "Priming" }] },
      ],
      afternoon: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2566048.29, closingReading: 2571002.49, pricePerLiter: 1080, cashCollected: 1474060, posAmount: 2984577, shortageResolutions: [{ type: "debt", amount: 64800, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 812656.80, liters: 752.46, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 12000, liters: 11.11, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-003-A", product: "PMS", openingReading: 504186.20, closingReading: 506722.71, pricePerLiter: 1080, cashCollected: 1049800, posAmount: 1646139, shortageResolutions: [{ type: "debt", amount: 43200, liters: 40, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 231271.67, closingReading: 232485.84, pricePerLiter: 1080, cashCollected: 890600, posAmount: 413400, shortageResolutions: [{ type: "return to tank", amount: 5400, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1288382.29, closingReading: 1289509.46, pricePerLiter: 1080, cashCollected: 487310, posAmount: 630454, shortageResolutions: [{ type: "debt", amount: 96649.20, liters: 89.49, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-B", product: "PMS", openingReading: 795978.78, closingReading: 797149.62, pricePerLiter: 1080, cashCollected: 860300, posAmount: 402675.60 },
      ],
      night: [
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1289509.46, closingReading: 1290033.91, pricePerLiter: 1100, cashCollected: 433200, posAmount: 77600, shortageResolutions: [{ type: "debt", amount: 66000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 219104.86, closingReading: 219457.76, pricePerLiter: 1500, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 398340, liters: 265.56, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 131010, liters: 87.34, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 474873.36, closingReading: 475593.17, pricePerLiter: 1500, cashCollected: 10700, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1050000, liters: 700, purpose: "Official use" }, { type: "official use", amount: 18990, liters: 12.66, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-07" }],
  },
  // PRICE CHANGE: PMS ₦1080 → ₦1100 → ₦1350 on March 9; AGO ₦1500 → ₦1750
  {
    date: "2026-03-09",
    shifts: {
      morning: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2571002.61, closingReading: 2573885.98, pricePerLiter: 1100, cashCollected: 1087600, posAmount: 1883540, shortageResolutions: [{ type: "debt", amount: 132000, liters: 120, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 66000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-004-A", product: "PMS", openingReading: 69015.47, closingReading: 71082.74, pricePerLiter: 1100, cashCollected: 525320, posAmount: 1681209, shortageResolutions: [{ type: "debt", amount: 66000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-004-B", product: "PMS", openingReading: 21289.71, closingReading: 22633.67, pricePerLiter: 1100, cashCollected: 562900, posAmount: 907950, shortageResolutions: [{ type: "return to tank", amount: 5500, liters: 5, reason: "Priming" }] },
        { attendant: "Goodness", pumpId: "PMP-005-A", product: "PMS", openingReading: 1290033.95, closingReading: 1290348.15, pricePerLiter: 1100, cashCollected: 69620, posAmount: 276000 },
        { attendant: "Esther", pumpId: "PMP-005-B", product: "PMS", openingReading: 797149.62, closingReading: 798526.31, pricePerLiter: 1100, cashCollected: 999050, posAmount: 359171, shortageResolutions: [{ type: "debt", amount: 38500, liters: 35, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 66000, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 5500, liters: 5, reason: "Priming" }, { type: "debt", amount: 34494, liters: 31.36, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-006-A", product: "PMS", openingReading: 837221.67, closingReading: 840502.08, pricePerLiter: 1100, cashCollected: 1019600, posAmount: 2410637, shortageResolutions: [{ type: "debt", amount: 178300, liters: 162.09, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2573885.98, closingReading: 2576225.81, pricePerLiter: 1350, cashCollected: 825500, posAmount: 2183881, shortageResolutions: [{ type: "debt", amount: 148500, liters: 110, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 71082.74, closingReading: 73115.16, pricePerLiter: 1350, cashCollected: 816700, posAmount: 1775190.50, shortageResolutions: [{ type: "debt", amount: 155250, liters: 115, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-004-B", product: "PMS", openingReading: 22633.67, closingReading: 23789.54, pricePerLiter: 1350, cashCollected: 1063700, posAmount: 424262, shortageResolutions: [{ type: "debt", amount: 64611, liters: 47.86, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 6750, liters: 5, reason: "Priming" }] },
        { attendant: "Favour", pumpId: "PMP-005-A", product: "PMS", openingReading: 1290348.15, closingReading: 1292626.42, pricePerLiter: 1350, cashCollected: 1471970, posAmount: 1586611, shortageResolutions: [{ type: "debt", amount: 8000, liters: 5.93, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 7209, liters: 5.34, reason: "Priming" }] },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 798526.31, closingReading: 799844.71, pricePerLiter: 1350, cashCollected: 1208910, posAmount: 566998 },
        { attendant: "Favour", pumpId: "PMP-006-A", product: "PMS", openingReading: 840502.08, closingReading: 840560.25, pricePerLiter: 1350, cashCollected: 78500, posAmount: 0 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 219457.76, closingReading: 219721.84, pricePerLiter: 1500, cashCollected: 140000, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 106140, liters: 70.76, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 150000, liters: 100, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 219721.84, closingReading: 220009.63, pricePerLiter: 1750, cashCollected: 390442, posAmount: 60000, shortageResolutions: [{ type: "official use", amount: 53182.50, liters: 30.39, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 475593.17, closingReading: 475612.76, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 34317.50, liters: 19.61, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-09" }],
  },
  // PRICE CHANGE: PMS ₦1350 → ₦1400 on March 10; AGO ₦1750
  {
    date: "2026-03-10",
    shifts: {
      morning: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2576225.85, closingReading: 2577732.63, pricePerLiter: 1350, cashCollected: 162050, posAmount: 1495675, shortageResolutions: [{ type: "debt", amount: 229500, liters: 170, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 40500, liters: 30, purpose: "Official use" }, { type: "official use", amount: 27000, liters: 20, purpose: "Official use" }, { type: "official use", amount: 27742.50, liters: 20.55, purpose: "Official use" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 232485.84, closingReading: 233259.09, pricePerLiter: 1350, cashCollected: 726500, posAmount: 270520.50, shortageResolutions: [{ type: "debt", amount: 45900, liters: 34, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 73115.16, closingReading: 74313.01, pricePerLiter: 1350, cashCollected: 645000, posAmount: 971923 },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1292626.46, closingReading: 1294511.34, pricePerLiter: 1350, cashCollected: 1232950, posAmount: 1311583 },
        { attendant: "Joy", pumpId: "PMP-006-B", product: "PMS", openingReading: 677516.45, closingReading: 677912.50, pricePerLiter: 1350, cashCollected: 106000, posAmount: 350250, shortageResolutions: [{ type: "debt", amount: 77692.50, liters: 57.55, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2577732.63, closingReading: 2578786.31, pricePerLiter: 1400, cashCollected: 439600, posAmount: 909000, shortageResolutions: [{ type: "debt", amount: 126000, liters: 90, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 233259.09, closingReading: 233751.36, pricePerLiter: 1400, cashCollected: 577300, posAmount: 110656 },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 74313.01, closingReading: 74975.18, pricePerLiter: 1400, cashCollected: 381200, posAmount: 540592, shortageResolutions: [{ type: "debt", amount: 5000, liters: 3.57, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1294511.34, closingReading: 1295516.57, pricePerLiter: 1400, cashCollected: 397300, posAmount: 1021848 },
        { attendant: "Joy", pumpId: "PMP-006-B", product: "PMS", openingReading: 676899.54, closingReading: 677516.45, pricePerLiter: 1400, cashCollected: 857860, posAmount: 0 },
      ],
      night: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2578786.31, closingReading: 2580717.49, pricePerLiter: 1400, cashCollected: 738700, posAmount: 1889950, shortageResolutions: [{ type: "debt", amount: 70000, liters: 50, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-003-B", product: "PMS", openingReading: 233751.36, closingReading: 234230.30, pricePerLiter: 1400, cashCollected: 257650, posAmount: 411650 },
        { attendant: "Ogochukwu", pumpId: "PMP-004-A", product: "PMS", openingReading: 74975.18, closingReading: 76655.19, pricePerLiter: 1400, cashCollected: 752640, posAmount: 1423421, shortageResolutions: [{ type: "debt", amount: 175000, liters: 125, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1295516.57, closingReading: 1297348.63, pricePerLiter: 1400, cashCollected: 1248330, posAmount: 1316656 },
        { attendant: "Miracle", pumpId: "PMP-005-B", product: "PMS", openingReading: 799844.72, closingReading: 800814.01, pricePerLiter: 1400, cashCollected: 794000, posAmount: 504848, shortageResolutions: [{ type: "debt", amount: 56000, liters: 40, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-004-B", product: "PMS", openingReading: 23789.54, closingReading: 24040.44, pricePerLiter: 1400, cashCollected: 351250, posAmount: 0 },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 677912.50, closingReading: 677915.94, pricePerLiter: 1400, cashCollected: 4900, posAmount: 0 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 220009.63, closingReading: 220352.23, pricePerLiter: 1750, cashCollected: 512050, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 87500, liters: 50, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 475612.76, closingReading: 476362.76, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1312500, liters: 700, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-10" }],
  },
  {
    date: "2026-03-11",
    shifts: {
      morning: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2580717.50, closingReading: 2582270.30, pricePerLiter: 1400, cashCollected: 898990, posAmount: 1148702, shortageResolutions: [{ type: "debt", amount: 70000, liters: 50, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 55664, liters: 39.76, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-A", product: "PMS", openingReading: 506723.02, closingReading: 507470.40, pricePerLiter: 1400, cashCollected: 494400, posAmount: 551740 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 234230.31, closingReading: 235258.47, pricePerLiter: 1400, cashCollected: 963300, posAmount: 469734, shortageResolutions: [{ type: "debt", amount: 1600, liters: 1.14, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-A", product: "PMS", openingReading: 76655.20, closingReading: 77577.29, pricePerLiter: 1400, cashCollected: 416720, posAmount: 705930, shortageResolutions: [{ type: "debt", amount: 168000, liters: 120, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 840560.29, closingReading: 842626.51, pricePerLiter: 1400, cashCollected: 1089500, posAmount: 1634778, shortageResolutions: [{ type: "debt", amount: 168000, liters: 120, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-006-B", product: "PMS", openingReading: 677915.94, closingReading: 678915.35, pricePerLiter: 1400, cashCollected: 1142700, posAmount: 255500 },
      ],
      afternoon: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2582270.30, closingReading: 2583802.30, pricePerLiter: 1400, cashCollected: 510700, posAmount: 1423208, shortageResolutions: [{ type: "debt", amount: 168266, liters: 120.19, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 42000, liters: 30, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 507470.40, closingReading: 508959.50, pricePerLiter: 1400, cashCollected: 504250, posAmount: 1535340, shortageResolutions: [{ type: "debt", amount: 42000, liters: 30, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 235258.47, closingReading: 236007.23, pricePerLiter: 1400, cashCollected: 794050, posAmount: 252592 },
        { attendant: "Favour", pumpId: "PMP-005-A", product: "PMS", openingReading: 1297348.67, closingReading: 1298431.30, pricePerLiter: 1400, cashCollected: 380850, posAmount: 1133000 },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 800814.01, closingReading: 801748.93, pricePerLiter: 1400, cashCollected: 901900, posAmount: 329800, shortageResolutions: [{ type: "debt", amount: 76230, liters: 54.45, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 842626.51, closingReading: 842643.34, pricePerLiter: 1400, cashCollected: 23600, posAmount: 0 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-B", product: "PMS", openingReading: 678915.35, closingReading: 678954.40, pricePerLiter: 1400, cashCollected: 46670, posAmount: 8000 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 220352.23, closingReading: 220923.10, pricePerLiter: 1750, cashCollected: 63500, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 760532.50, liters: 434.59, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 175000, liters: 100, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-11" }],
  },
  // PRICE CHANGE: PMS ₦1400 → ₦1390 → ₦1200 on March 12; AGO ₦1750
  {
    date: "2026-03-12",
    shifts: {
      morning: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2583802.35, closingReading: 2584214.57, pricePerLiter: 1400, cashCollected: 211700, posAmount: 326000, shortageResolutions: [{ type: "debt", amount: 39200, liters: 28, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 236007.23, closingReading: 236407.16, pricePerLiter: 1400, cashCollected: 333300, posAmount: 225804 },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 77577.33, closingReading: 77943.47, pricePerLiter: 1400, cashCollected: 200950, posAmount: 281200, shortageResolutions: [{ type: "debt", amount: 30000, liters: 21.43, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1298431.35, closingReading: 1299082.05, pricePerLiter: 1400, cashCollected: 612900, posAmount: 278900 },
        { attendant: "Chukwuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 678954.40, closingReading: 679416.14, pricePerLiter: 1400, cashCollected: 365600, posAmount: 243700, shortageResolutions: [{ type: "debt", amount: 36400, liters: 26, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2584214.57, closingReading: 2584951.89, pricePerLiter: 1390, cashCollected: 259800, posAmount: 584224, shortageResolutions: [{ type: "debt", amount: 166800, liters: 120, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 13900, liters: 10, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 236407.16, closingReading: 236819.57, pricePerLiter: 1390, cashCollected: 312350, posAmount: 259310 },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 77943.47, closingReading: 78340.49, pricePerLiter: 1390, cashCollected: 197335, posAmount: 354200 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1299082.05, closingReading: 1299848.48, pricePerLiter: 1390, cashCollected: 471500, posAmount: 593820 },
        { attendant: "Chukwuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 679416.14, closingReading: 679849.09, pricePerLiter: 1390, cashCollected: 503900, posAmount: 82500, shortageResolutions: [{ type: "debt", amount: 13900, liters: 10, debtor: "Unknown", reason: "Debt" }] },
      ],
      night: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2584951.89, closingReading: 2586940.81, pricePerLiter: 1200, cashCollected: 593115, posAmount: 1665283, shortageResolutions: [{ type: "debt", amount: 127200, liters: 106, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 236819.57, closingReading: 237503.90, pricePerLiter: 1200, cashCollected: 634850, posAmount: 185500 },
        { attendant: "Chidera", pumpId: "PMP-004-B", product: "PMS", openingReading: 24040.45, closingReading: 24291.12, pricePerLiter: 1200, cashCollected: 184400, posAmount: 116172 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-A", product: "PMS", openingReading: 78340.49, closingReading: 79549.10, pricePerLiter: 1200, cashCollected: 553150, posAmount: 896600 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1299848.48, closingReading: 1301842.05, pricePerLiter: 1200, cashCollected: 379600, posAmount: 1007837, shortageResolutions: [{ type: "debt", amount: 70764, liters: 58.97, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 933744, liters: 778.12, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-006-B", product: "PMS", openingReading: 679849.09, closingReading: 680613.45, pricePerLiter: 1200, cashCollected: 720250, posAmount: 186972.89 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 220923.10, closingReading: 221307.10, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 87500, liters: 50, purpose: "Official use" }, { type: "debt", amount: 584500, liters: 334, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 476362.76, closingReading: 477062.76, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1225000, liters: 700, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-12" }],
  },
];