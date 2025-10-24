'use client';

import { useEffect, useRef, useState } from 'react';
import type { Node } from '@/data/matrix';
import { MatrixNodeCard } from './MatrixNodeCard';

interface MatrixGridProps {
  nodes: Node[];
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

export function MatrixGrid({ nodes }: MatrixGridProps) {
  const [mounted, setMounted] = useState(false);
  const [revealedNodes, setRevealedNodes] = useState<Set<string>>(new Set(nodes.map(n => n.id)));
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    setMounted(true);
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setRevealedNodes(new Set(nodes.map(n => n.id)));
      return;
    }

    const timeoutId = setTimeout(() => {
      setRevealedNodes(new Set());

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const nodeId = entry.target.getAttribute('data-node-id');
              if (nodeId) {
                setRevealedNodes((prev) => new Set(prev).add(nodeId));
                observerRef.current?.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      nodeRefs.current.forEach((element) => {
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
    };
  }, [nodes]);

  const setNodeRef = (id: string, element: HTMLDivElement | null) => {
    if (element) {
      nodeRefs.current.set(id, element);
    } else {
      nodeRefs.current.delete(id);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {nodes.map((node) => {
        const hash = hashString(node.id);
        const pulseDelay = (hash % 4) + 6;
        const isRevealed = revealedNodes.has(node.id);

        return (
          <div
            key={node.id}
            ref={(el) => setNodeRef(node.id, el)}
            data-node-id={node.id}
            className={`
              matrix-node-wrapper
              ${isRevealed ? 'matrix-node-revealed' : 'matrix-node-hidden'}
            `}
            style={{
              animationDelay: `${pulseDelay}s`,
            }}
          >
            <MatrixNodeCard node={node} />
          </div>
        );
      })}
    </div>
  );
}
