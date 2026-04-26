"use client";

import React, { useMemo } from "react";
import { DailyReport } from "../types/sales";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Legend } from "recharts";
import { formatCurrency, formatLiters } from "../utils/auditLogic";

interface StationAnalyticsProps {
  allData: DailyReport[];
}

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const StationAnalytics = ({ allData }: StationAnalyticsProps) => {
  const sortedData = useMemo(() => [...allData].sort((a, b) => a.date.localeCompare(b.date)), [allData]);

  // 1. Daily Sales Trend
  const salesTrend = useMemo(() => {
    return sortedData.map(day => {
      const total = [...day.shifts.morning, ...day.shifts.afternoon].reduce((acc, curr) => {
        const liters = Math.max(0, curr.closingReading - curr.openingReading);
        return acc + (liters * curr.pricePerLiter);
      }, 0);
      return {
        date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        amount: total
      };
    });
  }, [sortedData]);

  // 2. Product Distribution
  const productData = useMemo(() => {
    const totals = { PMS: 0, AGO: 0 };
    allData.forEach(day => {
      [...day.shifts.morning, ...day.shifts.afternoon].forEach(p => {
        const liters = Math.max(0, p.closingReading - p.openingReading);
        if (p.product === 'PMS') totals.PMS += liters;
        else if (p.product === 'AGO') totals.AGO += liters;
      });
    });
    return [
      { name: 'PMS', value: totals.PMS },
      { name: 'AGO', value: totals.AGO }
    ];
  }, [allData]);

  // 3. Staff Performance (Top 10 by Volume)
  const staffPerformance = useMemo(() => {
    const staffMap = new Map<string, number>();
    allData.forEach(day => {
      [...day.shifts.morning, ...day.shifts.afternoon].forEach(p => {
        const liters = Math.max(0, p.closingReading - p.openingReading);
        staffMap.set(p.attendant, (staffMap.get(p.attendant) || 0) + liters);
      });
    });
    return Array.from(staffMap.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [allData]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Sales Trend */}
      <Card className="border-2 shadow-sm lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-black text-slate-400 uppercase tracking-widest">Daily Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="date" fontSize={10} fontWeight="bold" tickLine={false} axisLine={false} />
              <YAxis fontSize={10} fontWeight="bold" tickLine={false} axisLine={false} tickFormatter={(v) => `₦${v/1000000}M`} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [formatCurrency(value), 'Revenue']}
              />
              <Line type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={4} dot={{ r: 4, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Product Mix */}
      <Card className="border-2 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-black text-slate-400 uppercase tracking-widest">Product Volume Mix</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => formatLiters(v)} />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Staff Performance */}
      <Card className="border-2 shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-black text-slate-400 uppercase tracking-widest">Top Attendants (Volume)</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={staffPerformance} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" fontSize={10} fontWeight="bold" width={80} tickLine={false} axisLine={false} />
              <Tooltip formatter={(v: number) => formatLiters(v)} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {staffPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StationAnalytics;