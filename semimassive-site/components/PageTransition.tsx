'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from './motion/ReducedMotionGate';
import { fadeIn } from './motion/atoms';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
