import React from 'react';

interface MetricProps {
  value: string;
  label: string;
  footnote?: string;
}

export function Metric({ value, label, footnote }: MetricProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl md:text-5xl font-heading font-bold text-aqua-400">
        {value}
      </div>
      <div className="text-lg md:text-xl text-text-100 font-medium">
        {label}
      </div>
      {footnote && (
        <div className="text-sm text-text-300 italic">{footnote}</div>
      )}
    </div>
  );
}
