"use client";

import React, { useState } from "react";
import { DailyReport } from "../types/sales";
import { generateContinuityPDF } from "../utils/pdfGenerator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FileDown, Calendar, ArrowRight } from "lucide-react";

interface ContinuityExportProps {
  allData: DailyReport[];
}

const ContinuityExport = ({ allData }: ContinuityExportProps) => {
  const [startDate, setStartDate] = useState(allData[0]?.date || "");
  const [endDate, setEndDate] = useState(allData[allData.length - 1]?.date || "");

  const handleDownload = () => {
    generateContinuityPDF(allData, startDate, endDate);
  };

  return (
    <Card className="border-2 border-indigo-100 bg-indigo-50/30 overflow-hidden mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg">
              <FileDown size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 leading-tight">Export Continuity Logs</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Generate Station Audit PDF</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-auto">
              <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)}
                className="pl-9 h-11 rounded-xl border-2 font-bold w-full sm:w-40" 
              />
            </div>
            <ArrowRight size={16} className="text-slate-300 hidden sm:block" />
            <div className="relative w-full sm:w-auto">
              <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input 
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)}
                className="pl-9 h-11 rounded-xl border-2 font-bold w-full sm:w-40" 
              />
            </div>
            <Button 
              onClick={handleDownload}
              className="h-11 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black shadow-md transition-all active:scale-95 w-full sm:w-auto"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContinuityExport;