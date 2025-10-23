'use client';

import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const riseIn: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
