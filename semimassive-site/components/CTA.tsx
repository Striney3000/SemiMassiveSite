'use client';

import React from 'react';
import Link from 'next/link';
import { track } from '@/lib/analytics';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  trackingLocation?: string;
}

export function CTA({
  href,
  children,
  variant = 'primary',
  external = false,
  trackingLocation,
}: CTAProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-all duration-soft ease-out-smooth min-h-[56px]';

  const variantStyles =
    variant === 'primary'
      ? 'bg-aqua-400 text-base-950 hover:bg-aqua-500 hover:shadow-lg active:bg-aqua-600 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700'
      : 'bg-base-900 text-text-100 border-2 border-aqua-400 hover:bg-base-800 hover:border-aqua-500 active:border-aqua-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700';

  const className = `${baseStyles} ${variantStyles}`;

  const handleClick = () => {
    if (trackingLocation) {
      track('CTA Click', { location: trackingLocation });
    }
  };

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
