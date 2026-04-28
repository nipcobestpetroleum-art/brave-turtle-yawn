import { DailyReport } from "../../types/sales";

export const march2026c: DailyReport[] = [
  // PRICE CHANGE: PMS ₦1200 → ₦1300 on March 13; AGO ₦1750
  {
    date: "2026-03-13",
    shifts: {
      morning: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2586940.83, closingReading: 2588591.34, pricePerLiter: 1200, cashCollected: 446700, posAmount: 1339420, shortageResolutions: [{ type: "debt", amount: 186000, liters: 155, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 8000, liters: 6.67, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 237503.90, closingReading: 238749.89, pricePerLiter: 1200, cashCollected: 924300, posAmount: 444840, shortageResolutions: [{ type: "debt", amount: 118920, liters: 99.10, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 6000, liters: 5, reason: "Priming" }] },
        { attendant: "Joy", pumpId: "PMP-004-A", product: "PMS", openingReading: 79549.11, closingReading: 81041.70, pricePerLiter: 1200, cashCollected: 929350, posAmount: 752900, shortageResolutions: [{ type: "debt", amount: 72000, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 36000, liters: 30, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-006-A", product: "PMS", openingReading: 842643.36, closingReading: 844060.36, pricePerLiter: 1200, cashCollected: 754300, posAmount: 885104, shortageResolutions: [{ type: "debt", amount: 60000, liters: 50, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 680613.45, closingReading: 681477.34, pricePerLiter: 1200, cashCollected: 727950, posAmount: 163200, shortageResolutions: [{ type: "debt", amount: 120000, liters: 100, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 24000, liters: 20, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Favour", pumpId: "PMP-002-A", product: "PMS", openingReading: 2588591.34, closingReading: 2588772.56, pricePerLiter: 1300, cashCollected: 34500, posAmount: 122580, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 238749.89, closingReading: 238936.52, pricePerLiter: 1300, cashCollected: 55100, posAmount: 89000, shortageResolutions: [{ type: "debt", amount: 91000, liters: 70, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 7200, liters: 5.54, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 81041.70, closingReading: 81201.71, pricePerLiter: 1300, cashCollected: 140600, posAmount: 67400 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-A", product: "PMS", openingReading: 844060.36, closingReading: 844084.98, pricePerLiter: 1300, cashCollected: 32000, posAmount: 0 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 681477.34, closingReading: 681574.18, pricePerLiter: 1300, cashCollected: 87350, posAmount: 38300 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 477062.76, closingReading: 477928.83, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 1515500, liters: 866, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 221307.10, closingReading: 223565.81, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 3781365, liters: 2160.78, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 38500, liters: 22, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 133000, liters: 76, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-13" }],
  },
  {
    date: "2026-03-14",
    shifts: {
      morning: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2588772.57, closingReading: 2589578.34, pricePerLiter: 1300, cashCollected: 163250, posAmount: 418000, shortageResolutions: [{ type: "debt", amount: 416000, liters: 320, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 50000, liters: 38.46, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 81201.74, closingReading: 81757.76, pricePerLiter: 1300, cashCollected: 172200, posAmount: 472400, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-004-B", product: "PMS", openingReading: 24291.15, closingReading: 24621.54, pricePerLiter: 1300, cashCollected: 105900, posAmount: 323500 },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1301842.09, closingReading: 1302424.61, pricePerLiter: 1300, cashCollected: 285300, posAmount: 470311 },
        { attendant: "Joy", pumpId: "PMP-005-B", product: "PMS", openingReading: 801748.93, closingReading: 802178.83, pricePerLiter: 1300, cashCollected: 440950, posAmount: 117157 },
      ],
      afternoon: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2589578.34, closingReading: 2590368.62, pricePerLiter: 1300, cashCollected: 416500, posAmount: 610698 },
        { attendant: "N/A", pumpId: "PMP-004-A", product: "PMS", openingReading: 81757.76, closingReading: 82692.85, pricePerLiter: 1300, cashCollected: 164600, posAmount: 731458, shortageResolutions: [{ type: "debt", amount: 275000, liters: 211.54, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 44000, liters: 33.85, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-004-B", product: "PMS", openingReading: 24621.54, closingReading: 25257.72, pricePerLiter: 1300, cashCollected: 570000, posAmount: 256073 },
        { attendant: "Favour", pumpId: "PMP-005-A", product: "PMS", openingReading: 1302424.61, closingReading: 1303352.76, pricePerLiter: 1300, cashCollected: 258230, posAmount: 818400, shortageResolutions: [{ type: "debt", amount: 130000, liters: 100, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 802178.83, closingReading: 802969.89, pricePerLiter: 1300, cashCollected: 505000, posAmount: 522150 },
      ],
      night: [
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1303352.77, closingReading: 1304953.07, pricePerLiter: 1300, cashCollected: 691300, posAmount: 1246088, shortageResolutions: [{ type: "debt", amount: 143000, liters: 110, debtor: "Unknown", reason: "Debt" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-14" }],
  },
  {
    date: "2026-03-16",
    shifts: {
      morning: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2590368.64, closingReading: 2593157.32, pricePerLiter: 1300, cashCollected: 941150, posAmount: 2267655, shortageResolutions: [{ type: "debt", amount: 260000, liters: 200, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 156000, liters: 120, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-004-A", product: "PMS", openingReading: 82692.88, closingReading: 84927.92, pricePerLiter: 1300, cashCollected: 930800, posAmount: 1852171, shortageResolutions: [{ type: "debt", amount: 65000, liters: 50, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 49400, liters: 38, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-004-B", product: "PMS", openingReading: 25257.72, closingReading: 26207.05, pricePerLiter: 1300, cashCollected: 823200, posAmount: 247309, shortageResolutions: [{ type: "debt", amount: 162700, liters: 125.15, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1304953.07, closingReading: 1308953.05, pricePerLiter: 1300, cashCollected: 2095050, posAmount: 3097993, shortageResolutions: [{ type: "return to tank", amount: 6500, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 681574.18, closingReading: 682444.09, pricePerLiter: 1300, cashCollected: 873400, posAmount: 256100 },
      ],
      afternoon: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2593157.32, closingReading: 2595017.07, pricePerLiter: 1300, cashCollected: 919400, posAmount: 1485150, shortageResolutions: [{ type: "debt", amount: 11700, liters: 9, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 84927.92, closingReading: 86151.57, pricePerLiter: 1300, cashCollected: 698850, posAmount: 891436 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-B", product: "PMS", openingReading: 26207.05, closingReading: 26357.16, pricePerLiter: 1300, cashCollected: 166200, posAmount: 28900 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 238936.52, closingReading: 239637.71, pricePerLiter: 1300, cashCollected: 666600, posAmount: 242800 },
        { attendant: "Ogochukwu", pumpId: "PMP-005-A", product: "PMS", openingReading: 1308953.05, closingReading: 1312644.83, pricePerLiter: 1300, cashCollected: 726300, posAmount: 2797270, shortageResolutions: [{ type: "debt", amount: 243191, liters: 187.07, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 993096, liters: 763.92, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 39000, liters: 30, purpose: "Official use" }] },
        { attendant: "Goodness", pumpId: "PMP-005-B", product: "PMS", openingReading: 802969.89, closingReading: 803841.61, pricePerLiter: 1300, cashCollected: 823000, posAmount: 309247 },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-16" }],
  },
  {
    date: "2026-03-17",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2595017.09, closingReading: 2596755.70, pricePerLiter: 1300, cashCollected: 597600, posAmount: 1498396, shortageResolutions: [{ type: "debt", amount: 156000, liters: 120, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 6500, liters: 5, reason: "Priming" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 239637.71, closingReading: 240719.45, pricePerLiter: 1300, cashCollected: 1032750, posAmount: 288658, shortageResolutions: [{ type: "official use", amount: 83512, liters: 64.24, purpose: "Official use" }] },
        { attendant: "Favour", pumpId: "PMP-004-A", product: "PMS", openingReading: 86151.58, closingReading: 88133.05, pricePerLiter: 1300, cashCollected: 1527550, posAmount: 968848, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 844085.25, closingReading: 845900.32, pricePerLiter: 1300, cashCollected: 1146100, posAmount: 1212393 },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 682444.09, closingReading: 683466.00, pricePerLiter: 1300, cashCollected: 1047220, posAmount: 277061 },
      ],
      afternoon: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2596755.70, closingReading: 2598229.45, pricePerLiter: 1300, cashCollected: 581000, posAmount: 1139472, shortageResolutions: [{ type: "debt", amount: 169000, liters: 130, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 26000, liters: 20, purpose: "Official use" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 240719.45, closingReading: 241562.05, pricePerLiter: 1300, cashCollected: 857250, posAmount: 236350 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-A", product: "PMS", openingReading: 845900.32, closingReading: 848260.25, pricePerLiter: 1300, cashCollected: 847310, posAmount: 2220358 },
        { attendant: "Chukwuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 683466.00, closingReading: 684340.39, pricePerLiter: 1300, cashCollected: 784400, posAmount: 228500, shortageResolutions: [{ type: "debt", amount: 52000, liters: 40, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 70005, liters: 53.85, debtor: "Unknown", reason: "Debt" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-17" }],
  },
  {
    date: "2026-03-18",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2598229.46, closingReading: 2599968.81, pricePerLiter: 1300, cashCollected: 604710, posAmount: 1441172, shortageResolutions: [{ type: "debt", amount: 149500, liters: 115, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 65000, liters: 50, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 241562.06, closingReading: 243001.56, pricePerLiter: 1300, cashCollected: 1014070, posAmount: 849475, shortageResolutions: [{ type: "debt", amount: 5000, liters: 3.85, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chizoba", pumpId: "PMP-004-A", product: "PMS", openingReading: 88133.06, closingReading: 88576.21, pricePerLiter: 1300, cashCollected: 271300, posAmount: 303900 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1312644.86, closingReading: 1315331.51, pricePerLiter: 1300, cashCollected: 1176450, posAmount: 1114066, shortageResolutions: [{ type: "debt", amount: 260000, liters: 200, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 915200, liters: 704, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 26000, liters: 20, purpose: "Official use" }] },
        { attendant: "Favour", pumpId: "PMP-005-B", product: "PMS", openingReading: 803841.61, closingReading: 804232.31, pricePerLiter: 1300, cashCollected: 364900, posAmount: 142500 },
      ],
      afternoon: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2599968.81, closingReading: 2601112.50, pricePerLiter: 1300, cashCollected: 248700, posAmount: 1237632 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 243001.56, closingReading: 243704.84, pricePerLiter: 1300, cashCollected: 760370, posAmount: 151350 },
        { attendant: "Joy", pumpId: "PMP-004-A", product: "PMS", openingReading: 88576.21, closingReading: 89974.64, pricePerLiter: 1300, cashCollected: 406800, posAmount: 1364366, shortageResolutions: [{ type: "debt", amount: 45500, liters: 35, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-005-A", product: "PMS", openingReading: 1315331.51, closingReading: 1316997.34, pricePerLiter: 1300, cashCollected: 974800, posAmount: 1119337, shortageResolutions: [{ type: "debt", amount: 71500, liters: 55, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-B", product: "PMS", openingReading: 804232.31, closingReading: 805142.06, pricePerLiter: 1300, cashCollected: 826000, posAmount: 355587 },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-18" }],
  },
  // PRICE CHANGE: PMS ₦1300 → ₦1280 on March 20; AGO ₦1750 → ₦1900
  {
    date: "2026-03-19",
    shifts: {
      morning: [
        { attendant: "Donald", pumpId: "PMP-002-A", product: "PMS", openingReading: 2601112.51, closingReading: 2602916.52, pricePerLiter: 1300, cashCollected: 831300, posAmount: 1367910, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 66300, liters: 51, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 243704.84, closingReading: 244372.73, pricePerLiter: 1300, cashCollected: 535450, posAmount: 282852, shortageResolutions: [{ type: "debt", amount: 39000, liters: 30, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 10000, liters: 7.69, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1316997.35, closingReading: 1320457.20, pricePerLiter: 1300, cashCollected: 1204700, posAmount: 3095700, shortageResolutions: [{ type: "debt", amount: 195000, liters: 150, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 805142.06, closingReading: 806370.96, pricePerLiter: 1300, cashCollected: 1096300, posAmount: 413400, shortageResolutions: [{ type: "debt", amount: 10400, liters: 8, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 76011, liters: 58.47, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2602916.52, closingReading: 2604327.83, pricePerLiter: 1300, cashCollected: 371700, posAmount: 1384558, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-A", product: "PMS", openingReading: 508960.61, closingReading: 510281.38, pricePerLiter: 1300, cashCollected: 421200, posAmount: 1054729, shortageResolutions: [{ type: "debt", amount: 241540, liters: 185.80, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 244372.73, closingReading: 245101.49, pricePerLiter: 1300, cashCollected: 567950, posAmount: 378515 },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1320457.20, closingReading: 1323341.78, pricePerLiter: 1300, cashCollected: 816000, posAmount: 1903088, shortageResolutions: [{ type: "debt", amount: 1030861, liters: 792.97, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-005-B", product: "PMS", openingReading: 806370.96, closingReading: 807174.88, pricePerLiter: 1300, cashCollected: 774200, posAmount: 268831 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 223565.81, closingReading: 223615.81, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 87500, liters: 50, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-19" }],
  },
];