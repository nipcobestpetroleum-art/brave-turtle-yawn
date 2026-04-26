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
  },
  {
    date: "2025-12-05",
    shifts: {
      morning: [
        { 
          attendant: "Esther", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2286164.88, 
          closingReading: 2288219.77, 
          pricePerLiter: 910, 
          cashCollected: 448800, 
          posAmount: 1372761, 
          shortageResolutions: [
            { type: "debt", amount: 43507.10, liters: 47.81, debtor: "Fidelity Bank", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2550599.09, 
          closingReading: 2555815.90, 
          pricePerLiter: 910, 
          cashCollected: 879100, 
          posAmount: 3214112, 
          shortageResolutions: [
            { type: "debt", amount: 654535.70, liters: 719.27, debtor: "Maco", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 263907.55, 
          closingReading: 264242.56, 
          pricePerLiter: 910, 
          cashCollected: 18500, 
          posAmount: 72600, 
          shortageResolutions: [
            { type: "debt", amount: 213850, liters: 235, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 113456.17, closingReading: 114675.00, pricePerLiter: 910, cashCollected: 354400, posAmount: 753770 },
        { 
          attendant: "Chidera", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 707657.07, 
          closingReading: 709593.57, 
          pricePerLiter: 910, 
          cashCollected: 515820, 
          posAmount: 1200386.50, 
          shortageResolutions: [
            { type: "debt", amount: 40040, liters: 44, debtor: "Multipro", reason: "MD approved" },
            { type: "return to tank", amount: 5460, liters: 6, reason: "Donald" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 570461.22, 
          closingReading: 571659.55, 
          pricePerLiter: 910, 
          cashCollected: 697960, 
          posAmount: 380797, 
          shortageResolutions: [
            { type: "debt", amount: 8190, liters: 9, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Celestina", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2288219.77, 
          closingReading: 2290478.36, 
          pricePerLiter: 910, 
          cashCollected: 545900, 
          posAmount: 1463384, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "SASCP", reason: "MD approved" }
          ] 
        },
        { attendant: "Ogochukwu", pumpId: "PMP-002-B", product: "PMS", openingReading: 2555815.90, closingReading: 2559189.41, pricePerLiter: 910, cashCollected: 415500, posAmount: 2654380 },
        { attendant: "Ogochukwu", pumpId: "PMP-003-A", product: "PMS", openingReading: 264242.56, closingReading: 266445.86, pricePerLiter: 910, cashCollected: 390500, posAmount: 1614007 },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 114675.00, 
          closingReading: 115904.67, 
          pricePerLiter: 910, 
          cashCollected: 557350, 
          posAmount: 550382, 
          shortageResolutions: [
            { type: "debt", amount: 10300, liters: 11.32, debtor: "Ukamaka", reason: "No idea" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1171265.05, 
          closingReading: 1172205.21, 
          pricePerLiter: 910, 
          cashCollected: 69400, 
          posAmount: 571509.30, 
          shortageResolutions: [
            { type: "debt", amount: 182000, liters: 200, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 32760, liters: 36, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
        { attendant: "Miriam", pumpId: "PMP-005-B", product: "PMS", openingReading: 740460.21, closingReading: 741566.17, pricePerLiter: 910, cashCollected: 801300, posAmount: 203000 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 194549.43, 
          closingReading: 196240.35, 
          pricePerLiter: 1050, 
          cashCollected: 0, 
          posAmount: 843000, 
          shortageResolutions: [
            { type: "debt", amount: 932400, liters: 888, debtor: "Zenith Bank", reason: "MD approved" }
          ] 
        },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 458223.93, closingReading: 458419.93, pricePerLiter: 1050, cashCollected: 81300, posAmount: 124600 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-06",
    shifts: {
      morning: [
        { 
          attendant: "Miracle", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2290478.36, 
          closingReading: 2292949.31, 
          pricePerLiter: 910, 
          cashCollected: 440800, 
          posAmount: 1656502, 
          shortageResolutions: [
            { type: "debt", amount: 145600, liters: 160, debtor: "First patriot", reason: "MD approved" },
            { type: "return to tank", amount: 4550, liters: 5, reason: "Donald" }
          ] 
        },
        { attendant: "Miriam", pumpId: "PMP-002-B", product: "PMS", openingReading: 2559189.41, closingReading: 2562012.21, pricePerLiter: 910, cashCollected: 623130, posAmount: 1945484 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 115904.67, closingReading: 117141.97, pricePerLiter: 910, cashCollected: 351400, posAmount: 773520 },
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 709593.58, closingReading: 711456.77, pricePerLiter: 910, cashCollected: 1045573, posAmount: 649350 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 571659.55, closingReading: 572944.28, pricePerLiter: 910, cashCollected: 410300, posAmount: 757720 },
      ],
      afternoon: [
        { 
          attendant: "Esther", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2292949.31, 
          closingReading: 2294683.33, 
          pricePerLiter: 910, 
          cashCollected: 429300, 
          posAmount: 1084620, 
          shortageResolutions: [
            { type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Celestina", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 266445.87, 
          closingReading: 269896.30, 
          pricePerLiter: 910, 
          cashCollected: 360000, 
          posAmount: 2716200.50, 
          shortageResolutions: [
            { type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 117141.97, 
          closingReading: 118332.18, 
          pricePerLiter: 910, 
          cashCollected: 501950, 
          posAmount: 534679, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1172205.23, 
          closingReading: 1172781.50, 
          pricePerLiter: 910, 
          cashCollected: 190850, 
          posAmount: 137600, 
          shortageResolutions: [
            { type: "debt", amount: 195650, liters: 215, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Ogochukwu", pumpId: "PMP-005-B", product: "PMS", openingReading: 741566.17, closingReading: 743183.56, pricePerLiter: 910, cashCollected: 426550, posAmount: 1043170 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 196240.35, 
          closingReading: 197031.21, 
          pricePerLiter: 1050, 
          cashCollected: 217000, 
          posAmount: 246000, 
          shortageResolutions: [
            { type: "debt", amount: 262500, liters: 250, debtor: "Governor's brother", reason: "Donald" },
            { type: "official use", amount: 105000, liters: 100, purpose: "Generator", reason: "Gen use" }
          ] 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-07",
    shifts: {
      morning: [
        { 
          attendant: "Donald", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2562012.21, 
          closingReading: 2563778.91, 
          pricePerLiter: 910, 
          cashCollected: 51350, 
          posAmount: 720950, 
          shortageResolutions: [
            { type: "debt", amount: 154700, liters: 170, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 680716.40, liters: 748.04, debtor: "Maco oil", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2025-12-08",
    shifts: {
      morning: [
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 118332.18, closingReading: 119830.26, pricePerLiter: 910, cashCollected: 785000, posAmount: 577280 },
        { attendant: "Amarachi", pumpId: "PMP-006-B", product: "PMS", openingReading: 572944.28, closingReading: 574312.63, pricePerLiter: 910, cashCollected: 378100, posAmount: 866100 },
        { attendant: "Miracle", pumpId: "PMP-003-A", product: "PMS", openingReading: 269896.32, closingReading: 274152.10, pricePerLiter: 910, cashCollected: 458750, posAmount: 3414597 },
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2294683.34, 
          closingReading: 2297833.86, 
          pricePerLiter: 910, 
          cashCollected: 730100, 
          posAmount: 2063361, 
          shortageResolutions: [
            { type: "debt", amount: 36400, liters: 40, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 18200, liters: 20, debtor: "Multipro company", reason: "MD approved" },
            { type: "official use", amount: 18200, liters: 20, purpose: "Lukeman" }
          ] 
        },
      ],
      afternoon: [
        { attendant: "Chukwuka", pumpId: "PMP-006-A", product: "PMS", openingReading: 574312.63, closingReading: 575297.24, pricePerLiter: 910, cashCollected: 621450, posAmount: 273559 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2297833.86, 
          closingReading: 2299502.67, 
          pricePerLiter: 910, 
          cashCollected: 389100, 
          posAmount: 1092652.40, 
          shortageResolutions: [
            { type: "debt", amount: 36400, liters: 40, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Chisom", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 274152.10, 
          closingReading: 275356.04, 
          pricePerLiter: 910, 
          cashCollected: 169600, 
          posAmount: 880072, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Miriam", pumpId: "PMP-003-B", product: "PMS", openingReading: 119830.26, closingReading: 120830.79, pricePerLiter: 910, cashCollected: 478950, posAmount: 430589 },
        { attendant: "Chidera", pumpId: "PMP-002-B", product: "PMS", openingReading: 2563778.91, closingReading: 2567228.08, pricePerLiter: 910, cashCollected: 302050, posAmount: 2837012.70 },
        { 
          attendant: "Donald", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1172781.59, 
          closingReading: 1173836.10, 
          pricePerLiter: 910, 
          cashCollected: 169000, 
          posAmount: 282800, 
          shortageResolutions: [
            { type: "debt", amount: 455000, liters: 500, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 52780, liters: 58, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 197031.21, 
          closingReading: 197180.21, 
          pricePerLiter: 1050, 
          cashCollected: 15750, 
          posAmount: 88200, 
          shortageResolutions: [
            { type: "official use", amount: 52500, liters: 50, purpose: "House", reason: "House" }
          ] 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-09",
    shifts: {
      morning: [
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 275356.05, 
          closingReading: 277470.92, 
          pricePerLiter: 910, 
          cashCollected: 316020, 
          posAmount: 1527931.30, 
          shortageResolutions: [
            { type: "debt", amount: 45500, liters: 50, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 34580, liters: 38, debtor: "Fidelity Bank", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1173836.11, 
          closingReading: 1180576.58, 
          pricePerLiter: 910, 
          cashCollected: 4661015, 
          posAmount: 478600, 
          shortageResolutions: [
            { type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 843642.80, liters: 927.08, debtor: "No idea", reason: "No idea" },
            { type: "return to tank", amount: 4550, liters: 5, reason: "Donald" },
            { type: "debt", amount: 91000, liters: 100, debtor: "Osinachi Solomon", reason: "MD approved" }
          ] 
        },
        { attendant: "Celestina", pumpId: "PMP-005-B", product: "PMS", openingReading: 743183.58, closingReading: 744829.78, pricePerLiter: 910, cashCollected: 348370, posAmount: 1145760 },
        { 
          attendant: "Esther", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 711456.84, 
          closingReading: 712936.38, 
          pricePerLiter: 910, 
          cashCollected: 428760, 
          posAmount: 774510, 
          shortageResolutions: [
            { type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 36400, liters: 40, debtor: "Chief Bestman", reason: "MD approved" },
            { type: "debt", amount: 51324, liters: 56.40, debtor: "Donald", reason: "No idea" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 575297.24, 
          closingReading: 576830.13, 
          pricePerLiter: 910, 
          cashCollected: 795870, 
          posAmount: 465403, 
          shortageResolutions: [
            { type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 68250, liters: 75, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: [
        { attendant: "Chukwuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 277470.92, closingReading: 278490.47, pricePerLiter: 910, cashCollected: 327850, posAmount: 599372 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1180576.58, 
          closingReading: 1182674.01, 
          pricePerLiter: 910, 
          cashCollected: 123120, 
          posAmount: 1767110, 
          shortageResolutions: [
            { type: "debt", amount: 18200, liters: 20, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { attendant: "Chidera", pumpId: "PMP-005-B", product: "PMS", openingReading: 744829.78, closingReading: 745532.74, pricePerLiter: 910, cashCollected: 39400, posAmount: 599454 },
        { 
          attendant: "Miriam", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 712936.38, 
          closingReading: 714110.96, 
          pricePerLiter: 910, 
          cashCollected: 342000, 
          posAmount: 517783, 
          shortageResolutions: [
            { type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 146000, liters: 160.44, debtor: "Nwanyi nkwogwu", reason: "Precious" }
          ] 
        },
        { 
          attendant: "Chisom", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 576830.13, 
          closingReading: 577511.70, 
          pricePerLiter: 910, 
          cashCollected: 296300, 
          posAmount: 232400, 
          shortageResolutions: [
            { type: "debt", amount: 91000, liters: 100, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 197180.21, 
          closingReading: 197755.76, 
          pricePerLiter: 1050, 
          cashCollected: 0, 
          posAmount: 93200, 
          shortageResolutions: [
            { type: "debt", amount: 511077, liters: 486.74, debtor: "Governor's brother", reason: "No idea" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-B", 
          product: "AGO", 
          openingReading: 458419.93, 
          closingReading: 458503.93, 
          pricePerLiter: 1050, 
          cashCollected: 44450, 
          posAmount: 0, 
          shortageResolutions: [
            { type: "debt", amount: 42800, liters: 40.76, debtor: "Nwoke mgbo", reason: "Donald" }
          ] 
        },
        { 
          attendant: "Miriam", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 714110.96, 
          closingReading: 714385.06, 
          pricePerLiter: 910, 
          cashCollected: 0, 
          posAmount: 50000, 
          shortageResolutions: [
            { type: "debt", amount: 200200, liters: 220, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 714385.06, 
          closingReading: 715051.30, 
          pricePerLiter: 910, 
          cashCollected: 16500, 
          posAmount: 0, 
          shortageResolutions: [
            { type: "debt", amount: 589771, liters: 648.10, debtor: "Maco", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-A", 
          product: "AGO", 
          openingReading: 197755.76, 
          closingReading: 197964.77, 
          pricePerLiter: 1050, 
          cashCollected: 0, 
          posAmount: 219500 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-10",
    shifts: {
      morning: [
        { 
          attendant: "Celestina", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2299502.80, 
          closingReading: 2300993.89, 
          pricePerLiter: 910, 
          cashCollected: 163400, 
          posAmount: 1101992, 
          shortageResolutions: [
            { type: "debt", amount: 91000, liters: 100, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2567228.13, 
          closingReading: 2569723.96, 
          pricePerLiter: 910, 
          cashCollected: 138420, 
          posAmount: 2042468.70, 
          shortageResolutions: [
            { type: "debt", amount: 91000, liters: 100, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 278491.40, 
          closingReading: 280178.55, 
          pricePerLiter: 910, 
          cashCollected: 160600, 
          posAmount: 896400, 
          shortageResolutions: [
            { type: "debt", amount: 254800, liters: 280, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 19110, liters: 21, debtor: "Multipro company", reason: "MD approved" },
            { type: "debt", amount: 184061.80, liters: 202.27, debtor: "Chikwado", reason: "MD approved" },
            { type: "debt", amount: 20000, liters: 21.98, debtor: "Oga look man", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 715051.31, 
          closingReading: 716141.52, 
          pricePerLiter: 910, 
          cashCollected: 207100, 
          posAmount: 784600 
        },
        { 
          attendant: "Chidimma", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 120830.83, 
          closingReading: 121914.82, 
          pricePerLiter: 910, 
          cashCollected: 502840, 
          posAmount: 445775, 
          shortageResolutions: [
            { type: "debt", amount: 37310, liters: 41, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Esther", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 577511.70, 
          closingReading: 578712.98, 
          pricePerLiter: 910, 
          cashCollected: 231350, 
          posAmount: 832630, 
          shortageResolutions: [
            { type: "debt", amount: 28210, liters: 31, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-11",
    shifts: {
      morning: [
        { attendant: "Chisom", pumpId: "PMP-002-A", product: "PMS", openingReading: 2300993.89, closingReading: 2302744.67, pricePerLiter: 910, cashCollected: 209300, posAmount: 1105889, shortageResolutions: [{ type: "debt", amount: 277550, liters: 305, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidera", pumpId: "PMP-003-A", product: "PMS", openingReading: 280178.55, closingReading: 281578.34, pricePerLiter: 910, cashCollected: 166400, posAmount: 1043368, shortageResolutions: [{ type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-B", product: "PMS", openingReading: 121914.82, closingReading: 123004.49, pricePerLiter: 910, cashCollected: 175700, posAmount: 705729.60, shortageResolutions: [{ type: "debt", amount: 109200, liters: 120, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 197964.77, closingReading: 198365.96, pricePerLiter: 1050, cashCollected: 52400, posAmount: 211500, shortageResolutions: [{ type: "official use", amount: 52500, liters: 50, purpose: "House", reason: "MD approved" }, { type: "official use", amount: 105000, liters: 100, purpose: "Generator", reason: "MD approved" }] },
        { attendant: "Miriam", pumpId: "PMP-006-B", product: "PMS", openingReading: 578712.98, closingReading: 579794.48, pricePerLiter: 910, cashCollected: 445100, posAmount: 538010 },
        { attendant: "Chukwuka", pumpId: "PMP-002-B", product: "PMS", openingReading: 2569723.96, closingReading: 2572414.18, pricePerLiter: 910, cashCollected: 504100, posAmount: 1941857 },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2025-12-12",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-006-B", product: "PMS", openingReading: 579794.48, closingReading: 581166.07, pricePerLiter: 910, cashCollected: 631700, posAmount: 371312, shortageResolutions: [{ type: "debt", amount: 232050, liters: 255, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 8190, liters: 9, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Chidimma", pumpId: "PMP-006-A", product: "PMS", openingReading: 716141.53, closingReading: 717363.76, pricePerLiter: 910, cashCollected: 268400, posAmount: 843500 },
        { attendant: "Ogochukwu", pumpId: "PMP-003-B", product: "PMS", openingReading: 123004.49, closingReading: 124365.03, pricePerLiter: 910, cashCollected: 335950, posAmount: 901270 },
        { attendant: "Amarachi", pumpId: "PMP-003-A", product: "PMS", openingReading: 281578.35, closingReading: 283273.59, pricePerLiter: 910, cashCollected: 493500, posAmount: 991702.30, shortageResolutions: [{ type: "debt", amount: 12740, liters: 14, debtor: "Multipro", reason: "MD approved" }, { type: "debt", amount: 44226, liters: 48.60, debtor: "Fidelity Bank", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-002-B", product: "PMS", openingReading: 2572414.18, closingReading: 2576423.59, pricePerLiter: 910, cashCollected: 227950, posAmount: 2790127, shortageResolutions: [{ type: "debt", amount: 630493.50, liters: 692.85, debtor: "Maco", reason: "MD approved" }] },
        { attendant: "Esther", pumpId: "PMP-002-A", product: "PMS", openingReading: 2302744.68, closingReading: 2304170.49, pricePerLiter: 910, cashCollected: 301210, posAmount: 941070, shortageResolutions: [{ type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" }] },
      ],
      afternoon: [
        { attendant: "Miriam", pumpId: "PMP-002-A", product: "PMS", openingReading: 2304170.49, closingReading: 2306149.15, pricePerLiter: 910, cashCollected: 328000, posAmount: 1363143, shortageResolutions: [{ type: "debt", amount: 109200, liters: 120, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chisom", pumpId: "PMP-002-B", product: "PMS", openingReading: 2576423.59, closingReading: 2578478.93, pricePerLiter: 910, cashCollected: 133400, posAmount: 1587556.10, shortageResolutions: [{ type: "debt", amount: 54600, liters: 60, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 91000, liters: 100, debtor: "Osinachi", reason: "MD" }, { type: "debt", amount: 4000, liters: 4.40, debtor: "Oga look man", reason: "MD approved" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-A", product: "PMS", openingReading: 283273.59, closingReading: 284927.23, pricePerLiter: 910, cashCollected: 388220, posAmount: 1070100, shortageResolutions: [{ type: "debt", amount: 45500, liters: 50, debtor: "MD and oga B", reason: "MD approved" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-B", product: "PMS", openingReading: 124365.03, closingReading: 125486.13, pricePerLiter: 910, cashCollected: 657900, posAmount: 360804 },
        { attendant: "Chidera", pumpId: "PMP-006-B", product: "PMS", openingReading: 581166.07, closingReading: 582536.60, pricePerLiter: 910, cashCollected: 368170, posAmount: 878200 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 198365.96, closingReading: 199107.51, pricePerLiter: 1050, cashCollected: 73677.50, posAmount: 125850, shortageResolutions: [{ type: "debt", amount: 569100, liters: 542, debtor: "Governor's brother", reason: "MD approved" }, { type: "debt", amount: 10000, liters: 9.52, debtor: "Oga look man", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 458503.93, closingReading: 458578.93, pricePerLiter: 1050, cashCollected: 78722.50, posAmount: 0 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-13",
    shifts: {
      morning: [
        { attendant: "Miracle", pumpId: "PMP-002-A", product: "PMS", openingReading: 2306149.15, closingReading: 2307744.24, pricePerLiter: 910, cashCollected: 185700, posAmount: 867228, shortageResolutions: [{ type: "debt", amount: 354900, liters: 390, debtor: "First patriot", reason: "MD approved" }, { type: "debt", amount: 42770, liters: 47, debtor: "Multipro company", reason: "MD approved" }] },
        { attendant: "Esther", pumpId: "PMP-002-B", product: "PMS", openingReading: 2578478.94, closingReading: 2581326.95, pricePerLiter: 910, cashCollected: 501910, posAmount: 2026286, shortageResolutions: [{ type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Celestina", pumpId: "PMP-003-A", product: "PMS", openingReading: 284927.24, closingReading: 286183.98, pricePerLiter: 910, cashCollected: 241460, posAmount: 901720 },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 125486.13, closingReading: 125516.39, pricePerLiter: 910, cashCollected: 22500, posAmount: 5000 },
        { attendant: "Amarachi", pumpId: "PMP-003-B", product: "PMS", openingReading: 125516.39, closingReading: 126681.64, pricePerLiter: 910, cashCollected: 605670, posAmount: 453800 },
        { attendant: "Ogochukwu", pumpId: "PMP-006-A", product: "PMS", openingReading: 717363.78, closingReading: 718888.15, pricePerLiter: 910, cashCollected: 335550, posAmount: 1049127 },
        { attendant: "Chidimma Okoro", pumpId: "PMP-006-B", product: "PMS", openingReading: 582536.60, closingReading: 583707.63, pricePerLiter: 910, cashCollected: 659110, posAmount: 405700 },
      ],
      afternoon: [
        { attendant: "Chidera", pumpId: "PMP-002-A", product: "PMS", openingReading: 2307744.24, closingReading: 2309631.49, pricePerLiter: 910, cashCollected: 306650, posAmount: 1361234, shortageResolutions: [{ type: "official use", amount: 27300, liters: 30, purpose: "Bread bus", reason: "MD approved" }, { type: "return to tank", amount: 3503.50, liters: 3.85, reason: "MD approved" }, { type: "debt", amount: 18200, liters: 20, debtor: "Oga look man", reason: "MD approved" }] },
        { attendant: "Miriam", pumpId: "PMP-002-B", product: "PMS", openingReading: 2581326.95, closingReading: 2583934.05, pricePerLiter: 910, cashCollected: 454150, posAmount: 1827364, shortageResolutions: [{ type: "debt", amount: 91000, liters: 100, debtor: "Solomon", reason: "MD approved" }] },
        { attendant: "Chukwuka", pumpId: "PMP-003-A", product: "PMS", openingReading: 286183.98, closingReading: 287521.52, pricePerLiter: 910, cashCollected: 363100, posAmount: 853529 },
        { attendant: "Chisom", pumpId: "PMP-003-B", product: "PMS", openingReading: 126681.64, closingReading: 127627.34, pricePerLiter: 910, cashCollected: 432620, posAmount: 338150, shortageResolutions: [{ type: "debt", amount: 91000, liters: 100, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-006-B", product: "PMS", openingReading: 583707.63, closingReading: 584900.72, pricePerLiter: 910, cashCollected: 352900, posAmount: 668135, shortageResolutions: [{ type: "debt", amount: 63700, liters: 70, debtor: "First patriot", reason: "MD approved" }] },
        { attendant: "Donald", pumpId: "PMP-006-A", product: "PMS", openingReading: 718888.15, closingReading: 719002.82, pricePerLiter: 910, cashCollected: 44300, posAmount: 60000 },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 199107.51, closingReading: 199465.75, pricePerLiter: 1050, cashCollected: 94252, posAmount: 281900 },
        { attendant: "Donald", pumpId: "AGO-001-B", product: "AGO", openingReading: 458578.93, closingReading: 458628.93, pricePerLiter: 1050, cashCollected: 10328, posAmount: 0, shortageResolutions: [{ type: "official use", amount: 42000, liters: 40, purpose: "House", reason: "MD approved" }] },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-14",
    shifts: {
      morning: [
        { attendant: "Donald", pumpId: "PMP-003-A", product: "PMS", openingReading: 287521.52, closingReading: 288960.96, pricePerLiter: 910, cashCollected: 1297184, posAmount: 12700 },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1182677.48, closingReading: 1183717.06, pricePerLiter: 910, cashCollected: 754900, posAmount: 0, shortageResolutions: [{ type: "debt", amount: 191100, liters: 210, debtor: "First patriot", reason: "MD approved" }] },
      ],
      afternoon: []
    },
    bankDeposits: []
  },
  {
    date: "2025-12-15",
    shifts: {
      morning: [
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2309631.51, 
          closingReading: 2312550.46, 
          pricePerLiter: 900, 
          cashCollected: 385700, 
          posAmount: 2102952, 
          shortageResolutions: [
            { type: "debt", amount: 63000, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 10800, liters: 12, debtor: "Multipro company", reason: "MD approved" },
            { type: "debt", amount: 63000, liters: 70, debtor: "Donald", reason: "No idea" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2583934.05, 
          closingReading: 2588865.52, 
          pricePerLiter: 900, 
          cashCollected: 3243255, 
          posAmount: 3152255, 
          shortageResolutions: [
            { type: "debt", amount: 166500, liters: 185, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 642411, liters: 713.79, debtor: "Maco oil", reason: "MD approved" },
            { type: "debt", amount: 35100, liters: 39, debtor: "Multipro", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Miriam", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 288960.97, 
          closingReading: 290855.93, 
          pricePerLiter: 900, 
          cashCollected: 465590, 
          posAmount: 1185935, 
          shortageResolutions: [
            { type: "debt", amount: 36000, liters: 40, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 12600, liters: 14, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Chidera", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 127627.34, 
          closingReading: 129070.52, 
          pricePerLiter: 900, 
          cashCollected: 631650, 
          posAmount: 652630, 
          shortageResolutions: [
            { type: "official use", amount: 12006, liters: 13.34, purpose: "Feeding", reason: "MD approved" }
          ] 
        },
        { attendant: "Chukwuka", pumpId: "PMP-005-B", product: "PMS", openingReading: 745532.74, closingReading: 747013.10, pricePerLiter: 900, cashCollected: 433750, posAmount: 895915 },
        { 
          attendant: "Chisom", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1183717.06, 
          closingReading: 1184001.42, 
          pricePerLiter: 900, 
          cashCollected: 31100, 
          posAmount: 53000, 
          shortageResolutions: [
            { type: "debt", amount: 171000, liters: 190, debtor: "First patriot", reason: "MD approved" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Chidimma Okoro", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2312550.46, 
          closingReading: 2314196.30, 
          pricePerLiter: 900, 
          cashCollected: 515250, 
          posAmount: 859230.71, 
          shortageResolutions: [
            { type: "debt", amount: 27000, liters: 30, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 79452, liters: 88.28, purpose: "MD and expenses", reason: "Plumbing" }
          ] 
        },
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2588865.52, 
          closingReading: 2591091.76, 
          pricePerLiter: 900, 
          cashCollected: 318050, 
          posAmount: 1663280, 
          shortageResolutions: [
            { type: "debt", amount: 10000, liters: 11.11, debtor: "Debt", reason: "No idea" },
            { type: "return to tank", amount: 12204, liters: 13.56, reason: "Donald" }
          ] 
        },
        { attendant: "Esther", pumpId: "PMP-003-A", product: "PMS", openingReading: 290855.93, closingReading: 291906.56, pricePerLiter: 900, cashCollected: 280650, posAmount: 664215 },
        { attendant: "Celestina", pumpId: "PMP-003-B", product: "PMS", openingReading: 129070.52, closingReading: 130012.98, pricePerLiter: 900, cashCollected: 458110, posAmount: 388300 },
        { attendant: "Donald", pumpId: "PMP-005-A", product: "PMS", openingReading: 1184001.42, closingReading: 1184144.93, pricePerLiter: 900, cashCollected: 72800, posAmount: 56200 },
        { 
          attendant: "Amarachi", 
          pumpId: "PMP-005-B", 
          product: "PMS", 
          openingReading: 747013.10, 
          closingReading: 748228.26, 
          pricePerLiter: 900, 
          cashCollected: 434100, 
          posAmount: 591803, 
          shortageResolutions: [
            { type: "debt", amount: 63000, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "return to tank", amount: 3060, liters: 3.40, reason: "Donald" }
          ] 
        },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 199465.75, closingReading: 199715.01, pricePerLiter: 1050, cashCollected: 0, posAmount: 261500 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-B", 
          product: "AGO", 
          openingReading: 458628.90, 
          closingReading: 458886.47, 
          pricePerLiter: 1050, 
          cashCollected: 23800, 
          posAmount: 0, 
          shortageResolutions: [
            { type: "official use", amount: 210000, liters: 200, purpose: "Generator and house", reason: "Official use" },
            { type: "debt", amount: 18500, liters: 17.62, debtor: "Debt", reason: "No idea" },
            { type: "official use", amount: 18406.50, liters: 17.53, purpose: "Hillux" }
          ] 
        },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-16",
    shifts: {
      morning: [
        { 
          attendant: "Chukwuka", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2314196.32, 
          closingReading: 2316391.86, 
          pricePerLiter: 880, 
          cashCollected: 518650, 
          posAmount: 1230860, 
          shortageResolutions: [
            { type: "debt", amount: 39600, liters: 45, debtor: "Chief Bestman", reason: "MD approved" },
            { type: "debt", amount: 9680, liters: 11, debtor: "Multipro company", reason: "MD approved" },
            { type: "debt", amount: 32744.80, liters: 37.21, debtor: "Fidelity Bank", reason: "MD approved" },
            { type: "official use", amount: 100003.20, liters: 113.64, purpose: "Electricity", reason: "Recharging of light" }
          ] 
        },
        { 
          attendant: "Chidera", 
          pumpId: "PMP-003-A", 
          product: "PMS", 
          openingReading: 291906.56, 
          closingReading: 295036.98, 
          pricePerLiter: 880, 
          cashCollected: 637690, 
          posAmount: 2008685.20, 
          shortageResolutions: [
            { type: "debt", amount: 88000, liters: 100, debtor: "Osinachi Solomon", reason: "MD approved" },
            { type: "debt", amount: 20000, liters: 22.73, debtor: "Okoye", reason: "No idea" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 130012.98, 
          closingReading: 131198.94, 
          pricePerLiter: 880, 
          cashCollected: 579170, 
          posAmount: 219948, 
          shortageResolutions: [
            { type: "debt", amount: 140800, liters: 160, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 36960, liters: 42, debtor: "Multipro company", reason: "MD approved" },
            { type: "debt", amount: 62000, liters: 70.45, debtor: "MD", reason: "No idea" },
            { type: "return to tank", amount: 4400, liters: 5, reason: "Priming" }
          ] 
        },
        { attendant: "Miriam", pumpId: "PMP-005-B", product: "PMS", openingReading: 748228.26, closingReading: 749460.37, pricePerLiter: 880, cashCollected: 320700, posAmount: 762500 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 719002.88, 
          closingReading: 720890.58, 
          pricePerLiter: 880, 
          cashCollected: 448000, 
          posAmount: 1130892.80, 
          shortageResolutions: [
            { type: "debt", amount: 61600, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 20000, liters: 22.73, debtor: "Chizoba", reason: "No idea" }
          ] 
        },
      ],
      afternoon: [
        { attendant: "Amarachi", pumpId: "PMP-002-A", product: "PMS", openingReading: 2316391.86, closingReading: 2317486.77, pricePerLiter: 880, cashCollected: 188050, posAmount: 775047 },
        { 
          attendant: "Chidimma Okoro", 
          pumpId: "PMP-002-B", 
          product: "PMS", 
          openingReading: 2591091.76, 
          closingReading: 2592280.62, 
          pricePerLiter: 880, 
          cashCollected: 509900, 
          posAmount: 534336, 
          shortageResolutions: [
            { type: "debt", amount: 2000, liters: 2.27, debtor: "Chukwuma", reason: "No idea" }
          ] 
        },
        { attendant: "Chidimma Okoro", pumpId: "PMP-003-A", product: "PMS", openingReading: 295036.98, closingReading: 295163.08, pricePerLiter: 880, cashCollected: 48000, posAmount: 63000 },
        { attendant: "Esther", pumpId: "PMP-003-B", product: "PMS", openingReading: 131279.71, closingReading: 131760.38, pricePerLiter: 880, cashCollected: 343250, posAmount: 79000 },
        { attendant: "Ogochukwu", pumpId: "PMP-003-B", product: "PMS", openingReading: 131198.94, closingReading: 131279.71, pricePerLiter: 880, cashCollected: 28500, posAmount: 42500 },
        { 
          attendant: "Ogochukwu", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 720890.58, 
          closingReading: 721777.53, 
          pricePerLiter: 880, 
          cashCollected: 251150, 
          posAmount: 415940, 
          shortageResolutions: [
            { type: "debt", amount: 62796.80, liters: 71.36, debtor: "First patriot", reason: "MD approved" },
            { type: "official use", amount: 50432.80, liters: 57.31, purpose: "MD", reason: "MD" }
          ] 
        },
        { 
          attendant: "Donald", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1184144.93, 
          closingReading: 1184476.88, 
          pricePerLiter: 880, 
          cashCollected: 22300, 
          posAmount: 63000, 
          shortageResolutions: [
            { type: "debt", amount: 184800, liters: 210, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 22000, liters: 25, debtor: "Multipro company", reason: "MD approved" }
          ] 
        },
        { attendant: "Celestina", pumpId: "PMP-006-B", product: "PMS", openingReading: 749460.37, closingReading: 750213.53, pricePerLiter: 880, cashCollected: 320000, posAmount: 341800 },
      ]
    },
    bankDeposits: []
  },
  {
    date: "2025-12-17",
    shifts: {
      morning: [
        { 
          attendant: "Miriam", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2317486.78, 
          closingReading: 2319872.58, 
          pricePerLiter: 880, 
          cashCollected: 168000, 
          posAmount: 1906150, 
          shortageResolutions: [
            { type: "official use", amount: 26400, liters: 30, purpose: "House & bread", reason: "Okoye" }
          ] 
        },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-002-B", product: "PMS", openingReading: 2593418.67, closingReading: 2594065.69, pricePerLiter: 880, cashCollected: 313200, posAmount: 254660 },
        { attendant: "Chidimma Cynthia", pumpId: "PMP-003-A", product: "PMS", openingReading: 295163.14, closingReading: 295444.23, pricePerLiter: 880, cashCollected: 0, posAmount: 247000 },
        { 
          attendant: "Chidimma Cynthia", 
          pumpId: "PMP-005-A", 
          product: "PMS", 
          openingReading: 1184476.90, 
          closingReading: 1187930.47, 
          pricePerLiter: 880, 
          cashCollected: 817800, 
          posAmount: 2177848.80, 
          shortageResolutions: [
            { type: "debt", amount: 29000, liters: 32.95, debtor: "Chibueze", reason: "MD approved" },
            { type: "return to tank", amount: 5280, liters: 6, reason: "Donald" }
          ] 
        },
        { 
          attendant: "Chukwuka", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 131760.38, 
          closingReading: 133162.23, 
          pricePerLiter: 880, 
          cashCollected: 616700, 
          posAmount: 562200, 
          shortageResolutions: [
            { type: "debt", amount: 52800, liters: 60, debtor: "First patriot", reason: "MD" }
          ] 
        },
        { 
          attendant: "Miracle", 
          pumpId: "PMP-006-A", 
          product: "PMS", 
          openingReading: 721777.54, 
          closingReading: 723972.61, 
          pricePerLiter: 880, 
          cashCollected: 400700, 
          posAmount: 804515, 
          shortageResolutions: [
            { type: "debt", amount: 61600, liters: 70, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 664426.40, liters: 755.03, debtor: "Maco oil", reason: "MD approved" }
          ] 
        },
        { 
          attendant: "Chidera", 
          pumpId: "PMP-006-B", 
          product: "PMS", 
          openingReading: 584900.72, 
          closingReading: 586344.49, 
          pricePerLiter: 880, 
          cashCollected: 268950, 
          posAmount: 867078.40, 
          shortageResolutions: [
            { type: "debt", amount: 114400, liters: 130, debtor: "First patriot", reason: "MD approved" },
            { type: "debt", amount: 16720, liters: 19, debtor: "Multipro company", reason: "MD" }
          ] 
        },
      ],
      afternoon: [
        { 
          attendant: "Celestina", 
          pumpId: "PMP-002-A", 
          product: "PMS", 
          openingReading: 2319872.58, 
          closingReading: 2320877.46, 
          pricePerLiter: 880, 
          cashCollected: 88800, 
          posAmount: 737014, 
          shortageResolutions: [
            { type: "debt", amount: 52800, liters: 60, debtor: "First patriot", reason: "MD" },
            { type: "debt", amount: 5200, liters: 5.91, debtor: "Lukeman", reason: "No idea" }
          ] 
        },
        { attendant: "Esther", pumpId: "PMP-002-B", product: "PMS", openingReading: 2594065.69, closingReading: 2594664.56, pricePerLiter: 880, cashCollected: 119800, posAmount: 406698.40 },
        { attendant: "Amarachi", pumpId: "PMP-003-A", product: "PMS", openingReading: 295444.23, closingReading: 298085.35, pricePerLiter: 880, cashCollected: 28560, posAmount: 2295162.40 },
        { 
          attendant: "Chidimma Okoro", 
          pumpId: "PMP-003-B", 
          product: "PMS", 
          openingReading: 133162.23, 
          closingReading: 133958.23, 
          pricePerLiter: 880, 
          cashCollected: 216700, 
          posAmount: 421392, 
          shortageResolutions: [
            { type: "debt", amount: 61600, liters: 70, debtor: "First patriot", reason: "MD" }
          ] 
        },
        { attendant: "Donald", pumpId: "AGO-001-A", product: "AGO", openingReading: 201143.89, closingReading: 201818.13, pricePerLiter: 1050, cashCollected: 0, posAmount: 707952 },
        { 
          attendant: "Donald", 
          pumpId: "AGO-001-B", 
          product: "AGO", 
          openingReading: 459636.47, 
          closingReading: 459906.47, 
          pricePerLiter: 1050, 
          cashCollected: 106500, 
          posAmount: 123548, 
          shortageResolutions: [
            { type: "official use", amount: 52500, liters: 50, reason: "No idea" }
          ] 
        },
      ]
    },
    bankDeposits: []
  }
];