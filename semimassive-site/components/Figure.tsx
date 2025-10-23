import React from 'react';
import Image from 'next/image';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  video?: boolean;
}

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  priority = false,
  video = false,
}: FigureProps) {
  return (
    <figure className="my-8 md:my-12">
      <div className="relative w-full overflow-hidden rounded-lg bg-base-900">
        {video ? (
          <video
            src={src}
            className="w-full h-auto"
            controls
            playsInline
            aria-label={alt}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="w-full h-auto"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm md:text-base text-text-300 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
