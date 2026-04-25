import React from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Clock, ArrowRightLeft, Moon, Sun } from "lucide-react";
import { PumpReport } from "../types/sales";
import { formatLiters } from "../utils/auditLogic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MetricPill from "./MetricPill";
import { cn } from "../lib/utils";

interface PumpAuditCardProps {
  pumpId: string;
  morning: PumpReport | null;
  afternoon: PumpReport | null;
  isBalanced: boolean;
  diff: number;
  type: "intraday" | "crossdate";
  prevDate?: string;
  currDate?: string;
}

const formatDateLabel = (dateStr?: string) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const PumpAuditCard = ({ pumpId, morning, afternoon, isBalanced, diff, type, prevDate, currDate }: PumpAuditCardProps) => {
  const soldMorning = morning ? morning.closingReading - morning.openingReading : 0;
  const soldAfternoon = afternoon ? afternoon.closingReading - afternoon.openingReading : 0;

  return (
    <Card className="overflow-hidden border-2 transition-all hover:shadow-md bg-white">
      <CardHeader className="bg-slate-50/80 border-b py-3 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white px-3 py-1 rounded-md border-2 font-bold text-indigo-900 shadow-sm">
            {pumpId}
          </div>
          <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
            {type === "intraday" ? "Shift Handover" : "Date Continuity"}
          </CardTitle>
        </div>
        
        {(!morning || !afternoon) ? (
          <div className="flex items-center gap-2 text-slate-400 bg-slate-100 px-3 py-1 rounded-full text-[10px] font-black border uppercase">
            <Clock size={12} />
            Data Pending
          </div>
        ) : isBalanced ? (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-[10px] font-black border border-emerald-100 uppercase">
            <CheckCircle2 size={12} />
            Verified Balanced
          </div>
        ) : (
          <div className="flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1 rounded-full text-[10px] font-black border border-rose-100 uppercase">
            <AlertCircle size={12} />
            Gap: {formatLiters(diff)}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch">
          {/* Shift 1 (Morning / Night Close) */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {type === "crossdate" ? <Moon size={14} className="text-slate-400" /> : <Sun size={14} className="text-amber-500" />}
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded",
                  type === "intraday" ? "text-amber-600 bg-amber-50" : "text-slate-600 bg-slate-100"
                )}>
                  {type === "intraday" ? "Morning" : `Night (${formatDateLabel(prevDate)})`}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 italic">
                {morning?.attendant || "---"}
              </span>
            </div>

            {morning ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                    <span>Opening</span>
                  </div>
                  <div className="font-mono text-lg text-slate-500 tabular-nums">
                    {morning.openingReading.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                    <span>Closing</span>
                  </div>
                  <div className="font-mono text-xl font-black text-slate-900 tabular-nums">
                    {morning.closingReading.toFixed(2)}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <MetricPill label="Vol Sold" value={formatLiters(soldMorning)} variant="warning" />
                </div>
              </div>
            ) : (
              <div className="h-32 flex items-center justify-center text-slate-300 italic text-xs border-2 border-dashed rounded-xl">
                No Record Found
              </div>
            )}
          </div>

          {/* Handover Bridge */}
          <div className="bg-slate-50/50 flex flex-col items-center justify-center px-4 py-8 md:py-0 border-y md:border-y-0 md:border-x border-slate-100 relative min-w-[120px]">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200 hidden md:block" />
            
            <div className={cn(
              "z-10 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white transition-colors duration-500",
              (!morning || !afternoon) ? "bg-slate-200 text-slate-400" :
              isBalanced ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
            )}>
              {isBalanced ? <ArrowRightLeft size={20} /> : <AlertCircle size={20} />}
            </div>

            {morning && afternoon && (
              <div className={cn(
                "mt-4 text-[10px] font-black uppercase text-center px-2 py-1 rounded",
                isBalanced ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
              )}>
                {isBalanced ? "Match" : `Gap: ${formatLiters(diff)}`}
              </div>
            )}
            
            {type === "crossdate" && (
              <div className="mt-2 text-[9px] font-bold text-slate-400 uppercase">
                Carry Over
              </div>
            )}
          </div>

          {/* Shift 2 (Afternoon / Day Open) */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun size={14} className={type === "crossdate" ? "text-indigo-500" : "text-indigo-500"} />
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                  {type === "intraday" ? "Afternoon" : `Day (${formatDateLabel(currDate)})`}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 italic">
                {afternoon?.attendant || "---"}
              </span>
            </div>

            {afternoon ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                    <span>Opening</span>
                  </div>
                  <div className={cn(
                    "font-mono text-xl font-black tabular-nums",
                    isBalanced ? "text-slate-900" : "text-rose-600 underline decoration-wavy decoration-rose-200"
                  )}>
                    {afternoon.openingReading.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                    <span>Closing</span>
                  </div>
                  <div className="font-mono text-lg text-slate-500 tabular-nums">
                    {afternoon.closingReading.toFixed(2)}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <MetricPill label="Vol Sold" value={formatLiters(soldAfternoon)} variant="default" />
                </div>
              </div>
            ) : (
              <div className="h-32 flex items-center justify-center text-slate-300 italic text-xs border-2 border-dashed rounded-xl">
                Pending Report
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PumpAuditCard;