import Image from "next/image";

export const metadata = {
  title: "BUYMA Research Navi — Web Scraping | CloudQor",
  description:
    "Web-scraping portal for BUYMA product research with a FastAPI + PostgreSQL backend and a Next.js frontend.",
};

const COVER = "/images/projects/buyma-navi/cover.jpg";
const GALLERY = [
  "/images/projects/buyma-navi/ui-1.jpg",
  "/images/projects/buyma-navi/ui-2.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-blue-500" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          Scraping pipelines online
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            BUYMA Research Navi — Web Scraping
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          A focused research portal to collect, normalize, and analyze BUYMA listings.
          Backend: <strong>Python FastAPI</strong> + <strong>PostgreSQL</strong>. Frontend:
          <strong> Next.js</strong> for a fast, modern UI.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 text-white shadow-lg bg-gradient-to-tr from-sky-600 via-indigo-600 to-violet-600 hover:opacity-95"
          >
            View highlights
          </a>
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Talk to us
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">~8k/hr</div>
              <div className="text-slate-500">Items processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">&gt;99.9%</div>
              <div className="text-slate-500">Dedup accuracy</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: narrative */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            The system scrapes BUYMA product data, enriches it, and stores it in
            PostgreSQL for fast queries. A normalization layer resolves variants,
            brand names, and duplicates. Users can filter by price, brand, seller,
            or freshness—and export results for deeper analysis.
          </p>

          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>FastAPI workers with queue + retry; rotating proxies &amp; backoff.</li>
              <li>PostgreSQL schema for products, variants, sellers, and snapshots.</li>
              <li>De-duplication, normalization, and change-tracking deltas.</li>
              <li>Next.js UI with advanced filters, CSV export, and saved views.</li>
              <li>Robots/ToS safeguards, rate limits, and audit logs.</li>
            </ul>
          </div>

          {/* mobile-only preview (avoid duplication on desktop) */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:hidden">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY.map((src) => (
                <div
                  key={src}
                  className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm"
                >
                  <Image src={src} alt="BUYMA Research UI" fill className="object-cover" sizes="320px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: image stack */}
        <aside className="md:col-span-5 md:sticky md:top-32">
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-violet-600 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src={COVER}
                alt="BUYMA Research — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src) => (
              <div
                key={src}
                className="p-[2px] rounded-xl bg-gradient-to-tr from-indigo-100 to-sky-50 dark:from-slate-800 dark:to-slate-900 shadow"
              >
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={src}
                    alt="BUYMA Research UI"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
