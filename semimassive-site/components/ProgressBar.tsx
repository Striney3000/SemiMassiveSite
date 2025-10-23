'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from './motion/ReducedMotionGate';

interface ProgressBarProps {
  show?: boolean;
}

export function ProgressBar({ show = true }: ProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 100,
    damping: prefersReducedMotion ? 100 : 30,
    restDelta: 0.001,
  });

  if (!show) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-aqua-500 origin-left z-50"
      style={{
        scaleX,
        backgroundColor: 'var(--aqua-500)',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-aqua-600"
        style={{
          opacity: useSpring(
            scrollYProgress,
            {
              stiffness: 100,
              damping: 30,
            }
          ),
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: scrollYProgress.get() > 0.75 ? 1 : 0,
        }}
      />
    </motion.div>
  );
}
