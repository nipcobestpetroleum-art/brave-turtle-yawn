"use client";

import React from "react";
import { calculateGeneratorLog, formatCurrency, formatLiters } from "../utils/auditLogic";
import { DailyReport } from "../types/sales";
import { Card, CardContent } from "@/components/ui/card";
import { Fuel, Calendar, User, Info, ArrowRight } from "lucide-react";

interface GeneratorLogProps {
  allData: DailyReport[];
}

const GeneratorLog = ({ allData }: GeneratorLogProps) => {
  const { log, totalLiters, totalValue } = calculateGeneratorLog(allData);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-lg">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Total Generator Inventory Used</p>
          <p className="text-3xl font-black">{formatLiters(totalLiters)}</p>
        </div>
        <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Total Consumption Value</p>
          <p className="text-3xl font-black">{formatCurrency(totalValue)}</p>
        </div>
      </div>

      <div className="space-y-3">
        {log.map((entry, idx) => (
          <Card key={idx} className="border-2 overflow-hidden hover:shadow-md transition-all">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_180px] items-center">
                <div className="bg-slate-50 p-4 border-b md:border-b-0 md:border-r border-slate-100 text-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Date</span>
                  <span className="font-black text-slate-900">
                    {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                
                <div className="p-4 flex flex-col sm:flex-row items-center gap-6 px-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase">Operator</p>
                      <p className="font-black text-slate-700">{entry.attendant}</p>
                    </div>
                  </div>

                  <ArrowRight size={16} className="text-slate-200 hidden sm:block" />

                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded-xl text-slate-600">
                      <Info size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase">Reason/Pump</p>
                      <p className="font-bold text-slate-600 text-sm">{entry.reason} ({entry.pumpId})</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50/50 p-4 border-t md:border-t-0 md:border-l border-indigo-100 text-center md:text-right">
                  <p className="text-lg font-black text-indigo-700 tabular-nums">{formatLiters(entry.liters)}</p>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase">{formatCurrency(entry.amount)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GeneratorLog;