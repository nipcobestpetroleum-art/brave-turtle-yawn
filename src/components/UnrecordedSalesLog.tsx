"use client";

import React from "react";
import { AuditResult, formatLiters } from "../utils/auditLogic";
import { generateLossLogPDF } from "../utils/pdfGenerator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Calendar, User, ArrowRight, Fuel, FileDown, RefreshCcw, History } from "lucide-react";
import { cn } from "@/lib/utils";

interface UnrecordedSalesLogProps {
  records: AuditResult[];
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const UnrecordedSalesLog = ({ records }: UnrecordedSalesLogProps) => {
  if (records.length === 0) {
    return (
      <div className="bg-white border-2 border-dashed rounded-3xl p-20 text-center flex flex-col items-center justify-center">
        <ShieldAlert size={48} className="text-slate-200 mb-4" />
        <h3 className="text-xl font-bold text-slate-400">No Unrecorded Sales Found</h3>
        <p className="text-slate-400 max-w-sm">All pump transitions are within acceptable tolerance levels.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <div className="space-y-1">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <ShieldAlert size={16} className="text-rose-500" />
            Detailed Loss Log
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Audit of all unrecorded sold volumes</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
            {records.length} Incidents
          </span>
          <Button 
            onClick={() => generateLossLogPDF(records)}
            size="sm"
            className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold gap-2 h-9"
          >
            <FileDown size={14} />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {records.map((record, idx) => (
          <Card key={`${record.pumpId}-${idx}`} className="border-2 border-rose-100 overflow-hidden hover:shadow-md transition-all">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_200px] items-stretch">
                {/* Pump & Type */}
                <div className="bg-rose-50/50 p-4 border-b md:border-b-0 md:border-r border-rose-100 flex flex-col items-center justify-center text-center gap-1">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-rose-100 mb-1">
                    <Fuel size={16} className="text-rose-500" />
                  </div>
                  <span className="text-sm font-black text-slate-900">{record.pumpId}</span>
                  
                  <div className={cn(
                    "mt-2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase flex items-center gap-1 border",
                    record.type === 'intraday' ? "bg-indigo-50 text-indigo-600 border-indigo-100" : "bg-slate-900 text-white border-slate-800"
                  )}>
                    {record.type === 'intraday' ? <RefreshCcw size={8} /> : <History size={8} />}
                    {record.type === 'intraday' ? 'Handover' : 'Continuity'}
                  </div>
                </div>

                {/* Transition Details with Dates */}
                <div className="p-6 flex flex-col sm:flex-row items-center justify-around gap-8">
                  <div className="text-center sm:text-left space-y-2">
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Closing Record</p>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={12} className="text-rose-400" />
                        <p className="text-[10px] font-bold text-slate-600">{formatDate(record.prevDate || record.currDate)}</p>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <User size={12} className="text-slate-400" />
                        <p className="font-black text-slate-700 text-xs">{record.morning?.attendant || "System"}</p>
                      </div>
                    </div>
                    <p className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded inline-block">
                      Reading: {record.morning?.closingReading.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-rose-100 p-2 rounded-full">
                    <ArrowRight size={16} className="text-rose-500" />
                  </div>

                  <div className="text-center sm:text-right space-y-2">
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Opening Record</p>
                      <div className="flex items-center gap-2 justify-center sm:justify-end mb-1">
                        <p className="text-[10px] font-bold text-indigo-600">{formatDate(record.currDate)}</p>
                        <Calendar size={12} className="text-indigo-400" />
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-end mb-1">
                        <p className="font-black text-indigo-600 text-xs">{record.afternoon?.attendant || "System"}</p>
                        <User size={12} className="text-indigo-400" />
                      </div>
                    </div>
                    <p className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded inline-block">
                      Reading: {record.afternoon?.openingReading.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Discrepancy Result */}
                <div className="bg-rose-50 p-4 border-t md:border-t-0 md:border-l border-rose-100 flex flex-col justify-center items-center md:items-end text-center md:text-right">
                  <p className="text-[10px] font-black text-rose-400 uppercase mb-1">Unrecorded Volume</p>
                  <p className="text-2xl font-black text-rose-600 tabular-nums">
                    {formatLiters(record.diff)}
                  </p>
                  <p className="text-[9px] font-bold text-rose-400/70 uppercase mt-1">Theft Category Gap</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UnrecordedSalesLog;