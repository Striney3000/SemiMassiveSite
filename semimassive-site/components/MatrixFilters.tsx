'use client';

import type { Pillar } from '@/data/matrix';
import { track } from '@/lib/analytics';

interface MatrixFiltersProps {
  selectedPillar: Pillar | 'All';
  onFilterChange: (pillar: Pillar | 'All') => void;
}

const filters: Array<Pillar | 'All'> = ['All', 'Behavioural', 'AI', 'Spatial', 'Research'];

export function MatrixFilters({ selectedPillar, onFilterChange }: MatrixFiltersProps) {
  const handleFilterClick = (pillar: Pillar | 'All') => {
    onFilterChange(pillar);
    track('Matrix Filter', { pillar });
  };

  return (
    <div 
      className="flex flex-wrap gap-3 mb-8"
      role="group"
      aria-label="Filter nodes by pillar"
    >
      {filters.map((filter) => {
        const isSelected = selectedPillar === filter;
        
        return (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            aria-pressed={isSelected}
            className={`
              px-6 py-3 rounded-lg font-heading font-semibold
              transition-all duration-soft ease-out-smooth
              min-h-[44px] min-w-[44px]
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400
              ${isSelected
                ? 'bg-aqua-400 text-base-950 shadow-lg shadow-aqua-400/20'
                : 'bg-base-900 text-text-300 border border-base-800 hover:border-aqua-400/50 hover:text-text-100'
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
