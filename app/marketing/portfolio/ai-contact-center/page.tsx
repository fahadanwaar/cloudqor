import Image from "next/image";

export const metadata = {
  title: "AI Contact Center — 24/7 Voice & Chat Agents | CloudQor",
  description:
    "Cloudqor builds real-time voice & chat agents that answer, resolve, and escalate with human-grade clarity—at enterprise scale. LiveKit, Google LLMs, and Cloudqor orchestration.",
};

const COVER = "/images/projects/ai-contact-center/cover.jpg";
const GALLERY = [
  "/images/projects/ai-contact-center/ui-1.jpg",
  "/images/projects/ai-contact-center/ui-2.jpg",
  "/images/projects/ai-contact-center/ui-3.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* voice/realtime themed glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600" />
        <div className="absolute -bottom-20 -right-28 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-cyan-400" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
          Realtime voice & chat agents
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            AI Contact Center — 24/7 Voice & Chat Agents
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          Give your contact center a 24/7 AI teammate. Cloudqor builds voice and chat agents
          that answer, resolve, and escalate with human-grade clarity—at enterprise scale.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#what-it-does"
            className="rounded-xl px-5 py-3 text-white shadow-lg bg-gradient-to-tr from-cyan-600 via-sky-600 to-indigo-600 hover:opacity-95"
          >
            View capabilities
          </a>
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Request a walkthrough
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">~60–90%</div>
              <div className="text-slate-500">Deflection potential*</div>
            </div>
            <div>
              <div className="text-2xl font-bold">&lt;1s</div>
              <div className="text-slate-500">Avg response latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-slate-500">Always-on coverage</div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-xs text-slate-400">
          *Depends on use-case design, escalation policy, and data access.
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: narrative */}
        <div className="md:col-span-7 space-y-6">
          {/* Stack */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Stack</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
              <strong>LiveKit</strong> for real-time voice, <strong>Google LLMs</strong> for
              reasoning and natural language, and <strong>Cloudqor orchestration</strong> for
              routing, guardrails, analytics, and integrations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["LiveKit", "Voice", "Chat", "Google LLMs", "Orchestration", "Guardrails"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div id="what-it-does" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm">
            <h2 className="text-xl font-semibold">What it does</h2>
            <ul className="mt-3 space-y-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>
                <strong>Automates inbound &amp; outbound:</strong> Answer calls, route intents,
                schedule, verify, follow up, and run campaigns.
              </li>
              <li>
                <strong>Understands context:</strong> Pulls CRM/ERP data, verifies identity,
                remembers session context, and adapts mid-conversation.
              </li>
              <li>
                <strong>Acts, not just talks:</strong> Creates tickets, updates orders, takes
                payments, books appointments, and triggers workflows.
              </li>
              <li>
                <strong>Hands off gracefully:</strong> Real-time human handoff with transcript
                and sentiment so agents jump in fully briefed.
              </li>
            </ul>
          </div>

          {/* Fit */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-sm font-medium text-slate-500">Good fit for</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-[15px]">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                High-volume support &amp; appointments
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                Order status, billing, &amp; payments
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                Sales outreach &amp; re-engagement
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                Identity verification &amp; KYC steps
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: image stack */}
        <aside className="md:col-span-5 md:sticky md:top-32">
          {/* cover frame with new palette */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src={COVER}
                alt="AI Contact Center — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* thumbs with lighter cyan/sky frame */}
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src) => (
              <div
                key={src}
                className="p-[2px] rounded-xl bg-gradient-to-tr from-sky-100 to-cyan-50 dark:from-slate-800 dark:to-slate-900 shadow"
              >
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={src}
                    alt="AI Contact Center UI"
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
