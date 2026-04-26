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
      ]
    },
    bankDeposits: []
  }
];