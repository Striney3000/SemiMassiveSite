'use client';

interface HomePageWrapperProps {
  children: React.ReactNode;
}

export function HomePageWrapper({ children }: HomePageWrapperProps) {
  return <>{children}</>;
}
