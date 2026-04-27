"use client";

import React from "react";
import { DailyReport } from "../types/sales";
import { formatCurrency } from "../utils/auditLogic";
import { TrendingUp, Landmark, Wallet, CreditCard, CalendarDays } from "lucide-react";
import ModernMetricCard from "./ModernMetricCard";

interface FinancialSummaryProps {
  report: DailyReport;
}

const FinancialSummary = ({ report }: FinancialSummaryProps) => {
  const allShifts = [...report.shifts.morning, ...report.shifts.afternoon, ...(report.shifts.night || [])];
  
  const totalSales = allShifts.reduce((acc, curr) => {
    const liters = curr.closingReading - curr.openingReading;
    return acc + (liters * curr.pricePerLiter);
  }, 0);

  const totalCash = allShifts.reduce((acc, curr) => acc + curr.cashCollected, 0);
  const totalPos = allShifts.reduce((acc, curr) => acc + curr.posAmount, 0);
  const totalBanked = report.bankDeposits.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
          <CalendarDays size={16} />
        </div>
        <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.25em]">Daily Performance</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ModernMetricCard 
          label="Total Sales" 
          value={formatCurrency(totalSales)} 
          icon={TrendingUp} 
          color="indigo" 
        />
        <ModernMetricCard 
          label="Cash Collected" 
          value={formatCurrency(totalCash)} 
          icon={Wallet} 
          color="amber" 
        />
        <ModernMetricCard 
          label="POS Amount" 
          value={formatCurrency(totalPos)} 
          icon={CreditCard} 
          color="emerald" 
        />
        <ModernMetricCard 
          label="Bank Deposits" 
          value={formatCurrency(totalBanked)} 
          icon={Landmark} 
          color="sky" 
        />
      </div>
    </div>
  );
};

export default FinancialSummary;