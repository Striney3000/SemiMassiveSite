import React from 'react';

interface SectionProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  bleed?: boolean;
  children: React.ReactNode;
}

export function Section({
  as: Component = 'section',
  className = '',
  bleed = false,
  children,
}: SectionProps) {
  const baseStyles = 'w-full';
  const spacingStyles = bleed ? 'py-12 md:py-16' : 'py-12 md:py-20 px-6 md:px-12';
  const combinedClassName = `${baseStyles} ${spacingStyles} ${className}`.trim();

  return <Component className={combinedClassName}>{children}</Component>;
}
