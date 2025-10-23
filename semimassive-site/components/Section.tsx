'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { riseIn } from './motion/atoms';
import { useReducedMotion } from './motion/ReducedMotionGate';

interface SectionProps {
  as?: 'section' | 'div' | 'article' | 'aside';
  className?: string;
  bleed?: boolean;
  animate?: boolean;
  children: React.ReactNode;
}

export function Section({
  as = 'section',
  className = '',
  bleed = false,
  animate = true,
  children,
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;
  
  const baseStyles = 'w-full';
  const spacingStyles = bleed ? 'py-12 md:py-16' : 'py-12 md:py-20 px-6 md:px-12';
  const combinedClassName = `${baseStyles} ${spacingStyles} ${className}`.trim();

  if (!shouldAnimate) {
    const Component = as;
    return <Component className={combinedClassName}>{children}</Component>;
  }

  const motionProps: MotionProps = {
    initial: 'initial',
    whileInView: 'animate',
    viewport: { once: true, margin: '-100px' },
    variants: riseIn,
  };

  if (as === 'section') {
    return (
      <motion.section {...motionProps} className={combinedClassName}>
        {children}
      </motion.section>
    );
  }

  if (as === 'article') {
    return (
      <motion.article {...motionProps} className={combinedClassName}>
        {children}
      </motion.article>
    );
  }

  if (as === 'aside') {
    return (
      <motion.aside {...motionProps} className={combinedClassName}>
        {children}
      </motion.aside>
    );
  }

  return (
    <motion.div {...motionProps} className={combinedClassName}>
      {children}
    </motion.div>
  );
}
