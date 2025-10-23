'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

interface ReducedMotionGateProps {
  children: (shouldAnimate: boolean) => React.ReactNode;
}

export function ReducedMotionGate({ children }: ReducedMotionGateProps) {
  const prefersReducedMotion = useReducedMotion();
  return <>{children(!prefersReducedMotion)}</>;
}
