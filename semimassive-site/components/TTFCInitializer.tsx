'use client';

import { useEffect } from 'react';
import { initTTFC } from '@/lib/analytics';

interface TTFCInitializerProps {
  page: string;
}

export function TTFCInitializer({ page }: TTFCInitializerProps) {
  useEffect(() => {
    initTTFC(page);
  }, [page]);

  return null;
}
