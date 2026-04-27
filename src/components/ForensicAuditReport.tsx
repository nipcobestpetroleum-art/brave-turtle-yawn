"use client";

import React, { useMemo } from "react";
import { DailyReport } from "../types/sales";
import { auditIntraDay, auditCrossDate, calculateSessionFinancials, formatCurrency, formatLiters } from "../utils/auditLogic";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, AlertTriangle, Scale, FileText, User, Calendar, ArrowRight, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

interface ForensicAuditReportProps {
  allData: DailyReport[];
}

const ForensicAuditReport = ({ allData }: ForensicAuditReportProps) => {
  const auditFindings = useMemo(() => {
    const findings: any[] = [];
    
    allData.forEach(day => {
      // 1. Continuity Check
      const crossResults = auditCrossDate(allData, day.date);
      crossResults.forEach(res => {
        if (!res.isBalanced && res.category !== 'reset') {
          findings.push({
            type: "CONTINUITY ERROR",
            date: day.date,
            pumpId: res.pumpId,
            attendant: res.afternoon?.attendant || "System",
            prevAttendant: res.morning?.attendant || "System",
            discrepancy: res.diff,
            severity: Math.abs(res.diff) > 50 ? "high" : "medium"
          });
        }
      });

      // 2. Financial Reconciliation
      const allShifts = [...day.shifts.morning, ...day.shifts.afternoon, ...(day.shifts.night || [])];
      allShifts.forEach(pump => {
        const { expectedRevenue, actualReceived, shortage } = calculateSessionFinancials(pump);
        if (Math.abs(shortage) > 10) {
          findings.push({
            type: "FINANCIAL DISCREPANCY",
            date: day.date,
            pumpId: pump.pumpId,
            attendant: pump.attendant,
            expected: expectedRevenue,
            actual: actualReceived,
            shortage: shortage,
            severity: Math.abs(shortage) > 5000 ? "high" : "medium"
          });
        }
      });
    });

    return findings.reverse();
  }, [allData]);

  return (
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl border-4 border-indigo-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Scale size={120} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500 p-2 rounded-xl">
              <ShieldAlert size={24} />
            </div>
            <h2 className="text-2xl font-black tracking-tight uppercase">Forensic Audit Log</h2>
          </div>
          <p className="text-slate-400 text-sm font-bold max-w-2xl leading-relaxed">
            This log contains all mathematically verified discrepancies. Every entry is derived from raw pump readings and financial submissions, suitable for legal scrutiny.
          </p>
          <div className="flex gap-6 pt-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <p className="text-[10px] font-black text-indigo-400 uppercase mb-1">Total Flags</p>
              <p className="text-xl font-black">{auditFindings.length}</p>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <p className="text-[10px] font-black text-rose-400 uppercase mb-1">High Severity</p>
              <p className="text-xl font-black">{auditFindings.filter(f => f.severity === 'high').length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {auditFindings.map((finding, idx) => (
          <Card key={idx} className={cn(
            "border-2 overflow-hidden transition-all hover:shadow-lg",
            finding.severity === 'high' ? "border-rose-200 bg-rose-50/30" : "border-amber-200 bg-amber-50/30"
          )}>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_220px] items-stretch">
                <div className={cn(
                  "p-4 flex flex-col justify-center items-center text-center gap-2 border-b md:border-b-0 md:border-r",
                  finding.severity === 'high' ? "bg-rose-100/50 border-rose-200" : "bg-amber-100/50 border-amber-200"
                )}>
                  <span className={cn(
                    "text-[10px] font-black px-2 py-0.5 rounded-full uppercase",
                    finding.severity === 'high' ? "bg-rose-600 text-white" : "bg-amber-600 text-white"
                  )}>
                    {finding.type}
                  </span>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={14} />
                    <span className="text-xs font-black">{new Date(finding.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-lg border-2 font-bold text-slate-900 text-xs">
                    {finding.pumpId}
                  </div>
                </div>

                <div className="p-6 flex flex-col sm:flex-row items-center justify-around gap-8">
                  {finding.type === "CONTINUITY ERROR" ? (
                    <>
                      <div className="text-center sm:text-left">
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Handed Over By</p>
                        <p className="font-black text-slate-700 flex items-center gap-2">
                          <User size={14} className="text-slate-400" /> {finding.prevAttendant}
                        </p>
                      </div>
                      <ArrowRight size={20} className="text-slate-300" />
                      <div className="text-center sm:text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Received By</p>
                        <p className="font-black text-indigo-600 flex items-center gap-2 justify-end">
                          {finding.attendant} <User size={14} className="text-indigo-400" />
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex flex-col items-center sm:items-start gap-2">
                      <p className="text-[9px] font-black text-slate-400 uppercase">Attendant Accountability</p>
                      <p className="font-black text-slate-700 flex items-center gap-2">
                        <User size={16} className="text-indigo-500" /> {finding.attendant}
                      </p>
                      <div className="flex gap-4 mt-2">
                        <div className="text-center sm:text-left">
                          <p className="text-[8px] font-bold text-slate-400 uppercase">Expected</p>
                          <p className="text-xs font-bold text-slate-600">{formatCurrency(finding.expected)}</p>
                        </div>
                        <div className="text-center sm:text-left">
                          <p className="text-[8px] font-bold text-slate-400 uppercase">Received</p>
                          <p className="text-xs font-bold text-slate-600">{formatCurrency(finding.actual)}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={cn(
                  "p-4 flex flex-col justify-center items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l",
                  finding.severity === 'high' ? "border-rose-200" : "border-amber-200"
                )}>
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Audit Discrepancy</p>
                  <p className={cn(
                    "text-2xl font-black tabular-nums",
                    finding.severity === 'high' ? "text-rose-600" : "text-amber-600"
                  )}>
                    {finding.type === "CONTINUITY ERROR" ? formatLiters(finding.discrepancy) : formatCurrency(finding.shortage)}
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">
                    {finding.type === "CONTINUITY ERROR" ? "Unrecorded Volume" : "Financial Shortage"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ForensicAuditReport;