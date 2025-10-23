import Link from 'next/link';
import type { Metadata } from 'next';
import { getRobotsForEnvironment } from '@/lib/metadata';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: getRobotsForEnvironment(),
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-text-100">404</h1>
          <h2 className="text-text-100">Page Not Found</h2>
          <p className="text-text-300 text-xl md:text-2xl">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/interventions" className="btn-primary no-underline">
            View Our Solutions
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-aqua-400 hover:text-aqua-500 transition-colors font-medium text-lg no-underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
