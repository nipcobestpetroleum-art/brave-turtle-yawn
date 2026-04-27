"use client";

import React, { useState, useMemo } from "react";
import { salesData } from "../data/salesData";
import { calculateProductTotals } from "../utils/auditLogic";
import GrandStationSummary from "../components/GrandStationSummary";
import ProductAuditView from "../components/ProductAuditView";
import GeneratorLog from "../components/GeneratorLog";
import FinancialSummary from "../components/FinancialSummary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, LayoutDashboard, Fuel, Zap } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(salesData[salesData.length - 1].date);
  
  const currentReport = useMemo(() => 
    salesData.find(d => d.date === selectedDate) || salesData[0]
  , [selectedDate]);

  const grandTotals = useMemo(() => calculateProductTotals(salesData), []);
  const pmsTotals = useMemo(() => calculateProductTotals(salesData, "PMS"), []);
  const agoTotals = useMemo(() => calculateProductTotals(salesData, "AGO"), []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-12 pb-24">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Live Station Audit
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">
              NIPCO <span className="text-indigo-600">AUDIT</span>
            </h1>
            <p className="text-slate-400 font-bold flex items-center gap-2 uppercase tracking-[0.2em] text-[10px]">
              <LayoutDashboard size={14} className="text-indigo-400" />
              Abakaliki Station Report Center
            </p>
          </div>

          <div className="bg-white border-2 border-slate-100 rounded-[1.5rem] p-1.5 shadow-xl shadow-slate-200/50 flex items-center">
            <div className="px-4 py-2 text-indigo-500"><Calendar size={20} strokeWidth={2.5} /></div>
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="border-none shadow-none focus:ring-0 w-[220px] font-black text-slate-700 text-base">
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-2 border-slate-100 shadow-2xl">
                {salesData.map((d) => (
                  <SelectItem key={d.date} value={d.date} className="font-bold py-3 focus:bg-indigo-50 focus:text-indigo-600">
                    {new Date(d.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        <GrandStationSummary 
          totalSales={grandTotals.totalSales}
          totalCash={grandTotals.totalCash}
          totalPos={grandTotals.totalPos}
          pmsLostLiters={pmsTotals.totalLostLiters}
          agoLostLiters={agoTotals.totalLostLiters}
        />
        
        <FinancialSummary report={currentReport} />

        <div className="pt-8 border-t-2 border-slate-100">
          <Tabs defaultValue="pms" className="space-y-8">
            <TabsList className="bg-white border-2 border-slate-100 p-1.5 rounded-[2rem] h-auto gap-2 w-full md:w-auto shadow-lg shadow-slate-200/40">
              <TabsTrigger value="pms" className="rounded-[1.5rem] px-10 py-4 data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-black transition-all flex items-center gap-3 text-sm">
                <Fuel size={20} /> PMS SECTION
              </TabsTrigger>
              <TabsTrigger value="ago" className="rounded-[1.5rem] px-10 py-4 data-[state=active]:bg-slate-900 data-[state=active]:text-white font-black transition-all flex items-center gap-3 text-sm">
                <Fuel size={20} /> AGO SECTION
              </TabsTrigger>
              <TabsTrigger value="generator" className="rounded-[1.5rem] px-10 py-4 data-[state=active]:bg-amber-600 data-[state=active]:text-white font-black transition-all flex items-center gap-3 text-sm">
                <Zap size={20} /> GEN INVENTORY
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pms" className="outline-none">
              <ProductAuditView product="PMS" allData={salesData} selectedDate={selectedDate} />
            </TabsContent>
            
            <TabsContent value="ago" className="outline-none">
              <ProductAuditView product="AGO" allData={salesData} selectedDate={selectedDate} />
            </TabsContent>

            <TabsContent value="generator" className="outline-none">
              <GeneratorLog allData={salesData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;