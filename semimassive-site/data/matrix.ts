export type Pillar = 'Behavioural' | 'AI' | 'Spatial' | 'Research';
export type Availability = 'summonable' | 'contextual' | 'specialised';

export type Node = {
  id: string;
  codename: string;
  title: string;
  pillars: Pillar[];
  availability: Availability;
  blurb: string;
  skills: string[];
  emoji?: string;
  avatar?: string;
  isFounder?: boolean;
};

export const MATRIX_NODES: Node[] = [
  {
    id: 'foundry-lead',
    codename: 'Nick Strine',
    title: 'Foundry Lead — Creative Direction & Systems Design',
    pillars: ['Behavioural','AI','Spatial'],
    availability: 'summonable',
    blurb: 'Diagnoses leverage points and leads interventions using the FlowForge framework.',
    skills: ['Systems design','Creative direction','Intervention planning','FlowForge framework'],
    emoji: '🜂',
    isFounder: true
  },
  {
    id: 'value-architect',
    codename: 'Caelum Rowe',
    title: 'Value Architect — Strategic Framing & ROI',
    pillars: ['Behavioural','AI'],
    availability: 'contextual',
    blurb: 'Bridges product and business momentum. Defines value, metrics, and sponsor clarity.',
    skills: ['Outcome framing','Business cases','GTM alignment','Exec narrative'],
    emoji: '🏛️',
    avatar: '/Ray_Chaser.png'
  },
  {
    id: 'telemetry-architect',
    codename: 'Vera Shinn',
    title: 'Telemetry Architect — Behavioural Measurement',
    pillars: ['Research','Behavioural'],
    availability: 'contextual',
    blurb: 'Maps hesitation and momentum; instruments flows to prove adoption deltas.',
    skills: ['Event taxonomy','Cohort analysis','Experiment design','Dashboards'],
    emoji: '📈',
    avatar: '/Flo_Status.png'
  },
  {
    id: 'interface-alchemist',
    codename: 'Nova Sato',
    title: 'Interface Alchemist — UX/UI & Web',
    pillars: ['Behavioural','AI'],
    availability: 'summonable',
    blurb: 'Turns system decisions into legible interfaces and fast prototypes.',
    skills: ['IA','Design systems','React/Next','Motion for meaning'],
    emoji: '🧪'
  },
  {
    id: 'spatial-engineer',
    codename: 'Juno Rah',
    title: 'Spatial Engineer — XR (Unity)',
    pillars: ['Spatial'],
    availability: 'summonable',
    blurb: 'Builds natural-feeling spatial interactions and performant scenes.',
    skills: ['Unity','Interaction','Optimization','Scene prototyping'],
    emoji: '🕶️',
    avatar: '/Code_Monkey.png'
  },
  {
    id: 'realtime-artist',
    codename: 'Rook Ember',
    title: 'Realtime Technical Artist — UE5',
    pillars: ['Spatial'],
    availability: 'specialised',
    blurb: 'Makes complex scenes readable and responsive at runtime.',
    skills: ['UE5','Materials','Niagara','Perf tuning'],
    emoji: '🎛️',
    avatar: '/Max_GPU.png'
  },
  {
    id: 'systems-engineer',
    codename: 'Kellan Pike',
    title: 'Systems Engineer — Platform',
    pillars: ['AI','Behavioural'],
    availability: 'summonable',
    blurb: 'Bridges product and infra so intelligence becomes reliable and observable.',
    skills: ['APIs','LLM integration','Guardrails','Telemetry'],
    emoji: '⚙️'
  },
  {
    id: 'playback-artist',
    codename: 'Halley Quinn',
    title: 'Playback Artist — Video & 3D',
    pillars: ['Behavioural','Spatial'],
    availability: 'specialised',
    blurb: 'Explains complex ideas in seconds with motion and 3D.',
    skills: ['Explainers','3D animation','Story beats','Editorial'],
    emoji: '🎞️'
  }
];
