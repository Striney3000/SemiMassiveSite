'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';

interface MatrixPeekProps {
  from: 'services' | 'about';
}

export function MatrixPeek({ from }: MatrixPeekProps) {
  const handleClick = () => {
    track('Nav Click', { from, to: 'matrix' });
  };

  return (
    <Link
      href="/matrix"
      onClick={handleClick}
      className="group block no-underline p-6 md:p-8 bg-base-900 border border-base-800 rounded-lg transition-all duration-soft ease-out-smooth hover:border-aqua-400 hover:shadow-lg hover:shadow-aqua-400/10 min-h-[44px]"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-heading font-semibold text-text-100 group-hover:text-aqua-400 transition-colors">
          Explore The Matrix →
        </h3>
      </div>

      <p className="mt-3 text-sm text-text-300">
        Immersive presence panels showcasing our guild of frontier specialists
      </p>
    </Link>
  );
}
