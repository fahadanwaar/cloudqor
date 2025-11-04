// app/marketing/portfolio/instagram-growth/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Instagram Growth | CloudQor",
  description:
    "Instagram growth platform with React/Next.js UI and a Flask (Python) backend—real-time analytics, safe automation, and personalized playbooks.",
};

const COVER = "/images/projects/instagram-growth/cover.jpg";
const GALLERY = [
  "/images/projects/instagram-growth/ui-1.jpg",
  "/images/projects/instagram-growth/ui-2.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* soft IG gradient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-purple-500" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-orange-400 via-rose-400 to-pink-500" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
          Growth playbooks ready
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Instagram Growth
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          A feature-rich platform to boost followers, engagement, and overall visibility —
          with a sleek <strong>React/Next.js</strong> client and secure
          <strong> Flask (Python)</strong> API, plus real-time analytics.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 text-white shadow-lg bg-gradient-to-tr from-pink-600 via-fuchsia-600 to-purple-600 hover:opacity-95"
          >
            Request a walkthrough
          </a>
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View highlights
          </a>

        {/* quick KPIs (example) */}
          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">+42%</div>
              <div className="text-slate-500">Engagement lift</div>
            </div>
            <div>
              <div className="text-2xl font-bold">+18k</div>
              <div className="text-slate-500">Net followers</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: Story */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            The platform delivers safe, automated growth strategies and personalized
            recommendations. Account linking is seamless, data is handled securely,
            and dashboards surface real-time insights so you can double-down on what
            works and cut what doesn’t.
          </p>

          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Automated follower growth with safe rate limits & queuing.</li>
              <li>Personalized content timing/hashtag recommendations.</li>
              <li>Real-time analytics and cohort views for post performance.</li>
              <li>React/Next.js UI · Flask API · env-based secrets & RBAC.</li>
            </ul>
          </div>

          {/* mini horizontal carousel — mobile only to avoid duplication on desktop */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:hidden">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY.map((src) => (
                <div key={src} className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm">
                  <Image src={src} alt="Instagram Growth UI" fill className="object-cover" sizes="320px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: IG-styled image stack */}
        <aside className="md:col-span-5 md:sticky md:top-32">
          {/* gradient frame card (IG palette) */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-orange-500 via-rose-500 to-fuchsia-600 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src={COVER}
                alt="Instagram Growth — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src) => (
              <div key={src} className="p-[2px] rounded-xl bg-gradient-to-tr from-pink-100 to-rose-50 dark:from-slate-800 dark:to-slate-900 shadow">
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image src={src} alt="Instagram Growth UI" fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
