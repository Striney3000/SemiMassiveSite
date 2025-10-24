'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';

export function ServicesLink() {
  const handleClick = () => {
    track('Nav Click', { from: 'home', to: 'services' });
  };

  return (
    <div className="pt-4">
      <Link
        href="/services"
        onClick={handleClick}
        className="inline-flex items-center text-text-300 hover:text-aqua-400 active:text-aqua-600 transition-colors underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700 rounded px-2 py-2 min-h-[44px]"
      >
        See how we approach adoption →
      </Link>
    </div>
  );
}
