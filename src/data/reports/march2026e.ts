import { DailyReport } from "../../types/sales";

export const march2026e: DailyReport[] = [
  // PRICE CHANGE: PMS ₦1380 → ₦1350 on March 26; AGO ₦1900 → ₦1750/₦1900
  {
    date: "2026-03-26",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2618396.52, closingReading: 2618786.56, pricePerLiter: 1380, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 372600, liters: 270, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 165600, liters: 120, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-002-A", product: "PMS", openingReading: 2618786.56, closingReading: 2618919.35, pricePerLiter: 1380, cashCollected: 4700, posAmount: 20000, shortageResolutions: [{ type: "debt", amount: 158700, liters: 115, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-002-B", product: "PMS", openingReading: 2818366.95, closingReading: 2818430.67, pricePerLiter: 1350, cashCollected: 5000, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 81000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Favour", pumpId: "PMP-002-A", product: "PMS", openingReading: 2618919.35, closingReading: 2620055.51, pricePerLiter: 1350, cashCollected: 876000, posAmount: 657810 },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-26" }],
  },
  // PRICE: PMS ₦1350; AGO ₦1900
  {
    date: "2026-03-27",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2620055.51, closingReading: 2621592.27, pricePerLiter: 1350, cashCollected: 448000, posAmount: 1301626.50, shortageResolutions: [{ type: "debt", amount: 316372.50, liters: 234.35, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 8100, liters: 6, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 247926.21, closingReading: 248424.73, pricePerLiter: 1350, cashCollected: 559610, posAmount: 113000 },
        { attendant: "Joy", pumpId: "PMP-004-B", product: "PMS", openingReading: 27419.56, closingReading: 27506.13, pricePerLiter: 1350, cashCollected: 0, posAmount: 60719, shortageResolutions: [{ type: "debt", amount: 40500, liters: 30, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 12690, liters: 9.40, reason: "Priming" }] },
        { attendant: "Goodness", pumpId: "PMP-005-A", product: "PMS", openingReading: 1336396.64, closingReading: 1338566.96, pricePerLiter: 1350, cashCollected: 712250, posAmount: 1758728, shortageResolutions: [{ type: "debt", amount: 459000, liters: 340, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-006-B", product: "PMS", openingReading: 686385.92, closingReading: 687147.02, pricePerLiter: 1350, cashCollected: 659300, posAmount: 367850 },
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2621592.27, closingReading: 2623410.15, pricePerLiter: 1350, cashCollected: 453000, posAmount: 2000650 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 248424.73, closingReading: 248964.39, pricePerLiter: 1350, cashCollected: 406100, posAmount: 321342 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-B", product: "PMS", openingReading: 27506.13, closingReading: 27720.17, pricePerLiter: 1350, cashCollected: 152550, posAmount: 135061 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1338566.96, closingReading: 1340932.83, pricePerLiter: 1350, cashCollected: 1003100, posAmount: 1134583, shortageResolutions: [{ type: "debt", amount: 1055700, liters: 782, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-005-B", product: "PMS", openingReading: 814483.99, closingReading: 814949.35, pricePerLiter: 1350, cashCollected: 126900, posAmount: 498350 },
        { attendant: "Favour", pumpId: "PMP-006-B", product: "PMS", openingReading: 687147.02, closingReading: 687529.88, pricePerLiter: 1350, cashCollected: 516500, posAmount: 0 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 478428.80, closingReading: 480017.67, pricePerLiter: 1900, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 1520000, liters: 800, purpose: "Official use" }, { type: "debt", amount: 1498853, liters: 788.87, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224847.24, closingReading: 224946.76, pricePerLiter: 1900, cashCollected: 800, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 188290, liters: 99.10, debtor: "Unknown", reason: "Debt" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-27" }],
  },
  {
    date: "2026-03-28",
    shifts: {
      morning: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2623410.16, closingReading: 2623549.64, pricePerLiter: 1350, cashCollected: 119500, posAmount: 68800 },
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2623549.64, closingReading: 2625214.39, pricePerLiter: 1350, cashCollected: 532750, posAmount: 1454118, shortageResolutions: [{ type: "debt", amount: 246500, liters: 182.59, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 13500, liters: 10, purpose: "Official use" }] },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 514777.19, closingReading: 515515.40, pricePerLiter: 1350, cashCollected: 351000, posAmount: 644550 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 248964.39, closingReading: 249674.60, pricePerLiter: 1350, cashCollected: 568900, posAmount: 327182, shortageResolutions: [{ type: "debt", amount: 20250, liters: 15, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 40095, liters: 29.70, purpose: "Official use" }] },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 514709.01, closingReading: 514777.19, pricePerLiter: 1350, cashCollected: 45000, posAmount: 47000 },
        { attendant: "Joy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1340932.84, closingReading: 1344416.80, pricePerLiter: 1350, cashCollected: 440900, posAmount: 4250148 },
        { attendant: "Goodness", pumpId: "PMP-006-B", product: "PMS", openingReading: 687529.88, closingReading: 688256.75, pricePerLiter: 1350, cashCollected: 745550, posAmount: 234805 },
      ],
      afternoon: [
        { attendant: "Favour", pumpId: "PMP-002-A", product: "PMS", openingReading: 2625214.39, closingReading: 2626911.74, pricePerLiter: 1350, cashCollected: 610300, posAmount: 1596861, shortageResolutions: [{ type: "debt", amount: 81000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 249674.60, closingReading: 250618.72, pricePerLiter: 1350, cashCollected: 644900, posAmount: 488579, shortageResolutions: [{ type: "debt", amount: 54000, liters: 40, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 75600, liters: 56, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 9450, liters: 7, reason: "Priming" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1344416.80, closingReading: 1345735.97, pricePerLiter: 1350, cashCollected: 491050, posAmount: 1208602, shortageResolutions: [{ type: "debt", amount: 81000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 688256.75, closingReading: 689078.79, pricePerLiter: 1350, cashCollected: 56000, posAmount: 814350, shortageResolutions: [{ type: "debt", amount: 94500, liters: 70, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 16200, liters: 12, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 126100, liters: 93.41, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224946.76, closingReading: 224999.39, pricePerLiter: 1850, cashCollected: 4800, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 92500, liters: 50, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-28" }],
  },
  {
    date: "2026-03-30",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2626911.75, closingReading: 2628805.95, pricePerLiter: 1350, cashCollected: 580355, posAmount: 1466432, shortageResolutions: [{ type: "debt", amount: 243000, liters: 180, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 162000, liters: 120, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 58725, liters: 43.50, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 20000, liters: 14.81, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 24000, liters: 17.78, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-003-B", product: "PMS", openingReading: 250618.72, closingReading: 251388.15, pricePerLiter: 1350, cashCollected: 709340, posAmount: 319500, shortageResolutions: [{ type: "return to tank", amount: 8410.50, liters: 6.23, reason: "Priming" }] },
        { attendant: "Chidera", pumpId: "PMP-005-A", product: "PMS", openingReading: 1345735.99, closingReading: 1348411.17, pricePerLiter: 1350, cashCollected: 1126220, posAmount: 2376790, shortageResolutions: [{ type: "debt", amount: 81000, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 13500, liters: 10, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 13500, liters: 10, reason: "Priming" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 814949.35, closingReading: 815546.49, pricePerLiter: 1350, cashCollected: 687980, posAmount: 109600, shortageResolutions: [{ type: "return to tank", amount: 6750, liters: 5, reason: "Priming" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 689078.79, closingReading: 689290.69, pricePerLiter: 1350, cashCollected: 228800, posAmount: 52700, shortageResolutions: [{ type: "debt", amount: 3500, liters: 2.59, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2628805.95, closingReading: 2630494.42, pricePerLiter: 1350, cashCollected: 353800, posAmount: 1506735, shortageResolutions: [{ type: "debt", amount: 324000, liters: 240, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 67500, liters: 50, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 27000, liters: 20, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 251388.15, closingReading: 251680.48, pricePerLiter: 1350, cashCollected: 154710, posAmount: 230750, shortageResolutions: [{ type: "return to tank", amount: 8370, liters: 6.20, reason: "Priming" }] },
        { attendant: "Chukwuka", pumpId: "PMP-004-B", product: "PMS", openingReading: 27720.17, closingReading: 28008.47, pricePerLiter: 1350, cashCollected: 171350, posAmount: 211700, shortageResolutions: [{ type: "return to tank", amount: 5400, liters: 4, reason: "Priming" }] },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1348411.17, closingReading: 1349801.48, pricePerLiter: 1350, cashCollected: 646240, posAmount: 1149336, shortageResolutions: [{ type: "debt", amount: 81000, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-005-B", product: "PMS", openingReading: 815546.49, closingReading: 816274.27, pricePerLiter: 1350, cashCollected: 373900, posAmount: 605850 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224999.39, closingReading: 225523.98, pricePerLiter: 1850, cashCollected: 19300, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 378510, liters: 204.60, purpose: "Official use" }, { type: "debt", amount: 573500, liters: 310, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 480017.67, closingReading: 480048.49, pricePerLiter: 1850, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 55500, liters: 30, debtor: "Unknown", reason: "Debt" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-30" }],
  },
  {
    date: "2026-03-31",
    shifts: {
      morning: [
        { attendant: "Ebuka", pumpId: "PMP-004-A", product: "PMS", openingReading: 92126.99, closingReading: 93128.00, pricePerLiter: 1350, cashCollected: 404180, posAmount: 887654, shortageResolutions: [{ type: "debt", amount: 583740, liters: 432.40, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2630494.43, closingReading: 2631836.43, pricePerLiter: 1350, cashCollected: 463000, posAmount: 1200611, shortageResolutions: [{ type: "debt", amount: 12150, liters: 9, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 135000, liters: 100, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-004-B", product: "PMS", openingReading: 28008.48, closingReading: 28774.05, pricePerLiter: 1350, cashCollected: 721150, posAmount: 310600 },
        { attendant: "Favour", pumpId: "PMP-006-A", product: "PMS", openingReading: 855611.62, closingReading: 857573.12, pricePerLiter: 1350, cashCollected: 1109290, posAmount: 1416219.50, shortageResolutions: [{ type: "debt", amount: 115600, liters: 85.63, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 6750, liters: 5, reason: "Priming" }] },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 689290.69, closingReading: 690357.65, pricePerLiter: 1350, cashCollected: 956450, posAmount: 318353, shortageResolutions: [{ type: "debt", amount: 94500, liters: 70, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 68067, liters: 50.42, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2631836.43, closingReading: 2633599.06, pricePerLiter: 1350, cashCollected: 328200, posAmount: 1651178, shortageResolutions: [{ type: "debt", amount: 391500, liters: 290, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "PMP-002-A", product: "PMS", openingReading: 2633599.06, closingReading: 2633808.77, pricePerLiter: 1350, cashCollected: 283100, posAmount: 0 },
        { attendant: "Goodness", pumpId: "PMP-003-B", product: "PMS", openingReading: 251680.48, closingReading: 252370.94, pricePerLiter: 1350, cashCollected: 548550, posAmount: 378870, shortageResolutions: [{ type: "return to tank", amount: 4050, liters: 3, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 93128.00, closingReading: 93372.12, pricePerLiter: 1350, cashCollected: 73700, posAmount: 215900, shortageResolutions: [{ type: "debt", amount: 27000, liters: 20, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 13500, liters: 10, purpose: "Official use" }] },
        { attendant: "Goodness", pumpId: "PMP-004-B", product: "PMS", openingReading: 28774.05, closingReading: 28960.43, pricePerLiter: 1350, cashCollected: 138770, posAmount: 112500 },
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 857573.12, closingReading: 859796.39, pricePerLiter: 1350, cashCollected: 180900, posAmount: 2736870, shortageResolutions: [{ type: "debt", amount: 81000, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 3510, liters: 2.60, reason: "Priming" }] },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 690357.65, closingReading: 690997.98, pricePerLiter: 1350, cashCollected: 639050, posAmount: 222750 },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 225523.98, closingReading: 225743.32, pricePerLiter: 1850, cashCollected: 257800, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 148000, liters: 80, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 480048.49, closingReading: 480098.49, pricePerLiter: 1850, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 92500, liters: 50, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-31" }],
  },
];