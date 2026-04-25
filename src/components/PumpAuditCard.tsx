import React from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
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
}

const PumpAuditCard = ({ pumpId, morning, afternoon, isBalanced, diff, type }: PumpAuditCardProps) => {
  const soldMorning = morning ? morning.closingReading - morning.openingReading : 0;
  const soldAfternoon = afternoon ? afternoon.closingReading - afternoon.openingReading : 0;

  return (
    <Card className="overflow-hidden border-2 transition-all hover:shadow-md">
      <CardHeader className="bg-gray-50 py-3 flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white px-3 py-1 rounded-md border font-bold text-indigo-900 shadow-sm">
            {pumpId}
          </div>
          <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            {type === "intraday" ? "Handover Audit" : "Continuity Audit"}
          </CardTitle>
        </div>
        
        {(!morning || !afternoon) ? (
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold border border-amber-100">
            <Clock size={14} />
            WAITING...
          </div>
        ) : isBalanced ? (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100">
            <CheckCircle2 size={14} />
            BALANCED
          </div>
        ) : (
          <div className="flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1 rounded-full text-xs font-bold border border-rose-100">
            <AlertCircle size={14} />
            GAP: {formatLiters(diff)}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-bold text-amber-700 uppercase tracking-tighter">
                {type === "intraday" ? "Morning Shift" : "Previous Day Closing"}
              </span>
            </div>
            
            {morning ? (
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-dashed pb-1">
                  <span className="text-xs text-gray-400">STAFF</span>
                  <span className="font-semibold text-gray-700">{morning.attendant}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-gray-400">CLOSING</span>
                  <span className="font-mono text-lg font-bold tabular-nums text-gray-900">
                    {morning.closingReading.toFixed(2)}
                  </span>
                </div>
                <MetricPill label="SOLD" value={formatLiters(soldMorning)} variant="warning" />
              </div>
            ) : (
              <div className="h-24 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200 italic text-gray-400 text-sm">
                No shift recorded
              </div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center text-gray-300">
            <ArrowRight size={32} className="hidden md:block" />
            <div className="md:hidden w-px h-8 bg-gray-200 my-2" />
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-tighter">
                {type === "intraday" ? "Afternoon Shift" : "Current Day Opening"}
              </span>
            </div>

            {afternoon ? (
              <div className="space-y-3">
                <div className="flex justify-between items-end border-b border-dashed pb-1">
                  <span className="text-xs text-gray-400">STAFF</span>
                  <span className="font-semibold text-gray-700">{afternoon.attendant}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-gray-400">OPENING</span>
                  <span className={cn(
                    "font-mono text-lg font-bold tabular-nums",
                    isBalanced ? "text-gray-900" : "text-rose-600"
                  )}>
                    {afternoon.openingReading.toFixed(2)}
                  </span>
                </div>
                <MetricPill label="SOLD" value={formatLiters(soldAfternoon)} variant="default" />
              </div>
            ) : (
              <div className="h-24 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200 italic text-gray-400 text-sm">
                Waiting for report...
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PumpAuditCard;