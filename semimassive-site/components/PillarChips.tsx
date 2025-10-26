import type { Pillar } from '@/data/matrix';

interface PillarChipsProps {
  pillars: Pillar[];
  compact?: boolean;
  className?: string;
}

export function PillarChips({ pillars, compact = false, className = '' }: PillarChipsProps) {
  const visiblePillars = compact ? pillars.slice(0, 2) : pillars;
  const remainingCount = compact && pillars.length > 2 ? pillars.length - 2 : 0;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {visiblePillars.map((pillar) => (
        <span
          key={pillar}
          className="px-3 py-1 text-sm bg-base-800 text-text-300 rounded-full border border-base-800"
        >
          {pillar}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className="text-sm text-text-300/60">
          +{remainingCount}
        </span>
      )}
    </div>
  );
}
