'use client';

import { useState } from 'react';
import { MATRIX_NODES, type Pillar } from '@/data/matrix';
import { MatrixGrid } from './MatrixGrid';
import { MatrixFilters } from './MatrixFilters';
import { Section } from './Section';
import Link from 'next/link';
import { track } from '@/lib/analytics';

export function MatrixContent() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | 'All'>('All');

  const filteredNodes = selectedPillar === 'All'
    ? MATRIX_NODES
    : MATRIX_NODES.filter(node => node.pillars.includes(selectedPillar));

  const handleCtaClick = () => {
    track('Nav Click', { from: 'matrix', to: 'services' });
  };

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-text-100 mb-6">
            The Neural Matrix
          </h1>
          <p className="text-xl md:text-2xl text-text-300 mb-4">
            A living capability layer we activate per intervention. No bench. No org chart. Just the right capability at the moment of need.
          </p>
          <p className="text-sm text-text-300/60 italic">
            Avatars and codenames are representative. Collaborators vary by engagement.
          </p>
        </div>

        <MatrixFilters 
          selectedPillar={selectedPillar}
          onFilterChange={setSelectedPillar}
        />

        <MatrixGrid nodes={filteredNodes} />

        <div className="mt-16 text-center">
          <Link
            href="/services"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-aqua-400 text-base-950 font-heading font-semibold text-lg hover:bg-aqua-500 hover:shadow-lg active:bg-aqua-600 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700 transition-all duration-soft ease-out-smooth min-h-[56px]"
          >
            See how we assemble interventions →
          </Link>
        </div>
      </div>
    </Section>
  );
}
