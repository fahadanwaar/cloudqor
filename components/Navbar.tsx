'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/marketing/portfolio', label: 'Portfolio' },
  { href: '/marketing/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/cloudqor-icon.png" alt="CloudQor" width={28} height={28} />
          <span>CloudQor</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-xl hover:bg-brand/10 transition ${
                pathname === l.href ? 'bg-brand/10' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="/portfolio#contact" className="btn btn-primary ml-2">
            Work with us
          </a>
        </nav>
      </div>
    </header>
  );
}
