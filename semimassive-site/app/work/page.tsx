import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/work', base).toString();

  return {
    title: 'Work',
    description:
      'Case studies and project showcases from SemiMassive. Explore our work in AI, XR, and behaviour-driven systems.',
    alternates: { canonical: url },
    openGraph: {
      url,
      title: 'Work | SemiMassive',
      description:
        'Case studies and project showcases from SemiMassive. Explore our work in AI, XR, and behaviour-driven systems.',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function WorkPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full space-y-6">
        <h1 className="text-text-100">Work</h1>
        <p className="text-text-300 text-xl md:text-2xl">
          Coming soon. Case studies and project showcases will appear here.
        </p>
      </div>
    </div>
  );
}
