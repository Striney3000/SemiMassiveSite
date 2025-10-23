import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllWork, getWorkBySlug, compileMdx } from '@/lib/mdx';
import { creativeWorkJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { Prose } from '@/components/Prose';
import { Section } from '@/components/Section';
import { Metric } from '@/components/Metric';
import { Figure } from '@/components/Figure';
import { Snapshot } from '@/components/Snapshot';
import { CTA } from '@/components/CTA';
import { ProgressBar } from '@/components/ProgressBar';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CaseStudyPageWrapper } from '@/components/CaseStudyPageWrapper';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const allWork = await getAllWork();
  return allWork.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    return {
      title: 'Solution Not Found',
    };
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL(`/interventions/${slug}`, base).toString();

  const ogImageUrl = new URL('/api/og', base);
  ogImageUrl.searchParams.set('title', work.meta.title);
  ogImageUrl.searchParams.set('subtitle', work.meta.summary);
  if (work.meta.client) ogImageUrl.searchParams.set('client', work.meta.client);
  if (work.meta.year) ogImageUrl.searchParams.set('year', work.meta.year.toString());

  return {
    title: work.meta.title,
    description: work.meta.summary,
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: work.meta.title,
      description: work.meta.summary,
      type: 'article',
      images: [{ url: ogImageUrl.toString(), width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: work.meta.title,
      description: work.meta.summary,
      images: [ogImageUrl.toString()],
    },
  };
}

export default async function InterventionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const { meta, content } = work;
  
  const components = {
    Section,
    Prose,
    Metric,
    Figure,
    Snapshot,
    CTA,
  };
  
  const mdxContent = await compileMdx(content, components);

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = `${base}/interventions/${slug}`;

  const jsonLd = {
    creativeWork: creativeWorkJsonLd({
      name: meta.title,
      description: meta.summary,
      url,
      dateModified: meta.lastmod,
      image: meta.hero,
      authorName: 'SemiMassive',
    }),
    breadcrumb: breadcrumbJsonLd([
      { name: 'Home', item: base },
      { name: 'Solutions', item: `${base}/interventions` },
      { name: meta.title, item: url },
    ]),
  };

  const hasLongContent = content.length > 2000;

  const hasPIR = meta.problem || meta.intervention || meta.result;

  return (
    <CaseStudyPageWrapper slug={slug}>
      <div className="w-full min-h-screen">
        <ProgressBar show={hasLongContent} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.creativeWork) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
        />

        <Section className="max-w-5xl mx-auto" animate={false}>
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/interventions' },
              { name: meta.title, href: `/interventions/${slug}` },
            ]}
          />
          
          <header className="space-y-6 mb-12">
            <div className="space-y-2">
              {meta.client && meta.year && (
                <p className="text-text-300 text-lg">
                  {meta.client} • {meta.year}
                </p>
              )}
              <h1 className="text-text-100">{meta.title}</h1>
            </div>

            {meta.pillars && meta.pillars.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {meta.pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="px-4 py-2 text-sm font-medium bg-base-900 border border-base-800 text-text-100 rounded-full"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            )}

            <p className="text-xl md:text-2xl text-text-100 leading-relaxed max-w-3xl">
              {meta.summary}
            </p>

            {hasPIR && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 pb-4 border-y border-base-800">
                {meta.problem && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-text-300 uppercase tracking-wide">Problem</h3>
                    <p className="text-text-100 text-base">{meta.problem}</p>
                  </div>
                )}
                {meta.intervention && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-text-300 uppercase tracking-wide">Intervention</h3>
                    <p className="text-text-100 text-base">{meta.intervention}</p>
                  </div>
                )}
                {meta.result && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-text-300 uppercase tracking-wide">Result</h3>
                    <p className="text-text-100 text-base">{meta.result}</p>
                  </div>
                )}
              </div>
            )}

            {meta.impact && meta.impact.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8">
                {meta.impact.map((item, index) => {
                  const parts = item.split(/\s+/);
                  const value = parts[0];
                  const label = parts.slice(1).join(' ');

                  return (
                    <Metric
                      key={index}
                      value={value}
                      label={label}
                    />
                  );
                })}
              </div>
            )}
          </header>

          <div className="mt-12">{mdxContent as React.ReactNode}</div>
        </Section>
      </div>
    </CaseStudyPageWrapper>
  );
}
