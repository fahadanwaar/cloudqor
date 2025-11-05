import Image from "next/image";

export const metadata = {
  title: "Realtime Analytics — Voice & Chat Ops | CloudQor",
  description:
    "Sub-second KPIs, queue drilldowns, and anomaly alerts for AI contact centers. Built with Next.js, stream processing, and a columnar warehouse.",
};

const GALLERY = [
  "/images/projects/realtime-analytics-dashboard/ui-1.jpg",
  "/images/projects/realtime-analytics-dashboard/ui-2.jpg",
//   "/images/projects/realtime-analytics-dashboard/ui-3.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* bg accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-sky-300 via-blue-400 to-indigo-400" />
        <div className="absolute -bottom-20 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-emerald-300 via-cyan-400 to-blue-400" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Realtime (sub-second) telemetry
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0A4FB2_0%,#0F6BDC_45%,#32B0FF_100%)]">
            Realtime Analytics — Main & Queue Drilldowns
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          Sub-second KPIs for voice/chat operations, deep queue drilldowns, and
          anomaly alerts — purpose-built for AI contact centers.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View highlights
          </a>
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 text-white bg-gradient-to-tr from-sky-600 to-indigo-600 hover:opacity-95 shadow-lg"
          >
            Discuss this project
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">&lt;1s</div>
              <div className="text-slate-500">P95 refresh</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10k+/s</div>
              <div className="text-slate-500">event throughput</div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: narrative + sections */}
        <div className="md:col-span-7 space-y-8">
          {/* Highlights */}
          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Streaming ingestion (Kafka/Kinesis) → windowed aggregations.</li>
              <li>Columnar warehouse for fast slice/dice on billions of rows.</li>
              <li>Row-level security and team-scoped dashboards.</li>
              <li>Alerting on SLO breaches and anomalies (Prophet/ADTK/DBSCAN).</li>
              <li>Embeddable widgets for CRM, supervisor console, and wallboards.</li>
            </ul>
          </div>

          {/* Section: Main Dashboard */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold mb-3">
              Realtime Analytics — Main Dashboard
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              A supervisor view for the whole floor, focused on sub-second
              performance and health.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>
                <strong>KPIs:</strong> Calls/min, Containment, ASR, Sentiment,
                Cost/Call (all sub-second).
              </li>
              <li>
                <strong>Top Intents</strong> bar chart with trend deltas.
              </li>
              <li>
                <strong>Regions</strong> card showing live load/latency by site.
              </li>
              <li>
                <strong>Timeline</strong> overlay: Calls vs Errors with tooltips.
              </li>
            </ul>
          </div>

          {/* Section: Queue Drilldown */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold mb-3">
              Analytics — Queue Drilldown (Support / Order Status)
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Deep analytics for a single queue with conversion, quality, and
              operations views.
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>
                <strong>Conversion funnel:</strong> Answered → Authenticated →
                Intent → Bot Resolved → Handoff.
              </li>
              <li>
                <strong>Sentiment ring</strong> (positive/neutral/negative) with drill to
                transcripts.
              </li>
              <li>
                <strong>Agent & bot leaderboard</strong> (AHT, CSAT proxy, resolution rate).
              </li>
              <li>
                <strong>Live anomaly alerts</strong> (surge, ASR drop, error spikes).
              </li>
            </ul>
          </div>

          {/* mini gallery */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {["/images/projects/realtime-analytics-dashboard/cover.jpg", ...GALLERY].map(
                (src) => (
                  <div
                    key={src}
                    className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={src}
                      alt="Realtime analytics UI"
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: Featured image + thumbs */}
        <aside className="md:col-span-5 md:sticky md:top-24">
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src="/images/projects/realtime-analytics-dashboard/cover.jpg"
                alt="Realtime Analytics — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {GALLERY.map((src) => (
              <div
                key={src}
                className="p-[2px] rounded-xl bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow"
              >
                <div className="relative aspect-square rounded-[10px] overflow-hidden">
                  <Image
                    src={src}
                    alt="Realtime Analytics — detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 13vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div id="contact" className="sr-only" />
    </section>
  );
}
