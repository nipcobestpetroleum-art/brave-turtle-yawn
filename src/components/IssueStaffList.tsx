"use client";

import React from "react";
import { AuditResult, formatLiters } from "../utils/auditLogic";
import { UserX, ArrowRight, AlertTriangle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "../lib/utils";

interface IssueStaffListProps {
  results: AuditResult[];
  selectedDate: string;
}

const IssueStaffList = ({ results, selectedDate }: IssueStaffListProps) => {
  const issues = results.filter(r => !r.isBalanced && (r.morning || r.afternoon));

  if (issues.length === 0) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-12 text-center flex flex-col items-center justify-center">
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
          <UserX size={32} className="text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-emerald-900">All Handovers Balanced</h3>
        <p className="text-emerald-600/70 max-w-sm mt-1">There are no staff accountability issues found for the selected period.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <AlertTriangle size={16} className="text-rose-500" />
          Staff Accountability Log
        </h3>
        <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
          {issues.length} Discrepancies
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {issues.map((issue, idx) => (
          <Card key={`${issue.pumpId}-${idx}`} className="border-2 border-rose-100 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_200px] items-center">
                {/* Pump Info */}
                <div className="bg-rose-50/50 p-4 border-b md:border-b-0 md:border-r border-rose-100 flex flex-col items-center justify-center gap-1">
                  <span className="text-[10px] font-black text-rose-400 uppercase">Pump</span>
                  <span className="text-xl font-black text-slate-900">{issue.pumpId}</span>
                </div>

                {/* Staff Transition */}
                <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                  <div className="text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-tighter">Previous Attendant</p>
                    <p className="font-black text-slate-700">{issue.morning?.attendant || "System"}</p>
                    <p className="text-[10px] font-medium text-slate-400 flex items-center justify-center gap-1 mt-1">
                      <Calendar size={10} />
                      {issue.prevDate ? new Date(issue.prevDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : "N/A"}
                    </p>
                  </div>

                  <div className="bg-rose-100 p-2 rounded-full">
                    <ArrowRight size={16} className="text-rose-500" />
                  </div>

                  <div className="text-center">
                    <p className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-tighter">Current Attendant</p>
                    <p className="font-black text-indigo-600">{issue.afternoon?.attendant || "System"}</p>
                    <p className="text-[10px] font-medium text-slate-400 flex items-center justify-center gap-1 mt-1">
                      <Calendar size={10} />
                      {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Gap Details */}
                <div className="bg-rose-50 p-4 border-t md:border-t-0 md:border-l border-rose-100 text-center md:text-right">
                  <p className="text-[10px] font-black text-rose-400 uppercase mb-1">Discrepancy</p>
                  <p className="text-2xl font-black text-rose-600 tabular-nums">
                    {formatLiters(issue.diff)}
                  </p>
                  <p className="text-[9px] font-bold text-rose-400/70 uppercase mt-1">Unaccounted Volume</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IssueStaffList;