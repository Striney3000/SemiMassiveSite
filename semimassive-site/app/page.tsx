import type { Metadata } from 'next';
import { HeroCTA } from '@/components/HeroCTA';
import { HomePageWrapper } from '@/components/HomePageWrapper';
import { getRobotsForEnvironment } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/', base).toString();

  return {
    title: 'SemiMassive — Future Product Co-Dev',
    description:
      'Co-development in AI, XR, and behaviour-driven systems. We ship the next generation of product experiences before the market catches up.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'SemiMassive — Future Product Co-Dev',
      description:
        'We ship the next generation of product experiences before the market catches up.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function Home() {
  return (
    <HomePageWrapper>
      <div className="w-full">
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
          <div className="max-w-5xl w-full space-y-12">
            <div className="space-y-6">
              <h1 className="text-text-100">
                We ship the next generation of product experiences before the
                market catches up.
              </h1>
              <p className="text-text-300 text-xl md:text-2xl max-w-3xl">
                Co-development in AI, XR, and behaviour-driven systems.
              </p>
            </div>

            <HeroCTA />

            <div className="flex flex-wrap gap-4 pt-8">
              <span className="proof-chip">12M+ player launch</span>
              <span className="proof-chip">20%+ onboarding uplift</span>
              <span className="proof-chip">80% completion of 45-min VR</span>
            </div>
          </div>
        </section>
      </div>
    </HomePageWrapper>
  );
}
