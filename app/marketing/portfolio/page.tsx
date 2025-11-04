// app/marketing/portfolio/page.tsx
import { projects } from '@/lib/projects';
import ReviewWallCompact from '@/components/ReviewWallCompact';
import WordRotate from '@/components/WordRotate';
import PortfolioTabs from '@/components/PortfolioTabs';

export const metadata = { title: 'Portfolio — CloudQor' };

const WORDS = ['AI Agents', 'Cloud Infra', 'Voice Assistants', 'Growth Engines', 'Analytics'];

// Keep Flask in the tab order as you had it
const TAB_ORDER = ['AI', 'Python', 'Flask', 'Next.js', 'Cloud', 'Security', 'Analytics'];

export default function PortfolioPage() {
  return (
    // Page container + consistent vertical rhythm
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 space-y-14 md:space-y-20">
      {/* HERO */}
      <div
        className="
          relative overflow-hidden rounded-[28px] md:rounded-[36px]
          border border-slate-200/70 dark:border-slate-800
          px-6 md:px-12 py-12 md:py-20 lg:py-24
          shadow-[0_14px_48px_-20px_rgba(2,6,23,.25)]
          /* subtle, light backdrop in CloudQor blues */
          bg-[radial-gradient(1200px_600px_at_10%_0%,#E8F1FF_0%,transparent_60%),radial-gradient(1200px_600px_at_100%_100%,#ECF8FF_0%,transparent_60%)]
          /* light grid hint */
          [background-image:linear-gradient(to_right,rgba(2,6,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.03)_1px,transparent_1px),radial-gradient(1200px_600px_at_10%_0%,#E8F1FF_0%,transparent_60%),radial-gradient(1200px_600px_at_100%_100%,#ECF8FF_0%,transparent_60%)]
          [background-size:24px_24px,24px_24px,auto,auto]
          [background-position:0_0,0_0,0_0,0_0]
          /* softer fade so it doesn't hit the text */
          md:[-webkit-mask-image:linear-gradient(to_bottom,black_99%,transparent_100%)]
          md:[mask-image:linear-gradient(to_bottom,black_99%,transparent_100%)]
        "
      >
        {/* very light bluish blur blobs */}
        <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#0F6BDC]/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-44 -right-48 h-[520px] w-[520px] rounded-full bg-[#32B0FF]/10 blur-2xl" />

        <h1 className="relative z-10 text-[44px] md:text-[92px] lg:text-[110px] font-extrabold leading-[0.95] tracking-tight text-slate-900 dark:text-white">
          <span className="mr-3">Build</span>
          {/* CloudQor logo blues */}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0A4FB2_0%,#0F6BDC_45%,#32B0FF_100%)]">
            Autonomy
          </span>
        </h1>

        <div className="relative z-10 mt-2 text-[38px] md:text-[72px] lg:text-[88px] font-extrabold text-slate-900 dark:text-white/95">
          <WordRotate words={WORDS} className="inline-block" />
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
      <PortfolioTabs projects={projects} initialTab="All" tabs={TAB_ORDER} />

      {/* Reviews wall */}
      <div className="pt-6 md:pt-10">
        <ReviewWallCompact />
      </div>
    </section>
  );
}
