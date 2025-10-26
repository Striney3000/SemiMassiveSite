export type MatrixNode = {
  id: string;
  name: string;
  archetype: string;
  identity: string;
  portraitSrc: string;
  discipline: string;
  outcomes: string[];
};

export const MATRIX_NODES: MatrixNode[] = [
  {
    id: "nova-sato",
    name: "Nova Sato",
    archetype: "Interface Architect",
    identity: "Nova Sato — Interface Architect",
    portraitSrc: "/images/matrix/nova-sato.jpg",
    discipline:
      "Behavioural systems + pattern clarity for complex products. Designs legibility, momentum, and feedback loops across surfaces.",
    outcomes: [
      "Users understand the product's structure faster",
      "Navigation and selection friction drop measurably",
      "Feature adoption increases via clearer affordances",
    ],
  },
  {
    id: "vera-shinn",
    name: "Vera Shinn",
    archetype: "Telemetry Architect",
    identity: "Vera Shinn — Telemetry Architect",
    portraitSrc: "/images/matrix/vera-shinn.jpg",
    discipline:
      "Instrumentation strategy and event taxonomies for product truth. Connects UX questions to measurable signals.",
    outcomes: [
      "Analytics reflect actual user behaviours",
      "Roadmaps shift from opinion to signal",
      "Experiments isolate causal impact",
    ],
  },
  {
    id: "caelum-rowe",
    name: "Caelum Rowe",
    archetype: "Value Architect",
    identity: "Caelum Rowe — Value Architect",
    portraitSrc: "/images/matrix/caelum-rowe.jpg",
    discipline:
      "Business model design and value flow orchestration. Aligns behavioural incentives with revenue and retention.",
    outcomes: [
      "Pricing and packaging clarify purchase decisions",
      "Retention loops align with value flows",
      "LTV increases without coercive dark patterns",
    ],
  },
  {
    id: "nick-strine",
    name: "Nick Strine",
    archetype: "Behavioural Systems Director",
    identity: "Nick Strine — Behavioural Systems Director",
    portraitSrc: "/images/matrix/nick-strine.jpg",
    discipline:
      "Behavioural design, UX systems, and immersive strategy for products that need measurable engagement.",
    outcomes: [
      "Sharper product-market pull and retention",
      "System-level clarity across features and flows",
      "Strategy translated into shippable UX patterns",
    ],
  },
  {
    id: "aria-tanaka",
    name: "Aria Tanaka",
    archetype: "Onboarding Architect",
    identity: "Aria Tanaka — Onboarding Architect",
    portraitSrc: "/images/matrix/aria-tanaka.jpg",
    discipline:
      "Activation funnels, habit formation, and progressive disclosure.",
    outcomes: [
      "Faster time-to-value",
      "Higher activation and feature adoption",
      "Reduced early-session drop-off",
    ],
  },
  {
    id: "jax-morales",
    name: "Jax Morales",
    archetype: "Interaction Systems Engineer",
    identity: "Jax Morales — Interaction Systems Engineer",
    portraitSrc: "/images/matrix/jax-morales.jpg",
    discipline:
      "Real-time feedback loops, micro-interactions, and cross-surface consistency.",
    outcomes: [
      "Lower error rates and hesitation",
      "Crisper perceived performance",
      "Delight without cognitive overhead",
    ],
  },
];
