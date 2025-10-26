'use client';

import { useState } from 'react';
import { MatrixCard } from '@/components/matrix/MatrixCard';
import { MatrixExpanded } from '@/components/matrix/MatrixExpanded';
import { MATRIX_NODES, type MatrixNode } from '@/data/matrixData';

export function MatrixClient() {
  const [active, setActive] = useState<MatrixNode | null>(null);

  return (
    <main className="min-h-screen w-full px-4 sm:px-6 lg:px-10 py-16">
      <header className="mb-10 max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-text-400">The Lab</p>
        <h1 className="mt-2 text-2xl sm:text-4xl font-heading font-semibold text-text-100">
          Matrix — Immersive Presence Panels
        </h1>
        <p className="mt-3 text-text-300 max-w-2xl">
          A curated guild of frontier specialists. Tap a presence to reveal their
          discipline and the outcomes they drive.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {MATRIX_NODES.map((node) => (
          <MatrixCard key={node.id} node={node} onOpen={() => setActive(node)} />
        ))}
      </section>

      <MatrixExpanded open={!!active} node={active} onClose={() => setActive(null)} />
    </main>
  );
}
