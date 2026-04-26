"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Clock, ArrowRightLeft, Moon, Sun, Hourglass, HelpCircle, ShieldAlert } from "lucide-react";
import { PumpReport } from "../types/sales";
import { formatLiters, GapCategory } from "../utils/auditLogic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MetricPill from "./MetricPill";
import { cn } from "../lib/utils";

interface PumpAuditCardProps {
  pumpId: string;
  morning: PumpReport | null;
  afternoon: PumpReport | null;
  isBalanced: boolean;
  diff: number;
  category: GapCategory;
  categoryLabel: string;
  type: "intraday" | "crossdate";
  prevDate?: string;
  currDate?: string;
  prevShift?: "Morning" | "Afternoon";
  currShift?: "Morning" | "Afternoon";
  timeGap?: { days: number; hours: number };
}

const formatDateLabel = (dateStr?: string) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const PumpAuditCard = ({ 
  pumpId, morning, afternoon, isBalanced, diff, category, categoryLabel, type, 
  prevDate, currDate, prevShift, currShift, timeGap 
}: PumpAuditCardProps) => {
  const soldMorning = morning ? morning.closingReading - morning.openingReading : 0;
  const soldAfternoon = afternoon ? afternoon.closingReading - afternoon.openingReading : 0;
  const isNightSide = type === "crossdate";
  const isLongIdle = timeGap && timeGap.days >= 1;

  const statusStyles = {
    balanced: "text-emerald-600 bg-emerald-50 border-emerald-100",
    minor: "text-amber-600 bg-amber-50 border-amber-100",
    theft: "text-rose-600 bg-rose-50 border-rose-100",
    reset: "text-slate-500 bg-slate-100 border-slate-200",
  };

  const StatusIcon = () => {
    if (!morning || !afternoon) return <Clock size={12} />;
    if (category === "balanced") return <CheckCircle2 size={12} />;
    if (category === "reset") return <HelpCircle size={12} />;
    if (category === "theft") return <ShieldAlert size={12} />;
    return <AlertCircle size={12} />;
  };

  return (
    <Card className="overflow-hidden border-2 transition-all hover:shadow-md bg-white">
      <CardHeader className="bg-slate-50/80 border-b py-3 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white px-3 py-1 rounded-md border-2 font-bold text-indigo-900 shadow-sm">
            {pumpId}
          </div>
          <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
            {type === "intraday" ? "Shift Handover" : "Continuity Audit"}
          </CardTitle>
        </div>
        
        {(!morning || !afternoon) ? (
          <div className="flex items-center gap-2 text-slate-400 bg-slate-100 px-3 py-1 rounded-full text-[10px] font-black border uppercase">
            <Clock size={12} />
            Data Pending
          </div>
        ) : (
          <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black border uppercase", statusStyles[category])}>
            <StatusIcon />
            {categoryLabel} {category !== 'balanced' && `: ${formatLiters(diff)}`}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch">
          <div className={cn("p-6 space-y-4", isNightSide ? "bg-slate-900 text-white" : "bg-white")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isNightSide ? <Moon size={14} className="text-indigo-400" /> : <Sun size={14} className="text-amber-500" />}
                <span className={cn("text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded", isNightSide ? "text-indigo-200 bg-indigo-500/20" : "text-amber-600 bg-amber-50")}>
                  {type === "intraday" ? "Morning" : `${prevShift || 'Prev'} (${formatDateLabel(prevDate)})`}
                </span>
              </div>
              <span className={cn("text-xs font-bold italic", isNightSide ? "text-slate-500" : "text-slate-400")}>
                {morning?.attendant || "---"}
              </span>
            </div>

            {morning ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className={cn("flex justify-between text-[10px] font-bold uppercase", isNightSide ? "text-slate-500" : "text-slate-400")}>
                    <span>Closing Reading</span>
                  </div>
                  <div className={cn("font-mono text-xl font-black tabular-nums", isNightSide ? "text-white" : "text-slate-900")}>
                    {morning.closingReading.toFixed(2)}
                  </div>
                </div>
                <div className={cn("pt-2 border-t", isNightSide ? "border-slate-800" : "border-slate-100")}>
                  <MetricPill label="Vol Sold" value={formatLiters(soldMorning)} variant={isNightSide ? "default" : "warning"} />
                </div>
              </div>
            ) : (
              <div className={cn("h-32 flex items-center justify-center italic text-xs border-2 border-dashed rounded-xl", isNightSide ? "border-slate-800 text-slate-700" : "border-slate-100 text-slate-300")}>
                No Previous Record
              </div>
            )}
          </div>

          <div className="bg-slate-50 flex flex-col items-center justify-center px-4 py-8 md:py-0 border-y md:border-y-0 md:border-x border-slate-100 relative min-w-[140px]">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200 hidden md:block" />
            <div className={cn(
              "z-10 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white transition-colors",
              (!morning || !afternoon) ? "bg-slate-200 text-slate-400" :
              category === 'balanced' ? "bg-emerald-500 text-white" : 
              category === 'reset' ? "bg-slate-400 text-white" : "bg-rose-500 text-white"
            )}>
              {category === 'balanced' ? <ArrowRightLeft size={20} /> : <AlertCircle size={20} />}
            </div>

            {timeGap && (timeGap.days > 0 || timeGap.hours > 0) && (
              <div className="z-10 mt-3 flex flex-col items-center gap-1">
                <div className={cn("flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border shadow-sm", isLongIdle ? "border-amber-200 bg-amber-50/30" : "border-slate-200")}>
                  <Hourglass size={10} className={cn("animate-pulse", isLongIdle ? "text-amber-700" : "text-amber-500")} />
                  <span className={cn("text-[9px] font-black uppercase tracking-tight", isLongIdle ? "text-[#451a03]" : "text-slate-600")}>
                    {timeGap.days > 0 ? `${timeGap.days}D ` : ""}{timeGap.hours}H Idle
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 space-y-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun size={14} className="text-indigo-500" />
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                  {type === "intraday" ? "Afternoon" : `Curr (${formatDateLabel(currDate)})`}
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
                    <span>Opening Reading</span>
                  </div>
                  <div className={cn(
                    "font-mono text-xl font-black tabular-nums",
                    category === 'balanced' ? "text-slate-900" : 
                    category === 'reset' ? "text-slate-500" : "text-rose-600 underline decoration-wavy decoration-rose-200"
                  )}>
                    {afternoon.openingReading.toFixed(2)}
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