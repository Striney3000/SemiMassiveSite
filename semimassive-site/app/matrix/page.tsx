import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { MATRIX_NODES } from '@/data/matrixData';
import { MatrixClient } from '@/components/matrix/MatrixClient';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/matrix', base).toString();

  return {
    title: 'Matrix — Immersive Presence Panels | SemiMassive',
    description:
      'A curated guild of frontier specialists. Tap a presence to reveal their discipline and the outcomes they drive.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'Matrix — Immersive Presence Panels | SemiMassive',
      description:
        'A curated guild of frontier specialists. Tap a presence to reveal their discipline and the outcomes they drive.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function MatrixPage() {
  const items = MATRIX_NODES.map((n, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${n.name} — ${n.archetype}`,
    description: n.discipline
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SemiMassive Matrix — Immersive Presence Panels',
    description: 'A curated guild of frontier specialists',
    itemListElement: items
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MatrixClient />
    </>
  );
}
