'use client';

import { useScrollMilestones } from '@/hooks/useScrollMilestones';

interface CaseStudyPageWrapperProps {
  slug: string;
  children: React.ReactNode;
}

export function CaseStudyPageWrapper({ slug, children }: CaseStudyPageWrapperProps) {
  useScrollMilestones(slug);
  
  return <>{children}</>;
}
