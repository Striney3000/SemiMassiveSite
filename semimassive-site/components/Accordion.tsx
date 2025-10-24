'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from './motion/ReducedMotionGate';

export interface AccordionItem {
  id: string;
  title: string;
  summary?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  onToggle?: (id: string, expanded: boolean) => void;
}

export function Accordion({ items, defaultOpenId, onToggle }: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    defaultOpenId ? new Set([defaultOpenId]) : new Set()
  );
  const prefersReducedMotion = useReducedMotion();
  const headerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      const willBeExpanded = !next.has(id);
      
      if (willBeExpanded) {
        next.add(id);
      } else {
        next.delete(id);
      }
      
      if (onToggle) {
        onToggle(id, willBeExpanded);
      }
      
      return next;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentId: string) => {
    const currentIndex = items.findIndex((item) => item.id === currentId);
    
    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        const nextHeader = headerRefs.current.get(items[nextIndex].id);
        nextHeader?.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        const prevHeader = headerRefs.current.get(items[prevIndex].id);
        prevHeader?.focus();
        break;
      }
      case 'Home': {
        e.preventDefault();
        const firstHeader = headerRefs.current.get(items[0].id);
        firstHeader?.focus();
        break;
      }
      case 'End': {
        e.preventDefault();
        const lastHeader = headerRefs.current.get(items[items.length - 1].id);
        lastHeader?.focus();
        break;
      }
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isExpanded = expandedIds.has(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border-2 border-base-800 rounded-lg overflow-hidden transition-colors duration-soft hover:border-aqua-400/30"
          >
            <button
              ref={(el) => {
                if (el) headerRefs.current.set(item.id, el);
                else headerRefs.current.delete(item.id);
              }}
              id={headerId}
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className="w-full text-left px-6 md:px-8 py-6 min-h-[56px] flex items-start justify-between gap-4 transition-colors duration-soft hover:bg-base-900/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400 group"
            >
              <div className="flex-1 space-y-2">
                <h3 className="text-lg md:text-xl font-heading font-semibold text-text-100 leading-tight">
                  {item.title}
                </h3>
                {item.summary && (
                  <p className="text-sm md:text-base text-text-300">
                    {item.summary}
                  </p>
                )}
              </div>
              
              <div className="flex-shrink-0 mt-1">
                <svg
                  className={`w-6 h-6 text-aqua-400 transition-transform duration-soft ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                prefersReducedMotion ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2 border-t border-base-800">
                      {item.content}
                    </div>
                  </div>
                ) : (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.26,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2 border-t border-base-800">
                      {item.content}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
