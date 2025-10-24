'use client';

import React from 'react';

interface FounderCardProps {
  name: string;
  bio: string;
  linkedIn?: string;
}

export function FounderCard({ name, bio, linkedIn }: FounderCardProps) {
  return (
    <div className="max-w-3xl space-y-6">
      <h2 className="text-3xl md:text-4xl font-heading text-text-100">
        Led by {name}
      </h2>
      <p className="text-lg md:text-xl text-text-200 leading-relaxed font-body">
        {bio}
      </p>
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-aqua-400 hover:text-aqua-500 transition-colors duration-soft font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-700 rounded px-2 py-1"
        >
          Connect on LinkedIn →
        </a>
      )}
    </div>
  );
}
