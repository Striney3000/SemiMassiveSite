import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllWork } from '@/lib/mdx';
import { getRobotsForEnvironment } from '@/lib/metadata';

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
          {allWork.map((work) => (
            <Link
              key={work.slug}
              href={`/work/${work.slug}`}
              className="group block no-underline min-h-[44px]"
            >
              <article className="h-full p-6 md:p-8 bg-base-900 border border-base-800 rounded-lg transition-all duration-soft ease-out-smooth hover:border-aqua-400 hover:shadow-lg hover:shadow-aqua-400/10">
                {work.featured && (
                  <span className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-aqua-400/10 text-aqua-400 rounded-full">
                    Featured
                  </span>
                )}

                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text-100 mb-3 group-hover:text-aqua-400 transition-colors">
                  {work.title}
                </h2>

                <p className="text-text-300 text-lg mb-4">{work.summary}</p>

                {work.pillars && work.pillars.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="px-3 py-1 text-sm bg-base-800 text-text-300 rounded-full"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                )}

                {work.client && work.year && (
                  <div className="text-sm text-text-300">
                    {work.client} • {work.year}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
