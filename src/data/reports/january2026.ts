import { DailyReport } from "../../types/sales";

export const january2026: DailyReport[] = [
  {
    date: "2026-01-01",
    shifts: {
      morning: [
        { attendant: "Chukwuma", pumpId: "PMP-002-A", product: "PMS", openingReading: 2366275.27, closingReading: 2371463.43, pricePerLiter: 830, cashCollected: 961200, posAmount: 3273997, shortageResolutions: [{ type: "debt", amount: 71010, liters: 85.55, debtor: "Exodus", reason: "MD approved" }] },
        { attendant: "Lukeman", pumpId: "PMP-003-A", product: "PMS", openingReading: 334885.27, closingReading: 337043.97, pricePerLiter: 830, cashCollected: 542700, posAmount: 1236403.12, shortageResolutions: [{ type: "debt", amount: 11600, liters: 13.98, debtor: "Customer", reason: "No idea" }] },
        { attendant: "Julie", pumpId: "PMP-005-A", product: "PMS", openingReading: 1211926.88, closingReading: 1213405.69, pricePerLiter: 830, cashCollected: 209450, posAmount: 1017468.88 },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 759388.32, closingReading: 761064.65, pricePerLiter: 830, cashCollected: 738850, posAmount: 367161, shortageResolutions: [{ type: "debt", amount: 259790, liters: 313, debtor: "First patriot", reason: "MD approved" }, { type: "official use", amount: 24900, liters: 30, purpose: "House and office", reason: "Okoye" }] },
        { attendant: "Dogood", pumpId: "PMP-006-A", product: "PMS", openingReading: 741160.53, closingReading: 742110.26, pricePerLiter: 830, cashCollected: 496500, posAmount: 291500 },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-01-03",
    shifts: {
      morning: [
        { attendant: "Dogood", pumpId: "PMP-002-A", product: "PMS", openingReading: 2371556.75, closingReading: 2372898.15, pricePerLiter: 830, cashCollected: 327900, posAmount: 734701, shortageResolutions: [{ type: "debt", amount: 50000, liters: 60.24, debtor: "Customer" }] },
        { attendant: "Ogochukwu", pumpId: "PMP-003-A", product: "PMS", openingReading: 337043.98, closingReading: 342719.81, pricePerLiter: 830, cashCollected: 791300, posAmount: 3629358, shortageResolutions: [{ type: "debt", amount: 215800, liters: 260, debtor: "First patriot" }, { type: "debt", amount: 12450, liters: 15, debtor: "Multipro company" }, { type: "official use", amount: 62304.78, liters: 75.07, purpose: "MD", reason: "MD approved" }] },
        { attendant: "Julie", pumpId: "PMP-006-A", product: "PMS", openingReading: 742110.27, closingReading: 743307.14, pricePerLiter: 830, cashCollected: 483900, posAmount: 509200 },
        { attendant: "Lukeman", pumpId: "PMP-006-B", product: "PMS", openingReading: 602728.39, closingReading: 603768.61, pricePerLiter: 830, cashCollected: 610450, posAmount: 226766, shortageResolutions: [{ type: "official use", amount: 24900, liters: 30, purpose: "Afikpo", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Chisom", pumpId: "PMP-002-A", product: "PMS", openingReading: 2372898.15, closingReading: 2374295.78, pricePerLiter: 830, cashCollected: 117700, posAmount: 896300, shortageResolutions: [{ type: "debt", amount: 145250, liters: 175, debtor: "First patriot", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-01-04",
    shifts: {
      morning: [
        { 
          attendant: "Miracle", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 342820.99, 
          closingReading: 345485.95, 
          pricePerLiter: 830, 
          cashCollected: 254750, 
          posAmount: 1737879, 
          shortageResolutions: [
            { type: "debt", amount: 190900, liters: 230, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 20000.51, liters: 24.10, purpose: "Driver", reason: "MD approved" },
            { type: "official use", amount: 8300, liters: 10, purpose: "House", reason: "MD" }
          ] 
        },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2026-01-05",
    shifts: {
      morning: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2374295.80, closingReading: 2377614.83, pricePerLiter: 830, cashCollected: 923800, posAmount: 1813241, shortageResolutions: [{ type: "debt", amount: 7000, liters: 8.43, debtor: "Dogood/afikpo", reason: "MD approved" }, { type: "debt", amount: 10400, liters: 12.53, debtor: "Customer", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-003-A", product: "PMS", openingReading: 345485.95, closingReading: 349060.49, pricePerLiter: 830, cashCollected: 316100, posAmount: 2340138, shortageResolutions: [{ type: "debt", amount: 269750, liters: 325, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 40670, liters: 49, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 156571.93, closingReading: 157507.37, pricePerLiter: 830, cashCollected: 505750, posAmount: 265155, shortageResolutions: [{ type: "return to tank", amount: 4150, liters: 5, reason: "MD approved" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-005-B", product: "PMS", openingReading: 761064.65, closingReading: 762314.04, pricePerLiter: 830, cashCollected: 525000, posAmount: 477735.33, shortageResolutions: [{ type: "debt", amount: 33200, liters: 40, debtor: "Multipro", reason: "MD approved" }] },
        { attendant: "Chisom", pumpId: "PMP-006-A", product: "PMS", openingReading: 743307.17, closingReading: 744762.66, pricePerLiter: 830, cashCollected: 266450, posAmount: 658951, shortageResolutions: [{ type: "debt", amount: 282200, liters: 340, debtor: "First patriot", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2377614.83, closingReading: 2380358.78, pricePerLiter: 830, cashCollected: 446200, posAmount: 1805663, shortageResolutions: [{ type: "debt", amount: 24900, liters: 30, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-A", product: "PMS", openingReading: 349060.49, closingReading: 350262.87, pricePerLiter: 830, cashCollected: 493800, posAmount: 503719.40 },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 157507.37, closingReading: 158348.18, pricePerLiter: 830, cashCollected: 320250, posAmount: 376730 },
        { attendant: "Chukwuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 762314.04, closingReading: 763455.39, pricePerLiter: 830, cashCollected: 552600, posAmount: 393723 },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1213406.42, closingReading: 1215838.29, pricePerLiter: 830, cashCollected: 201695, posAmount: 1050170, shortageResolutions: [{ type: "debt", amount: 120350, liters: 145, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 7470, liters: 9, debtor: "Multipro company", reason: "MD approved" }, { type: "debt", amount: 638786, liters: 769.62, debtor: "Maco oil", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 208477.68, closingReading: 208648.43, pricePerLiter: 1050, cashCollected: 35000, posAmount: 144000 },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 463133.26, closingReading: 463192.54, pricePerLiter: 150, cashCollected: 10550, posAmount: 0 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-01-06",
    shifts: {
      morning: [
        { attendant: "Chidimma Okoro", pumpId: "PMP-002-A", product: "PMS", openingReading: 2380358.79, closingReading: 2382545.87, pricePerLiter: 830, cashCollected: 348400, posAmount: 1466402.30 },
        { attendant: "Amarachi", pumpId: "PMP-003-B", product: "PMS", openingReading: 158348.18, closingReading: 159742.45, pricePerLiter: 830, cashCollected: 430300, posAmount: 725960.40 },
        { attendant: "Esther", pumpId: "PMP-006-A", product: "PMS", openingReading: 744762.72, closingReading: 746284.94, pricePerLiter: 830, cashCollected: 597900, posAmount: 615758, shortageResolutions: [{ type: "debt", amount: 49800, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 603768.63, closingReading: 605023.18, pricePerLiter: 830, cashCollected: 705150, posAmount: 165500, shortageResolutions: [{ type: "debt", amount: 124500, liters: 150, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 44820, liters: 54, debtor: "Multipro company", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Chukwuka", pumpId: "PMP-002-A", product: "PMS", openingReading: 2382545.87, closingReading: 2384519.14, pricePerLiter: 830, cashCollected: 459500, posAmount: 1077780, shortageResolutions: [{ type: "debt", amount: 2490, liters: 3, debtor: "Oga look man", reason: "MD approved" }, { type: "debt", amount: 31125, liters: 37.5, debtor: "Fidelity Bank", reason: "MD approved" }, { type: "debt", amount: 66400, liters: 80, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 159742.45, closingReading: 160646.69, pricePerLiter: 830, cashCollected: 581500, posAmount: 168293 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 746284.94, closingReading: 747749.38, pricePerLiter: 830, cashCollected: 172600, posAmount: 1042485 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 605023.18, closingReading: 605910.56, pricePerLiter: 830, cashCollected: 447500, posAmount: 229952.30, shortageResolutions: [{ type: "debt", amount: 58100, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 350262.88, closingReading: 355582.50, pricePerLiter: 830, cashCollected: 468700, posAmount: 3686105.79, shortageResolutions: [{ type: "debt", amount: 199200, liters: 240, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 15770, liters: 19, debtor: "Multipro company", reason: "MD approved" }, { type: "debt", amount: 41500, liters: 50, debtor: "Osinachi", reason: "MD approved" }, { type: "return to tank", amount: 4150, liters: 5, reason: "Priming" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 208648.43, closingReading: 208864.29, pricePerLiter: 1050, cashCollected: 143550, posAmount: 83150 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2026-01-07",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2384519.15, closingReading: 2386333.16, pricePerLiter: 830, cashCollected: 588100, posAmount: 872829, shortageResolutions: [{ type: "debt", amount: 16600, liters: 20, debtor: "Oga look man", reason: "MD approved" }, { type: "debt", amount: 24900, liters: 30, debtor: "Bakery", reason: "MD approved" }, { type: "debt", amount: 3000, liters: 3.61, debtor: "Afikpo", reason: "MD approved" }] },
        { attendant: "Amarachi", pumpId: "PMP-003-A", product: "PMS", openingReading: 355582.51, closingReading: 360273.96, pricePerLiter: 830, cashCollected: 1272540, posAmount: 2616519.20, shortageResolutions: [{ type: "return to tank", amount: 4150, liters: 5, reason: "MD approved" }] },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-B", product: "PMS", openingReading: 160646.69, closingReading: 161660.42, pricePerLiter: 830, cashCollected: 608200, posAmount: 190000, shortageResolutions: [{ type: "debt", amount: 41500, liters: 50, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 700, liters: 0.84, debtor: "Customer", reason: "MD approved" }] },
        { attendant: "Esther", pumpId: "PMP-006-A", product: "PMS", openingReading: 605910.56, closingReading: 606931.22, pricePerLiter: 830, cashCollected: 717100, posAmount: 127500 },
      ],
      afternoon: [
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-A", product: "PMS", openingReading: 2386333.16, closingReading: 2390409.19, pricePerLiter: 830, cashCollected: 171700, posAmount: 3136312.40, shortageResolutions: [{ type: "debt", amount: 74700, liters: 90, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 360273.96, closingReading: 364136.09, pricePerLiter: 830, cashCollected: 557200, posAmount: 2516181.60, shortageResolutions: [{ type: "debt", amount: 131780, liters: 158.77, debtor: "Exodus", reason: "MD approved" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 161660.42, closingReading: 162655.35, pricePerLiter: 830, cashCollected: 554950, posAmount: 269760 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 208864.29, closingReading: 209043.06, pricePerLiter: 1050, cashCollected: 31700, posAmount: 103500, shortageResolutions: [{ type: "debt", amount: 52500, liters: 50, debtor: "House", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 463192.54, closingReading: 463230.63, pricePerLiter: 1050, cashCollected: 0, posAmount: 40000 },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 606931.22, closingReading: 608130.57, pricePerLiter: 830, cashCollected: 531740, posAmount: 462674 },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1215839.31, closingReading: 1218084.52, pricePerLiter: 830, cashCollected: 363200, posAmount: 565190, shortageResolutions: [{ type: "debt", amount: 273900, liters: 330, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 661086.70, liters: 796.49, debtor: "Maco oil", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  }
];