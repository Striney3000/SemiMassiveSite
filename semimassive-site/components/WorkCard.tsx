'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';
import type { CaseStudyMeta } from '@/lib/types';

interface WorkCardProps {
  work: CaseStudyMeta;
  index: number;
}

function derivePIRFromMeta(work: CaseStudyMeta): { problem: string; intervention: string; result: string } {
  const summarySnippet = work.summary.slice(0, 100);
  const impactSnippet = work.impact[0] || '';
  
  return {
    problem: work.problem || summarySnippet,
    intervention: work.intervention || 'Strategic intervention',
    result: work.result || impactSnippet,
  };
}

export function WorkCard({ work, index }: WorkCardProps) {
  const handleClick = () => {
    track('Work Opened', { slug: work.slug, card_position: index + 1 });
  };

  const pir = derivePIRFromMeta(work);

  return (
    <Link
      href={`/interventions/${work.slug}`}
      className="group block no-underline min-h-[44px]"
      onClick={handleClick}
      aria-label={`Open solution: ${work.title}`}
    >
      <article className="h-full p-6 md:p-8 bg-base-900 border border-base-800 rounded-lg transition-all duration-soft ease-out-smooth hover:border-aqua-400 hover:shadow-lg hover:shadow-aqua-400/10">
        {work.client && work.year && (
          <p className="text-sm text-text-300 mb-3">
            {work.client} • {work.year}
          </p>
        )}

        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text-100 mb-4 group-hover:text-aqua-400 transition-colors">
          {work.title}
        </h2>

        <div className="space-y-3 mb-4 text-base">
          <div className="flex items-start gap-2">
            <span className="text-text-300 font-medium shrink-0">Problem →</span>
            <span className="text-text-100">{pir.problem}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-text-300 font-medium shrink-0">Intervention →</span>
            <span className="text-text-100">{pir.intervention}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-text-300 font-medium shrink-0">Result →</span>
            <span className="text-text-100">{pir.result}</span>
          </div>
        </div>

        {work.pillars && work.pillars.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
      </article>
    </Link>
  );
}
