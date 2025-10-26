'use client';

import { useState, useEffect } from 'react';
import { SOLUTIONS } from '@/data/solutions';
import { MATRIX_NODES } from '@/data/matrixData';
import { InterventionItem } from './InterventionItem';
import { OverlayModal } from './OverlayModal';
import { LineDiagram } from './LineDiagram';
import { PillarChips } from './PillarChips';
import { track } from '@/lib/analytics';
import Link from 'next/link';

export function SolutionsContent() {
  const [openSolutionId, setOpenSolutionId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setOpenSolutionId(id);
    track('Solution Open', { id });
  };

  const handleClose = () => {
    if (openSolutionId) {
      track('Solution Close', { id: openSolutionId });
    }
    setOpenSolutionId(null);
  };

  const handleCTAClick = (id: string) => {
    track('CTA Click', { from: 'solutions', id });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-solution-id');
            if (id) {
              track('Solution Reveal', { id });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('[data-solution-id]');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const openSolution = SOLUTIONS.find((s) => s.id === openSolutionId);

  return (
    <>
      <div className="min-h-screen bg-base-950 text-text-100 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-100 mb-4">
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-text-300 max-w-2xl">
              Our interventions turn hesitation into momentum. Each is a repeatable pattern we apply
              inside complex products.
            </p>
          </header>

          <div className="space-y-0">
            {SOLUTIONS.map((solution) => (
              <div key={solution.id} data-solution-id={solution.id}>
                <InterventionItem solution={solution} onOpen={handleOpen} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {openSolution && (
        <OverlayModal
          open={true}
          onClose={handleClose}
          titleId={`solution-title-${openSolution.id}`}
        >
          <div className="space-y-8">
            <div>
              <h2
                id={`solution-title-${openSolution.id}`}
                className="text-3xl md:text-4xl font-heading font-bold text-text-100 mb-2"
              >
                {openSolution.title}
              </h2>
              <p className="text-lg text-text-300 mb-4">{openSolution.subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-text-300">
                <PillarChips pillars={openSolution.pillars} />
                <div className="flex items-center gap-2">
                  <span>Usually activates:</span>
                  <div className="flex flex-wrap gap-2">
                    {openSolution.matrixNodes.map((nodeId) => {
                      const node = MATRIX_NODES.find((n) => n.id === nodeId);
                      return node ? (
                        <Link
                          key={nodeId}
                          href={`/matrix#${nodeId}`}
                          className="text-aqua-400 hover:text-aqua-300 underline transition-colors duration-soft focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:ring-offset-2 focus:ring-offset-base-900 rounded px-1"
                        >
                          {node.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>

            <LineDiagram variant={openSolution.id as any} className="my-8" />

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-heading font-semibold text-aqua-400 mb-3">Problem</h3>
                <p className="text-text-100 leading-relaxed">{openSolution.problem}</p>
              </section>

              <section>
                <h3 className="text-xl font-heading font-semibold text-aqua-400 mb-3">
                  Intervention
                </h3>
                <ul className="space-y-2">
                  {openSolution.intervention.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-aqua-400 flex-shrink-0 mt-1">•</span>
                      <span className="text-text-100 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-heading font-semibold text-aqua-400 mb-3">
                  Build Layer
                </h3>
                <p className="text-text-100 leading-relaxed mb-3">{openSolution.engineering}</p>
                <p className="text-text-300 text-sm italic">
                  When the intervention progresses into build, we route through a dedicated
                  engineering layer to deploy safely, observably, and at pace.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-base-800">
              <Link
                href="/services"
                onClick={() => handleCTAClick(openSolution.id)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-aqua-600 hover:bg-aqua-500 text-white rounded-md transition-colors duration-soft focus:outline-none focus:ring-2 focus:ring-aqua-400 focus:ring-offset-2 focus:ring-offset-base-900 min-h-[44px]"
              >
                See how we engage →
              </Link>
            </div>
          </div>
        </OverlayModal>
      )}
    </>
  );
}
