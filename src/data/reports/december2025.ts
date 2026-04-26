import { DailyReport } from "../../types/sales";

export const december2025: DailyReport[] = [
  {
    date: "2025-12-01",
    shifts: {
      morning: [
        { 
          attendant: "Miracle", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2267384.18, 
          closingReading: 2270164.81, 
          pricePerLiter: 940, 
          cashCollected: 194030, 
          posAmount: 1757137.60, 
          shortageResolutions: [
            { type: "debt", amount: 399500, liters: 425, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 56804.20, liters: 60.43, purpose: "Rice", reason: "MD and okoye" },
            { type: "debt", amount: 91180, liters: 97, debtor: "Multipro", reason: "MD approved" },
            { type: "debt", amount: 62322, liters: 66.30, debtor: "Chief Bestman", reason: "No idea" },
            { type: "debt", amount: 47000, liters: 50, debtor: "SASCP", reason: "MD approved" },
            { type: "return to tank", amount: 4700, liters: 5, reason: "Donald" }
          ] 
        },
        { 
          attendant: "Miriam", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2530056.39, 
          closingReading: 2534210.51, 
          pricePerLiter: 940, 
          cashCollected: 354370, 
          posAmount: 3242546, 
          shortageResolutions: [
            { type: "debt", amount: 308000, liters: 327.66, debtor: "Exodus", reason: "Donald" }
          ] 
        },
        { attendant: "Osinachi", pumpId: "PMP-003-A", product: "PMS", openingReading: 253853.66, closingReading: 255153.95, pricePerLiter: 940, cashCollected: 297600, posAmount: 923269 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 104114.82, 
          closingReading: 105494.05, 
          pricePerLiter: 940, 
          cashCollected: 594100, 
          posAmount: 609596.60, 
          shortageResolutions: [
            { type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 735899.19, closingReading: 737008.11, pricePerLiter: 940, cashCollected: 305600, posAmount: 735800 },
        { attendant: "Goodluck", pumpId: "PMP-006-A", product: "PMS", openingReading: 700775.42, closingReading: 702204.75, pricePerLiter: 940, cashCollected: 402070, posAmount: 900565 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 565643.47, closingReading: 565920.07, pricePerLiter: 940, cashCollected: 230500, posAmount: 29500 },
      ],
      afternoon: [
        { 
          attendant: "Chisom", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2270164.81, 
          closingReading: 2271803.31, 
          pricePerLiter: 940, 
          cashCollected: 411500, 
          posAmount: 1055883, 
          shortageResolutions: [
            { type: "debt", amount: 65800, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 6580, liters: 7, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2534210.51, closingReading: 2538957.15, pricePerLiter: 940, cashCollected: 449120, posAmount: 4012703 },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 255155.95, closingReading: 256425.74, pricePerLiter: 940, cashCollected: 387790, posAmount: 805822 },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 105494.05, closingReading: 106449.51, pricePerLiter: 940, cashCollected: 168950, posAmount: 727600 },
        { attendant: "Chukwuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 737008.11, closingReading: 737027.83, pricePerLiter: 940, cashCollected: 17400, posAmount: 1000 },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-005-B", 
          product: "PMS", 
          openingReading: 737027.83, 
          closingReading: 737950.65, 
          pricePerLiter: 940, 
          cashCollected: 337450, 
          posAmount: 416323.20, 
          shortageResolutions: [
            { type: "debt", amount: 112800, liters: 120, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Amarachi", pumpId: "PMP-006-A", product: "PMS", openingReading: 702204.75, closingReading: 702252.65, pricePerLiter: 940, cashCollected: 28000, posAmount: 17000 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 192605.61, 
          closingReading: 193092.65, 
          pricePerLiter: 1050, 
          cashCollected: 2000, 
          posAmount: 0, 
          shortageResolutions: [
            { type: "debt", amount: 404388, liters: 385.13, debtor: "Debt", reason: "No idea" },
            { type: "official use", amount: 105000, liters: 100, purpose: "Generator", reason: "Generator" }
          ] 
        },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 457043.69, closingReading: 457053.21, pricePerLiter: 1050, cashCollected: 10000, posAmount: 0 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-02",
    shifts: {
      morning: [
        { 
          attendant: "Chidera", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2271803.36, 
          closingReading: 2273706.41, 
          pricePerLiter: 910, 
          cashCollected: 202150, 
          posAmount: 1334924.40, 
          shortageResolutions: [
            { type: "debt", amount: 159250, liters: 175, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 34980.40, liters: 38.44, debtor: "Fidelity Bank", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2538957.15, 
          closingReading: 2543052.34, 
          pricePerLiter: 910, 
          cashCollected: 473870, 
          posAmount: 2449160.60, 
          shortageResolutions: [
            { type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 649585.30, liters: 713.83, debtor: "Maco oil", reason: "MD approved" },
            { type: "debt", amount: 100000, liters: 109.89, debtor: "Debt", reason: "MD approved" }
          ] 
        },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 106449.51, closingReading: 107571.40, pricePerLiter: 910, cashCollected: 674930, posAmount: 345392 },
        { 
          attendant: "Chukwuka", 
          pumpId: "PMP-005-B", 
          product: "PMS", 
          openingReading: 737950.65, 
          closingReading: 739140.06, 
          pricePerLiter: 910, 
          cashCollected: 886950, 
          posAmount: 186220, 
          shortageResolutions: [
            { type: "debt", amount: 8190, liters: 9, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 702252.66, 
          closingReading: 703986.65, 
          pricePerLiter: 910, 
          cashCollected: 544040, 
          posAmount: 906000, 
          shortageResolutions: [
            { type: "debt", amount: 127400, liters: 140, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2273706.41, 
          closingReading: 2275993.63, 
          pricePerLiter: 910, 
          cashCollected: 612800, 
          posAmount: 1374877.30, 
          shortageResolutions: [
            { type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 26526.60, liters: 29.15, debtor: "Debt", reason: "Donald" }
          ] 
        },
        { attendant: "Celestina", pumpId: "PMP-002-B", product: "PMS", openingReading: 2543052.34, closingReading: 2543198.53, pricePerLiter: 910, cashCollected: 67200, posAmount: 65800 },
        { 
          attendant: "Celestina", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 256425.74, 
          closingReading: 259339.65, 
          pricePerLiter: 910, 
          cashCollected: 286800, 
          posAmount: 2263956, 
          shortageResolutions: [
            { type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 46480, liters: 51.08, debtor: "Exodus", reason: "No idea" }
          ] 
        },
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 107571.40, 
          closingReading: 108848.58, 
          pricePerLiter: 910, 
          cashCollected: 731450, 
          posAmount: 393080, 
          shortageResolutions: [
            { type: "debt", amount: 36400, liters: 40, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Esther", pumpId: "PMP-005-B", product: "PMS", openingReading: 739140.06, closingReading: 740185.34, pricePerLiter: 910, cashCollected: 766820, posAmount: 183550 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 193092.65, closingReading: 193583.96, pricePerLiter: 1050, cashCollected: 0, posAmount: 515800 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-B", 
          product: "AGO", 
          openingReading: 457053.21, 
          closingReading: 457174.08, 
          pricePerLiter: 1050, 
          cashCollected: 22800, 
          posAmount: 59200, 
          shortageResolutions: [
            { type: "debt", amount: 37000, liters: 35.24, debtor: "No idea", reason: "Donald" },
            { type: "debt", amount: 8000, liters: 7.62, debtor: "Okoye", reason: "Hospital" }
          ] 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-03",
    shifts: {
      morning: [
        { 
          attendant: "Chukwuka", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2275993.64, 
          closingReading: 2278549.48, 
          pricePerLiter: 910, 
          cashCollected: 290200, 
          posAmount: 1920480, 
          shortageResolutions: [
            { type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 60060, liters: 66, purpose: "MD", reason: "Travel" }
          ] 
        },
        { 
          attendant: "Chidera", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2543198.53, 
          closingReading: 2546628.75, 
          pricePerLiter: 910, 
          cashCollected: 879650, 
          posAmount: 2214453.40, 
          shortageResolutions: [
            { type: "debt", amount: 27300, liters: 30, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 108848.58, 
          closingReading: 110137.77, 
          pricePerLiter: 910, 
          cashCollected: 463950, 
          posAmount: 405770, 
          shortageResolutions: [
            { type: "debt", amount: 236600, liters: 260, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 17290, liters: 19, debtor: "Multipro company", reason: "MD approved" },
            { type: "official use", amount: 48685, liters: 53.50, purpose: "MD", reason: "Travel" }
          ] 
        },
        { attendant: "Miriam", pumpId: "PMP-006-A", product: "PMS", openingReading: 703986.67, closingReading: 705424.23, pricePerLiter: 910, cashCollected: 463800, posAmount: 844000 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 565920.61, 
          closingReading: 567025.25, 
          pricePerLiter: 910, 
          cashCollected: 803700, 
          posAmount: 193845, 
          shortageResolutions: [
            { type: "return to tank", amount: 6879.60, liters: 7.56, reason: "Priming" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 259339.66, 
          closingReading: 259791.90, 
          pricePerLiter: 910, 
          cashCollected: 18400, 
          posAmount: 211000, 
          shortageResolutions: [
            { type: "debt", amount: 154700, liters: 170, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 13650, liters: 15, debtor: "Multipro company", reason: "MD approved" },
            { type: "official use", amount: 13358.80, liters: 14.68, purpose: "MD", reason: "Travel" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Esther", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2278549.48, 
          closingReading: 2280673.87, 
          pricePerLiter: 910, 
          cashCollected: 589010, 
          posAmount: 1298750, 
          shortageResolutions: [
            { type: "debt", amount: 27300, liters: 30, debtor: "First patriot", reason: "MD approved" },
            { type: "return to tank", amount: 18482.10, liters: 20.31, reason: "Weight and measure" }
          ] 
        },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 259791.90, 
          closingReading: 261151.84, 
          pricePerLiter: 910, 
          cashCollected: 237600, 
          posAmount: 812678.50, 
          shortageResolutions: [
            { type: "debt", amount: 131950, liters: 145, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 36400, liters: 40, debtor: "Multipro company", reason: "MD approved" },
            { type: "return to tank", amount: 18482.10, liters: 20.31, reason: "Weight and measure" }
          ] 
        },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 110137.77, closingReading: 110971.55, pricePerLiter: 910, cashCollected: 108050, posAmount: 649959 },
        { attendant: "Amarachi", pumpId: "PMP-005-A", product: "PMS", openingReading: 1170838.62, closingReading: 1171264.90, pricePerLiter: 910, cashCollected: 43100, posAmount: 344600 },
        { attendant: "Celestina", pumpId: "PMP-005-B", product: "PMS", openingReading: 740185.34, closingReading: 740460.21, pricePerLiter: 910, cashCollected: 187900, posAmount: 62000 },
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 567025.25, 
          closingReading: 568348.49, 
          pricePerLiter: 910, 
          cashCollected: 789350, 
          posAmount: 368300, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 193583.96, 
          closingReading: 194103.90, 
          pricePerLiter: 1050, 
          cashCollected: 155100, 
          posAmount: 329300, 
          shortageResolutions: [
            { type: "debt", amount: 60900, liters: 58, debtor: "MD and okoye", reason: "Travel" }
          ] 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-04",
    shifts: {
      morning: [
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2280673.88, 
          closingReading: 2283725.71, 
          pricePerLiter: 910, 
          cashCollected: 762600, 
          posAmount: 1890354.60, 
          shortageResolutions: [
            { type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 69160, liters: 76, purpose: "Adazi", reason: "MD approved" }
          ] 
        },
        { attendant: "Chidera", pumpId: "PMP-003-B", product: "PMS", openingReading: 110971.55, closingReading: 112380.77, pricePerLiter: 910, cashCollected: 233640, posAmount: 1047865 },
        { 
          attendant: "Chukwuka", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2546628.75, 
          closingReading: 2550599.09, 
          pricePerLiter: 910, 
          cashCollected: 788900, 
          posAmount: 1979392, 
          shortageResolutions: [
            { type: "debt", amount: 51760, liters: 56.88, debtor: "Osinachi", reason: "Donald" },
            { type: "debt", amount: 792970.40, liters: 871.40, debtor: "Nwoke mgbo", reason: "Donald" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 705424.24, 
          closingReading: 706935.35, 
          pricePerLiter: 910, 
          cashCollected: 398960, 
          posAmount: 967663, 
          shortageResolutions: [
            { type: "debt", amount: 8190, liters: 9, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Miriam", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 568348.49, 
          closingReading: 569500.46, 
          pricePerLiter: 910, 
          cashCollected: 219550, 
          posAmount: 783182, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2283725.71, 
          closingReading: 2286164.88, 
          pricePerLiter: 910, 
          cashCollected: 310170, 
          posAmount: 1790671, 
          shortageResolutions: [
            { type: "debt", amount: 118300, liters: 130, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Amarachi", pumpId: "PMP-003-A", product: "PMS", openingReading: 261151.98, closingReading: 263907.54, pricePerLiter: 910, cashCollected: 367600, posAmount: 2139513 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 112380.77, closingReading: 113456.17, pricePerLiter: 910, cashCollected: 660000, posAmount: 317800 },
        { 
          attendant: "Donald", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 706935.35, 
          closingReading: 707657.06, 
          pricePerLiter: 910, 
          cashCollected: 91600, 
          posAmount: 100262, 
          shortageResolutions: [
            { type: "debt", amount: 404950, liters: 445, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 23660, liters: 26, debtor: "Multipro company", reason: "MD approved" },
            { type: "official use", amount: 36400, liters: 40, purpose: "No idea", reason: "Lukeman" }
          ] 
        },
        { 
          attendant: "Celestina", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 569500.46, 
          closingReading: 570461.22, 
          pricePerLiter: 910, 
          cashCollected: 499290, 
          posAmount: 328600, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 194103.90, 
          closingReading: 194549.43, 
          pricePerLiter: 1050, 
          cashCollected: 0, 
          posAmount: 47800, 
          shortageResolutions: [
            { type: "official use", amount: 315000, liters: 300, purpose: "For truck", reason: "Abduraman" },
            { type: "official use", amount: 105000, liters: 100, purpose: "Generator", reason: "For generator" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-B", 
          product: "AGO", 
          openingReading: 457174.08, 
          closingReading: 458223.93, 
          pricePerLiter: 1050, 
          cashCollected: 43500, 
          posAmount: 162200, 
          shortageResolutions: [
            { type: "official use", amount: 787500, liters: 750, purpose: "For truck", reason: "Oga Emeka" },
            { type: "debt", amount: 109500, liters: 104.29, debtor: "Governor brother", reason: "Donald" }
          ] 
        },
      ]
    },
    bankDeposits: []
  }
];