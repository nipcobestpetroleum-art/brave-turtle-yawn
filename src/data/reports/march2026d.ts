import { DailyReport } from "../../types/sales";

export const march2026d: DailyReport[] = [
  // PRICE CHANGE: PMS ₦1300 → ₦1280 on March 20; AGO ₦1750 → ₦1900
  {
    date: "2026-03-20",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2604327.84, closingReading: 2606397.98, pricePerLiter: 1280, cashCollected: 732670, posAmount: 1805842, shortageResolutions: [{ type: "debt", amount: 89600, liters: 70, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 19200, liters: 15, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 510281.38, closingReading: 511323.35, pricePerLiter: 1280, cashCollected: 317200, posAmount: 1014493 },
        { attendant: "Miracle", pumpId: "PMP-005-A", product: "PMS", openingReading: 1323341.80, closingReading: 1325948.36, pricePerLiter: 1280, cashCollected: 1512910, posAmount: 1781932, shortageResolutions: [{ type: "official use", amount: 40012.80, liters: 31.26, purpose: "Official use" }] },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 807174.89, closingReading: 808455.41, pricePerLiter: 1280, cashCollected: 1098600, posAmount: 507261, shortageResolutions: [{ type: "debt", amount: 25600, liters: 20, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 4500, liters: 3.52, debtor: "Unknown", reason: "Debt" }] },
      ],
      afternoon: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2606397.98, closingReading: 2607577.37, pricePerLiter: 1280, cashCollected: 240100, posAmount: 1068758.40, shortageResolutions: [{ type: "debt", amount: 160000, liters: 125, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 40473.60, liters: 31.62, purpose: "Official use" }] },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 511323.50, closingReading: 512161.75, pricePerLiter: 1280, cashCollected: 268780, posAmount: 803427 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 245101.50, closingReading: 245621.10, pricePerLiter: 1280, cashCollected: 460640, posAmount: 204010 },
        { attendant: "Chukwuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1325948.36, closingReading: 1328176.71, pricePerLiter: 1280, cashCollected: 372850, posAmount: 2097775, shortageResolutions: [{ type: "debt", amount: 380520, liters: 297.28, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Goodness", pumpId: "PMP-005-B", product: "PMS", openingReading: 808455.41, closingReading: 809265.16, pricePerLiter: 1280, cashCollected: 759200, posAmount: 276300 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 223615.81, closingReading: 224179.61, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 986650, liters: 563.80, purpose: "Official use" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 477928.89, closingReading: 478428.80, pricePerLiter: 1750, cashCollected: 0, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 721070, liters: 412.04, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 153930, liters: 87.96, purpose: "Official use" }] },
      ],
      night: [
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224179.61, closingReading: 224290.13, pricePerLiter: 1900, cashCollected: 20000, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 190000, liters: 100, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-20" }],
  },
  // PRICE CHANGE: PMS ₦1280 → ₦1300 → ₦1380 on March 21; AGO ₦1900
  {
    date: "2026-03-21",
    shifts: {
      morning: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2607577.38, closingReading: 2607938.27, pricePerLiter: 1280, cashCollected: 172750, posAmount: 288945 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1328176.74, closingReading: 1328717.83, pricePerLiter: 1280, cashCollected: 257150, posAmount: 435358 },
        { attendant: "Miracle", pumpId: "PMP-005-B", product: "PMS", openingReading: 809265.16, closingReading: 809591.12, pricePerLiter: 1280, cashCollected: 332600, posAmount: 79039 },
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2607938.27, closingReading: 2608882.06, pricePerLiter: 1300, cashCollected: 161400, posAmount: 919765, shortageResolutions: [{ type: "debt", amount: 143000, liters: 110, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 512161.75, closingReading: 512687.42, pricePerLiter: 1300, cashCollected: 317100, posAmount: 366268 },
        { attendant: "Donald", pumpId: "PMP-003-B", product: "PMS", openingReading: 245621.10, closingReading: 245988.45, pricePerLiter: 1300, cashCollected: 228890, posAmount: 243200, shortageResolutions: [{ type: "debt", amount: 5200, liters: 4, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1328717.83, closingReading: 1330380.93, pricePerLiter: 1300, cashCollected: 889400, posAmount: 1266178, shortageResolutions: [{ type: "return to tank", amount: 6500, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-005-B", product: "PMS", openingReading: 809591.12, closingReading: 810216.90, pricePerLiter: 1300, cashCollected: 522100, posAmount: 291400 },
      ],
      night: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2608882.06, closingReading: 2609386.64, pricePerLiter: 1380, cashCollected: 357100, posAmount: 338760 },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 512687.42, closingReading: 513005.76, pricePerLiter: 1380, cashCollected: 0, posAmount: 431110, shortageResolutions: [{ type: "return to tank", amount: 6996.60, liters: 5.07, reason: "Priming" }] },
        { attendant: "Donald", pumpId: "PMP-003-B", product: "PMS", openingReading: 245988.45, closingReading: 246220.28, pricePerLiter: 1380, cashCollected: 122200, posAmount: 99699, shortageResolutions: [{ type: "debt", amount: 97610, liters: 70.73, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-A", product: "PMS", openingReading: 1330380.93, closingReading: 1330894.61, pricePerLiter: 1380, cashCollected: 200250, posAmount: 508400 },
        { attendant: "Miracle", pumpId: "PMP-005-B", product: "PMS", openingReading: 810216.90, closingReading: 810488.53, pricePerLiter: 1380, cashCollected: 374800, posAmount: 0 },
        { attendant: "Goodness", pumpId: "PMP-002-A", product: "PMS", openingReading: 2609386.64, closingReading: 2611168.60, pricePerLiter: 1380, cashCollected: 651150, posAmount: 1518334, shortageResolutions: [{ type: "debt", amount: 275351.40, liters: 199.53, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 13800, liters: 10, reason: "Priming" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 513005.76, closingReading: 513324.05, pricePerLiter: 1380, cashCollected: 99750, posAmount: 268100, shortageResolutions: [{ type: "debt", amount: 55200, liters: 40, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 15373.20, liters: 11.14, reason: "Priming" }] },
        { attendant: "Chukwuka", pumpId: "PMP-004-A", product: "PMS", openingReading: 89974.74, closingReading: 89981.06, pricePerLiter: 1380, cashCollected: 8700, posAmount: 0 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-005-A", product: "PMS", openingReading: 1330894.61, closingReading: 1333315.21, pricePerLiter: 1380, cashCollected: 815100, posAmount: 1429069.20, shortageResolutions: [{ type: "debt", amount: 1096009.80, liters: 794.21, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Esther", pumpId: "PMP-005-B", product: "PMS", openingReading: 810488.53, closingReading: 811322.75, pricePerLiter: 1380, cashCollected: 836830, posAmount: 311133 },
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 848260.46, closingReading: 848984.09, pricePerLiter: 1380, cashCollected: 420640, posAmount: 570400, shortageResolutions: [{ type: "return to tank", amount: 6913.80, liters: 5.01, reason: "Priming" }] },
        { attendant: "Joy", pumpId: "PMP-003-B", product: "PMS", openingReading: 246220.28, closingReading: 246477.41, pricePerLiter: 1380, cashCollected: 0, posAmount: 354413 },
        { attendant: "Joy", pumpId: "PMP-006-B", product: "PMS", openingReading: 684340.39, closingReading: 684805.45, pricePerLiter: 1380, cashCollected: 240870, posAmount: 400237 },
        { attendant: "Joy", pumpId: "PMP-004-B", product: "PMS", openingReading: 26357.18, closingReading: 26358.15, pricePerLiter: 1380, cashCollected: 0, posAmount: 0 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224290.13, closingReading: 224320.66, pricePerLiter: 1900, cashCollected: 23800, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 34200, liters: 18, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-21" }],
  },
  // March 21 continuation (submitted March 23) - ₦1380 continues
  {
    date: "2026-03-21",
    shifts: {
      morning: [],
      afternoon: [],
      night: [],
    },
    bankDeposits: [],
  },
  // Removing the empty duplicate March 21 entry above - the actual continuation data goes into the night shift of the first March 21 entry
  // The March 23 submission labeled "March 21" is a continuation shift:
  {
    date: "2026-03-23",
    shifts: {
      morning: [
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2611224.13, closingReading: 2612920.53, pricePerLiter: 1380, cashCollected: 598200, posAmount: 1412505, shortageResolutions: [{ type: "debt", amount: 227700, liters: 165, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 67371.60, liters: 48.82, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 26220, liters: 19, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 8721.60, liters: 6.32, reason: "Priming" }] },
        { attendant: "Joy", pumpId: "PMP-003-A", product: "PMS", openingReading: 513324.09, closingReading: 514024.44, pricePerLiter: 1380, cashCollected: 450910, posAmount: 501579, shortageResolutions: [{ type: "debt", amount: 13800, liters: 10, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 246477.14, closingReading: 247181.06, pricePerLiter: 1380, cashCollected: 689500, posAmount: 279960 },
        { attendant: "Joy", pumpId: "PMP-004-A", product: "PMS", openingReading: 89981.22, closingReading: 90247.33, pricePerLiter: 1380, cashCollected: 26300, posAmount: 333800, shortageResolutions: [{ type: "return to tank", amount: 6900, liters: 5, reason: "Priming" }] },
        { attendant: "Chukwuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 811322.75, closingReading: 812387.94, pricePerLiter: 1380, cashCollected: 1033700, posAmount: 348292, shortageResolutions: [{ type: "debt", amount: 69000, liters: 50, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 13800, liters: 10, reason: "Priming" }] },
        { attendant: "Goodness", pumpId: "PMP-006-A", product: "PMS", openingReading: 848984.20, closingReading: 852188.40, pricePerLiter: 1380, cashCollected: 670050, posAmount: 3268811.20, shortageResolutions: [{ type: "debt", amount: 483000, liters: 350, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-A", product: "PMS", openingReading: 26358.15, closingReading: 26360.09, pricePerLiter: 1380, cashCollected: 2750, posAmount: 0 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 684805.45, closingReading: 684955.31, pricePerLiter: 1380, cashCollected: 100000, posAmount: 106500 },
      ],
      afternoon: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2612920.53, closingReading: 2614783.92, pricePerLiter: 1380, cashCollected: 533500, posAmount: 1657984, shortageResolutions: [{ type: "debt", amount: 324800, liters: 235.36, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 53820, liters: 39, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 2000, liters: 1.45, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chizoba", pumpId: "PMP-003-A", product: "PMS", openingReading: 514024.46, closingReading: 514398.34, pricePerLiter: 1380, cashCollected: 191950, posAmount: 240800, shortageResolutions: [{ type: "debt", amount: 82800, liters: 60, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 247181.07, closingReading: 247586.12, pricePerLiter: 1380, cashCollected: 358700, posAmount: 190205, shortageResolutions: [{ type: "return to tank", amount: 9660, liters: 7, reason: "Priming" }] },
        { attendant: "Favour", pumpId: "PMP-005-A", product: "PMS", openingReading: 852188.40, closingReading: 853714.41, pricePerLiter: 1380, cashCollected: 704460, posAmount: 1393751 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 812387.94, closingReading: 813209.34, pricePerLiter: 1380, cashCollected: 838500, posAmount: 293554 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 684955.31, closingReading: 685551.96, pricePerLiter: 1380, cashCollected: 520550, posAmount: 301530 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224320.66, closingReading: 224651.45, pricePerLiter: 1900, cashCollected: 58500, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 570000, liters: 300, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-23" }],
  },
  {
    date: "2026-03-24",
    shifts: {
      morning: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2614783.94, closingReading: 2616378.06, pricePerLiter: 1380, cashCollected: 464190, posAmount: 1473245, shortageResolutions: [{ type: "debt", amount: 207000, liters: 150, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 13800, liters: 10, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 40000, liters: 28.99, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-A", product: "PMS", openingReading: 514398.35, closingReading: 514708.80, pricePerLiter: 1380, cashCollected: 83200, posAmount: 345100 },
        { attendant: "Goodness", pumpId: "PMP-003-B", product: "PMS", openingReading: 247586.12, closingReading: 247843.97, pricePerLiter: 1380, cashCollected: 164050, posAmount: 116435, shortageResolutions: [{ type: "debt", amount: 75000, liters: 54.35, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-A", product: "PMS", openingReading: 90247.36, closingReading: 91540.19, pricePerLiter: 1380, cashCollected: 551720, posAmount: 1194260, shortageResolutions: [{ type: "debt", amount: 27600, liters: 20, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 10005, liters: 7.25, purpose: "Official use" }] },
        { attendant: "Goodness", pumpId: "PMP-004-B", product: "PMS", openingReading: 26361.39, closingReading: 27113.19, pricePerLiter: 1380, cashCollected: 739200, posAmount: 286671, shortageResolutions: [{ type: "return to tank", amount: 11040, liters: 8, reason: "Priming" }] },
        { attendant: "Esther", pumpId: "PMP-005-A", product: "PMS", openingReading: 1333315.30, closingReading: 1333868.29, pricePerLiter: 1380, cashCollected: 575850, posAmount: 185400 },
        { attendant: "Esther", pumpId: "PMP-006-A", product: "PMS", openingReading: 853714.42, closingReading: 855396.68, pricePerLiter: 1380, cashCollected: 1165700, posAmount: 665103.20, shortageResolutions: [{ type: "debt", amount: 484600, liters: 351.16, debtor: "Unknown", reason: "Debt" }] },
        { attendant: "Joy", pumpId: "PMP-006-B", product: "PMS", openingReading: 685551.96, closingReading: 686088.93, pricePerLiter: 1380, cashCollected: 450000, posAmount: 290964 },
        { attendant: "Joy", pumpId: "PMP-005-B", product: "PMS", openingReading: 813209.34, closingReading: 813565.96, pricePerLiter: 1380, cashCollected: 489300, posAmount: 0 },
      ],
      afternoon: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2616378.06, closingReading: 2617545.36, pricePerLiter: 1380, cashCollected: 585900, posAmount: 968541, shortageResolutions: [{ type: "debt", amount: 48300, liters: 35, debtor: "Unknown", reason: "Debt" }, { type: "return to tank", amount: 6900, liters: 5, reason: "Priming" }] },
        { attendant: "Miracle", pumpId: "PMP-003-B", product: "PMS", openingReading: 247843.97, closingReading: 247926.21, pricePerLiter: 1380, cashCollected: 52650, posAmount: 29265, shortageResolutions: [{ type: "return to tank", amount: 31395, liters: 22.75, reason: "Priming" }] },
        { attendant: "Favour", pumpId: "PMP-005-A", product: "PMS", openingReading: 1333868.29, closingReading: 1335546.21, pricePerLiter: 1380, cashCollected: 1548750, posAmount: 763413.40 },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 813565.96, closingReading: 814370.11, pricePerLiter: 1380, cashCollected: 777100, posAmount: 326442 },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 686088.94, closingReading: 686277.50, pricePerLiter: 1380, cashCollected: 44300, posAmount: 205700, shortageResolutions: [{ type: "return to tank", amount: 9991.20, liters: 7.24, reason: "Priming" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 224651.45, closingReading: 224847.24, pricePerLiter: 1900, cashCollected: 87000, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 285000, liters: 150, purpose: "Official use" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-24" }],
  },
  {
    date: "2026-03-25",
    shifts: {
      morning: [
        { attendant: "Joy", pumpId: "PMP-002-A", product: "PMS", openingReading: 2617545.36, closingReading: 2618193.04, pricePerLiter: 1380, cashCollected: 159500, posAmount: 466424, shortageResolutions: [{ type: "debt", amount: 179400, liters: 130, debtor: "Unknown", reason: "Debt" }, { type: "debt", amount: 20700, liters: 15, debtor: "Unknown", reason: "Debt" }, { type: "official use", amount: 55200, liters: 40, purpose: "Official use" }, { type: "return to tank", amount: 12420, liters: 9, reason: "Priming" }] },
        { attendant: "Goodness", pumpId: "PMP-004-A", product: "PMS", openingReading: 91540.24, closingReading: 92126.83, pricePerLiter: 1380, cashCollected: 279700, posAmount: 529553 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-004-B", product: "PMS", openingReading: 27113.19, closingReading: 27419.56, pricePerLiter: 1380, cashCollected: 290100, posAmount: 132317.20 },
        { attendant: "Chukwuka", pumpId: "PMP-005-A", product: "PMS", openingReading: 1335546.23, closingReading: 1336394.83, pricePerLiter: 1380, cashCollected: 1171068, posAmount: 0 },
        { attendant: "Esther", pumpId: "PMP-005-B", product: "PMS", openingReading: 814370.11, closingReading: 814483.99, pricePerLiter: 1380, cashCollected: 62400, posAmount: 93900 },
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 855396.71, closingReading: 855611.35, pricePerLiter: 1380, cashCollected: 700, posAmount: 295400 },
        { attendant: "Esther", pumpId: "PMP-006-B", product: "PMS", openingReading: 686277.50, closingReading: 686385.92, pricePerLiter: 1380, cashCollected: 142600, posAmount: 7000 },
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2618193.04, closingReading: 2618395.95, pricePerLiter: 1380, cashCollected: 500, posAmount: 31119, shortageResolutions: [{ type: "debt", amount: 248400, liters: 180, debtor: "Unknown", reason: "Debt" }] },
      ],
    },
    bankDeposits: [{ amount: 0, reference: "", date: "2026-03-25" }],
  },
];