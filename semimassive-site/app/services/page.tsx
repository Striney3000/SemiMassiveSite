import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/services', base).toString();

  return {
    title: 'Services',
    description:
      'Discover how SemiMassive can help accelerate your product vision with co-development in AI, XR, and behaviour-driven systems.',
    alternates: { canonical: url },
    robots: getRobotsForEnvironment(),
    openGraph: {
      url,
      title: 'Services | SemiMassive',
      description:
        'Discover how SemiMassive can help accelerate your product vision with co-development in AI, XR, and behaviour-driven systems.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full space-y-6">
        <h1 className="text-text-100">Services</h1>
        <p className="text-text-300 text-xl md:text-2xl">
          Coming soon. Discover how we can help accelerate your product vision.
        </p>
      </div>
    </div>
  );
}
