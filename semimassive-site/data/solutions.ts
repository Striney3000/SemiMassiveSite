export type Pillar = 'AI' | 'Behavioural' | 'Spatial' | 'Research';

export type Solution = {
  id: string;
  title: string;
  subtitle: string;
  pillars: Pillar[];
  problem: string;
  intervention: string[];
  engineering: string;
  matrixNodes: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export const SOLUTIONS: Solution[] = [
  {
    id: 'ai-legibility-layer',
    title: 'Legibility Layer',
    subtitle: 'Make AI affordances learnable and trustworthy.',
    pillars: ['AI', 'Behavioural'],
    problem:
      "AI features often ship as opaque buttons or sidecars. Users can't see what they do, how to start, or whether outcomes are safe—and revert to manual workflows.",
    intervention: [
      'Expose intent: visible affordances with exampleable prompts and reversible actions.',
      'Scaffold first attempts: guardrails, preview states, competence cues.',
      'Make accountability legible: show sources, scope, and limits inline.',
    ],
    engineering:
      'When the intervention moves to build, we route through a dedicated engineering layer to wire prompt scaffolds, safe-ops, and telemetry for trust signals—so adoption ships, not just the UI.',
    matrixNodes: ['nova-sato', 'jax-morales', 'vera-shinn'],
  },
  {
    id: 'first-win-architecture',
    title: 'First-Win Architecture',
    subtitle: 'Turn first contact into first success.',
    pillars: ['Behavioural'],
    problem:
      'Most products front-load choice and complexity. Users hesitate before they experience value, and adoption dies before momentum begins.',
    intervention: [
      'Compress early choice: guided entry path to a real outcome in ≤3 steps.',
      'Stage mastery: unlock complexity only after confidence increases.',
      'Reward clarity: peripheral feedback that confirms progress without noise.',
    ],
    engineering:
      'For production rollout, we add routing logic, state gating, and event hooks so "first success" is both consistent and measurable across cohorts.',
    matrixNodes: ['nick-strine', 'nova-sato', 'vera-shinn'],
  },
  {
    id: 'friction-surgery',
    title: 'Friction Surgery',
    subtitle: 'Micro-interventions in critical flows.',
    pillars: ['Behavioural', 'AI'],
    problem:
      'A few high-leverage moments create hesitation loops—ambiguous choices, invisible progress, brittle errors. Small fixes here change overall behaviour disproportionately.',
    intervention: [
      'Identify hesitation hotspots via trace review and session patterns.',
      'Insert micro-cues: copy, sequencing, affordance strengthening, recovery paths.',
      'Validate with fast experiments: A/B or time-series deltas.',
    ],
    engineering:
      'We wire small, safe changes into live flows with feature flags and observability—so improvements land quickly and stay reversible.',
    matrixNodes: ['nick-strine', 'jax-morales', 'vera-shinn'],
  },
  {
    id: 'signal-instrumentation',
    title: 'Signal Instrumentation',
    subtitle: 'Prove behavioural change with telemetry.',
    pillars: ['Research', 'Behavioural', 'AI'],
    problem:
      "Without a proof loop, design changes drift into opinion. Teams can't see hesitation points, first-win rates, or how AI affects task completion.",
    intervention: [
      'Define an adoption taxonomy: events for success, hesitation, recovery.',
      'Instrument flows: cohorts, milestones, confidence proxies.',
      'Create visible dashboards: deltas that support product decisions.',
    ],
    engineering:
      'We implement event schemas, lightweight pipelines, and dashboards so adoption becomes observable—and defendable to sponsors.',
    matrixNodes: ['vera-shinn', 'jax-morales', 'nick-strine'],
  },
];
