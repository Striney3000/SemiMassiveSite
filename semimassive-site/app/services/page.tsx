import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { howToJsonLd } from '@/lib/seo';
import { ServicesContent } from '@/components/ServicesContent';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/services', base).toString();

  return {
    title: 'Services — Problems we solve',
    description:
      'We solve adoption challenges through Behavioural Systems, AI Interaction, and Spatial/3D UX.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'Services — Problems we solve | SemiMassive',
      description:
        'We solve adoption challenges through Behavioural Systems, AI Interaction, and Spatial/3D UX.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function ServicesPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/services', base).toString();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SemiMassive Services',
    description:
      'We solve adoption challenges through Behavioural Systems, AI Interaction, and Spatial/3D UX.',
    areaServed: 'Global',
    serviceType: 'Behavioural Systems, AI Interaction, Spatial/3D UX',
    provider: {
      '@type': 'Organization',
      name: 'SemiMassive',
      url: base,
    },
  };

  const diagnosticSchema = howToJsonLd({
    name: '2-Week Diagnostic Process',
    description:
      'Our structured approach to identifying and solving product adoption challenges',
    url,
    steps: [
      'Discover: Identify key adoption barriers and user hesitation points',
      'Map: Create a Gap Map showing where users drop off or lose momentum',
      'Prototype: Design targeted interventions to address critical issues',
      'Plan: Deliver an Intervention Plan with prioritized experiment specs',
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticSchema) }}
      />

      <ServicesContent />
    </>
  );
}
