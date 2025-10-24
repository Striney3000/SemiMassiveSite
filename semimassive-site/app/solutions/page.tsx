import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { SOLUTIONS } from '@/data/solutions';
import { SolutionsContent } from '@/components/SolutionsContent';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/solutions', base).toString();

  return {
    title: 'Solutions — Intervention Playbook | SemiMassive',
    description:
      'Four repeatable interventions that increase adoption: Legibility Layer, First-Win Architecture, Friction Surgery, Signal Instrumentation.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'Solutions — Intervention Playbook | SemiMassive',
      description:
        'Four repeatable interventions that increase adoption: Legibility Layer, First-Win Architecture, Friction Surgery, Signal Instrumentation.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function SolutionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SemiMassive Solutions',
    itemListElement: SOLUTIONS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: s.title,
        description: s.subtitle,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SolutionsContent />
    </>
  );
}
