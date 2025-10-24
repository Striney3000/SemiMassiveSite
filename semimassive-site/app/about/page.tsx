import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';
import { orgJsonLd, personJsonLd } from '@/lib/seo';
import { Section } from '@/components/Section';
import { Prose } from '@/components/Prose';
import { CTA } from '@/components/CTA';
import { AboutPrinciples } from '@/components/AboutPrinciples';
import { FounderCard } from '@/components/FounderCard';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/about', base).toString();

  return {
    title: 'About SemiMassive — Why we exist, what we believe',
    description:
      'We help companies evolve from legacy UX to emergent interaction models — AI, XR, and behaviour systems.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'About SemiMassive — Why we exist, what we believe',
      description:
        'We help companies evolve from legacy UX to emergent interaction models — AI, XR, and behaviour systems.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function AboutPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SemiMassive',
    url: base,
    sameAs: ['https://www.linkedin.com/in/nickstrine'],
    logo: `${base}/og.png`,
  };

  const founderSchema = personJsonLd({
    name: 'Nick Strine',
    jobTitle: 'Founder, Systems Design / Creative Direction',
    url: base,
    sameAs: ['https://www.linkedin.com/in/nickstrine'],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />

      <div className="w-full min-h-screen" id="content">
        <Section className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-100 leading-tight max-w-4xl">
              We help companies evolve from legacy UX to emergent interaction
              models.
            </h1>
            <p className="text-xl md:text-2xl text-text-200 leading-relaxed max-w-3xl">
              SemiMassive bridges relic UI patterns and new ways of interacting
              with AI, spatial interfaces, and 3D systems.
            </p>
            <div className="pt-4">
              <CTA
                href="https://cal.com/semimassive/15min"
                external
                trackingLocation="hero"
              >
                Book a 15-min intro
              </CTA>
            </div>
          </div>
        </Section>

        <Section className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading text-text-100">
                Why we exist
              </h2>
              <Prose>
                <p className="text-lg md:text-xl text-text-200 leading-relaxed max-w-3xl">
                  The next era of product design isn&apos;t click-only or
                  screen-only. AI, spatial computing, and simulation have
                  outgrown flat UX. Most organisations need help crossing that
                  frontier — not by re-skinning interfaces, but by evolving how
                  people interact with intelligence and complex systems.
                  SemiMassive is a studio built for that transition.
                </p>
              </Prose>
            </div>
          </div>
        </Section>

        <Section className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading text-text-100">
                What we believe
              </h2>
              <Prose>
                <div className="space-y-6 max-w-3xl">
                  <p className="text-lg md:text-xl text-text-200 leading-relaxed">
                    Design is not only functional; it&apos;s felt. Products become
                    intuitive when interaction creates momentum instead of
                    friction.
                  </p>
                  <p className="text-lg md:text-xl text-text-200 leading-relaxed">
                    We treat flow and enjoyment as behavioural infrastructure —
                    the basis for retention, confidence, and meaning.
                  </p>
                  <ul className="space-y-4 text-lg md:text-xl text-text-200 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-aqua-400 mt-1">→</span>
                      <span>Engineer feel, not just frames.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-aqua-400 mt-1">→</span>
                      <span>Clarity beats choice early; mastery can wait.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-aqua-400 mt-1">→</span>
                      <span>
                        Feedback must be peripheral, consistent, legible.
                      </span>
                    </li>
                  </ul>
                </div>
              </Prose>
            </div>
          </div>
        </Section>

        <Section className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading text-text-100">
                How we work
              </h2>
              <Prose>
                <p className="text-lg md:text-xl text-text-200 leading-relaxed max-w-3xl">
                  We embed with internal teams to diagnose leverage points,
                  prototype targeted interventions, and scale what works.
                </p>
              </Prose>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading text-text-100">
                    Strategic Advisory
                  </h3>
                  <p className="text-base md:text-lg text-text-300 leading-relaxed">
                    Opportunity mapping for AI/XR/behaviour.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading text-text-100">
                    Product & Org Uplift
                  </h3>
                  <p className="text-base md:text-lg text-text-300 leading-relaxed">
                    Design ops, onboarding/retention systems.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-heading text-text-100">
                    Embedded Co-Dev
                  </h3>
                  <p className="text-base md:text-lg text-text-300 leading-relaxed">
                    Ship hard parts inside your stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading text-text-100">
                Studio network
              </h2>
              <Prose>
                <div className="space-y-6 max-w-3xl">
                  <p className="text-lg md:text-xl text-text-200 leading-relaxed">
                    SemiMassive operates as a distributed expert network — UX
                    architects, game designers, artists, and engineers from AAA,
                    SaaS, and immersive.
                  </p>
                  <p className="text-lg md:text-xl text-text-200 leading-relaxed">
                    Senior-only execution. No theatre. No hand-offs that dilute
                    outcomes.
                  </p>
                </div>
              </Prose>
            </div>
          </div>
        </Section>

        <Section className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading text-text-100">
              Principles
            </h2>
            <AboutPrinciples />
          </div>
        </Section>

        <Section className="max-w-5xl mx-auto">
          <FounderCard
            name="Nick Strine"
            bio="Systems designer and creative director with 20 years in gaming, media, and product innovation. Led large-scale launches and first-of-type experiences across Ubisoft, Wargaming, Atlas Obscura, and Meta-backed XR projects. Focused on emergent interaction models where traditional UX breaks down."
            linkedIn="https://www.linkedin.com/in/nickstrine"
          />
        </Section>

        <Section className="max-w-5xl mx-auto">
          <div className="space-y-8 text-center">
            <p className="text-2xl md:text-3xl font-heading text-text-100">
              Let&apos;s explore how your product can evolve.
            </p>
            <div>
              <CTA
                href="https://cal.com/semimassive/15min"
                external
                trackingLocation="footer"
              >
                Book a 15-min intro
              </CTA>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
