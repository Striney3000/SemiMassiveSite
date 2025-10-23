'use client';

import { track, trackFirstCta } from '@/lib/analytics';

export function HeroCTA() {
  const handleClick = () => {
    trackFirstCta('hero', 'home');
    track('CTA Click', { location: 'hero', page: 'home' });
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
