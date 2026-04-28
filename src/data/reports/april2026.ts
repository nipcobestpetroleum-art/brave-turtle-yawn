import { DailyReport } from "../../types/sales";

export const april2026: DailyReport[] = [
  {
    date: "2026-04-01",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2633808.77, closingReading: 2635120.45, pricePerLiter: 1350, cashCollected: 450000, posAmount: 1320768 },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 252370.94, closingReading: 253105.20, pricePerLiter: 1350, cashCollected: 680000, posAmount: 311251 },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 93372.12, closingReading: 94108.33, pricePerLiter: 1350, cashCollected: 320000, posAmount: 673883.50 }
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2635120.45, closingReading: 2636450.12, pricePerLiter: 1350, cashCollected: 512000, posAmount: 1283054.50 }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-02",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2636450.12, closingReading: 2637890.55, pricePerLiter: 1350, cashCollected: 620000, posAmount: 1324580.50 }
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
          attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2637890.55, closingReading: 2639120.33, pricePerLiter: 1320, cashCollected: 410000, posAmount: 1213309.60,
          shortageResolutions: [{ type: "debt", amount: 13200, liters: 10, debtor: "Unknown", reason: "Price change adjustment" }]
        }
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-04-04",
    shifts: {
      morning: [
        { 
          attendant: "Chidimma Okoro", pumpId: "PMP-004-A", product: "PMS", openingReading: 95897.66, closingReading: 96118.37, pricePerLiter: 1320, cashCollected: 4000, posAmount: 221312,
          shortageResolutions: [
            { type: "debt", amount: 52800, liters: 40 },
            { type: "official use", amount: 13200, liters: 10 }
          ]
        },
        { 
          attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 226428.71, closingReading: 226708.61, pricePerLiter: 2100, cashCollected: 0, posAmount: 62790,
          shortageResolutions: [
            { type: "official use", amount: 105000, liters: 50 },
            { type: "debt", amount: 420000, liters: 200 }
          ]
        },
        { 
          attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 96118.37, closingReading: 96633.42, pricePerLiter: 1320, cashCollected: 11300, posAmount: 236684,
          shortageResolutions: [
            { type: "debt", amount: 62185.20, liters: 47.11 },
            { type: "official use", amount: 52800, liters: 40 },
            { type: "debt", amount: 316800, liters: 240 }
          ]
        }
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-04-06",
    shifts: {
      morning: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2643562.32, closingReading: 2645921.25, pricePerLiter: 1300, cashCollected: 848600, posAmount: 1764180, shortageResolutions: [{ type: "official use", amount: 40001, liters: 30.77 }] },
        { attendant: "Chizoba", pumpId: "PMP-004-A", product: "PMS", openingReading: 96633.44, closingReading: 97508.26, pricePerLiter: 1300, cashCollected: 410750, posAmount: 725525 },
        { attendant: "Cyndy", pumpId: "PMP-004-B", product: "PMS", openingReading: 30507.67, closingReading: 31621.73, pricePerLiter: 1300, cashCollected: 826300, posAmount: 621162 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1360392.41, closingReading: 1365966.96, pricePerLiter: 1300, cashCollected: 794050, posAmount: 4311451, shortageResolutions: [{ type: "debt", amount: 33800, liters: 26 }, { type: "debt", amount: 902278, liters: 694.06 }, { type: "debt", amount: 1207557, liters: 928.89 }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 695064.61, closingReading: 696095.56, pricePerLiter: 1300, cashCollected: 797650, posAmount: 504300, shortageResolutions: [{ type: "debt", amount: 26000, liters: 20 }, { type: "debt", amount: 10000, liters: 7.69 }] }
      ],
      afternoon: [
        { attendant: "Ebuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2645921.25, closingReading: 2647426.16, pricePerLiter: 1300, cashCollected: 499500, posAmount: 1384722, shortageResolutions: [{ type: "debt", amount: 68300, liters: 52.54 }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1365966.96, closingReading: 1367863.25, pricePerLiter: 1300, cashCollected: 803800, posAmount: 1543500, shortageResolutions: [{ type: "debt", amount: 117000, liters: 90 }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 696095.56, closingReading: 696984.13, pricePerLiter: 1300, cashCollected: 749300, posAmount: 404515 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 226708.61, closingReading: 227240.97, pricePerLiter: 2100, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1117956, liters: 532.36 }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 480098.49, closingReading: 481416.07, pricePerLiter: 2100, cashCollected: 2000, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 562044, liters: 267.64 }, { type: "debt", amount: 2202984, liters: 1049.04 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-08",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2651018.82, closingReading: 2652984.64, pricePerLiter: 1300, cashCollected: 875550, posAmount: 1579957, shortageResolutions: [{ type: "debt", amount: 86814, liters: 66.78 }, { type: "debt", amount: 11700, liters: 9 }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 254593.59, closingReading: 255145.23, pricePerLiter: 1300, cashCollected: 326100, posAmount: 291380, shortageResolutions: [{ type: "debt", amount: 45500, liters: 35 }, { type: "debt", amount: 53500, liters: 41.15 }] },
        { attendant: "Miracle", pumpId: "PMP-004-B", product: "PMS", openingReading: 31621.73, closingReading: 32401.74, pricePerLiter: 1300, cashCollected: 446100, posAmount: 318400, shortageResolutions: [{ type: "debt", amount: 249100, liters: 191.62 }] },
        { attendant: "Goodness", pumpId: "PMP-006-B", product: "PMS", openingReading: 698868.24, closingReading: 700092.98, pricePerLiter: 1300, cashCollected: 467000, posAmount: 1045200, shortageResolutions: [{ type: "debt", amount: 79014, liters: 60.78 }] },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 516824.70, closingReading: 519532.63, pricePerLiter: 1300, cashCollected: 1285400, posAmount: 2233953 }
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2652984.64, closingReading: 2654561.43, pricePerLiter: 1300, cashCollected: 448850, posAmount: 1496562, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60 }, { type: "official use", amount: 26000, liters: 20 }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 255145.23, closingReading: 255848.58, pricePerLiter: 1300, cashCollected: 728800, posAmount: 184642 },
        { attendant: "Cyndy", pumpId: "PMP-006-A", product: "PMS", openingReading: 860874.72, closingReading: 862025.24, pricePerLiter: 1300, cashCollected: 197800, posAmount: 1292321 },
        { attendant: "Ebuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 700092.98, closingReading: 700792.27, pricePerLiter: 1300, cashCollected: 553490, posAmount: 353017 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 227345.73, closingReading: 227852.57, pricePerLiter: 2200, cashCollected: 7000, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 792000, liters: 360 }, { type: "official use", amount: 316008, liters: 143.64 }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 482301.07, closingReading: 482305.98, pricePerLiter: 2200, cashCollected: 10800, posAmount: 0 }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-09",
    shifts: {
      morning: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2654561.45, closingReading: 2656754.16, pricePerLiter: 1300, cashCollected: 556000, posAmount: 2125068, shortageResolutions: [{ type: "debt", amount: 65000, liters: 50 }, { type: "debt", amount: 91000, liters: 70 }, { type: "debt", amount: 13000, liters: 10 }] },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 519532.65, closingReading: 521310.32, pricePerLiter: 1300, cashCollected: 774800, posAmount: 1535270 },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1374163.80, closingReading: 1378036.07, pricePerLiter: 1300, cashCollected: 800720, posAmount: 3068811, shortageResolutions: [{ type: "debt", amount: 13000, liters: 10 }, { type: "debt", amount: 1138423, liters: 875.71 }, { type: "return to tank", amount: 6500, liters: 5 }] },
        { attendant: "Cyndy", pumpId: "PMP-006-A", product: "PMS", openingReading: 700792.27, closingReading: 701978.59, pricePerLiter: 1300, cashCollected: 1065200, posAmount: 372846, shortageResolutions: [{ type: "debt", amount: 13000, liters: 10 }, { type: "debt", amount: 88620, liters: 68.17 }] }
      ],
      afternoon: [
        { attendant: "Ebuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2656754.16, closingReading: 2656859.13, pricePerLiter: 1300, cashCollected: 136460, posAmount: 0 },
        { attendant: "Ebuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 521310.32, closingReading: 522510.15, pricePerLiter: 1300, cashCollected: 408350, posAmount: 984320, shortageResolutions: [{ type: "debt", amount: 169000, liters: 130 }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 255848.59, closingReading: 256490.50, pricePerLiter: 1300, cashCollected: 509400, posAmount: 320979 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1378036.07, closingReading: 1380228.15, pricePerLiter: 1300, cashCollected: 563190, posAmount: 1974133.90, shortageResolutions: [{ type: "debt", amount: 65000, liters: 50 }, { type: "debt", amount: 246900, liters: 189.92 }] },
        { attendant: "Joy", pumpId: "PMP-006-A", product: "PMS", openingReading: 862025.25, closingReading: 862687.75, pricePerLiter: 1300, cashCollected: 261950, posAmount: 599066 },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 701978.59, closingReading: 702733.06, pricePerLiter: 1300, cashCollected: 638000, posAmount: 120889, shortageResolutions: [{ type: "debt", amount: 221000, liters: 170 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-10",
    shifts: {
      morning: [
        { attendant: "Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2656861.13, closingReading: 2658665.54, pricePerLiter: 1300, cashCollected: 785400, posAmount: 1366062, shortageResolutions: [{ type: "debt", amount: 193479, liters: 148.83 }] },
        { attendant: "Goodness", pumpId: "PMP-003-B", product: "PMS", openingReading: 256490.52, closingReading: 257590.41, pricePerLiter: 1300, cashCollected: 1013120, posAmount: 415827 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1380230.15, closingReading: 1382870.21, pricePerLiter: 1300, cashCollected: 1527847, posAmount: 1809700, shortageResolutions: [{ type: "debt", amount: 65000, liters: 50 }, { type: "debt", amount: 29900, liters: 23 }] },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 702733.06, closingReading: 703690.09, pricePerLiter: 1300, cashCollected: 867650, posAmount: 375286 }
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2658665.54, closingReading: 2660998.24, pricePerLiter: 1300, cashCollected: 666250, posAmount: 2209802, shortageResolutions: [{ type: "debt", amount: 156000, liters: 120 }] },
        { attendant: "Miracle", pumpId: "PMP-003-A", product: "PMS", openingReading: 522511.24, closingReading: 522512.24, pricePerLiter: 1300, cashCollected: 1300, posAmount: 0 },
        { attendant: "Amaka", pumpId: "PMP-006-A", product: "PMS", openingReading: 863316.81, closingReading: 864954.21, pricePerLiter: 1300, cashCollected: 24000, posAmount: 832497, shortageResolutions: [{ type: "debt", amount: 338000, liters: 260 }, { type: "debt", amount: 934557, liters: 718.89 }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 703690.09, closingReading: 704588.57, pricePerLiter: 1300, cashCollected: 708150, posAmount: 458870 },
        { attendant: "Ebuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 257590.41, closingReading: 258582.37, pricePerLiter: 1300, cashCollected: 759860, posAmount: 524000 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 482380.98, closingReading: 483280.96, pricePerLiter: 2200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1650000, liters: 750 }, { type: "official use", amount: 330000, liters: 150 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-11",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2661000.25, closingReading: 2663108.10, pricePerLiter: 1300, cashCollected: 902450, posAmount: 1749816, shortageResolutions: [{ type: "debt", amount: 88068, liters: 67.74 }] },
        { attendant: "Cyndy", pumpId: "PMP-003-B", product: "PMS", openingReading: 258582.39, closingReading: 259462.05, pricePerLiter: 1300, cashCollected: 860800, posAmount: 281541 },
        { attendant: "Goodness", pumpId: "PMP-005-A", product: "PMS", openingReading: 1382872.24, closingReading: 1385779.24, pricePerLiter: 1300, cashCollected: 1403700, posAmount: 2297427, shortageResolutions: [{ type: "debt", amount: 78000, liters: 60 }] },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 704588.57, closingReading: 705586.28, pricePerLiter: 1300, cashCollected: 652550, posAmount: 629152, shortageResolutions: [{ type: "debt", amount: 13000, liters: 10 }] }
      ],
      afternoon: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2663108.10, closingReading: 2664687.99, pricePerLiter: 1300, cashCollected: 528400, posAmount: 1421279, shortageResolutions: [{ type: "debt", amount: 104000, liters: 80 }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 259462.05, closingReading: 260620.58, pricePerLiter: 1300, cashCollected: 772300, posAmount: 732836 },
        { attendant: "Ebuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1385779.24, closingReading: 1387411.65, pricePerLiter: 1300, cashCollected: 219950, posAmount: 1839333, shortageResolutions: [{ type: "debt", amount: 65000, liters: 50 }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 705586.28, closingReading: 706597.00, pricePerLiter: 1300, cashCollected: 833200, posAmount: 439909, shortageResolutions: [{ type: "debt", amount: 40000, liters: 30.77 }] },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 483280.96, closingReading: 483330.50, pricePerLiter: 2200, cashCollected: 109000, posAmount: 0 }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-12",
    shifts: {
      morning: [
        { attendant: "Oga Mike", pumpId: "PMP-002-A", product: "PMS", openingReading: 2664691.07, closingReading: 2665292.34, pricePerLiter: 1300, cashCollected: 0, posAmount: 781650 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 260620.58, closingReading: 261293.57, pricePerLiter: 1300, cashCollected: 584000, posAmount: 277139, shortageResolutions: [{ type: "debt", amount: 13000, liters: 10 }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 97520.43, closingReading: 98457.96, pricePerLiter: 1300, cashCollected: 421650, posAmount: 561000, shortageResolutions: [{ type: "debt", amount: 62400, liters: 48 }, { type: "debt", amount: 156000, liters: 120 }, { type: "return to tank", amount: 14300, liters: 11 }, { type: "debt", amount: 3000, liters: 2.31 }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1387412.69, closingReading: 1389925.09, pricePerLiter: 1300, cashCollected: 234500, posAmount: 1882095, shortageResolutions: [{ type: "debt", amount: 1149694, liters: 884.38 }] },
        { attendant: "Ebuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 816830.19, closingReading: 817435.45, pricePerLiter: 1300, cashCollected: 675000, posAmount: 111800 }
      ],
      afternoon: [
        { attendant: "Oga Mike", pumpId: "PMP-002-A", product: "PMS", openingReading: 2665292.34, closingReading: 2665927.67, pricePerLiter: 1280, cashCollected: 663300, posAmount: 111233, shortageResolutions: [{ type: "debt", amount: 38400, liters: 30 }] },
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2665927.67, closingReading: 2667827.47, pricePerLiter: 1280, cashCollected: 421650, posAmount: 1906016.80, shortageResolutions: [{ type: "debt", amount: 20000, liters: 15.63 }, { type: "debt", amount: 83200, liters: 65 }] },
        { attendant: "Oyimo", pumpId: "PMP-003-A", product: "PMS", openingReading: 522514.36, closingReading: 524124.56, pricePerLiter: 1280, cashCollected: 387400, posAmount: 1669810.40 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 261293.57, closingReading: 261293.57, pricePerLiter: 1280, cashCollected: 314400, posAmount: 247951 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 261733.76, closingReading: 262640.76, pricePerLiter: 1280, cashCollected: 623750, posAmount: 509784.80, shortageResolutions: [{ type: "debt", amount: 28160, liters: 22 }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 98457.96, closingReading: 98901.30, pricePerLiter: 1280, cashCollected: 85600, posAmount: 182310, shortageResolutions: [{ type: "debt", amount: 81920, liters: 64 }, { type: "debt", amount: 217600, liters: 170 }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1389925.09, closingReading: 1390807.37, pricePerLiter: 1280, cashCollected: 353800, posAmount: 658246, shortageResolutions: [{ type: "debt", amount: 89600, liters: 70 }, { type: "debt", amount: 15070, liters: 11.77 }, { type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1390807.37, closingReading: 1393208.47, pricePerLiter: 1280, cashCollected: 348500, posAmount: 1423880, shortageResolutions: [{ type: "debt", amount: 263475.20, liters: 205.84 }, { type: "debt", amount: 1037401.60, liters: 810.47 }] },
        { attendant: "Goodness", pumpId: "PMP-005-B", product: "PMS", openingReading: 817725.10, closingReading: 818494.10, pricePerLiter: 1280, cashCollected: 686800, posAmount: 296532 },
        { attendant: "Ebuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 817435.45, closingReading: 817725.10, pricePerLiter: 1280, cashCollected: 112900, posAmount: 253200, shortageResolutions: [{ type: "return to tank", amount: 960, liters: 0.75 }] },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 227865.01, closingReading: 228085.06, pricePerLiter: 2200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 484000, liters: 220 }] },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 483330.58, closingReading: 483780.50, pricePerLiter: 2200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 836000, liters: 380 }, { type: "official use", amount: 154000, liters: 70 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-14",
    shifts: {
      morning: [
        { attendant: "Ebuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 524125.56, closingReading: 524961.52, pricePerLiter: 1280, cashCollected: 307200, posAmount: 762700 },
        { attendant: "Emem Ekpo", pumpId: "PMP-004-A", product: "PMS", openingReading: 98902.31, closingReading: 99878.11, pricePerLiter: 1280, cashCollected: 365500, posAmount: 883576 },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 262640.77, closingReading: 263557.36, pricePerLiter: 1280, cashCollected: 934900, posAmount: 236960 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-A", product: "PMS", openingReading: 864962.82, closingReading: 867289.60, pricePerLiter: 1280, cashCollected: 1204200, posAmount: 1414842.20, shortageResolutions: [{ type: "debt", amount: 256000, liters: 200 }, { type: "official use", amount: 103104, liters: 80.55 }] },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 706599.69, closingReading: 707661.86, pricePerLiter: 1280, cashCollected: 876600, posAmount: 476025, shortageResolutions: [{ type: "debt", amount: 5000, liters: 3.91 }] }
      ],
      afternoon: [
        { attendant: "Big joy", pumpId: "PMP-003-A", product: "PMS", openingReading: 524961.62, closingReading: 525134.13, pricePerLiter: 1280, cashCollected: 100700, posAmount: 120000 },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 263557.36, closingReading: 264300.20, pricePerLiter: 1280, cashCollected: 612150, posAmount: 242537, shortageResolutions: [{ type: "debt", amount: 44800, liters: 35 }, { type: "debt", amount: 48640, liters: 38 }] },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 99878.11, closingReading: 101442.37, pricePerLiter: 1280, cashCollected: 588870, posAmount: 1323346, shortageResolutions: [{ type: "debt", amount: 76800, liters: 60 }, { type: "official use", amount: 12800, liters: 10 }] },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 867289.60, closingReading: 869018.90, pricePerLiter: 1280, cashCollected: 758770, posAmount: 1451247 },
        { attendant: "Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 707661.86, closingReading: 708326.10, pricePerLiter: 1280, cashCollected: 374335, posAmount: 474900 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 483780.50, closingReading: 483835.05, pricePerLiter: 2200, cashCollected: 10000, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 110000, liters: 50 }] },
        { attendant: "Victory", pumpId: "PMP-002-A", product: "PMS", openingReading: 2670728.87, closingReading: 2671542.67, pricePerLiter: 1280, cashCollected: 458800, posAmount: 580600, shortageResolutions: [{ type: "return to tank", amount: 1280, liters: 1 }] },
        { attendant: "Big joy", pumpId: "PMP-003-A", product: "PMS", openingReading: 526209.57, closingReading: 526928.67, pricePerLiter: 1280, cashCollected: 266100, posAmount: 653948 },
        { attendant: "Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 265218.68, closingReading: 265825.58, pricePerLiter: 1280, cashCollected: 192770, posAmount: 582500 },
        { attendant: "Joy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1393208.76, closingReading: 1394477.40, pricePerLiter: 1280, cashCollected: 709600, posAmount: 899863, shortageResolutions: [{ type: "debt", amount: 11520, liters: 9 }, { type: "return to tank", amount: 217.60, liters: 0.17 }] },
        { attendant: "Esther", pumpId: "PMP-005-B", product: "PMS", openingReading: 818494.42, closingReading: 819248.54, pricePerLiter: 1280, cashCollected: 760170, posAmount: 203061.60, shortageResolutions: [{ type: "return to tank", amount: 230.40, liters: 0.18 }] },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 869018.91, closingReading: 872405.15, pricePerLiter: 1280, cashCollected: 1128700, posAmount: 3115001, shortageResolutions: [{ type: "debt", amount: 90000, liters: 70.31 }] },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 483835.05, closingReading: 484585.87, pricePerLiter: 2200, cashCollected: 111850, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1540000, liters: 700 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-15",
    shifts: {
      morning: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2667828.69, closingReading: 2670728.87, pricePerLiter: 1280, cashCollected: 850450, posAmount: 2638178, shortageResolutions: [{ type: "debt", amount: 140800, liters: 110 }, { type: "debt", amount: 50040, liters: 39.09 }, { type: "debt", amount: 32000, liters: 25 }] },
        { attendant: "Emem", pumpId: "PMP-003-A", product: "PMS", openingReading: 525135.13, closingReading: 526209.57, pricePerLiter: 1280, cashCollected: 391500, posAmount: 791300, shortageResolutions: [{ type: "debt", amount: 153600, liters: 120 }, { type: "official use", amount: 38400, liters: 30 }] },
        { attendant: "Ebuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 264300.20, closingReading: 265218.68, pricePerLiter: 1280, cashCollected: 927500, posAmount: 243424 },
        { attendant: "Chidimma", pumpId: "PMP-006-B", product: "PMS", openingReading: 708326.11, closingReading: 709637.28, pricePerLiter: 1280, cashCollected: 1153410, posAmount: 445320, shortageResolutions: [{ type: "debt", amount: 76800, liters: 60 }] }
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-04-16",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2671543.68, closingReading: 2673004.01, pricePerLiter: 1280, cashCollected: 206750, posAmount: 1572162, shortageResolutions: [{ type: "debt", amount: 76800, liters: 60 }, { type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Miracle", pumpId: "PMP-003-A", product: "PMS", openingReading: 526929.67, closingReading: 528056.54, pricePerLiter: 1280, cashCollected: 308400, posAmount: 997779.20, shortageResolutions: [{ type: "debt", amount: 121600, liters: 95 }, { type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 265825.58, closingReading: 267022.52, pricePerLiter: 1280, cashCollected: 543050, posAmount: 888220, shortageResolutions: [{ type: "debt", amount: 99840, liters: 78 }] },
        { attendant: "Ebuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1394477.41, closingReading: 1397014.81, pricePerLiter: 1280, cashCollected: 770650, posAmount: 2474554 },
        { attendant: "Emem Ekpo", pumpId: "PMP-005-B", product: "PMS", openingReading: 819248.55, closingReading: 820141.87, pricePerLiter: 1280, cashCollected: 890150, posAmount: 250296 }
      ],
      afternoon: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2673004.01, closingReading: 2674638.63, pricePerLiter: 1280, cashCollected: 730650, posAmount: 1193612.80, shortageResolutions: [{ type: "debt", amount: 166400, liters: 130 }] },
        { attendant: "Victory", pumpId: "PMP-003-B", product: "PMS", openingReading: 267022.52, closingReading: 267095.84, pricePerLiter: 1280, cashCollected: 84600, posAmount: 8000 },
        { attendant: "Cyndy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1397014.81, closingReading: 1400499.75, pricePerLiter: 1280, cashCollected: 559100, posAmount: 2843649.20, shortageResolutions: [{ type: "debt", amount: 942822.40, liters: 736.58 }, { type: "debt", amount: 115200, liters: 90 }] },
        { attendant: "Chidimma", pumpId: "PMP-005-B", product: "PMS", openingReading: 820141.87, closingReading: 820996.71, pricePerLiter: 1280, cashCollected: 811950, posAmount: 189808, shortageResolutions: [{ type: "debt", amount: 89600, liters: 70 }] },
        { attendant: "Amaka", pumpId: "PMP-006-A", product: "PMS", openingReading: 872405.18, closingReading: 873007.08, pricePerLiter: 1280, cashCollected: 272250, posAmount: 325080, shortageResolutions: [{ type: "debt", amount: 172800, liters: 135 }] },
        { attendant: "Victory", pumpId: "PMP-006-B", product: "PMS", openingReading: 709637.28, closingReading: 710099.37, pricePerLiter: 1280, cashCollected: 484500, posAmount: 106000 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228085.06, closingReading: 228169.60, pricePerLiter: 2200, cashCollected: 186000, posAmount: 0 },
        { attendant: "Miracle", pumpId: "PMP-001-B", product: "PMS", openingReading: 484585.87, closingReading: 486350.88, pricePerLiter: 2200, cashCollected: 55000, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 110000, liters: 50 }, { type: "official use", amount: 110000, liters: 50 }, { type: "debt", amount: 3608000, liters: 1640 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-17",
    shifts: {
      morning: [
        { attendant: "Emem", pumpId: "PMP-001-A", product: "PMS", openingReading: 2674646.66, closingReading: 2676015.81, pricePerLiter: 1280, cashCollected: 504570, posAmount: 1221031.60, shortageResolutions: [{ type: "return to tank", amount: 26355.20, liters: 20.59 }] },
        { attendant: "Cyndy", pumpId: "PMP-003-A", product: "PMS", openingReading: 528059.55, closingReading: 529567.92, pricePerLiter: 1280, cashCollected: 230500, posAmount: 1464541.40, shortageResolutions: [{ type: "debt", amount: 61440, liters: 48 }, { type: "debt", amount: 148000, liters: 115.63 }, { type: "return to tank", amount: 25817.60, liters: 20.17 }] },
        { attendant: "Chidimma", pumpId: "PMP-003-B", product: "PMS", openingReading: 267095.84, closingReading: 268005.33, pricePerLiter: 1280, cashCollected: 772500, posAmount: 337735.60, shortageResolutions: [{ type: "return to tank", amount: 52940.80, liters: 41.36 }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1400515.76, closingReading: 1403264.62, pricePerLiter: 1280, cashCollected: 1532050, posAmount: 1960321.60, shortageResolutions: [{ type: "return to tank", amount: 26240, liters: 20.50 }] },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 873009.09, closingReading: 873630.70, pricePerLiter: 1280, cashCollected: 139500, posAmount: 630000, shortageResolutions: [{ type: "return to tank", amount: 26150.40, liters: 20.43 }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 710099.37, closingReading: 711474.24, pricePerLiter: 1280, cashCollected: 1379110, posAmount: 324350, shortageResolutions: [{ type: "return to tank", amount: 52160, liters: 40.75 }] }
      ],
      afternoon: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2676015.81, closingReading: 2677723.37, pricePerLiter: 1280, cashCollected: 658900, posAmount: 1447973, shortageResolutions: [{ type: "debt", amount: 25600, liters: 20 }, { type: "debt", amount: 51200, liters: 40 }] },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 268005.33, closingReading: 268910.60, pricePerLiter: 1280, cashCollected: 774190, posAmount: 384001.60 },
        { attendant: "Joy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1403264.62, closingReading: 1405255.69, pricePerLiter: 1280, cashCollected: 1393960, posAmount: 1153674 },
        { attendant: "Victory", pumpId: "PMP-005-B", product: "PMS", openingReading: 821017.19, closingReading: 821710.18, pricePerLiter: 1280, cashCollected: 664010, posAmount: 221700 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228169.60, closingReading: 228219.60, pricePerLiter: 2200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 110000, liters: 50 }] },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 486350.88, closingReading: 486400.88, pricePerLiter: 2200, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 110000, liters: 50 }] },
        { attendant: "Victory", pumpId: "PMP-002-A", product: "PMS", openingReading: 2679692.62, closingReading: 2681801.83, pricePerLiter: 1280, cashCollected: 744600, posAmount: 1800355, shortageResolutions: [{ type: "debt", amount: 153600, liters: 120 }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 270251.86, closingReading: 271186.00, pricePerLiter: 1280, cashCollected: 691300, posAmount: 412248.80, shortageResolutions: [{ type: "debt", amount: 64000, liters: 50 }, { type: "debt", amount: 25600, liters: 20 }] },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1408420.30, closingReading: 1412052.90, pricePerLiter: 1280, cashCollected: 872950, posAmount: 2587607.60, shortageResolutions: [{ type: "debt", amount: 933873.60, liters: 729.59 }, { type: "debt", amount: 256000, liters: 200 }] },
        { attendant: "Goodness", pumpId: "PMP-005-B", product: "PMS", openingReading: 822887.00, closingReading: 823814.52, pricePerLiter: 1280, cashCollected: 836700, posAmount: 349234 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 486400.88, closingReading: 487232.88, pricePerLiter: 2200, cashCollected: 4400, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1826000, liters: 830 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-18",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2677724.38, closingReading: 2679692.62, pricePerLiter: 1280, cashCollected: 910800, posAmount: 1567812, shortageResolutions: [{ type: "debt", amount: 5000, liters: 3.91 }, { type: "debt", amount: 35000, liters: 27.34 }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 268910.60, closingReading: 270251.86, pricePerLiter: 1280, cashCollected: 782050, posAmount: 868679.60, shortageResolutions: [{ type: "official use", amount: 64972.80, liters: 50.76 }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1405255.69, closingReading: 1408420.30, pricePerLiter: 1280, cashCollected: 837500, posAmount: 2939815, shortageResolutions: [{ type: "debt", amount: 209000, liters: 163.28 }, { type: "debt", amount: 64000, liters: 50 }] },
        { attendant: "Ebuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 821710.18, closingReading: 822887.00, pricePerLiter: 1280, cashCollected: 1046700, posAmount: 290400, shortageResolutions: [{ type: "debt", amount: 153600, liters: 120 }, { type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 873632.70, closingReading: 873674.35, pricePerLiter: 1280, cashCollected: 38000, posAmount: 15000 },
        { attendant: "Ebuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 711474.24, closingReading: 711535.94, pricePerLiter: 1280, cashCollected: 78500, posAmount: 500 }
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-04-20",
    shifts: {
      morning: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2681801.99, closingReading: 2685325.52, pricePerLiter: 1280, cashCollected: 958200, posAmount: 3021135, shortageResolutions: [{ type: "debt", amount: 460800, liters: 360 }, { type: "debt", amount: 69120, liters: 54 }] },
        { attendant: "Cyndy", pumpId: "PMP-003-B", product: "PMS", openingReading: 271714.79, closingReading: 272047.79, pricePerLiter: 1280, cashCollected: 213100, posAmount: 212250 },
        { attendant: "Victory", pumpId: "PMP-003-B", product: "PMS", openingReading: 271186.00, closingReading: 271714.79, pricePerLiter: 1280, cashCollected: 221180, posAmount: 454960 },
        { attendant: "Joy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1412184.14, closingReading: 1414159.96, pricePerLiter: 1280, cashCollected: 917800, posAmount: 1533167.80, shortageResolutions: [{ type: "return to tank", amount: 1280, liters: 1 }, { type: "debt", amount: 76800, liters: 60 }] },
        { attendant: "Esther", pumpId: "PMP-005-B", product: "PMS", openingReading: 823814.57, closingReading: 824689.38, pricePerLiter: 1280, cashCollected: 619250, posAmount: 485812, shortageResolutions: [{ type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Joy", pumpId: "PMP-006-A", product: "PMS", openingReading: 873676.37, closingReading: 874280.27, pricePerLiter: 1280, cashCollected: 177630, posAmount: 595580 },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 711535.94, closingReading: 711858.66, pricePerLiter: 1280, cashCollected: 342150, posAmount: 70000 }
      ],
      afternoon: [
        { attendant: "Ebuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2685325.52, closingReading: 2687148.47, pricePerLiter: 1280, cashCollected: 755600, posAmount: 1487516, shortageResolutions: [{ type: "debt", amount: 89600, liters: 70 }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 272047.79, closingReading: 273199.12, pricePerLiter: 1280, cashCollected: 956750, posAmount: 290660, shortageResolutions: [{ type: "debt", amount: 224000, liters: 175 }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1414159.96, closingReading: 1416661.76, pricePerLiter: 1280, cashCollected: 1251310, posAmount: 1948937 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228219.60, closingReading: 228224.60, pricePerLiter: 2150, cashCollected: 10750, posAmount: 0 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 487232.88, closingReading: 487419.35, pricePerLiter: 2150, cashCollected: 183760, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 107500, liters: 50 }, { type: "official use", amount: 107500, liters: 50 }, { type: "return to tank", amount: 2150, liters: 1 }] },
        { attendant: "Emem", pumpId: "PMP-005-A", product: "PMS", openingReading: 824689.38, closingReading: 825446.42, pricePerLiter: 1280, cashCollected: 220320, posAmount: 746950 }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-21",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2687182.70, closingReading: 2688412.87, pricePerLiter: 1280, cashCollected: 608600, posAmount: 733802.40, shortageResolutions: [{ type: "debt", amount: 160000, liters: 125 }, { type: "debt", amount: 71680, liters: 56 }] },
        { attendant: "Chinwendu", pumpId: "PMP-003-A", product: "PMS", openingReading: 529619.10, closingReading: 530759.58, pricePerLiter: 1280, cashCollected: 468700, posAmount: 952189.60, shortageResolutions: [{ type: "debt", amount: 38400, liters: 30 }] },
        { attendant: "Goodness", pumpId: "PMP-003-B", product: "PMS", openingReading: 273225.13, closingReading: 274280.79, pricePerLiter: 1280, cashCollected: 904410, posAmount: 405960, shortageResolutions: [{ type: "debt", amount: 38400, liters: 30 }] },
        { attendant: "Cyndy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1416682.31, closingReading: 1419489.51, pricePerLiter: 1280, cashCollected: 1435600, posAmount: 2138935, shortageResolutions: [{ type: "debt", amount: 18000, liters: 14.06 }] },
        { attendant: "Joy", pumpId: "PMP-005-B", product: "PMS", openingReading: 825507.86, closingReading: 826520.04, pricePerLiter: 1280, cashCollected: 795200, posAmount: 498550 },
        { attendant: "Victory", pumpId: "PMP-006-A", product: "PMS", openingReading: 874354.89, closingReading: 874792.15, pricePerLiter: 1280, cashCollected: 254350, posAmount: 301500, shortageResolutions: [{ type: "return to tank", amount: 3840, liters: 3 }] }
      ],
      afternoon: [
        { attendant: "Emem Ekpo", pumpId: "PMP-002-A", product: "PMS", openingReading: 2688412.87, closingReading: 2689763.04, pricePerLiter: 1280, cashCollected: 461500, posAmount: 1266203.80 },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 530759.58, closingReading: 531536.25, pricePerLiter: 1280, cashCollected: 484900, posAmount: 507508 },
        { attendant: "Ebuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 274280.79, closingReading: 274845.22, pricePerLiter: 1280, cashCollected: 604000, posAmount: 117220 },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 101579.45, closingReading: 101969.13, pricePerLiter: 1280, cashCollected: 122700, posAmount: 376000 },
        { attendant: "Ebuka", pumpId: "PMP-004-A", product: "PMS", openingReading: 32523.36, closingReading: 32727.46, pricePerLiter: 1280, cashCollected: 32600, posAmount: 228636 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1419489.51, closingReading: 1422362.20, pricePerLiter: 1280, cashCollected: 811720, posAmount: 2004779.80, shortageResolutions: [{ type: "debt", amount: 256000, liters: 200 }, { type: "debt", amount: 604108.80, liters: 471.96 }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 826520.04, closingReading: 827298.34, pricePerLiter: 1280, cashCollected: 587300, posAmount: 407582.40 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228224.60, closingReading: 228234.97, pricePerLiter: 2150, cashCollected: 22300, posAmount: 0 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228234.97, closingReading: 228243.66, pricePerLiter: 1950, cashCollected: 16945, posAmount: 0 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 487519.35, closingReading: 487634.47, pricePerLiter: 1950, cashCollected: 125055, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 97500, liters: 50 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-22",
    shifts: {
      morning: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2689763.05, closingReading: 2692344.82, pricePerLiter: 1280, cashCollected: 408050, posAmount: 1621980, shortageResolutions: [{ type: "debt", amount: 64000, liters: 50 }, { type: "debt", amount: 1209254, liters: 944.73 }] },
        { attendant: "Chiwendu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2818554.93, closingReading: 2819209.34, pricePerLiter: 1280, cashCollected: 551220, posAmount: 233541.19, shortageResolutions: [{ type: "debt", amount: 448000, liters: 350 }] },
        { attendant: "Cyndy", pumpId: "PMP-003-A", product: "PMS", openingReading: 531536.25, closingReading: 532134.74, pricePerLiter: 1280, cashCollected: 82150, posAmount: 683560 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 274845.23, closingReading: 275183.93, pricePerLiter: 1280, cashCollected: 312100, posAmount: 106432, shortageResolutions: [{ type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Chiwendu", pumpId: "PMP-004-B", product: "PMS", openingReading: 32727.50, closingReading: 32993.39, pricePerLiter: 1280, cashCollected: 146900, posAmount: 191593.60 },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 1422362.20, closingReading: 1425578.37, pricePerLiter: 1280, cashCollected: 699600, posAmount: 3138253.80, shortageResolutions: [{ type: "debt", amount: 204800, liters: 160 }, { type: "debt", amount: 74060, liters: 57.86 }] },
        { attendant: "Victory", pumpId: "PMP-006-B", product: "PMS", openingReading: 827298.35, closingReading: 828172.46, pricePerLiter: 1280, cashCollected: 913900, posAmount: 194040 }
      ],
      afternoon: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2692344.82, closingReading: 2692871.61, pricePerLiter: 1280, cashCollected: 96920, posAmount: 397800, shortageResolutions: [{ type: "debt", amount: 76800, liters: 60 }, { type: "official use", amount: 102400, liters: 80 }] },
        { attendant: "Emem Ekpo", pumpId: "PMP-002-B", product: "PMS", openingReading: 2819209.34, closingReading: 2819446.17, pricePerLiter: 1280, cashCollected: 303100, posAmount: 0 },
        { attendant: "Ebuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 532135.72, closingReading: 532727.51, pricePerLiter: 1280, cashCollected: 548180, posAmount: 127800, shortageResolutions: [{ type: "debt", amount: 76800, liters: 60 }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 275183.40, closingReading: 275627.97, pricePerLiter: 1280, cashCollected: 333500, posAmount: 233088.80 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-A", product: "PMS", openingReading: 101969.16, closingReading: 102751.82, pricePerLiter: 1280, cashCollected: 256500, posAmount: 629845, shortageResolutions: [{ type: "debt", amount: 115200, liters: 90 }] },
        { attendant: "Emem Ekpo", pumpId: "PMP-004-B", product: "PMS", openingReading: 32993.39, closingReading: 33354.44, pricePerLiter: 1280, cashCollected: 370100, posAmount: 89600 },
        { attendant: "Ebuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1425578.37, closingReading: 1426650.24, pricePerLiter: 1280, cashCollected: 18540, posAmount: 1352171.20, shortageResolutions: [{ type: "return to tank", amount: 1280, liters: 1 }] },
        { attendant: "Okoye", pumpId: "PMP-005-A", product: "PMS", openingReading: 1426650.24, closingReading: 1426775.31, pricePerLiter: 1280, cashCollected: 75400, posAmount: 84600 },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 828172.46, closingReading: 828794.34, pricePerLiter: 1280, cashCollected: 484700, posAmount: 310116 },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228242.66, closingReading: 228400.73, pricePerLiter: 1950, cashCollected: 308200, posAmount: 0 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 487634.47, closingReading: 487718.70, pricePerLiter: 1950, cashCollected: 101900, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 62400, liters: 32 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-23",
    shifts: {
      morning: [
        { attendant: "Victory", pumpId: "PMP-002-A", product: "PMS", openingReading: 2692887.71, closingReading: 2694225.46, pricePerLiter: 1280, cashCollected: 568400, posAmount: 975412, shortageResolutions: [{ type: "debt", amount: 117280, liters: 91.63 }, { type: "debt", amount: 51200, liters: 40 }] },
        { attendant: "Esther", pumpId: "PMP-002-B", product: "PMS", openingReading: 2819446.18, closingReading: 2823551.63, pricePerLiter: 1280, cashCollected: 679100, posAmount: 4539555.60, shortageResolutions: [{ type: "debt", amount: 36320, liters: 28.38 }] },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 102751.83, closingReading: 104419.45, pricePerLiter: 1280, cashCollected: 568300, posAmount: 1445534, shortageResolutions: [{ type: "debt", amount: 24320, liters: 19 }, { type: "debt", amount: 96000, liters: 75 }] },
        { attendant: "Chiwendu", pumpId: "PMP-005-A", product: "PMS", openingReading: 1426775.10, closingReading: 1428275.64, pricePerLiter: 1280, cashCollected: 890720, posAmount: 1010059.40, shortageResolutions: [{ type: "debt", amount: 19200, liters: 15 }] },
        { attendant: "Cyndy", pumpId: "PMP-006-B", product: "PMS", openingReading: 711906.88, closingReading: 712954.28, pricePerLiter: 1280, cashCollected: 926950, posAmount: 411675 },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 275627.48, closingReading: 276556.11, pricePerLiter: 1280, cashCollected: 714820, posAmount: 471323 }
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2694225.46, closingReading: 2695523.32, pricePerLiter: 1280, cashCollected: 222800, posAmount: 1436584 },
        { attendant: "Emem", pumpId: "PMP-002-B", product: "PMS", openingReading: 2823551.63, closingReading: 2824999.97, pricePerLiter: 1280, cashCollected: 483400, posAmount: 1370410.80 },
        { attendant: "Chidimma", pumpId: "PMP-003-B", product: "PMS", openingReading: 276556.11, closingReading: 277308.79, pricePerLiter: 1280, cashCollected: 636800, posAmount: 322880 },
        { attendant: "Ebuka", pumpId: "PMP-004-A", product: "PMS", openingReading: 104419.45, closingReading: 105365.12, pricePerLiter: 1200, cashCollected: 285470, posAmount: 835200, shortageResolutions: [{ type: "debt", amount: 89600, liters: 74.67 }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 712954.28, closingReading: 713834.25, pricePerLiter: 1280, cashCollected: 595550, posAmount: 388050, shortageResolutions: [{ type: "debt", amount: 140800, liters: 110 }] },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 228400.73, closingReading: 228429.73, pricePerLiter: 1950, cashCollected: 56550, posAmount: 0 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 487718.70, closingReading: 488607.36, pricePerLiter: 1950, cashCollected: 211850, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1521000, liters: 780 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-24",
    shifts: {
      morning: [
        { attendant: "Cyndy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2695523.32, closingReading: 2697183.32, pricePerLiter: 1280, cashCollected: 405200, posAmount: 1655144, shortageResolutions: [{ type: "debt", amount: 25600, liters: 20 }, { type: "official use", amount: 38400, liters: 30 }] },
        { attendant: "Goodness", pumpId: "PMP-002-B", product: "PMS", openingReading: 2824999.97, closingReading: 2825731.01, pricePerLiter: 1280, cashCollected: 583750, posAmount: 351070 },
        { attendant: "Victory", pumpId: "PMP-003-B", product: "PMS", openingReading: 277308.80, closingReading: 277514.19, pricePerLiter: 1280, cashCollected: 158350, posAmount: 102970, shortageResolutions: [{ type: "return to tank", amount: 1280, liters: 1 }] },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 105365.13, closingReading: 106899.79, pricePerLiter: 1280, cashCollected: 600500, posAmount: 1195743.80, shortageResolutions: [{ type: "debt", amount: 140800, liters: 110 }, { type: "debt", amount: 25600, liters: 20 }] },
        { attendant: "Joy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1428275.65, closingReading: 1430755.59, pricePerLiter: 1280, cashCollected: 593850, posAmount: 2485898.60, shortageResolutions: [{ type: "debt", amount: 76800, liters: 60 }] },
        { attendant: "Chiwendu", pumpId: "PMP-006-B", product: "PMS", openingReading: 713834.26, closingReading: 714829.14, pricePerLiter: 1280, cashCollected: 861200, posAmount: 408248.60 }
      ],
      afternoon: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2697183.32, closingReading: 2698161.27, pricePerLiter: 1280, cashCollected: 308400, posAmount: 779722.40, shortageResolutions: [{ type: "debt", amount: 140800, liters: 110 }, { type: "official use", amount: 16614.40, liters: 12.98 }, { type: "return to tank", amount: 2560, liters: 2 }] },
        { attendant: "Emem", pumpId: "PMP-004-A", product: "PMS", openingReading: 106899.79, closingReading: 107060.61, pricePerLiter: 1280, cashCollected: 109700, posAmount: 95000 },
        { attendant: "Chidera", pumpId: "PMP-004-B", product: "PMS", openingReading: 33354.49, closingReading: 33354.66, pricePerLiter: 1280, cashCollected: 200, posAmount: 0 },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 828794.52, closingReading: 829511.47, pricePerLiter: 1280, cashCollected: 565250, posAmount: 346086 },
        { attendant: "Emem Ekpo", pumpId: "PMP-006-A", product: "PMS", openingReading: 874792.29, closingReading: 875534.09, pricePerLiter: 1280, cashCollected: 274550, posAmount: 675061 },
        { attendant: "Ebuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 714829.14, closingReading: 715878.00, pricePerLiter: 1280, cashCollected: 692200, posAmount: 185604.80, shortageResolutions: [{ type: "debt", amount: 463360, liters: 362 }] },
        { attendant: "Miracle", pumpId: "AGO-001-A", product: "AGO", openingReading: 488607.36, closingReading: 488742.36, pricePerLiter: 1950, cashCollected: 39000, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 29250, liters: 15 }, { type: "official use", amount: 195000, liters: 100 }] },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 488742.36, closingReading: 488808.74, pricePerLiter: 2100, cashCollected: 97400, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 42000, liters: 20 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-25",
    shifts: {
      morning: [
        { attendant: "Chiwendu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2698161.27, closingReading: 2699225.60, pricePerLiter: 1280, cashCollected: 267700, posAmount: 1003720, shortageResolutions: [{ type: "debt", amount: 89600, liters: 70 }] },
        { attendant: "Goodness", pumpId: "PMP-003-A", product: "PMS", openingReading: 532729.59, closingReading: 534604.32, pricePerLiter: 1280, cashCollected: 325850, posAmount: 2074123 },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 277514.20, closingReading: 278093.03, pricePerLiter: 1280, cashCollected: 380600, posAmount: 344622.40, shortageResolutions: [{ type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Victory", pumpId: "PMP-005-A", product: "PMS", openingReading: 1433792.74, closingReading: 1434692.65, pricePerLiter: 1280, cashCollected: 383420, posAmount: 767503 },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 715878.00, closingReading: 716443.93, pricePerLiter: 1280, cashCollected: 497200, posAmount: 222400, shortageResolutions: [{ type: "debt", amount: 2560, liters: 2 }] }
      ],
      afternoon: [
        { attendant: "Ebuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2699225.60, closingReading: 2700635.46, pricePerLiter: 1280, cashCollected: 51450, posAmount: 1420373, shortageResolutions: [{ type: "debt", amount: 2068000, liters: 1615.63 }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 534604.32, closingReading: 535787.31, pricePerLiter: 1280, cashCollected: 490850, posAmount: 882173, shortageResolutions: [{ type: "debt", amount: 140800, liters: 110 }] },
        { attendant: "Joy", pumpId: "PMP-004-A", product: "PMS", openingReading: 107061.66, closingReading: 107258.12, pricePerLiter: 1280, cashCollected: 55800, posAmount: 195600 },
        { attendant: "Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 278093.03, closingReading: 278837.20, pricePerLiter: 1280, cashCollected: 648950, posAmount: 302620 },
        { attendant: "Ebuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1434692.65, closingReading: 1434922.44, pricePerLiter: 1280, cashCollected: 87250, posAmount: 204700 },
        { attendant: "Emem", pumpId: "PMP-005-A", product: "PMS", openingReading: 829511.48, closingReading: 829585.85, pricePerLiter: 1280, cashCollected: 89900, posAmount: 5000 },
        { attendant: "Chidera", pumpId: "PMP-006-A", product: "PMS", openingReading: 875534.10, closingReading: 878962.59, pricePerLiter: 1280, cashCollected: 1031500, posAmount: 2253124, shortageResolutions: [{ type: "debt", amount: 1097484.80, liters: 857.41 }, { type: "debt", amount: 6400, liters: 5 }] },
        { attendant: "Emem", pumpId: "PMP-006-B", product: "PMS", openingReading: 716443.93, closingReading: 716877.05, pricePerLiter: 1280, cashCollected: 423650, posAmount: 128700 },
        { attendant: "Miracle", pumpId: "AGO-001-B", product: "AGO", openingReading: 488808.74, closingReading: 488881.03, pricePerLiter: 2100, cashCollected: 63650, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 25200, liters: 12 }, { type: "official use", amount: 63000, liters: 30 }] }
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-04-27",
    shifts: {
      morning: [
        { attendant: "Emem", pumpId: "PMP-002-A", product: "PMS", openingReading: 2700535.46, closingReading: 2701570.22, pricePerLiter: 1280, cashCollected: 360500, posAmount: 690652.80, shortageResolutions: [{ type: "debt", amount: 153600, liters: 120 }, { type: "debt", amount: 55078.40, liters: 43.03 }, { type: "debt", amount: 51200, liters: 40 }, { type: "debt", amount: 12800, liters: 10 }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 535787.31, closingReading: 537444.31, pricePerLiter: 1280, cashCollected: 445100, posAmount: 1475727, shortageResolutions: [{ type: "debt", amount: 71680, liters: 56 }, { type: "official use", amount: 102144, liters: 79.80 }, { type: "official use", amount: 25600, liters: 20 }] },
        { attendant: "Ebuka", pumpId: "PMP-004-A", product: "PMS", openingReading: 33354.69, closingReading: 33968.25, pricePerLiter: 1280, cashCollected: 497100, posAmount: 286860 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1434922.46, closingReading: 1436986.89, pricePerLiter: 1280, cashCollected: 745300, posAmount: 1795300, shortageResolutions: [{ type: "debt", amount: 75520, liters: 59 }, { type: "debt", amount: 26000, liters: 20.31 }] },
        { attendant: "Gift", pumpId: "PMP-006-A", product: "PMS", openingReading: 878962.59, closingReading: 880335.40, pricePerLiter: 1280, cashCollected: 665920, posAmount: 1027300, shortageResolutions: [{ type: "debt", amount: 64000, liters: 50 }] },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 880335.40, closingReading: 880535.40, pricePerLiter: 1280, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 256000, liters: 200 }] },
        { attendant: "Chidimma", pumpId: "PMP-006-B", product: "PMS", openingReading: 716877.05, closingReading: 717762.95, pricePerLiter: 1280, cashCollected: 922950, posAmount: 209139.20 }
      ],
      afternoon: []
    },
    bankDeposits: []
  }
];