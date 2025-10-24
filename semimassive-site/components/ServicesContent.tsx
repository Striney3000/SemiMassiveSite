'use client';

import { Section } from '@/components/Section';
import { Prose } from '@/components/Prose';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { track } from '@/lib/analytics';

export function ServicesContent() {
  const accordionItems: AccordionItem[] = [
    {
      id: 'behavioural-systems',
      title: 'Users don\'t reach first success — or don\'t feel pulled forward after it.',
      summary: 'Adoption dies where comprehension breaks; momentum starts at the first win.',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-semibold text-text-100 mb-2">Root causes</h4>
            <ul className="space-y-2 text-text-300">
              <li>• Hesitation loops where users pause and never return</li>
              <li>• Early choice overload before confidence is built</li>
              <li>• Feedback invisibility—users can\'t tell if they\'re succeeding</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-text-100 mb-2">Interventions</h4>
            <ul className="space-y-2 text-text-300">
              <li>• First-win path: compress onboarding to competence in ≤3 steps</li>
              <li>• Staged mastery: unlock complexity as confidence grows</li>
              <li>• Peripheral feedback that rewards clarity without noise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-aqua-400 mb-2">Outcome</h4>
            <p className="text-text-300">
              Earlier "aha" moments → higher activation → sustained usage
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-base-800">
            <a
              href="/interventions/xdefiant-onboarding"
              onClick={() => track('See Example Click', { from: 'services', item: 'behavioural' })}
              className="inline-flex items-center text-sm text-text-300 hover:text-aqua-400 active:text-aqua-600 transition-colors underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700 rounded px-2 py-2 min-h-[44px]"
            >
              See examples: XDefiant onboarding →
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'ai-interaction',
      title: 'AI features exist, but users don\'t adopt or trust them.',
      summary: 'Intelligence must be legible, guided, and accountable.',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-semibold text-text-100 mb-2">Root causes</h4>
            <ul className="space-y-2 text-text-300">
              <li>• Affordance opacity—unclear what AI can or can\'t do</li>
              <li>• Trust gaps from unpredictable or opaque outputs</li>
              <li>• Pacing mismatch between user intent and AI response time</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-text-100 mb-2">Interventions</h4>
            <ul className="space-y-2 text-text-300">
              <li>• Prompt scaffolds that guide users to successful first attempts</li>
              <li>• Reversible actions and visible competence cues</li>
              <li>• Guardrails that prevent catastrophic misuse</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-aqua-400 mb-2">Outcome</h4>
            <p className="text-text-300">
              Higher feature discovery, successful first attempts, reduced reversion to manual workflows
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-base-800">
            <a
              href="/about#flowforge"
              onClick={() => track('See Example Click', { from: 'services', item: 'ai' })}
              className="inline-flex items-center text-sm text-text-300 hover:text-aqua-400 active:text-aqua-600 transition-colors underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700 rounded px-2 py-2 min-h-[44px]"
            >
              See examples: FlowForge →
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'spatial-3d',
      title: '3D or spatial environments impress, but don\'t drive action.',
      summary: 'Orientation is the interface; comprehension beats spectacle.',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-semibold text-text-100 mb-2">Root causes</h4>
            <ul className="space-y-2 text-text-300">
              <li>• Cognitive geography—users can\'t build a mental map</li>
              <li>• Unclear affordances in 3D space</li>
              <li>• Motion and comfort limits causing early exits</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-text-100 mb-2">Interventions</h4>
            <ul className="space-y-2 text-text-300">
              <li>• Diegetic wayfinding that feels native to the environment</li>
              <li>• Curiosity-led choices rather than imposed tutorials</li>
              <li>• Micro-goals every 90–120 seconds to maintain momentum</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-aqua-400 mb-2">Outcome</h4>
            <p className="text-text-300">
              Confident navigation, higher task completion, longer session completion
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-base-800">
            <a
              href="/interventions/atlas-obscura-vr"
              onClick={() => track('See Example Click', { from: 'services', item: 'spatial' })}
              className="inline-flex items-center text-sm text-text-300 hover:text-aqua-400 active:text-aqua-600 transition-colors underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700 rounded px-2 py-2 min-h-[44px]"
            >
              See examples: Atlas Obscura VR →
            </a>
          </div>
        </div>
      ),
    },
  ];

  const handleAccordionToggle = (id: string, expanded: boolean) => {
    track('Accordion Toggle', {
      section: 'services',
      item: id,
      expanded,
    });
  };

  const handleCtaClick = () => {
    track('CTA Click', { location: 'services' });
  };

  return (
    <div className="w-full min-h-screen px-6 md:px-12 py-12 md:py-20">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
        <Section animate={true}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-100 leading-tight">
              We help teams solve adoption challenges in next-generation products.
            </h1>
            <p className="text-xl md:text-2xl text-text-300 leading-relaxed max-w-3xl">
              Targeted interventions in Behavioural Systems, AI Interaction, and Spatial/3D UX.
            </p>
          </div>
        </Section>

        <Section animate={true}>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading text-text-100">
              Problems we solve
            </h2>
            <Accordion items={accordionItems} onToggle={handleAccordionToggle} />
          </div>
        </Section>

        <Section animate={true}>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading text-text-100">
              Our method: FlowForge
            </h2>
            <Prose>
              <p className="text-lg text-text-300 leading-relaxed">
                FlowForge is our behavioural engine for adoption: engineer the first win, pace mastery, make feedback legible.
              </p>
              <div className="space-y-4 mt-6">
                <div className="border-l-2 border-aqua-400 pl-6">
                  <h3 className="font-heading font-semibold text-text-100 mb-2">
                    Find the First Win
                  </h3>
                  <p className="text-text-300">
                    Compress early choice; ship competence in ≤3 steps.
                  </p>
                </div>
                <div className="border-l-2 border-aqua-400 pl-6">
                  <h3 className="font-heading font-semibold text-text-100 mb-2">
                    Paced Mastery
                  </h3>
                  <p className="text-text-300">
                    Unlock complexity as confidence grows.
                  </p>
                </div>
                <div className="border-l-2 border-aqua-400 pl-6">
                  <h3 className="font-heading font-semibold text-text-100 mb-2">
                    Peripheral Feedback
                  </h3>
                  <p className="text-text-300">
                    Consistent, low-cognitive signals for guidance & trust.
                  </p>
                </div>
                <div className="border-l-2 border-aqua-400 pl-6">
                  <h3 className="font-heading font-semibold text-text-100 mb-2">
                    Telemetry Loop
                  </h3>
                  <p className="text-text-300">
                    Observe hesitation points; ship micro-nudges.
                  </p>
                </div>
              </div>
            </Prose>
          </div>
        </Section>

        <Section animate={true}>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading text-text-100">
              How we work
            </h2>
            <Prose>
              <p className="text-lg text-text-300 leading-relaxed mb-8">
                Senior-led, embedded with your team. Fixed-scope diagnostic; focused pilot; elastic co-dev.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-100 mb-3">
                    Diagnostic (2 weeks)
                  </h3>
                  <p className="text-text-300">
                    Gap Map, Intervention Plan, experiment spec. We identify where users hesitate, 
                    drop off, or lose momentum—and deliver a prioritized roadmap of targeted fixes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-100 mb-3">
                    Pilot (1–2 sprints)
                  </h3>
                  <p className="text-text-300">
                    One leap shipped; success criteria defined. We implement one high-impact intervention, 
                    validate it with real users, and measure the outcome.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-100 mb-3">
                    Embedded Co-Dev
                  </h3>
                  <p className="text-text-300">
                    Ship hard parts; transfer playbooks; uplift design ops. We work alongside your team 
                    to deliver complex features while building your internal capabilities.
                  </p>
                </div>
              </div>
              <p className="text-sm text-text-300 mt-8 pt-8 border-t border-base-800">
                Founder-led strategic operator; senior-only execution.
              </p>
            </Prose>
          </div>
        </Section>

        <Section animate={true}>
          <div className="space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-text-100">
              Get a 2-week diagnostic
            </h2>
            <div>
              <a
                href="#contact"
                className="btn-primary no-underline"
                onClick={handleCtaClick}
              >
                Request an intro
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
