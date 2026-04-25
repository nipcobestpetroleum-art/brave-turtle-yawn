"use client";

import React, { useState, useMemo } from "react";
import { DailyReport } from "../types/sales";
import { getStaffLog, getAllStaffNames, StaffLogEntry } from "../utils/staffAudit";
import { formatLiters } from "../utils/auditLogic";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, User, Calendar, AlertCircle, CheckCircle2, Hourglass, Search } from "lucide-react";
import { cn } from "../lib/utils";

interface StaffLogProps {
  allData: DailyReport[];
}

const ITEMS_PER_PAGE = 10;

const StaffLog = ({ allData }: StaffLogProps) => {
  const staffNames = useMemo(() => getAllStaffNames(allData), [allData]);
  const [selectedStaff, setSelectedStaff] = useState(staffNames[0]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fullLog = useMemo(() => getStaffLog(allData, selectedStaff), [allData, selectedStaff]);

  const filteredLog = useMemo(() => {
    return fullLog.filter(entry => {
      const date = entry.date;
      const matchesStart = !startDate || date >= startDate;
      const matchesEnd = !endDate || date <= endDate;
      return matchesStart && matchesEnd;
    });
  }, [fullLog, startDate, endDate]);

  const totalPages = Math.ceil(filteredLog.length / ITEMS_PER_PAGE);
  const paginatedLog = filteredLog.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {/* Filters Header */}
      <div className="bg-white p-6 rounded-3xl border-2 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Staff</label>
            <Select value={selectedStaff} onValueChange={(v) => { setSelectedStaff(v); setCurrentPage(1); }}>
              <SelectTrigger className="rounded-xl border-2 h-11 font-bold">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-indigo-500" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {staffNames.map(name => (
                  <SelectItem key={name} value={name} className="font-semibold">{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">From Date</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setCurrentPage(1); }} className="pl-10 rounded-xl border-2 h-11 font-bold" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">To Date</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value); setCurrentPage(1); }} className="pl-10 rounded-xl border-2 h-11 font-bold" />
            </div>
          </div>
        </div>
      </div>

      {/* Log Entries */}
      <div className="space-y-4">
        {paginatedLog.length > 0 ? (
          paginatedLog.map((entry, idx) => (
            <Card key={`${entry.date}-${entry.shift}-${entry.pumpId}-${idx}`} className="border-2 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_220px] items-stretch">
                  {/* Date & Shift */}
                  <div className="bg-slate-50 p-4 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-center text-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{entry.shift}</span>
                    <span className="text-sm font-black text-slate-900">
                      {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <div className="mt-2 bg-indigo-100 text-indigo-700 text-[10px] font-black py-1 px-2 rounded-lg inline-block self-center">
                      {entry.pumpId}
                    </div>
                  </div>

                  {/* Transition Info */}
                  <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-6 px-8">
                    <div className="text-center sm:text-left space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Received From</p>
                      <p className="font-black text-slate-700">{entry.prevAttendant || "Station Start"}</p>
                      {entry.prevClosing !== null && (
                        <p className="text-[10px] font-mono text-slate-400">Last Closing: {entry.prevClosing.toFixed(2)}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border-2",
                        entry.isBalanced ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
                      )}>
                        {entry.isBalanced ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                      </div>
                      
                      {entry.timeGap && (
                        <div className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-black uppercase flex items-center gap-1 border",
                          entry.timeGap.days >= 1 ? "bg-amber-50 text-[#451a03] border-amber-200" : "bg-slate-100 text-slate-500 border-slate-200"
                        )}>
                          <Hourglass size={8} />
                          {entry.timeGap.days > 0 ? `${entry.timeGap.days}D ` : ""}{entry.timeGap.hours}H Idle
                        </div>
                      )}
                    </div>

                    <div className="text-center sm:text-right space-y-1">
                      <p className="text-[10px] font-black text-indigo-400 uppercase">Handover Point</p>
                      <p className="font-black text-indigo-600 underline decoration-indigo-200 decoration-wavy underline-offset-4">
                        {entry.openingReading.toFixed(2)}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400">Opening Reading Accepted</p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className={cn(
                    "p-4 border-t md:border-t-0 md:border-l flex flex-col justify-center items-center md:items-end text-center md:text-right",
                    entry.isBalanced ? "bg-emerald-50/30 border-emerald-50" : "bg-rose-50/30 border-rose-50"
                  )}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Handover Result</p>
                    <p className={cn(
                      "text-xl font-black tabular-nums",
                      entry.isBalanced ? "text-emerald-600" : "text-rose-600"
                    )}>
                      {entry.isBalanced ? "MATCH" : formatLiters(entry.diff)}
                    </p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">
                      {entry.isBalanced ? "Verified Readings" : "Transition Discrepancy"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="bg-white border-2 border-dashed rounded-3xl p-20 text-center flex flex-col items-center justify-center">
            <Search size={48} className="text-slate-200 mb-4" />
            <h3 className="text-xl font-bold text-slate-400">No records found</h3>
            <p className="text-slate-400 max-w-sm">No shift history matches the selected filters for {selectedStaff}.</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border-2 shadow-sm">
          <p className="text-xs font-bold text-slate-400">
            Showing Page <span className="text-indigo-600">{currentPage}</span> of {totalPages}
          </p>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="rounded-xl border-2 font-bold"
            >
              <ChevronLeft size={16} className="mr-1" /> Prev
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="rounded-xl border-2 font-bold"
            >
              Next <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffLog;