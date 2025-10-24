import type { Pillar } from '@/data/matrix';

interface PillarChipsProps {
  pillars: Pillar[];
  className?: string;
}

export function PillarChips({ pillars, className = '' }: PillarChipsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {pillars.map((pillar) => (
        <span
          key={pillar}
          className="px-3 py-1 text-sm bg-base-800 text-text-300 rounded-full border border-base-800 focus-within:ring-2 focus-within:ring-aqua-400 focus-within:ring-offset-2 focus-within:ring-offset-base-950"
        >
          {pillar}
        </span>
      ))}
    </div>
  );
}
