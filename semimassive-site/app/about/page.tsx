import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/about', base).toString();

  return {
    title: 'About',
    description:
      'Learn more about SemiMassive, our team, and our approach to co-developing the next generation of product experiences.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'About | SemiMassive',
      description:
        'Learn more about SemiMassive, our team, and our approach to co-developing the next generation of product experiences.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full space-y-6">
        <h1 className="text-text-100">About</h1>
        <p className="text-text-300 text-xl md:text-2xl">
          Coming soon. Learn more about our team and approach.
        </p>
      </div>
    </div>
  );
}
