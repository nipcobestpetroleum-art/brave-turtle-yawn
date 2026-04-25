import React from "react";
import { cn } from "@/lib/utils";

interface MetricPillProps {
  label: string;
  value: string;
  variant?: "default" | "success" | "destructive" | "warning";
}

const MetricPill = ({ label, value, variant = "default" }: MetricPillProps) => {
  const variants = {
    default: "bg-gray-100 text-gray-700 border-gray-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    destructive: "bg-rose-50 text-rose-700 border-rose-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
  };

  return (
    <div className={cn("px-3 py-1 rounded-full border text-xs font-semibold flex items-center gap-2", variants[variant])}>
      <span className="opacity-70 uppercase tracking-wider text-[10px]">{label}:</span>
      <span>{value}</span>
    </div>
  );
};

export default MetricPill;