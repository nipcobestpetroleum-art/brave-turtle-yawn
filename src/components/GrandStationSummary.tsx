"use client";

import React from "react";
import { TrendingUp, Wallet, CreditCard, ShieldAlert, Database, AlertCircle, Scale } from "lucide-react";
import ModernMetricCard from "./ModernMetricCard";
import { formatCurrency, formatLiters } from "../utils/auditLogic";

interface GrandStationSummaryProps {
  totalSales: number;
  totalCash: number;
  totalPos: number;
  pmsLostLiters: number;
  pmsLostValue: number;
  pmsFinancialShortage: number;
  agoLostLiters: number;
  agoLostValue: number;
  agoFinancialShortage: number;
  onLossClick?: () => void;
}

const GrandStationSummary = ({ 
  totalSales, 
  totalCash, 
  totalPos, 
  pmsLostLiters, 
  pmsLostValue,
  pmsFinancialShortage,
  agoLostLiters, 
  agoLostValue,
  agoFinancialShortage,
  onLossClick 
}: GrandStationSummaryProps) => {
  const totalCombinedLoss = pmsLostValue + agoLostValue + pmsFinancialShortage + agoFinancialShortage;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
          <Database size={16} />
        </div>
        <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.25em]">Grand Station Metrics</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModernMetricCard 
          label="Grand Total Sales" 
          value={formatCurrency(totalSales)} 
          icon={TrendingUp} 
          color="indigo" 
        />
        <ModernMetricCard 
          label="Total Cash (Oct 25+)" 
          value={formatCurrency(totalCash)} 
          icon={Wallet} 
          color="amber" 
        />
        <ModernMetricCard 
          label="Total POS (Oct 25+)" 
          value={formatCurrency(totalPos)} 
          icon={CreditCard} 
          color="emerald" 
        />
        <ModernMetricCard 
          label="Total Forensic Loss" 
          value={formatCurrency(totalCombinedLoss)} 
          subValue="Combined Audit"
          icon={Scale} 
          color="rose" 
          onClick={onLossClick}
          isInteractive={true}
        />
        <ModernMetricCard 
          label="PMS SECTION LOSS" 
          value={formatLiters(pmsLostLiters)} 
          subValue={formatCurrency(pmsLostValue + pmsFinancialShortage)}
          icon={ShieldAlert} 
          color="rose" 
          onClick={onLossClick}
          isInteractive={true}
        />
        <ModernMetricCard 
          label="AGO SECTION LOSS" 
          value={formatLiters(agoLostLiters)} 
          subValue={formatCurrency(agoLostValue + agoFinancialShortage)}
          icon={ShieldAlert} 
          color="slate" 
          onClick={onLossClick}
          isInteractive={true}
        />
      </div>
    </div>
  );
};

export default GrandStationSummary;