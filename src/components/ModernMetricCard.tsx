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
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 icon-bg-indigo-600",
    amber: "bg-amber-50 text-amber-600 border-amber-100 icon-bg-amber-600",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 icon-bg-emerald-600",
    rose: "bg-rose-50 text-rose-600 border-rose-100 icon-bg-rose-600",
    sky: "bg-sky-50 text-sky-600 border-sky-100 icon-bg-sky-600",
    slate: "bg-slate-50 text-slate-600 border-slate-200 icon-bg-slate-600",
  };

  return (
    <div 
      onClick={onClick}
      className={cn(
        "group relative aspect-square flex flex-col justify-between p-6 bg-white border-2 rounded-[2rem] transition-all duration-500 ease-out overflow-hidden",
        "hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-2",
        isInteractive ? "cursor-pointer active:scale-95" : "cursor-default",
        color === 'rose' ? "hover:border-rose-200" : "hover:border-indigo-200"
      )}
    >
      {/* Background Glow Effect */}
      <div className={cn(
        "absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
        color === 'indigo' && "bg-indigo-400",
        color === 'amber' && "bg-amber-400",
        color === 'emerald' && "bg-emerald-400",
        color === 'rose' && "bg-rose-400",
        color === 'sky' && "bg-sky-400",
        color === 'slate' && "bg-slate-400",
      )} />

      <div className="space-y-4">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
          colorStyles[color].split(' ')[0],
          colorStyles[color].split(' ')[1]
        )}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-tight">
            {label}
          </p>
          <div className="h-1 w-8 bg-slate-100 rounded-full group-hover:w-12 transition-all duration-500" />
        </div>
      </div>

      <div className="relative">
        <p className={cn(
          "text-2xl md:text-3xl font-black tracking-tighter tabular-nums leading-none transition-colors duration-300",
          "text-slate-900 group-hover:text-black"
        )}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default ModernMetricCard;