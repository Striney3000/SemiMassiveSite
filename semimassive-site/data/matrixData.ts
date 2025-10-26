export type MatrixNode = {
  id: string;
  name: string;        // Public-facing name (alias or real)
  archetype: string;   // Role / service title (plain-English)
  identity: string;    // "<Name> — <Role>"
  portraitSrc: string; // /public path or remote URL
  discipline: string;  // Short description of what they do
  outcomes: string[];  // Three benefit bullets
};

export const MATRIX_NODES: MatrixNode[] = [
  // 1) Behavioural & Product Design (you)
  {
    id: "nick-strine",
    name: "Nick Strine",
    archetype: "Behavioural & Product Design Director",
    identity: "Nick Strine — Behavioural & Product Design Director",
    portraitSrc: "/images/matrix/nick-strine.jpg",
    discipline:
      "Behavioural design, systems UX, and product strategy for products that need measurable engagement.",
    outcomes: [
      "Clearer product structure and decision flow",
      "Retention and habit loops improve without dark patterns",
      "Strategy translated into shippable UX patterns",
    ],
  },

  // 2) UX Design (multi-surface systems)
  {
    id: "zen-maker",
    name: "Zen Maker",
    archetype: "UX Systems Designer",
    identity: "Zen Maker — UX Systems Designer",
    portraitSrc: "/images/matrix/zen-maker.jpg",
    discipline:
      "Multi-platform experience design, progressive systems, and AI-adaptive UX that scales across surfaces.",
    outcomes: [
      "Coherent end-to-end journeys across web, mobile, XR",
      "Reduced friction at key wayfinding and selection points",
      "Reusable patterns that accelerate feature delivery",
    ],
  },

  // 3) UI / Motion / Visual Interaction
  {
    id: "flo-charts",
    name: "Flo Charts",
    archetype: "UI + Interaction Designer",
    identity: "Flo Charts — UI + Interaction Designer",
    portraitSrc: "/images/matrix/flo-charts.jpg",
    discipline:
      "UI art, 2D/3D interactions, motion design, and brand-tight component styling.",
    outcomes: [
      "Higher perceived quality and product trust",
      "Clearer visual states and faster task completion",
      "Consistent visual language across new features",
    ],
  },

  // 4) R&D / Emerging Tech
  {
    id: "ray-tracey",
    name: "Ray Tracey",
    archetype: "R&D + Emerging Tech Engineer",
    identity: "Ray Tracey — R&D + Emerging Tech Engineer",
    portraitSrc: "/images/matrix/ray-tracey.jpg",
    discipline:
      "AI/LLM and XR integrations, rapid prototyping, and production-ready pipelines (game engines, web, native).",
    outcomes: [
      "Working prototypes that de-risk big bets",
      "Faster iteration from concept to demo",
      "Clean integrations without tech-debt sprawl",
    ],
  },

  // 5) Data / Telemetry
  {
    id: "ann-liticus",
    name: "Ann Liticus",
    archetype: "Product Telemetry & Insights",
    identity: "Ann Liticus — Product Telemetry & Insights",
    portraitSrc: "/images/matrix/ann-liticus.jpg",
    discipline:
      "Event models, dashboards, and experiment design that connect UX questions to truthful signals.",
    outcomes: [
      "Roadmaps shift from opinion to evidence",
      "Metrics reflect real user behaviour (not vanity)",
      "Experiments isolate causal impact on KPIs",
    ],
  },

  // 6) Product / Value Strategy
  {
    id: "mr-wong",
    name: "Mr Wong",
    archetype: "Product & Value Strategy",
    identity: "Mr Wong — Product & Value Strategy",
    portraitSrc: "/images/matrix/mr-wong.jpg",
    discipline:
      "Monetisation, pricing/packaging, and positioning that align user value with business value.",
    outcomes: [
      "Sharper value proposition and market pull",
      "Pricing clarifies purchase decisions and upgrades",
      "LTV growth without coercive mechanics",
    ],
  },

  // 7) Narrative / Creative Direction
  {
    id: "silent-frame",
    name: "Silent Frame",
    archetype: "Narrative & Creative Direction",
    identity: "Silent Frame — Narrative & Creative Direction",
    portraitSrc: "/images/matrix/silent-frame.jpg",
    discipline:
      "Story, identity, and tone systems that make features read as one coherent product narrative.",
    outcomes: [
      "Memorable positioning users can repeat",
      "Cohesive look/voice across product and comms",
      "Emotional stickiness without hype",
    ],
  },

  // 8) Immersive / Atmosphere
  {
    id: "lucky-knuckler",
    name: "Lucky Knuckler",
    archetype: "Atmosphere & Immersive Experience Design",
    identity: "Lucky Knuckler — Atmosphere & Immersive Experience Design",
    portraitSrc: "/images/matrix/lucky-knuckler.jpg",
    discipline:
      "Emotional technology of mood and environment—interactive ambience that makes software feel like a place.",
    outcomes: [
      "Distinct product vibe and 'world-feel'",
      "More time-on-task through engaging ambience",
      "Cinematic moments without visual noise",
    ],
  },
];
