import { Variants } from "framer-motion";

const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: prefersReducedMotion ? 0 : 0.18 },
};

export const popIn = {
  initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.98, y: prefersReducedMotion ? 0 : 8 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.98, y: prefersReducedMotion ? 0 : 8 },
  transition: { duration: prefersReducedMotion ? 0 : 0.22 },
};

export const hoverPop = {
  whileHover: prefersReducedMotion ? {} : { scale: 1.01, y: -2 },
  whileTap: prefersReducedMotion ? {} : { scale: 0.995 },
};
