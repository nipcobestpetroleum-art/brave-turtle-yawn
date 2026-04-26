import React, { useState, useMemo } from "react";
import { salesData } from "../data/salesData";
import { auditIntraDay, auditCrossDate, calculateGeneratorUsage, calculateGrandTotals } from "../utils/auditLogic";
import PumpAuditCard from "../components/PumpAuditCard";
import FinancialSummary from "../components/FinancialSummary";
import IssueStaffList from "../components/IssueStaffList";
import GeneratorUsageCard from "../components/GeneratorUsageCard";
import GrandStationSummary from "../components/GrandStationSummary";
import StaffLog from "../components/StaffLog";
import ContinuityExport from "../components/ContinuityExport";
import StationAnalytics from "../components/StationAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, LayoutDashboard, RefreshCcw, History, Users, ClipboardList, BarChart3 } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(salesData[salesData.length - 1].date);
  const [activeTab, setActiveTab] = useState("handover");

  const currentReport = useMemo(() => 
    salesData.find(d => d.date === selectedDate) || salesData[0]
  , [selectedDate]);

  const intraDayResults = useMemo(() => 
    auditIntraDay(currentReport)
  , [currentReport]);

  const crossDateResults = useMemo(() => 
    auditCrossDate(salesData, selectedDate)
  , [selectedDate]);

  const generatorStats = useMemo(() => 
    calculateGeneratorUsage(salesData)
  , []);

  const grandTotals = useMemo(() => 
    calculateGrandTotals(salesData)
  , []);

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

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase ml-1">Reporting Period</span>
            <div className="flex items-center gap-3">
              <div className="bg-white border-2 rounded-2xl p-1 shadow-sm flex items-center">
                <div className="px-3 py-2 text-indigo-500">
                  <Calendar size={18} />
                </div>
                <Select value={selectedDate} onValueChange={setSelectedDate}>
                  <SelectTrigger className="border-none shadow-none focus:ring-0 w-[180px] font-bold">
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2">
                    {salesData.map((d) => (
                      <SelectItem key={d.date} value={d.date} className="font-semibold">
                        {new Date(d.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <GrandStationSummary {...grandTotals} />
        
        <GeneratorUsageCard 
          totalLiters={generatorStats.totalLiters} 
          totalValue={generatorStats.totalValue} 
        />
        
        <FinancialSummary report={currentReport} />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center md:justify-start overflow-x-auto pb-2">
            <TabsList className="bg-white border-2 p-1 rounded-2xl h-auto gap-1">
              <TabsTrigger value="handover" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2 whitespace-nowrap">
                <RefreshCcw size={16} />
                Handover Audit
              </TabsTrigger>
              <TabsTrigger value="continuity" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2 whitespace-nowrap">
                <History size={16} />
                Day-to-Day Continuity
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2 whitespace-nowrap">
                <BarChart3 size={16} />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="staff" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-rose-600 data-[state=active]:text-white font-bold transition-all flex items-center gap-2 whitespace-nowrap">
                <Users size={16} />
                Accountability Log
              </TabsTrigger>
              <TabsTrigger value="history" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-slate-900 data-[state=active]:text-white font-bold transition-all flex items-center gap-2 whitespace-nowrap">
                <ClipboardList size={16} />
                Staff History
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="handover" className="mt-0 outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {intraDayResults.map((res) => (
                <PumpAuditCard 
                  key={res.pumpId} 
                  {...res} 
                  type="intraday"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="continuity" className="mt-0 outline-none space-y-6">
            <ContinuityExport allData={salesData} />
            
            {crossDateResults.some(r => r.prevDate) ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {crossDateResults.map((res) => (
                  <PumpAuditCard 
                    key={res.pumpId} 
                    {...res} 
                    type="crossdate"
                    prevDate={res.prevDate}
                    currDate={selectedDate}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border-2 border-dashed rounded-3xl p-20 text-center flex flex-col items-center justify-center">
                <History size={48} className="text-gray-200 mb-4" />
                <h3 className="text-xl font-bold text-gray-400">No Historical Records Found</h3>
                <p className="text-gray-400 max-w-sm">There are no previous usage records for the pumps active on this day.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="analytics" className="mt-0 outline-none">
            <StationAnalytics allData={salesData} />
          </TabsContent>

          <TabsContent value="staff" className="mt-0 outline-none">
            <IssueStaffList 
              results={crossDateResults} 
              selectedDate={selectedDate} 
            />
          </TabsContent>

          <TabsContent value="history" className="mt-0 outline-none">
            <StaffLog allData={salesData} />
          </TabsContent>
        </Tabs>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;