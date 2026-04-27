"use client";

import React, { useMemo } from "react";
import { DailyReport } from "../types/sales";
import { auditIntraDay, auditCrossDate, calculateProductTotals, formatLiters, formatCurrency } from "../utils/auditLogic";
import PumpAuditCard from "./PumpAuditCard";
import StationAnalytics from "./StationAnalytics";
import UnrecordedSalesLog from "./UnrecordedSalesLog";
import IssueStaffList from "./IssueStaffList";
import StaffLog from "./StaffLog";
import PumpResetLog from "./PumpResetLog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCcw, History, BarChart3, ShieldAlert, Users, ClipboardList, Package, TrendingUp, Zap } from "lucide-react";

interface ProductAuditViewProps {
  product: "PMS" | "AGO";
  allData: DailyReport[];
  selectedDate: string;
}

const ProductAuditView = ({ product, allData, selectedDate }: ProductAuditViewProps) => {
  const currentReport = useMemo(() => allData.find(d => d.date === selectedDate) || allData[0], [allData, selectedDate]);
  const intraDayResults = useMemo(() => auditIntraDay(currentReport, product), [currentReport, product]);
  const crossDateResults = useMemo(() => auditCrossDate(allData, selectedDate, product), [allData, selectedDate, product]);
  const totals = useMemo(() => calculateProductTotals(allData, product), [allData, product]);

  // Calculate daily volume for current product
  const dailyVolume = useMemo(() => {
    return [...currentReport.shifts.morning, ...currentReport.shifts.afternoon, ...(currentReport.shifts.night || [])]
      .filter(p => p.product === product)
      .reduce((acc, curr) => acc + (curr.closingReading - curr.openingReading), 0);
  }, [currentReport, product]);

  return (
    <div className="space-y-6">
      {/* Product Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border-2 p-5 rounded-3xl shadow-sm flex items-center gap-4">
          <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600">
            <Package size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Daily {product} Volume</p>
            <p className="text-xl font-black">{formatLiters(dailyVolume)}</p>
          </div>
        </div>
        <div className="bg-white border-2 p-5 rounded-3xl shadow-sm flex items-center gap-4">
          <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grand Total {product} Sales</p>
            <p className="text-xl font-black">{formatCurrency(totals.totalSales)}</p>
          </div>
        </div>
        <div className="bg-white border-2 p-5 rounded-3xl shadow-sm flex items-center gap-4">
          <div className="bg-slate-900 p-3 rounded-2xl text-white">
            <Package size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grand Total {product} Vol</p>
            <p className="text-xl font-black">{formatLiters(totals.totalLiters)}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="handover" className="space-y-6">
        <TabsList className="bg-white border-2 p-1 rounded-2xl h-auto gap-1 overflow-x-auto flex-nowrap w-full justify-start md:w-auto">
          <TabsTrigger value="handover" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white flex items-center gap-2">
            <RefreshCcw size={14} /> Handover
          </TabsTrigger>
          <TabsTrigger value="continuity" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white flex items-center gap-2">
            <History size={14} /> Continuity
          </TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white flex items-center gap-2">
            <BarChart3 size={14} /> Analytics
          </TabsTrigger>
          <TabsTrigger value="unrecorded" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-rose-600 data-[state=active]:text-white flex items-center gap-2">
            <ShieldAlert size={14} /> Unrecorded
          </TabsTrigger>
          <TabsTrigger value="resets" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-indigo-900 data-[state=active]:text-white flex items-center gap-2">
            <Zap size={14} /> Resets & Correlation
          </TabsTrigger>
          <TabsTrigger value="staff" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-rose-600 data-[state=active]:text-white flex items-center gap-2">
            <Users size={14} /> Accountability
          </TabsTrigger>
          <TabsTrigger value="history" className="rounded-xl px-4 py-2 text-xs font-bold data-[state=active]:bg-slate-900 data-[state=active]:text-white flex items-center gap-2">
            <ClipboardList size={14} /> Staff History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="handover" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {intraDayResults.map(res => <PumpAuditCard key={res.pumpId} {...res} type="intraday" />)}
          </div>
        </TabsContent>
        <TabsContent value="continuity" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {crossDateResults.map(res => <PumpAuditCard key={res.pumpId} {...res} type="crossdate" />)}
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="mt-0">
          <StationAnalytics allData={allData} />
        </TabsContent>
        <TabsContent value="unrecorded" className="mt-0">
          <UnrecordedSalesLog records={totals.theftRecords} />
        </TabsContent>
        <TabsContent value="resets" className="mt-0">
          <PumpResetLog resets={totals.resetRecords} thefts={totals.theftRecords} />
        </TabsContent>
        <TabsContent value="staff" className="mt-0">
          <IssueStaffList results={crossDateResults} selectedDate={selectedDate} />
        </TabsContent>
        <TabsContent value="history" className="mt-0">
          <StaffLog allData={allData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductAuditView;