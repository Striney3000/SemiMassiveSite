'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/components/motion/ReducedMotionGate';

const principles = [
  'Human before algorithm',
  'Systems with soul',
  'Design for flow',
  'Clarity over cleverness',
  'Small teams, large leverage',
  'Emotion is a metric',
];

export function AboutPrinciples() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      {principles.map((principle, index) => (
        <motion.div
          key={index}
          variants={item}
          className="text-2xl md:text-3xl lg:text-4xl font-heading text-text-100 leading-tight"
        >
          {principle}
        </motion.div>
      ))}
    </motion.div>
  );
}
