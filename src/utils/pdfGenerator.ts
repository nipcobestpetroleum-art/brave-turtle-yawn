import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { DailyReport, PumpReport } from "../types/sales";
import { auditCrossDate, formatLiters, AuditResult } from "./auditLogic";

export const generateContinuityPDF = (allData: DailyReport[], startDate: string, endDate: string) => {
  const doc = new jsPDF();
  const sortedDays = [...allData]
    .filter(d => d.date >= startDate && d.date <= endDate)
    .sort((a, b) => a.date.localeCompare(b.date));

  // Header
  doc.setFontSize(18);
  doc.text("NIPCO Station Continuity Report", 14, 22);
  doc.setFontSize(11);
  doc.setTextColor(100);
  doc.text(`Reporting Period: ${new Date(startDate).toLocaleDateString()} to ${new Date(endDate).toLocaleDateString()}`, 14, 30);
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 36);

  const tableData: any[] = [];

  sortedDays.forEach(day => {
    const results = auditCrossDate(allData, day.date);
    results.forEach(res => {
      if (res.prevDate) {
        tableData.push([
          day.date,
          res.pumpId,
          res.morning?.attendant || "---",
          res.morning?.closingReading.toFixed(2),
          res.afternoon?.attendant || "---",
          res.afternoon?.openingReading.toFixed(2),
          formatLiters(res.diff),
          res.isBalanced ? "MATCH" : "GAP"
        ]);
      }
    });
  });

  autoTable(doc, {
    startY: 45,
    head: [['Date', 'Pump', 'Prev Attendant', 'Last Closing', 'Curr Attendant', 'Today Opening', 'Diff', 'Status']],
    body: tableData,
    theme: 'striped',
    headStyles: { fillColor: [79, 70, 229], fontSize: 8 },
    bodyStyles: { fontSize: 7 },
    columnStyles: {
      6: { fontStyle: 'bold' },
      7: { fontStyle: 'bold' }
    },
    didParseCell: function (data) {
      if (data.column.index === 7 && data.cell.section === 'body') {
        if (data.cell.text[0] === 'GAP') {
          data.cell.styles.textColor = [225, 29, 72];
        } else if (data.cell.text[0] === 'MATCH') {
          data.cell.styles.textColor = [5, 150, 105];
        }
      }
    }
  });

  doc.save(`NIPCO_Continuity_${startDate}_to_${endDate}.pdf`);
};

export const generateLossLogPDF = (records: AuditResult[]) => {
  const doc = new jsPDF();
  const totalLoss = records.reduce((acc, curr) => acc + curr.diff, 0);
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.text("NIPCO Station Loss & Theft Log", 14, 22);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 28);

  // Summary Card
  doc.setDrawColor(225, 29, 72); // Rose 600
  doc.setFillColor(255, 241, 242); // Rose 50
  doc.roundedRect(14, 35, 182, 25, 3, 3, "FD");
  
  doc.setFontSize(9);
  doc.setTextColor(225, 29, 72);
  doc.text("TOTAL UNRECORDED VOLUME", 20, 43);
  doc.setFontSize(16);
  doc.text(formatLiters(totalLoss), 20, 53);
  
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text("TOTAL INCIDENTS", 140, 43);
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text(records.length.toString(), 140, 53);

  const tableData = records.map(r => [
    `${new Date(r.prevDate || r.currDate!).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}\nto\n${new Date(r.currDate!).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
    r.pumpId,
    r.type === 'intraday' ? 'Handover' : 'Continuity',
    `${r.morning?.attendant || "System"}\n(${r.morning?.closingReading.toFixed(2)})`,
    `${r.afternoon?.attendant || "System"}\n(${r.afternoon?.openingReading.toFixed(2)})`,
    formatLiters(r.diff)
  ]);

  autoTable(doc, {
    startY: 70,
    head: [['Date Range', 'Pump', 'Type', 'Previous Record', 'Current Record', 'Loss Vol']],
    body: tableData,
    theme: 'grid',
    headStyles: { 
      fillColor: [225, 29, 72], 
      fontSize: 9, 
      halign: 'center',
      cellPadding: 4
    },
    bodyStyles: { 
      fontSize: 8, 
      halign: 'center',
      cellPadding: 4
    },
    columnStyles: {
      0: { cellWidth: 25 },
      3: { halign: 'left' },
      4: { halign: 'left' },
      5: { fontStyle: 'bold', textColor: [225, 29, 72] }
    }
  });

  doc.save(`NIPCO_Loss_Log_${new Date().toISOString().split('T')[0]}.pdf`);
};