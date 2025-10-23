import React from 'react';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className = '' }: ProseProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`.trim()}>
      {children}
    </div>
  );
}
