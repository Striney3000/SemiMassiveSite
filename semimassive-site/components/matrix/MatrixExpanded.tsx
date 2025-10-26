'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { fadeIn, popIn } from '@/lib/ui/motion';
import type { MatrixNode } from '@/data/matrixData';

export function MatrixExpanded({ open, node, onClose }: { open: boolean; node: MatrixNode | null; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && node && (
        <motion.div
          {...fadeIn}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${node.id}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            {...popIn}
            className="relative z-10 grid w-full max-w-4xl grid-cols-1 md:grid-cols-5 overflow-hidden rounded-3xl bg-base-950 ring-1 ring-base-800 shadow-2xl"
          >
            <div className="relative md:col-span-3 aspect-[3/4] w-full">
              <Image 
                src={node.portraitSrc} 
                alt={node.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover" 
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 id={`modal-title-${node.id}`} className="text-white text-xl font-semibold">{node.name}</h3>
                <p className="text-text-300 text-sm">{node.archetype}</p>
              </div>
            </div>

            <div className="md:col-span-2 p-6 md:p-8 flex flex-col gap-5">
              <section>
                <h4 className="text-xs uppercase tracking-widest text-text-400">Identity</h4>
                <p className="mt-1 text-text-100 text-base">{node.identity}</p>
              </section>

              <section>
                <h4 className="text-xs uppercase tracking-widest text-text-400">Discipline</h4>
                <p className="mt-1 text-text-200 text-sm leading-relaxed">{node.discipline}</p>
              </section>

              <section>
                <h4 className="text-xs uppercase tracking-widest text-text-400">Outcomes</h4>
                <ul className="mt-2 space-y-2 text-text-200 text-sm list-disc list-inside">
                  {node.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </section>

              <div className="mt-auto pt-2">
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl border border-base-700 bg-base-900 px-4 py-2 text-sm text-text-100 hover:bg-base-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua-400"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
