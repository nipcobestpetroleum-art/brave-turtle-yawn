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
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 pb-20">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
              NIPCO <span className="text-indigo-600">AUDIT</span>
            </h1>
            <p className="text-gray-500 font-medium flex items-center gap-2 uppercase tracking-widest text-xs">
              <LayoutDashboard size={14} className="text-indigo-400" />
              Abakaliki Station Report Center
            </p>
          </div>

          <div className="bg-white border-2 rounded-2xl p-1 shadow-sm flex items-center">
            <div className="px-3 py-2 text-indigo-500"><Calendar size={18} /></div>
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="border-none shadow-none focus:ring-0 w-[180px] font-bold">
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2">
                {salesData.map((d) => (
                  <SelectItem key={d.date} value={d.date} className="font-semibold">
                    {new Date(d.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <GrandStationSummary 
          totalSales={grandTotals.totalSales}
          totalCash={grandTotals.totalCash}
          totalPos={grandTotals.totalPos}
          pmsLostLiters={pmsTotals.totalLostLiters}
          agoLostLiters={agoTotals.totalLostLiters}
        />
        
        <FinancialSummary report={currentReport} />

        <Tabs defaultValue="pms" className="space-y-6">
          <TabsList className="bg-white border-2 p-1 rounded-3xl h-auto gap-2 w-full md:w-auto">
            <TabsTrigger value="pms" className="rounded-2xl px-12 py-3 data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-black transition-all flex items-center gap-3">
              <Fuel size={20} /> PMS SECTION
            </TabsTrigger>
            <TabsTrigger value="ago" className="rounded-2xl px-12 py-3 data-[state=active]:bg-slate-900 data-[state=active]:text-white font-black transition-all flex items-center gap-3">
              <Fuel size={20} /> AGO SECTION
            </TabsTrigger>
            <TabsTrigger value="generator" className="rounded-2xl px-12 py-3 data-[state=active]:bg-amber-600 data-[state=active]:text-white font-black transition-all flex items-center gap-3">
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
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;