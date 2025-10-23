'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-text-100">Something went wrong</h1>
          <p className="text-text-300 text-xl md:text-2xl">
            We encountered an unexpected error. Please try again.
          </p>
          {error.digest && (
            <p className="text-text-300 text-sm font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="btn-primary"
            aria-label="Try again"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-aqua-400 hover:text-aqua-500 transition-colors font-medium text-lg no-underline"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
