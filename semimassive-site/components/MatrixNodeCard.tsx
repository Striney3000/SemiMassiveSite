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
    track('Matrix Node Toggle', { id: node.id, expanded: newExpanded, state: newExpanded ? 'expanded' : 'collapsed' });
  };

  const topSkills = node.skills.slice(0, 6);

  return (
    <button
      type="button"
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      aria-expanded={expanded}
      aria-controls={`node-details-${node.id}`}
      aria-labelledby={`node-title-${node.id}`}
      className={`
        group relative w-full p-6 bg-base-900 border rounded-lg text-left
        transition-all duration-soft ease-out-smooth
        min-h-[280px]
        ${node.isFounder 
          ? 'border-aqua-400/30 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.2)]' 
          : 'border-base-800'
        }
        hover:border-aqua-400/50 hover:shadow-lg hover:shadow-aqua-400/10
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400 focus-visible:rounded-lg
      `}
    >
      {/* Collapsed State - Visual First */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Large Avatar */}
        <div className="flex-shrink-0">
          <NodeGlyph 
            seed={node.id} 
            label={node.codename} 
            emoji={node.emoji} 
            avatar={node.avatar}
            size="lg"
          />
        </div>
        
        {/* Codename */}
        <h3 
          id={`node-title-${node.id}`}
          className="text-xl md:text-2xl font-heading font-semibold text-text-100"
        >
          {node.codename}
        </h3>
        
        {/* Title - Single Line */}
        <p className="text-sm text-text-300 line-clamp-1 w-full px-2">
          {node.title}
        </p>
        
        {/* Compact Pillars */}
        <PillarChips pillars={node.pillars} compact={!expanded} />
      </div>

      {/* Expanded Details */}
      <div 
        id={`node-details-${node.id}`}
        className={`mt-6 pt-6 border-t border-base-800 space-y-4 ${
          expanded 
            ? 'animate-in fade-in slide-in-from-top-2 duration-180' 
            : 'hidden'
        }`}
        aria-hidden={!expanded}
      >
        {/* Blurb */}
        <p className="text-sm text-text-300 leading-relaxed line-clamp-2">
          {node.blurb}
        </p>

        {/* Full Pillars when expanded */}
        {node.pillars.length > 2 && (
          <PillarChips pillars={node.pillars} compact={false} />
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-base-800 text-text-300 rounded border border-base-800"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Availability */}
        <p className="text-xs text-text-300/80 italic">
          {availabilityLabels[node.availability]}
        </p>
      </div>

      {/* Open/Close Indicator */}
      <div className="mt-4 flex justify-end items-center gap-2">
        <span className="text-xs text-text-300/60">
          {expanded ? 'Close' : 'Open'}
        </span>
        <span className="text-aqua-400 text-sm" aria-hidden="true">
          {expanded ? '↓' : '↗'}
        </span>
      </div>
    </button>
  );
}
