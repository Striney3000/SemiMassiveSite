import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { PageTransition } from '@/components/PageTransition';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
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
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <header className="w-full py-6 px-6 md:px-12">
            <nav aria-label="Main navigation">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-xl font-heading font-bold text-text-100">
                  Semimassive
                </div>
                <ul className="flex gap-6 md:gap-8">
                  <li>
                    <a
                      href="/work"
                      className="no-underline text-text-300 hover:text-text-100"
                    >
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="no-underline text-text-300 hover:text-text-100"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="no-underline text-text-300 hover:text-text-100"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="w-full py-12 px-6 md:px-12 border-t border-base-800">
            <div className="max-w-7xl mx-auto">
              <p className="text-text-300 text-base">
                © {currentYear} Semimassive. All rights reserved.
              </p>
            </div>
          </footer>
        </div>

        {/* Plausible Analytics - commented out, uncomment when ready for production
            Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in .env.local or .env.production */}
        {/*
        <Script
          defer
          data-domain="semimassive.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        */}
      </body>
    </html>
  );
}
