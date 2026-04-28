import { DailyReport } from "../../types/sales";

export const february2026c: DailyReport[] = [
  {
    date: "2026-02-14",
    shifts: {
      morning: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2495894.54, closingReading: 2496550.90, pricePerLiter: 870, cashCollected: 145400, posAmount: 424597 },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 33955.51, closingReading: 35703.48, pricePerLiter: 870, cashCollected: 395900, posAmount: 1124826.10 },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 206573.25, closingReading: 207291.52, pricePerLiter: 870, cashCollected: 409050, posAmount: 215055 },
        { attendant: "Joy", pumpId: "PMP-005-A", product: "PMS", openingReading: 1262550.17, closingReading: 1263505.21, pricePerLiter: 870, cashCollected: 317100, posAmount: 512744 },
        { attendant: "Joy", pumpId: "PMP-003-A", product: "PMS", openingReading: 456516.99, closingReading: 456559.55, pricePerLiter: 870, cashCollected: 10000, posAmount: 27000 },
        { attendant: "Celestina", pumpId: "PMP-005-A", product: "PMS", openingReading: 1262278.39, closingReading: 1262550.17, pricePerLiter: 870, cashCollected: 61400, posAmount: 170670, shortageResolutions: [{ type: "return to tank", amount: 4350, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 797261.44, closingReading: 799637.20, pricePerLiter: 870, cashCollected: 367200, posAmount: 1056610, shortageResolutions: [{ type: "debt", amount: 637057.50, liters: 732.25, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 6090, liters: 7, reason: "Priming" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 787964.63, closingReading: 788538.19, pricePerLiter: 870, cashCollected: 143740, posAmount: 352876, shortageResolutions: [{ type: "return to tank", amount: 2001, liters: 2.30, reason: "Priming" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-006-B", product: "PMS", openingReading: 649526.75, closingReading: 650466.69, pricePerLiter: 870, cashCollected: 527700, posAmount: 237200, shortageResolutions: [{ type: "debt", amount: 52200, liters: 60, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2496550.91, closingReading: 2497160.38, pricePerLiter: 870, cashCollected: 228000, posAmount: 302008.70 },
        { attendant: "Favour", pumpId: "PMP-003-B", product: "PMS", openingReading: 207291.54, closingReading: 208177.65, pricePerLiter: 870, cashCollected: 584500, posAmount: 168160, shortageResolutions: [{ type: "debt", amount: 17400, liters: 20, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 35703.49, closingReading: 37416.12, pricePerLiter: 870, cashCollected: 488350, posAmount: 920269, shortageResolutions: [{ type: "debt", amount: 52200, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 29023.20, liters: 33.36, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1263505.22, closingReading: 1265253.45, pricePerLiter: 870, cashCollected: 892950, posAmount: 531899.90, shortageResolutions: [{ type: "debt", amount: 67131.40, liters: 77.16, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 28405.50, liters: 32.65, purpose: "Official use" }] },
        { attendant: "Miriam", pumpId: "PMP-003-A", product: "PMS", openingReading: 456559.56, closingReading: 456859.13, pricePerLiter: 870, cashCollected: 0, posAmount: 260624 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 799637.23, closingReading: 802387.35, pricePerLiter: 870, cashCollected: 988700, posAmount: 557416, shortageResolutions: [{ type: "debt", amount: 846570, liters: 973.07, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 650466.69, closingReading: 652089.28, pricePerLiter: 870, cashCollected: 783000, posAmount: 627744 },
      ],
      night: [
        { attendant: "Celestina", pumpId: "PMP-002-A", product: "PMS", openingReading: 2497160.38, closingReading: 2497180.16, pricePerLiter: 870, cashCollected: 15600, posAmount: 1600 },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 208177.65, closingReading: 209414.35, pricePerLiter: 870, cashCollected: 510970, posAmount: 510169.70, shortageResolutions: [{ type: "debt", amount: 52200, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 2610, liters: 3, reason: "Priming" }] },
        { attendant: "Celestina", pumpId: "PMP-004-A", product: "PMS", openingReading: 37416.12, closingReading: 39580.23, pricePerLiter: 870, cashCollected: 455320, posAmount: 1420628, shortageResolutions: [{ type: "return to tank", amount: 6351, liters: 7.30, reason: "Priming" }] },
        { attendant: "Chukwuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1265253.45, closingReading: 1267435.91, pricePerLiter: 870, cashCollected: 615450, posAmount: 1282489 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-A", product: "PMS", openingReading: 802387.35, closingReading: 806589.07, pricePerLiter: 870, cashCollected: 600950, posAmount: 3054441 },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 652089.28, closingReading: 653210.05, pricePerLiter: 870, cashCollected: 827250, posAmount: 146266.60 },
      ]
    },
    bankDeposits: []
  },
  // PRICE CHANGE: ₦870 → ₦860 from Feb 17
  {
    date: "2026-02-17",
    shifts: {
      morning: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2500103.55, closingReading: 2501325.18, pricePerLiter: 860, cashCollected: 260600, posAmount: 733600, shortageResolutions: [{ type: "debt", amount: 51600, liters: 59.31, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 4350, liters: 5, reason: "Priming" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-A", product: "PMS", openingReading: 456859.54, closingReading: 460955.37, pricePerLiter: 860, cashCollected: 907950, posAmount: 2604167.80, shortageResolutions: [{ type: "debt", amount: 10320, liters: 12, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 211204.36, closingReading: 212137.96, pricePerLiter: 860, cashCollected: 520750, posAmount: 281460 },
        { attendant: "Miracle", pumpId: "PMP-004-A", product: "PMS", openingReading: 41877.51, closingReading: 42867.02, pricePerLiter: 860, cashCollected: 468900, posAmount: 337600, shortageResolutions: [{ type: "debt", amount: 42140, liters: 49, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-B", product: "PMS", openingReading: 2807076.03, closingReading: 2808516.29, pricePerLiter: 860, cashCollected: 746600, posAmount: 415000, shortageResolutions: [{ type: "debt", amount: 77050, liters: 89.59, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 460955.37, closingReading: 461556.66, pricePerLiter: 860, cashCollected: 432750, posAmount: 32200, shortageResolutions: [{ type: "debt", amount: 50421, liters: 58.63, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 1720, liters: 2, reason: "Priming" }] },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 42867.05, closingReading: 42884.28, pricePerLiter: 860, cashCollected: 14800, posAmount: 0 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-A", product: "PMS", openingReading: 808903.55, closingReading: 809639.71, pricePerLiter: 860, cashCollected: 246950, posAmount: 382587, shortageResolutions: [{ type: "return to tank", amount: 3440, liters: 4, reason: "Priming" }] },
        { attendant: "Favour", pumpId: "PMP-006-B", product: "PMS", openingReading: 655416.29, closingReading: 656014.98, pricePerLiter: 860, cashCollected: 414480, posAmount: 99500 },
      ],
      afternoon: [
        { attendant: "Joy", pumpId: "PMP-006-A", product: "PMS", openingReading: 809639.71, closingReading: 809875.95, pricePerLiter: 860, cashCollected: 6500, posAmount: 98200, shortageResolutions: [{ type: "debt", amount: 91160, liters: 106, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 7284.20, liters: 8.47, reason: "Priming" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-02-18",
    shifts: {
      morning: [
        { attendant: "Favour", pumpId: "PMP-002-A", product: "PMS", openingReading: 2501325.32, closingReading: 2501778.72, pricePerLiter: 860, cashCollected: 125800, posAmount: 211980, shortageResolutions: [{ type: "debt", amount: 51600, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Amarachi", pumpId: "PMP-002-B", product: "PMS", openingReading: 2808516.29, closingReading: 2810170.00, pricePerLiter: 860, cashCollected: 300800, posAmount: 1121439 },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 212137.96, closingReading: 212373.88, pricePerLiter: 860, cashCollected: 149000, posAmount: 53800 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-A", product: "PMS", openingReading: 42884.37, closingReading: 43214.52, pricePerLiter: 860, cashCollected: 71200, posAmount: 212700 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 809875.95, closingReading: 810140.30, pricePerLiter: 860, cashCollected: 67400, posAmount: 156000 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-B", product: "PMS", openingReading: 656014.98, closingReading: 656211.40, pricePerLiter: 860, cashCollected: 147300, posAmount: 21500 },
      ],
      afternoon: [
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2501778.72, closingReading: 2503079.95, pricePerLiter: 860, cashCollected: 314530, posAmount: 744063, shortageResolutions: [{ type: "debt", amount: 60200, liters: 70, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 212373.88, closingReading: 213161.61, pricePerLiter: 860, cashCollected: 418900, posAmount: 256828 },
        { attendant: "Esther", pumpId: "PMP-002-B", product: "PMS", openingReading: 2810170.00, closingReading: 2813640.78, pricePerLiter: 860, cashCollected: 605800, posAmount: 2168961.60, shortageResolutions: [{ type: "debt", amount: 180600, liters: 210, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-A", product: "PMS", openingReading: 43214.52, closingReading: 44758.41, pricePerLiter: 860, cashCollected: 261660, posAmount: 1065634 },
        { attendant: "Celestina", pumpId: "PMP-006-A", product: "PMS", openingReading: 810140.30, closingReading: 811242.37, pricePerLiter: 860, cashCollected: 326950, posAmount: 620372 },
        { attendant: "Joy", pumpId: "PMP-006-B", product: "PMS", openingReading: 656211.40, closingReading: 656931.79, pricePerLiter: 860, cashCollected: 432520, posAmount: 185300 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-02-19",
    shifts: {
      morning: [
        { attendant: "Ogochukwu", pumpId: "PMP-002-A", product: "PMS", openingReading: 2503079.95, closingReading: 2504447.76, pricePerLiter: 860, cashCollected: 229300, posAmount: 851985, shortageResolutions: [{ type: "debt", amount: 94600, liters: 110, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 461557.32, closingReading: 464840.75, pricePerLiter: 860, cashCollected: 379460, posAmount: 1722820, shortageResolutions: [{ type: "debt", amount: 721049.80, liters: 838.43, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-003-B", product: "PMS", openingReading: 213161.61, closingReading: 213791.29, pricePerLiter: 860, cashCollected: 394360, posAmount: 142030, shortageResolutions: [{ type: "return to tank", amount: 4300, liters: 5, reason: "Priming" }] },
        { attendant: "Amarachi", pumpId: "PMP-004-A", product: "PMS", openingReading: 44758.45, closingReading: 45731.75, pricePerLiter: 860, cashCollected: 295400, posAmount: 532560, shortageResolutions: [{ type: "debt", amount: 8600, liters: 10, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-004-B", product: "PMS", openingReading: 17094.00, closingReading: 17718.32, pricePerLiter: 860, cashCollected: 333420, posAmount: 202696.80 },
        { attendant: "Miracle", pumpId: "PMP-006-A", product: "PMS", openingReading: 811242.38, closingReading: 812261.23, pricePerLiter: 860, cashCollected: 241450, posAmount: 463000, shortageResolutions: [{ type: "debt", amount: 139320, liters: 162, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 32000.60, liters: 37.21, purpose: "Official use" }] },
        { attendant: "Miriam", pumpId: "PMP-006-B", product: "PMS", openingReading: 656931.79, closingReading: 657877.77, pricePerLiter: 860, cashCollected: 608450, posAmount: 204082 },
      ],
      afternoon: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2504447.76, closingReading: 2506316.56, pricePerLiter: 860, cashCollected: 180950, posAmount: 1397755.59, shortageResolutions: [{ type: "debt", amount: 43868.60, liters: 51.01, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Miracle", pumpId: "PMP-002-B", product: "PMS", openingReading: 2813640.78, closingReading: 2815041.66, pricePerLiter: 860, cashCollected: 4800, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 1199956.80, liters: 1395.30, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Celestina", pumpId: "PMP-003-A", product: "PMS", openingReading: 464840.75, closingReading: 468966.50, pricePerLiter: 860, cashCollected: 412300, posAmount: 2496533.60, shortageResolutions: [{ type: "debt", amount: 15480, liters: 18, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 25800, liters: 30, purpose: "Official use" }, { type: "debt", amount: 597605, liters: 694.89, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-003-B", product: "PMS", openingReading: 213791.29, closingReading: 214750.94, pricePerLiter: 860, cashCollected: 639050, posAmount: 185700 },
        { attendant: "Esther", pumpId: "PMP-004-A", product: "PMS", openingReading: 45731.75, closingReading: 46788.09, pricePerLiter: 860, cashCollected: 305050, posAmount: 602814.60 },
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 812261.23, closingReading: 813037.84, pricePerLiter: 860, cashCollected: 226050, posAmount: 433957, shortageResolutions: [{ type: "return to tank", amount: 6880, liters: 8, reason: "Priming" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 657877.77, closingReading: 658329.80, pricePerLiter: 860, cashCollected: 367600, posAmount: 21000 },
      ]
    },
    bankDeposits: [],
    tankDippings: [
      { tankNumber: 1, product: "AGO", reading: 1200, recordedBy: "DoGood", time: "Evening" },
      { tankNumber: 2, product: "PMS", reading: 105, recordedBy: "DoGood", time: "Evening" },
      { tankNumber: 3, product: "PMS", reading: 5610, recordedBy: "DoGood", time: "Evening" },
      { tankNumber: 4, product: "PMS", reading: 14330, recordedBy: "DoGood", time: "Evening" },
      { tankNumber: 5, product: "PMS", reading: 11240, recordedBy: "DoGood", time: "Evening" },
      { tankNumber: 6, product: "AGO", reading: 900, recordedBy: "DoGood", time: "Evening" },
    ]
  },
  {
    date: "2026-02-20",
    shifts: {
      morning: [
        { attendant: "Miriam", pumpId: "PMP-002-A", product: "PMS", openingReading: 2506316.56, closingReading: 2507833.16, pricePerLiter: 860, cashCollected: 311600, posAmount: 903828, shortageResolutions: [{ type: "debt", amount: 78121, liters: 90.84, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 10320, liters: 12, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2815041.66, closingReading: 2818354.12, pricePerLiter: 860, cashCollected: 483100, posAmount: 2321750, shortageResolutions: [{ type: "debt", amount: 43860, liters: 51, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Favour", pumpId: "PMP-003-A", product: "PMS", openingReading: 468966.52, closingReading: 469608.77, pricePerLiter: 860, cashCollected: 136200, posAmount: 337560, shortageResolutions: [{ type: "debt", amount: 51600, liters: 60, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 26660, liters: 31, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Amarachi", pumpId: "PMP-003-B", product: "PMS", openingReading: 214750.94, closingReading: 215487.88, pricePerLiter: 860, cashCollected: 476630, posAmount: 155900 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2507833.16, closingReading: 2507993.17, pricePerLiter: 860, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 137600, liters: 160, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 46788.10, closingReading: 47209.59, pricePerLiter: 860, cashCollected: 266500, posAmount: 95828 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-A", product: "PMS", openingReading: 813037.86, closingReading: 813634.02, pricePerLiter: 860, cashCollected: 244700, posAmount: 267732 },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 658329.80, closingReading: 658820.58, pricePerLiter: 860, cashCollected: 230650, posAmount: 183600, shortageResolutions: [{ type: "debt", amount: 6880, liters: 8, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 213949.36, closingReading: 214137.30, pricePerLiter: 1050, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 197337, liters: 187.94, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2507993.18, closingReading: 2509142.24, pricePerLiter: 860, cashCollected: 163550, posAmount: 675743.20, shortageResolutions: [{ type: "debt", amount: 86000, liters: 100, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 22350, liters: 25.99, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 40007.20, liters: 46.52, purpose: "Official use" }] },
        { attendant: "Favour", pumpId: "PMP-003-B", product: "PMS", openingReading: 215487.88, closingReading: 216155.78, pricePerLiter: 860, cashCollected: 422600, posAmount: 151000 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 658820.58, closingReading: 659740.56, pricePerLiter: 860, cashCollected: 504500, posAmount: 285741 },
        { attendant: "Ogochukwu", pumpId: "PMP-004-A", product: "PMS", openingReading: 47209.74, closingReading: 49036.80, pricePerLiter: 860, cashCollected: 466800, posAmount: 1104171 },
        { attendant: "Amarachi", pumpId: "PMP-006-A", product: "PMS", openingReading: 813634.05, closingReading: 814972.27, pricePerLiter: 860, cashCollected: 367860, posAmount: 782550 },
        { attendant: "Celestina", pumpId: "PMP-005-B", product: "PMS", openingReading: 789019.97, closingReading: 789949.21, pricePerLiter: 860, cashCollected: 576150, posAmount: 222010 },
        { attendant: "Miriam", pumpId: "PMP-003-A", product: "PMS", openingReading: 469609.03, closingReading: 474227.50, pricePerLiter: 860, cashCollected: 306900, posAmount: 3536014, shortageResolutions: [{ type: "debt", amount: 129000, liters: 150, debtor: "Unknown", reason: "Debt" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-02-21",
    shifts: {
      morning: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2509142.24, closingReading: 2511998.75, pricePerLiter: 860, cashCollected: 487850, posAmount: 1889300.80, shortageResolutions: [{ type: "debt", amount: 51860, liters: 60.30, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 23500, liters: 27.33, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-004-A", product: "PMS", openingReading: 49036.80, closingReading: 51117.64, pricePerLiter: 860, cashCollected: 317500, posAmount: 1471535 },
        { attendant: "Chukwuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 474227.50, closingReading: 478233.89, pricePerLiter: 860, cashCollected: 709100, posAmount: 2055649, shortageResolutions: [{ type: "debt", amount: 650177, liters: 756.02, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 30000, liters: 34.88, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 216155.78, closingReading: 217073.35, pricePerLiter: 860, cashCollected: 620310, posAmount: 167200 },
        { attendant: "Goodness", pumpId: "PMP-006-A", product: "PMS", openingReading: 814972.27, closingReading: 816480.91, pricePerLiter: 860, cashCollected: 430620, posAmount: 814899, shortageResolutions: [{ type: "debt", amount: 51600, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 659740.56, closingReading: 660734.64, pricePerLiter: 860, cashCollected: 658700, posAmount: 193640 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 214137.30, closingReading: 214797.91, pricePerLiter: 1050, cashCollected: 270, posAmount: 481000, shortageResolutions: [{ type: "official use", amount: 210000, liters: 200, purpose: "Official use" }] },
      ],
      afternoon: [
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1267436.41, closingReading: 1269470.63, pricePerLiter: 860, cashCollected: 627400, posAmount: 964855, shortageResolutions: [{ type: "debt", amount: 94600, liters: 110, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 40007.20, liters: 46.52, purpose: "Official use" }, { type: "official use", amount: 22497.60, liters: 26.16, purpose: "Official use" }] },
      ]
    },
    bankDeposits: []
  },
  // Feb 23-28 continues...
];