'use client';

import { track } from '@/lib/analytics';

export function HeroCTA() {
  const handleClick = () => {
    track('CTA Click', { location: 'hero' });
  };

  return (
    <div>
      <a
        href="#contact"
        className="btn-primary no-underline"
        onClick={handleClick}
      >
        Book a 15-min intro
      </a>
    </div>
  );
}
