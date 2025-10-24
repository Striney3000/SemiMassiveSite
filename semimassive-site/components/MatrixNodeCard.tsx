'use client';

import { useState } from 'react';
import type { Node } from '@/data/matrix';
import { NodeGlyph } from './NodeGlyph';
import { PillarChips } from './PillarChips';
import { track } from '@/lib/analytics';

interface MatrixNodeCardProps {
  node: Node;
}

const availabilityLabels = {
  summonable: 'Summoned as context requires',
  contextual: 'Activated for specific contexts',
  specialised: 'Engaged for specialized needs'
};

export function MatrixNodeCard({ node }: MatrixNodeCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    track('Matrix Node Toggle', { id: node.id, expanded: newExpanded });
  };

  const displayedSkills = expanded ? node.skills : node.skills.slice(0, 4);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      aria-expanded={expanded}
      aria-controls={`node-details-${node.id}`}
      className={`
        group relative p-6 bg-base-900 border rounded-lg
        transition-all duration-soft ease-out-smooth
        cursor-pointer min-h-[44px]
        ${node.isFounder 
          ? 'border-aqua-400/30 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.2)]' 
          : 'border-base-800'
        }
        hover:border-aqua-400/50 hover:shadow-lg hover:shadow-aqua-400/10
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400
      `}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 flex-shrink-0">
          <NodeGlyph seed={node.id} label={node.codename} emoji={node.emoji} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-heading font-semibold text-text-100 mb-1">
            {node.codename}
          </h3>
          <p className="text-sm text-text-300">
            {node.title}
          </p>
        </div>
      </div>

      <PillarChips pillars={node.pillars} className="mb-4" />

      <p className="text-text-300 mb-4 leading-relaxed">
        {node.blurb}
      </p>

      <div id={`node-details-${node.id}`} className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {displayedSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-base-800 text-text-300 rounded border border-base-800"
            >
              {skill}
            </span>
          ))}
        </div>

        {expanded && (
          <div className="pt-3 border-t border-base-800">
            <p className="text-sm text-text-300 italic">
              {availabilityLabels[node.availability]}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-text-300/60">
        {expanded ? 'Click to collapse' : 'Click to expand'}
      </div>
    </div>
  );
}
