import { Metadata } from 'next';

/**
 * Generates robots metadata based on environment
 * Preview deployments are noindexed to prevent search engine indexing
 */
export function getRobotsForEnvironment(): Metadata['robots'] {
  const isProduction = process.env.VERCEL_ENV === 'production';
  
  if (isProduction) {
    return undefined; // Use default (index: true, follow: true)
  }
  
  return {
    index: false,
    follow: false,
  };
}
