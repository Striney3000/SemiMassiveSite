import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { PageTransition } from '@/components/PageTransition';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalTTFCInitializer } from '@/components/GlobalTTFCInitializer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    template: '%s | SemiMassive',
    default: 'SemiMassive — Future Product Co-Dev',
  },
  description:
    'We ship the next generation of product experiences before the market catches up.',
  openGraph: {
    type: 'website',
    siteName: 'SemiMassive',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const currentYear = 2025;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === 'production';
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const navJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: ['Home', 'Services', 'Solutions', 'Matrix', 'About'],
    url: [
      `${SITE}/`,
      `${SITE}/services`,
      `${SITE}/interventions`,
      `${SITE}/matrix`,
      `${SITE}/about`
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        {isProd && plausibleDomain && (
          <link rel="preconnect" href="https://plausible.io" />
        )}
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd) }}
        />
        <GlobalTTFCInitializer />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="content" role="main" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>

        {isProd && plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
