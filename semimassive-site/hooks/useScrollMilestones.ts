import { useEffect, useRef } from 'react';
import { track } from '@/lib/analytics';

export function useScrollMilestones(slug: string) {
  const fired = useRef(new Set<number>());
  
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = Math.round((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      
      [25, 50, 75, 90].forEach((m) => {
        if (pct >= m && !fired.current.has(m)) {
          fired.current.add(m);
          track('Read Milestone', { slug, percent: m });
        }
      });
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);
}
