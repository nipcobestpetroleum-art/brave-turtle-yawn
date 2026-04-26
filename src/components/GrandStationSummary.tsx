"use client";

import React from "react";
import { formatCurrency, formatLiters } from "../utils/auditLogic";
import { Database, TrendingUp, Wallet, CreditCard, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface GrandStationSummaryProps {
  totalSales: number;
  totalCash: number;
  totalPos: number;
  totalLostLiters: number;
  onLossClick?: () => void;
}

const GrandStationSummary = ({ totalSales, totalCash, totalPos, totalLostLiters, onLossClick }: GrandStationSummaryProps) => {
  const stats = [
    { label: "Grand Total Sales", value: formatCurrency(totalSales), icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Total Cash (Oct 25+)", value: formatCurrency(totalCash), icon: Wallet, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Total POS (Oct 25+)", value: formatCurrency(totalPos), icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-50" },
    { 
      label: "Unrecorded Sold Vol.", 
      value: formatLiters(totalLostLiters), 
      icon: ShieldAlert, 
      color: "text-rose-600", 
      bg: "bg-rose-50",
      onClick: onLossClick,
      isInteractive: true
    },
  ];

  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center gap-2 px-2">
        <Database size={16} className="text-slate-400" />
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Grand Station Metrics (Since Oct 25)</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div 
            key={stat.label} 
            onClick={stat.onClick}
            className={cn(
              "bg-white p-5 rounded-2xl border-2 border-slate-100 flex items-center gap-4 transition-all",
              stat.isInteractive && "cursor-pointer hover:border-rose-200 hover:shadow-md active:scale-95"
            )}
          >
            <div className={cn("p-3 rounded-xl", stat.bg)}>
              <stat.icon size={20} className={stat.color} />
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
              <p className={cn("text-lg font-black tabular-nums", stat.color.replace('text-', 'text-slate-900'))}>
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrandStationSummary;