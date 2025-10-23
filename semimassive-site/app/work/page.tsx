import type { Metadata } from 'next';
import { getAllWork } from '@/lib/mdx';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { WorkCard } from '@/components/WorkCard';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/work', base).toString();

  return {
    title: 'Work',
    description:
      'Case studies and project showcases from SemiMassive. Explore our work in AI, XR, and behaviour-driven systems.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'Work | SemiMassive',
      description:
        'Case studies and project showcases from SemiMassive. Explore our work in AI, XR, and behaviour-driven systems.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function WorkPage() {
  const allWork = await getAllWork();

  return (
    <div className="w-full min-h-screen px-6 md:px-12 py-12 md:py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-text-100">Work</h1>
          <p className="text-text-300 text-xl md:text-2xl max-w-3xl">
            Selected case studies from AI, XR, and behaviour-driven product work.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {allWork.map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
