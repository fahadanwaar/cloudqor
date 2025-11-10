// app/marketing/portfolio/page.tsx
import { projects } from '@/lib/projects';
import ReviewWallCompact from '@/components/ReviewWallCompact';
import WordRotate from '@/components/WordRotate';
import PortfolioTabs from '@/components/PortfolioTabs';
import HeroKpiCards from '@/components/HeroKpiCards';
import PrimaryCta from '@/components/PrimaryCta';

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
        {/* soft background grid + tints */}
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
              {/* exact logo blue (solid fill) */}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_BLUE})` }}
              >
                Autonomy
              </span>
            </h1>

            <div className="mt-1 text-[30px] md:text-[56px] lg:text-[64px] font-extrabold text-slate-900 dark:text-white">
              <WordRotate words={WORDS} className="inline-block" />
            </div>

            {/* classy copy */}
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400">
              Science over guesswork. Passion for craft. <strong>Software that pays for itself</strong>—delivered
              on time, built to scale, and effortless to maintain.
            </p>

            {/* Primary CTA (shared) */}
            <div className="mt-7">
              <PrimaryCta href="/marketing/contact" label="Let’s Start Building" />
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

          {/* RIGHT: animated blob + randomized floating KPI cards */}
          <div className="lg:col-span-5 relative h-[220px] md:h-[300px] lg:h-[340px]">
            <HeroKpiCards />
          </div>
        </div>
      </div>

      {/* Section intro (fancy, no helper line) */}
      <div className="relative py-10 text-center">
        {/* soft halo */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-40 w-[520px] rounded-full bg-[#E8F1FF] blur-3xl opacity-90" />
        </div>

        {/* small badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur
                        dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND_YELLOW }} />
          Our Work
        </div>

        {/* headline */}
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
          Built by{' '}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0B49B6_0%,#0F6BDC_50%,#32B0FF_100%)] drop-shadow-[0_1px_0_rgba(11,73,182,0.15)]">
            CloudQor
          </span>
        </h2>

        {/* yellow accent */}
        <div className="mt-3 flex justify-center">
          <span className="h-1 w-16 rounded-full" style={{ background: BRAND_YELLOW }} />
        </div>
      </div>

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
