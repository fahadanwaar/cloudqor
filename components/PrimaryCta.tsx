// components/PrimaryCta.tsx
'use client';
import Link from 'next/link';

type PrimaryCtaProps = {
  href: string;
  label: string;
  blue?: string;
  yellow?: string;
  size?: 'sm' | 'md';
};

export default function PrimaryCta({
  href,
  label,
  blue = '#0B49B6',
  yellow = '#F2C21A',
  size = 'md',
}: PrimaryCtaProps) {
  const buttonSizeClasses =
    size === 'sm'
      ? 'pl-4 pr-1.5 py-1.5 text-[14px]'
      : 'pl-5 pr-2 py-2 text-[15px]';

  const circleSizeClasses =
    size === 'sm'
      ? 'ml-2.5 h-7 w-7'
      : 'ml-3 h-9 w-9';

  const svgSize = size === 'sm' ? 14 : 16;

  return (
    <Link
      href={href}
      className={`group inline-flex items-center rounded-full text-white font-semibold shadow-sm ${buttonSizeClasses}`}
      style={{ backgroundColor: blue }}
    >
      <span>{label}</span>
      <span
        className={`grid place-items-center rounded-full bg-white border transition-all group-hover:translate-x-0.5 group-hover:shadow-sm ${circleSizeClasses}`}
        style={{ borderColor: blue }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 24 24"
          className="transition-transform group-hover:translate-x-[1px]"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            fill="none"
            stroke={yellow}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
