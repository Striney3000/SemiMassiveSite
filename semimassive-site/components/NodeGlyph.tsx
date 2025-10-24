interface NodeGlyphProps {
  seed: string;
  label: string;
  emoji?: string;
  className?: string;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function NodeGlyph({ seed, label, emoji, className = '' }: NodeGlyphProps) {
  const hash = hashString(seed);
  
  const angle1 = (hash % 360);
  const angle2 = ((hash * 7) % 360);
  
  const dotCount = 8 + (hash % 5);
  const dots = Array.from({ length: dotCount }, (_, i) => {
    const angle = (i / dotCount) * 2 * Math.PI + (hash % 100) / 100;
    const radius = 25 + ((hash * (i + 1)) % 15);
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    const size = 3 + ((hash * i) % 4);
    return { x, y, size };
  });

  return (
    <figure 
      className={`relative ${className}`}
      aria-label={`${label} glyph`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={`url(#grad-${seed})`}
          stroke="#22d3ee"
          strokeWidth="1"
          opacity="0.4"
        />
        
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            fill="#22d3ee"
            opacity="0.6"
          />
        ))}
      </svg>
      
      {emoji && (
        <div className="absolute inset-0 flex items-center justify-center text-2xl pointer-events-none">
          {emoji}
        </div>
      )}
    </figure>
  );
}
