"use client";

import React from "react";
import { Fuel, TrendingDown, Gauge } from "lucide-react";
import { formatCurrency, formatLiters } from "../utils/auditLogic";
import { Card, CardContent } from "@/components/ui/card";

interface GeneratorUsageCardProps {
  totalLiters: number;
  totalValue: number;
}

const GeneratorUsageCard = ({ totalLiters, totalValue }: GeneratorUsageCardProps) => {
  return (
    <Card className="bg-slate-900 border-none overflow-hidden shadow-xl mb-8">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Main Title / Icon */}
          <div className="p-6 bg-indigo-600 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-lg">
                <Fuel size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-tighter">Generator Inventory</h3>
            </div>
            <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Consumption Summary</p>
          </div>

          {/* Volume Metric */}
          <div className="p-6 border-r border-slate-800 flex items-center gap-4">
            <div className="bg-slate-800 p-3 rounded-xl">
              <Gauge size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Volume Used</p>
              <p className="text-2xl font-black text-white tabular-nums">{formatLiters(totalLiters)}</p>
            </div>
          </div>

          {/* Value Metric */}
          <div className="p-6 flex items-center gap-4">
            <div className="bg-slate-800 p-3 rounded-xl">
              <TrendingDown size={20} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cumulative Value</p>
              <p className="text-2xl font-black text-white tabular-nums">{formatCurrency(totalValue)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneratorUsageCard;