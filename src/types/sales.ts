export type ShiftType = "Morning" | "Afternoon" | "Night";

export interface ShortageResolution {
  type: "debt" | "return to tank" | "official use";
  amount: number;
  liters: number;
  debtor?: string;
  reason?: string;
  purpose?: string;
}

export interface PumpReport {
  attendant: string;
  pumpId: string;
  product: string;
  openingReading: number;
  closingReading: number;
  pricePerLiter: number;
  cashCollected: number;
  posAmount: number;
  shortageResolutions?: ShortageResolution[];
}

export interface BankDeposit {
  amount: number;
  reference: string;
  date: string;
}

export interface TankDipping {
  tankNumber: number;
  product: string;
  reading: number;
  recordedBy: string;
  time: string;
}

export interface DailyReport {
  date: string;
  shifts: {
    morning: PumpReport[];
    afternoon: PumpReport[];
    night?: PumpReport[];
  };
  bankDeposits: BankDeposit[];
  tankDippings?: TankDipping[];
}