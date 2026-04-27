"use client";

import React from "react";
import { AuditResult, formatLiters, formatCurrency } from "../utils/auditLogic";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, AlertTriangle, Calendar, User, ArrowRight, ShieldAlert, Zap, Droplets, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PumpResetLogProps {
  resets: AuditResult[];
  thefts: AuditResult[];
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const PumpResetLog = ({ resets, thefts }: PumpResetLogProps) => {
  if (resets.length === 0) {
    return (
      <div className="bg-white border-2 border-dashed rounded-3xl p-20 text-center flex flex-col items-center justify-center">
        <RefreshCw size={48} className="text-slate-200 mb-4" />
        <h3 className="text-xl font-bold text-slate-400">No Pump Resets Detected</h3>
        <p className="text-slate-400 max-w-sm">All pump readings have maintained sequential continuity.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-1 px-2">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <RefreshCw size={16} className="text-indigo-500" />
          Pump Reset & Correlation Log
        </h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase">Tracking abnormal reading jumps and nearby unrecorded sales</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {resets.map((reset, idx) => {
          // Find thefts within 2 days of this reset
          const resetTime = new Date(reset.currDate!).getTime();
          const correlatedThefts = thefts.filter(t => {
            const theftTime = new Date(t.currDate!).getTime();
            const diffDays = Math.abs(theftTime - resetTime) / (1000 * 60 * 60 * 24);
            return diffDays <= 2 && t.pumpId === reset.pumpId;
          });

          return (
            <div key={`${reset.pumpId}-${idx}`} className="space-y-4">
              <Card className="border-2 border-indigo-100 overflow-hidden shadow-sm bg-white">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_240px] items-stretch">
                    {/* Pump Info */}
                    <div className="bg-indigo-50/50 p-4 border-b md:border-b-0 md:border-r border-indigo-100 flex flex-col items-center justify-center text-center gap-1">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-indigo-100 mb-1">
                        <Zap size={16} className="text-indigo-500" />
                      </div>
                      <span className="text-sm font-black text-slate-900">{reset.pumpId}</span>
                      <span className="text-[8px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full uppercase">Reset Event</span>
                    </div>

                    {/* Transition */}
                    <div className="p-6 flex flex-col sm:flex-row items-center justify-around gap-8">
                      <div className="text-center sm:text-left">
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Last Known Reading</p>
                        <p className="text-[10px] font-bold text-slate-600 flex items-center gap-1 mb-1">
                          <Calendar size={10} /> {formatDate(reset.prevDate || reset.currDate)}
                        </p>
                        <p className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded inline-block">
                          {reset.morning?.closingReading.toFixed(2)}
                        </p>
                      </div>

                      <div className="bg-indigo-100 p-2 rounded-full">
                        <ArrowRight size={16} className="text-indigo-500" />
                      </div>

                      <div className="text-center sm:text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-1">New Opening Reading</p>
                        <p className="text-[10px] font-bold text-indigo-600 flex items-center justify-end gap-1 mb-1">
                          {formatDate(reset.currDate)} <Calendar size={10} />
                        </p>
                        <p className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded inline-block">
                          {reset.afternoon?.openingReading.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Gap Details */}
                    <div className="bg-slate-50 p-4 border-t md:border-t-0 md:border-l border-indigo-100 flex flex-col justify-center items-center md:items-end text-center md:text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Reading Jump</p>
                      <p className={cn(
                        "text-xl font-black tabular-nums",
                        reset.diff < 0 ? "text-rose-600" : "text-indigo-600"
                      )}>
                        {reset.diff.toFixed(2)} L
                      </p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">
                        {reset.diff < 0 ? "Negative Reset" : "Abnormal Forward Jump"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Correlation Section */}
              {correlatedThefts.length > 0 ? (
                <div className="ml-4 md:ml-12 space-y-3">
                  <div className="flex items-center gap-2 text-rose-600 px-2">
                    <AlertTriangle size={14} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Correlated Unrecorded Sales Spotted</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {correlatedThefts.map((theft, tIdx) => (
                      <div key={tIdx} className="relative group">
                        <div className="absolute inset-0 bg-rose-600 rounded-2xl translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                        <div className="relative bg-slate-900 border-2 border-rose-500 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                              <span className="text-[8px] font-black text-rose-400 uppercase mb-1">Incident Date</span>
                              <div className="flex items-center gap-2 text-white">
                                <Calendar size={12} className="text-rose-500" />
                                <span className="text-xs font-black">{formatDate(theft.currDate)}</span>
                              </div>
                            </div>
                            
                            <div className="w-px h-8 bg-slate-800" />
                            
                            <div className="flex flex-col">
                              <span className="text-[8px] font-black text-rose-400 uppercase mb-1">Attendant</span>
                              <div className="flex items-center gap-2 text-white">
                                <User size={12} className="text-rose-500" />
                                <span className="text-xs font-black">{theft.afternoon?.attendant || "System"}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-8">
                            <div className="text-center sm:text-right">
                              <span className="text-[8px] font-black text-rose-400 uppercase mb-1 block">Volume Lost</span>
                              <div className="flex items-center gap-2 justify-center sm:justify-end">
                                <Droplets size={14} className="text-rose-500" />
                                <span className="text-lg font-black text-white tabular-nums">{formatLiters(theft.diff)}</span>
                              </div>
                            </div>

                            <div className="text-center sm:text-right">
                              <span className="text-[8px] font-black text-rose-400 uppercase mb-1 block">Financial Impact</span>
                              <div className="flex items-center gap-2 justify-center sm:justify-end">
                                <TrendingDown size={14} className="text-rose-500" />
                                <span className="text-lg font-black text-rose-500 tabular-nums">{formatCurrency(theft.valueLost || 0)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="ml-4 md:ml-12 border-l-4 border-emerald-100 pl-4 py-1">
                  <div className="flex items-center gap-2 text-emerald-500">
                    <ShieldAlert size={14} />
                    <span className="text-[10px] font-black uppercase tracking-tighter">No correlated theft within 48h window</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PumpResetLog;