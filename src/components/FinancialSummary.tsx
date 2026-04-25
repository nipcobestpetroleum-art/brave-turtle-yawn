import React from "react";
import { DailyReport } from "../types/sales";
import { formatCurrency } from "../utils/auditLogic";
import { TrendingUp, Landmark, Wallet, CreditCard } from "lucide-react";
import { cn } from "../lib/utils";

interface FinancialSummaryProps {
  report: DailyReport;
}

const FinancialSummary = ({ report }: FinancialSummaryProps) => {
  const allShifts = [...report.shifts.morning, ...report.shifts.afternoon];
  
  const totalSales = allShifts.reduce((acc, curr) => {
    const liters = curr.closingReading - curr.openingReading;
    return acc + (liters * curr.pricePerLiter);
  }, 0);

  const totalCash = allShifts.reduce((acc, curr) => acc + curr.cashCollected, 0);
  const totalPos = allShifts.reduce((acc, curr) => acc + curr.posAmount, 0);
  const totalBanked = report.bankDeposits.reduce((acc, curr) => acc + curr.amount, 0);

  const stats = [
    { label: "Total Sales", value: formatCurrency(totalSales), icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Cash Collected", value: formatCurrency(totalCash), icon: Wallet, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "POS Amount", value: formatCurrency(totalPos), icon: CreditCard, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Bank Deposits", value: formatCurrency(totalBanked), icon: Landmark, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-5 rounded-2xl border-2 flex items-center gap-4 transition-transform hover:-translate-y-1">
          <div className={cn("p-3 rounded-xl", stat.bg)}>
            <stat.icon size={24} className={stat.color} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-xl font-black text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinancialSummary;