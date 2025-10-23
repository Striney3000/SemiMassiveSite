'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track, trackFirstCta } from '@/lib/analytics';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleContactClick = () => {
    const page = pathname === '/' ? 'home' : pathname.slice(1) || 'global';
    trackFirstCta('footer', page);
    track('CTA Click', { location: 'footer', page });
  };

  const navItems = [
    { href: '/', label: 'Home', isExternal: false },
    { href: '/work', label: 'Work', isExternal: false },
    { href: '/services', label: 'Services', isExternal: false },
    { href: '/about', label: 'About', isExternal: false },
    { href: 'mailto:hello@semimassive.com', label: 'Contact', isExternal: true },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/nickstrine', label: 'LinkedIn' },
    { href: 'https://twitter.com/semimassive', label: 'Twitter' },
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-base-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    className="text-text-300 hover:text-text-100 transition-colors text-base no-underline"
                    onClick={item.label === 'Contact' ? handleContactClick : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-text-300 hover:text-text-100 transition-colors text-base no-underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-base-800">
          <p className="text-text-300 text-sm md:text-base">
            © {currentYear} Semimassive. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-300 hover:text-aqua-400 transition-colors text-sm md:text-base no-underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.label} page`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
