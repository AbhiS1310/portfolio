'use client';

import React from 'react';

export interface TelemetryBadgeProps {
  label: string;
  value?: string;
  status?: 'active' | 'optimal' | 'warning' | 'online';
  variant?: 'cyan' | 'emerald' | 'amber';
  icon?: React.ReactNode;
}

export function TelemetryBadge({
  label,
  value,
  status = 'active',
  variant,
  icon,
}: TelemetryBadgeProps) {
  // Normalize status or variant
  const effectiveStatus = variant === 'cyan' ? 'optimal' : variant === 'amber' ? 'warning' : status === 'online' ? 'optimal' : status;

  const statusColors = {
    active: {
      dot: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
      border: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-300',
    },
    optimal: {
      dot: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
      border: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-300',
    },
    online: {
      dot: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
      border: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-300',
    },
    warning: {
      dot: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]',
      border: 'border-amber-500/20 bg-amber-500/5 text-amber-300',
    },
  }[effectiveStatus] || {
    dot: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
    border: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-300',
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full border text-xs font-mono transition-all duration-300 hover:scale-[1.02] ${statusColors.border}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusColors.dot}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${statusColors.dot}`}
        />
      </span>
      {icon && <span className="opacity-70">{icon}</span>}
      <span className="text-white/60 uppercase tracking-wider text-[10px]">
        {label}
      </span>
      {value && <span className="font-semibold text-white/95">{value}</span>}
    </div>
  );
}

