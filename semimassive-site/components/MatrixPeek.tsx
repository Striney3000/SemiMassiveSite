import Link from 'next/link';
import { MATRIX_NODES } from '@/data/matrix';
import { NodeGlyph } from './NodeGlyph';
import { track } from '@/lib/analytics';

interface MatrixPeekProps {
  from: 'services' | 'about';
}

export function MatrixPeek({ from }: MatrixPeekProps) {
  const displayedNodes = MATRIX_NODES.slice(0, 8);

  const handleClick = () => {
    track('Nav Click', { from, to: 'matrix' });
  };

  return (
    <Link
      href="/matrix"
      onClick={handleClick}
      className="group block no-underline p-6 md:p-8 bg-base-900 border border-base-800 rounded-lg transition-all duration-soft ease-out-smooth hover:border-aqua-400 hover:shadow-lg hover:shadow-aqua-400/10 min-h-[44px]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-heading font-semibold text-text-100 group-hover:text-aqua-400 transition-colors">
          From the Neural Matrix →
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {displayedNodes.map((node) => (
          <div
            key={node.id}
            className="w-12 h-12"
            title={node.codename}
          >
            <NodeGlyph 
              seed={node.id} 
              label={node.codename} 
              emoji={node.emoji}
              avatar={node.avatar}
            />
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-text-300">
        Explore our living capability layer
      </p>
    </Link>
  );
}
