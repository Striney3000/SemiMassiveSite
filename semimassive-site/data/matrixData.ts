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
];
