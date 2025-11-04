import Image from "next/image";

export const metadata = {
  title: "Sales Support | CloudQor",
  description:
    "Rails + React sales support system: compare sales, analyze trends, and make decisions faster with real-time insights.",
};

const COVER = "/images/projects/sales-support/cover.jpg";
const GALLERY = [
  "/images/projects/sales-support/ui-1.jpg",
  "/images/projects/sales-support/ui-2.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* Rails/analytics themed soft glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-rose-400 via-red-500 to-orange-400" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-amber-400 via-rose-400 to-red-500" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          Real-time comparisons
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Sales Support
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          A dynamic support & sales system with a <strong>Ruby on Rails</strong> backend
          and <strong>React</strong> frontend—compare sales data, analyze trends, and
          make confident decisions with streamlined workflows.
        </p>

        {/* CTAs + sample KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 text-white shadow-lg bg-gradient-to-tr from-rose-600 via-red-600 to-orange-600 hover:opacity-95"
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
              <div className="text-2xl font-bold">-28%</div>
              <div className="text-slate-500">Lead response time</div>
            </div>
            <div>
              <div className="text-2xl font-bold">+19%</div>
              <div className="text-slate-500">Win-rate uplift</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: narrative */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            Built for sales teams and support reps, the app centralizes product,
            pricing, and pipeline data. Users can compare regions, time windows,
            and reps side-by-side, with realtime charts that surface anomalies and
            momentum. The result: faster answers and fewer context switches.
          </p>

          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Side-by-side comparisons across reps, regions, products, and time.</li>
              <li>Trend analysis & alerts (moving averages, MoM/YoY deltas).</li>
              <li>Rails API with JWT auth, background jobs, and caching.</li>
              <li>React UI with charts, filters, and zero-state guidance.</li>
              <li>PostgreSQL + indexed queries for fast reporting.</li>
              <li>CSV import/export & role-based access (RBAC).</li>
            </ul>
          </div>

          {/* mobile-only preview to avoid duplication on desktop */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:hidden">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY.map((src) => (
                <div key={src} className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm">
                  <Image src={src} alt="Sales Support UI" fill className="object-cover" sizes="320px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: image stack (Rails-red gradient frame) */}
        <aside className="md:col-span-5 md:sticky md:top-32">
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-rose-600 via-red-600 to-orange-500 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src={COVER}
                alt="Sales Support — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src) => (
              <div key={src} className="p-[2px] rounded-xl bg-gradient-to-tr from-rose-100 to-orange-50 dark:from-slate-800 dark:to-slate-900 shadow">
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image src={src} alt="Sales Support UI" fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
