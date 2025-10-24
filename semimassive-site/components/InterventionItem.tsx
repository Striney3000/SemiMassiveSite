'use client';

import { useEffect, useRef, useState } from 'react';
import { PillarChips } from './PillarChips';
import type { Solution } from '@/data/solutions';

interface InterventionItemProps {
  solution: Solution;
  onOpen: (id: string) => void;
}

export function InterventionItem({ solution, onOpen }: InterventionItemProps) {
  const [revealed, setRevealed] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed) {
            const delay = Math.random() * 60 + 60;
            setTimeout(() => {
              setRevealed(true);
              itemRef.current?.setAttribute('data-revealed', 'true');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [revealed]);

  const handleClick = () => {
    onOpen(solution.id);
  };

  return (
    <div
      ref={itemRef}
      className={`
        relative pl-12 md:pl-20 py-8 
        motion-safe:transition-all motion-safe:duration-[220ms] motion-safe:ease-out-smooth
        ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        motion-reduce:opacity-100 motion-reduce:translate-y-0
      `}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-base-800 hidden md:block" />

      <div className="absolute left-[-4px] md:left-[-4px] top-8 w-2 h-2 rounded-full bg-aqua-500 opacity-0 group-hover:opacity-100 transition-opacity duration-soft" />

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-text-100 mb-1">
              {solution.title}
            </h3>
            <p className="text-base md:text-lg text-text-300 mb-3">{solution.subtitle}</p>
            <PillarChips pillars={solution.pillars} className="mb-4" />
          </div>
        </div>

        <button
          onClick={handleClick}
          aria-controls={`solution-${solution.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-base-800 hover:bg-aqua-600 text-text-100 border border-base-800 hover:border-aqua-500 rounded-md transition-all duration-soft focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:ring-offset-2 focus:ring-offset-base-950 min-h-[44px] min-w-[44px]"
        >
          <span>Open</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4L4 12M12 4V10M12 4H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
