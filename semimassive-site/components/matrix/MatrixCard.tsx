'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverPop } from '@/lib/ui/motion';
import type { MatrixNode } from '@/data/matrixData';

export function MatrixCard({ node, onOpen }: { node: MatrixNode; onOpen: () => void }) {
  return (
    <motion.button
      whileHover={hoverPop.whileHover}
      whileTap={hoverPop.whileTap}
      onClick={onOpen}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-base-900 shadow-lg ring-1 ring-base-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua-400"
      aria-label={`Open ${node.name} — ${node.archetype}`}
    >
      <div className="absolute inset-0">
        <Image
          src={node.portraitSrc}
          alt={node.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={false}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-3 left-3 right-3 flex flex-col">
        <span className="text-base sm:text-lg font-medium text-white drop-shadow">{node.name}</span>
        <span className="text-xs sm:text-sm text-text-200/80 drop-shadow">{node.archetype}</span>
      </div>
    </motion.button>
  );
}
