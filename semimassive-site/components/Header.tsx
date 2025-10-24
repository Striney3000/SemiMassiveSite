'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', isExternal: false },
    { href: '/interventions', label: 'Solutions', isExternal: false },
    { href: '/services', label: 'Services', isExternal: false },
    { href: '/about', label: 'About', isExternal: false },
    { href: 'mailto:hello@semimassive.com', label: 'Contact', isExternal: true },
  ];

  return (
    <header className="w-full py-6 px-6 md:px-12 border-b border-base-800">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center no-underline hover:opacity-80 transition-opacity"
            aria-label="Semimassive home"
          >
            <Image
              src="/SemiMassive_Logo.svg"
              alt="Semimassive"
              width={180}
              height={36}
              priority
              style={{ width: 'auto', height: '2rem' }}
              className="md:h-9"
            />
          </Link>
          
          <ul className="flex gap-4 md:gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = 
                item.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.href) && item.href !== '/' && !item.isExternal;
              
              const linkClassName = "inline-flex items-center justify-center no-underline text-text-300 hover:text-text-100 transition-colors font-medium text-base md:text-lg px-2 py-2";
              
              return (
                <li key={item.href}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      className={linkClassName}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={linkClassName}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
