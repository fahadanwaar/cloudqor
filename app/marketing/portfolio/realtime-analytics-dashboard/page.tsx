import Link from 'next/link';
import { projects } from '@/lib/projects';
import ReviewWallCompact from '@/components/ReviewWallCompact';
import WordRotate from '@/components/WordRotate';
import PortfolioTabs from '@/components/PortfolioTabs';

export const metadata = { title: 'Portfolio — CloudQor' };

const WORDS = ['AI Agents', 'Cloud Infra', 'Voice Assistants', 'Growth Engines', 'Analytics'];
const TAB_ORDER = ['AI', 'Python', 'Flask', 'Next.js', 'Cloud', 'Security', 'Analytics'];

// Brand colors
const BRAND_BLUE = '#0B49B6';
const BRAND_YELLOW = '#F2C21A';

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 space-y-14 md:space-y-20">
      {/* HERO */}
      <div
        className="
          relative overflow-hidden
          rounded-[28px] md:rounded-[36px]
          border border-slate-200/70 dark:border-slate-800
          px-6 md:px-12 py-14 md:py-20 lg:py-24
          shadow-[0_14px_48px_-20px_rgba(2,6,23,.25)]
          bg-white dark:bg-slate-950
        "
      >
        {/* soft background */}
        <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#E8F1FF] blur-2xl opacity-80" />
        <div className="pointer-events-none absolute -bottom-44 -right-48 h-[520px] w-[520px] rounded-full bg-[#ECF8FF] blur-2xl opacity-80" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px, 24px 24px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT text */}
          <div className="lg:col-span-7">
            <h1 className="text-[40px] md:text-[72px] lg:text-[84px] font-extrabold leading-[1.02] tracking-tight text-slate-900 dark:text-white">
              <span className="mr-2">Build</span>
              {/* Autonomy: exact logo blue (solid) */}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_BLUE})` }}
              >
                Autonomy
              </span>
            </h1>

            {/* rotating second line */}
            <div className="mt-1 text-[30px] md:text-[56px] lg:text-[64px] font-extrabold text-slate-900 dark:text-white">
              <WordRotate words={WORDS} className="inline-block" />
            </div>

            {/* classy copy */}
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400">
              Science over guesswork. Passion for craft. <strong>Software that pays for itself</strong>—delivered on time,
              built to scale, and effortless to maintain.
            </p>

            {/* Primary CTA */}
            <div className="mt-7">
              <Link
                href="/marketing/contact"
                className="group inline-flex items-center rounded-full pl-5 pr-2 py-2 text-white shadow-sm"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                <span className="text-[15px] font-semibold">Let’s Start Building</span>
                <span
                  className="ml-3 grid h-8 w-8 place-items-center rounded-full transition-transform group-hover:translate-x-0.5"
                  style={{ backgroundColor: BRAND_YELLOW, color: BRAND_BLUE }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* chips row */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span>Trusted by teams in</span>
              {[
                'Website',
                'App',
                'AI Agents',
                'Data / Analytics',
                'Cloud Infra',
                'DevOps / CI-CD',
                'Integrations',
                'Consulting',
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex h-9 items-center rounded-full border border-slate-200 bg-white px-4 text-slate-700 shadow-sm
                             dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT visual space */}
          <div className="lg:col-span-5 relative h-[220px] md:h-[280px] lg:h-[320px]">
            <div className="absolute right-0 top-6 h-56 w-56 md:h-72 md:w-72 rounded-[40px] rotate-6 bg-[#0F6BDC]/10 blur-md" />
            <div className="absolute right-24 bottom-0 h-40 w-40 md:h-52 md:w-52 rounded-3xl -rotate-6 bg-[#32B0FF]/10 blur-md" />
          </div>
        </div>
      </div>

      {/* Section intro */}
      <header className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">Built by CloudQor</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Click a category to explore related work.
        </p>
      </header>

      {/* Tabs + filtered grid */}
      <div id="work">
        <PortfolioTabs projects={projects} initialTab="All" tabs={TAB_ORDER} />
      </div>

      {/* Reviews wall */}
      <div className="pt-6 md:pt-10">
        <ReviewWallCompact />
      </div>
    </section>
  );
}
