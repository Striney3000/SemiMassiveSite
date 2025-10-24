import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { MATRIX_NODES } from '@/data/matrix';
import { MatrixContent } from '@/components/MatrixContent';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/matrix', base).toString();

  return {
    title: 'Neural Matrix — Capability Layer | SemiMassive',
    description:
      'A living capability layer: specialised nodes activated per intervention. No bench. No org chart.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'Neural Matrix — Capability Layer | SemiMassive',
      description:
        'A living capability layer: specialised nodes activated per intervention. No bench. No org chart.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function MatrixPage() {
  const items = MATRIX_NODES.map((n, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${n.codename} — ${n.title}`,
    description: n.blurb
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SemiMassive Neural Matrix',
    itemListElement: items
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MatrixContent />
    </>
  );
}
