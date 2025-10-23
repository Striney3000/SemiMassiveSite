'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';
import type { CaseStudyMeta } from '@/lib/types';

interface WorkCardProps {
  work: CaseStudyMeta;
  index: number;
}

export function WorkCard({ work, index }: WorkCardProps) {
  const handleClick = () => {
    track('Work Opened', { slug: work.slug, card_position: index + 1 });
  };

  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block no-underline min-h-[44px]"
      onClick={handleClick}
    >
      <article className="h-full p-6 md:p-8 bg-base-900 border border-base-800 rounded-lg transition-all duration-soft ease-out-smooth hover:border-aqua-400 hover:shadow-lg hover:shadow-aqua-400/10">
        {work.featured && (
          <span className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-aqua-400/10 text-aqua-400 rounded-full">
            Featured
          </span>
        )}

        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text-100 mb-3 group-hover:text-aqua-400 transition-colors">
          {work.title}
        </h2>

        <p className="text-text-300 text-lg mb-4">{work.summary}</p>

        {work.pillars && work.pillars.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {work.pillars.map((pillar: string) => (
              <span
                key={pillar}
                className="px-3 py-1 text-sm bg-base-800 text-text-300 rounded-full"
              >
                {pillar}
              </span>
            ))}
          </div>
        )}

        {work.client && work.year && (
          <div className="text-sm text-text-300">
            {work.client} • {work.year}
          </div>
        )}
      </article>
    </Link>
  );
}
