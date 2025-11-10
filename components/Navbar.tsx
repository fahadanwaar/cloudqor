'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PrimaryCta from '@/components/PrimaryCta'; // <<— reuse the shared CTA

// Center nav (with “Work with us”)
const linksCenter = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/marketing/portfolio', label: 'Portfolio' },
  { href: '/marketing/work-with-us', label: 'Work with us' }, 
  { href: '/marketing/services', label: 'services' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className="mx-auto max-w-[1320px] px-8">
        {/* 3 columns: left brand, center nav, right CTA */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 h-20">
          {/* LEFT: logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/cloudqor-icon.png" alt="CloudQor" width={36} height={36} />
            <span className="text-xl">CloudQor</span>
          </Link>

          {/* CENTER: tabs */}
          <nav className="justify-self-center flex items-center gap-6">
            {linksCenter.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-1 py-2 text-[16px] font-medium"
                style={{ color: isActive(l.href) ? '#0B49B6' : '#475569' }} // active = brand blue
              >
                <span className="relative">
                  {l.label}
                  {/* yellow underline when active */}
                  <span
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-7 rounded-full"
                    style={{
                      backgroundColor: '#F2C21A',
                      opacity: isActive(l.href) ? 1 : 0,
                    }}
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* RIGHT: Contact Us (shared CTA) */}
          <div className="justify-self-end">
            <PrimaryCta href="/marketing/contact" label="Contact Us" />
          </div>
        </div>
      </div>
    </header>
  );
}
