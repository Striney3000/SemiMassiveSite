import type { Pillar } from '@/data/solutions';

interface PillarChipsProps {
  pillars: Pillar[];
  className?: string;
}

export function PillarChips({ pillars, className = '' }: PillarChipsProps) {
  if (!pillars || pillars.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {pillars.map((pillar) => (
        <span
          key={pillar}
          className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-base-800 text-text-300 border border-base-700"
        >
          {pillar}
        </span>
      ))}
    </div>
  );
}
