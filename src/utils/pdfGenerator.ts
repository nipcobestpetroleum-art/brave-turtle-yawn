import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { DailyReport } from "../types/sales";
import { auditCrossDate, formatLiters } from "./auditLogic";

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
      // We only include rows where there is a previous record to compare against
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