"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModernMetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: "indigo" | "amber" | "emerald" | "rose" | "sky" | "slate";
  onClick?: () => void;
  isInteractive?: boolean;
}

const ModernMetricCard = ({ 
  label, 
  value, 
  icon: Icon, 
  color, 
  onClick, 
  isInteractive 
}: ModernMetricCardProps) => {
  const colorStyles = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    sky: "bg-sky-50 text-sky-600 border-sky-100",
    slate: "bg-slate-50 text-slate-600 border-slate-200",
  };

  return (
    <div 
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-5 p-5 bg-white border-2 rounded-[1.5rem] transition-all duration-500 ease-out overflow-hidden",
        "hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1",
        isInteractive ? "cursor-pointer active:scale-95" : "cursor-default",
        color === 'rose' ? "hover:border-rose-200" : "hover:border-indigo-200"
      )}
    >
      {/* Background Glow Effect */}
      <div className={cn(
        "absolute -right-4 -top-4 w-20 h-20 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
        color === 'indigo' && "bg-indigo-400",
        color === 'amber' && "bg-amber-400",
        color === 'emerald' && "bg-emerald-400",
        color === 'rose' && "bg-rose-400",
        color === 'sky' && "bg-sky-400",
        color === 'slate' && "bg-slate-400",
      )} />

      <div className={cn(
        "shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
        colorStyles[color]
      )}>
        <Icon size={22} strokeWidth={2.5} />
      </div>
      
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] leading-tight truncate">
          {label}
        </p>
        <p className={cn(
          "text-xl md:text-2xl font-black tracking-tighter tabular-nums leading-none transition-colors duration-300",
          "text-slate-900 group-hover:text-black"
        )}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default ModernMetricCard;