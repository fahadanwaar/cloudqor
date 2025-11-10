// components/PrimaryCta.tsx
'use client';
import Link from 'next/link';

export default function PrimaryCta({
  href,
  label,
  blue = '#0B49B6',
  yellow = '#F2C21A',
}: { href: string; label: string; blue?: string; yellow?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center rounded-full pl-5 pr-2 py-2 text-white font-semibold shadow-sm"
      style={{ backgroundColor: blue }}
    >
      <span className="text-[15px]">{label}</span>
      <span
        className="ml-3 grid h-9 w-9 place-items-center rounded-full bg-white border transition-all group-hover:translate-x-0.5 group-hover:shadow-sm"
        style={{ borderColor: blue }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-[1px]">
          <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke={yellow} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
