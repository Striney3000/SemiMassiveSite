export function track(event: string, props?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(event, { props });
  }
}

interface TTFCState {
  t0: number;
  fired: boolean;
}

const ttfcStateMap = new Map<string, TTFCState>();

export function initTTFC(page: string) {
  if (typeof window === 'undefined') return;
  
  ttfcStateMap.set(page, {
    t0: performance.now(),
    fired: false,
  });
}

export function trackFirstCta(location: string, page: string) {
  if (typeof window === 'undefined') return;
  
  const state = ttfcStateMap.get(page);
  if (!state || state.fired) return;
  
  const ms = Math.round(performance.now() - state.t0);
  state.fired = true;
  track('TTFC', { ms, location, page });
}
