"use client";

import React from "react";
import { TrendingUp, Wallet, CreditCard, ShieldAlert, Database, AlertCircle } from "lucide-react";
import ModernMetricCard from "./ModernMetricCard";
import { formatCurrency, formatLiters } from "../utils/auditLogic";

interface GrandStationSummaryProps {
  totalSales: number;
  totalCash: number;
  totalPos: number;
  pmsLostLiters: number;
  pmsLostValue: number;
  agoLostLiters: number;
  agoLostValue: number;
  onLossClick?: () => void;
}

const GrandStationSummary = ({ 
  totalSales, 
  totalCash, 
  totalPos, 
  pmsLostLiters, 
  pmsLostValue,
  agoLostLiters, 
  agoLostValue,
  onLossClick 
}: GrandStationSummaryProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
          <Database size={16} />
        </div>
        <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.25em]">Grand Station Metrics</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          label="Total Financial Loss" 
          value={formatCurrency(pmsLostValue + agoLostValue)} 
          icon={AlertCircle} 
          color="rose" 
          onClick={onLossClick}
          isInteractive={true}
        />
        <ModernMetricCard 
          label="PMS SECTION" 
          value={`${formatLiters(pmsLostLiters)} (${formatCurrency(pmsLostValue)})`} 
          icon={ShieldAlert} 
          color="rose" 
          onClick={onLossClick}
          isInteractive={true}
        />
        <ModernMetricCard 
          label="AGO SECTION" 
          value={`${formatLiters(agoLostLiters)} (${formatCurrency(agoLostValue)})`} 
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