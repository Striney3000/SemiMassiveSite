'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initTTFC } from '@/lib/analytics';

export function GlobalTTFCInitializer() {
  const pathname = usePathname();
  
  useEffect(() => {
    const page = pathname === '/' ? 'home' : pathname.slice(1);
    initTTFC(page);
  }, [pathname]);

  return null;
}
