'use client';

type DiagramVariant =
  | 'ai-legibility-layer'
  | 'first-win-architecture'
  | 'friction-surgery'
  | 'signal-instrumentation';

interface LineDiagramProps {
  variant: DiagramVariant;
  className?: string;
}

export function LineDiagram({ variant, className = '' }: LineDiagramProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const strokeWidth = 1.25;
  const neutralStroke = '#a8a49e';
  const aquaAccent = '#5dd9c1';

  const renderDiagram = () => {
    switch (variant) {
      case 'first-win-architecture':
        return (
          <svg
            viewBox="0 0 400 120"
            className={className}
            aria-label="First-Win Architecture diagram: 3-step path to success"
          >
            <path
              d="M 40 60 L 120 60"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle cx="40" cy="60" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <circle cx="120" cy="60" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <text x="40" y="90" fontSize="12" fill={neutralStroke} textAnchor="middle">
              1
            </text>

            <path
              d="M 120 60 L 200 60"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle cx="200" cy="60" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <text x="200" y="90" fontSize="12" fill={neutralStroke} textAnchor="middle">
              2
            </text>

            <path
              d="M 200 60 L 280 60"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 1.5}
              fill="none"
            />
            <circle cx="280" cy="60" r="8" stroke={aquaAccent} strokeWidth={strokeWidth} fill="none" />
            <text x="280" y="90" fontSize="12" fill={aquaAccent} textAnchor="middle">
              3
            </text>

            <path
              d="M 270 50 L 280 60 L 270 70"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 1.5}
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M 120 80 Q 140 100, 160 80"
              stroke={neutralStroke}
              strokeWidth={strokeWidth * 0.7}
              fill="none"
              opacity="0.3"
              strokeDasharray="3 3"
            />
            <path
              d="M 200 80 Q 220 100, 240 80"
              stroke={neutralStroke}
              strokeWidth={strokeWidth * 0.7}
              fill="none"
              opacity="0.3"
              strokeDasharray="3 3"
            />
          </svg>
        );

      case 'ai-legibility-layer':
        return (
          <svg
            viewBox="0 0 400 140"
            className={className}
            aria-label="Legibility Layer diagram: input to scaffold to preview with reversible flow"
          >
            <path
              d="M 40 70 L 100 70"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle cx="40" cy="70" r="6" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <text x="40" y="100" fontSize="11" fill={neutralStroke} textAnchor="middle">
              Input
            </text>

            <rect
              x="100"
              y="50"
              width="60"
              height="40"
              stroke={aquaAccent}
              strokeWidth={strokeWidth}
              fill="none"
              rx="2"
            />
            <text x="130" y="100" fontSize="11" fill={aquaAccent} textAnchor="middle">
              Scaffold
            </text>

            <path
              d="M 160 70 L 220 70"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
            />

            <rect
              x="220"
              y="50"
              width="60"
              height="40"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
              rx="2"
            />
            <text x="250" y="100" fontSize="11" fill={neutralStroke} textAnchor="middle">
              Preview
            </text>

            <path
              d="M 280 70 L 340 70"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
            />

            <circle cx="340" cy="70" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <path
              d="M 330 60 L 340 70 L 330 80"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />
            <text x="340" y="100" fontSize="11" fill={neutralStroke} textAnchor="middle">
              Confirm
            </text>

            <path
              d="M 250 110 Q 190 130, 130 110"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 0.9}
              fill="none"
              strokeDasharray="2 2"
            />
            <path
              d="M 140 115 L 130 110 L 135 105"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 0.9}
              fill="none"
            />
            <text x="190" y="135" fontSize="10" fill={aquaAccent} textAnchor="middle">
              reversible
            </text>
          </svg>
        );

      case 'friction-surgery':
        return (
          <svg
            viewBox="0 0 400 100"
            className={className}
            aria-label="Friction Surgery diagram: flow with hotspots patched by stitches"
          >
            <path
              d="M 40 50 L 360 50"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
            />

            <path
              d="M 100 35 L 110 50 L 100 65 Z"
              stroke="#e07a5f"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <text x="105" y="80" fontSize="10" fill="#e07a5f" textAnchor="middle">
              hotspot
            </text>

            <path
              d="M 200 35 L 210 50 L 200 65 Z"
              stroke="#e07a5f"
              strokeWidth={strokeWidth}
              fill="none"
            />

            <path
              d="M 300 35 L 310 50 L 300 65 Z"
              stroke="#e07a5f"
              strokeWidth={strokeWidth}
              fill="none"
            />

            <path
              d="M 95 45 Q 90 50, 95 55 M 100 45 Q 105 50, 100 55 M 105 45 Q 110 50, 105 55"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 1.2}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 195 45 Q 190 50, 195 55 M 200 45 Q 205 50, 200 55 M 205 45 Q 210 50, 205 55"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 1.2}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 295 45 Q 290 50, 295 55 M 300 45 Q 305 50, 300 55 M 305 45 Q 310 50, 305 55"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 1.2}
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'signal-instrumentation':
        return (
          <svg
            viewBox="0 0 400 140"
            className={className}
            aria-label="Signal Instrumentation diagram: nodes with event taps flowing to timeline"
          >
            <circle cx="80" cy="40" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <circle cx="160" cy="40" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <circle cx="240" cy="40" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <circle cx="320" cy="40" r="8" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />

            <path
              d="M 80 48 L 80 80"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 0.8}
              strokeDasharray="2 2"
              fill="none"
            />
            <path
              d="M 160 48 L 160 80"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 0.8}
              strokeDasharray="2 2"
              fill="none"
            />
            <path
              d="M 240 48 L 240 80"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 0.8}
              strokeDasharray="2 2"
              fill="none"
            />
            <path
              d="M 320 48 L 320 80"
              stroke={aquaAccent}
              strokeWidth={strokeWidth * 0.8}
              strokeDasharray="2 2"
              fill="none"
            />

            <rect
              x="40"
              y="80"
              width="320"
              height="20"
              stroke={neutralStroke}
              strokeWidth={strokeWidth}
              fill="none"
              rx="2"
            />

            <path d="M 80 85 L 80 95" stroke={aquaAccent} strokeWidth={strokeWidth * 1.5} fill="none" />
            <path d="M 110 85 L 110 95" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <path d="M 160 85 L 160 95" stroke={aquaAccent} strokeWidth={strokeWidth * 1.5} fill="none" />
            <path d="M 200 85 L 200 95" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <path d="M 240 85 L 240 95" stroke={neutralStroke} strokeWidth={strokeWidth} fill="none" />
            <path d="M 280 85 L 280 95" stroke={aquaAccent} strokeWidth={strokeWidth * 1.5} fill="none" />
            <path d="M 320 85 L 320 95" stroke={aquaAccent} strokeWidth={strokeWidth * 1.5} fill="none" />

            <text x="200" y="120" fontSize="11" fill={neutralStroke} textAnchor="middle">
              Timeline
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return <div className={`w-full max-w-[540px] mx-auto ${className}`}>{renderDiagram()}</div>;
}
