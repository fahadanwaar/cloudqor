// app/marketing/services/page.tsx
import React from "react";
import { Inter } from "next/font/google";
import StatsStrip from "@/components/StatsStrip";
import ServiceCardPro from "@/components/ServiceCardPro";
import DeepCta from "@/components/DeepCta";
import TechStacks from "@/components/TechStacks";
import Methodologies from "@/components/Methodologies";
import TechCompetency from "@/components/TechCompetency";
import EngagementModels from "@/components/EngagementModels";
import MantraHero from "@/components/MantraHero";

export const metadata = {
  title: "Services — CloudQor",
  description:
    "Custom software development services — web, mobile, cloud/DevOps, automation, product design, and more.",
};

// Professional font for consistent readability
const inter = Inter({ subsets: ["latin"], display: "swap" });

// Brand colors (adjust as needed)
const BRAND_BLUE = "#0B49B6";
const BRAND_YELLOW = "#F2C21A";
const NAVY = "#072643";

function Section({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`max-w-[1200px] mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div
      className={`${inter.className} min-h-screen`}
      style={
        {
          ["--brand-blue" as any]: BRAND_BLUE,
          ["--brand-yellow" as any]: BRAND_YELLOW,
        } as React.CSSProperties
      }
    >
      {/* ========= HERO (revamped) ========= */}
      <div className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        {/* Layer 0: deep gradient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1400px 600px at 20% -10%, rgba(30, 99, 200, 0.35), transparent 60%), radial-gradient(1100px 500px at 110% 10%, rgba(16, 42, 99, 0.6), transparent 55%)",
          }}
        />

        {/* Layer 1: subtle grid */}
        <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.09] mix-blend-screen">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "36px 36px, 36px 36px",
              backgroundPosition: "-1px -1px",
            }}
          />
        </div>

        {/* Layer 2: decorative rings + sparkle */}
        <div className="pointer-events-none absolute inset-0">
          {/* Rotated translucent squares on the right */}
          <div className="absolute right-6 md:right-16 top-16 md:top-24 grid gap-6 opacity-60">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] border border-white/10"
                style={{
                  backgroundColor: "rgba(21, 87, 153, 0.35)",
                  transform: `rotate(${(i + 1) * 12}deg)`,
                }}
              />
            ))}
            <div
              className="absolute right-[100px] top-[100px] w-4 h-4 md:w-5 md:h-5 rotate-45"
              style={{ backgroundColor: "var(--brand-yellow)" }}
            />
          </div>

          {/* Halo ring */}
          <div
            className="absolute -left-24 top-10 w-[520px] h-[520px] rounded-full opacity-30 blur-2xl"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.08), rgba(242,194,26,0.35), rgba(255,255,255,0.08))",
              filter: "saturate(120%)",
            }}
          />

          {/* Spotlight */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-8 w-[1200px] h-[900px] opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent 70%)",
            }}
          />
        </div>

        {/* Content */}
        <Section className="py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 relative z-10">
              <div className="text-slate-300 font-semibold tracking-wide">
                Custom Software Development Services
              </div>

              {/* Smaller, more compact headline */}
              <h1 className="mt-3 text-white text-[30px] sm:text-[44px] md:text-[58px] lg:text-[66px] font-extrabold leading-[1.05] tracking-[-0.01em]">
                <span className="block">Build It Right.</span>
                <span className="block">Launch It Fast.</span>
                <span className="block relative">
                  Scale It <span className="italic text-[color:var(--brand-yellow)]">Forever.</span>
                  <span aria-hidden className="absolute left-0 right-0 -bottom-1 h-[8px] rounded-full" style={{
                    background: "linear-gradient(90deg, rgba(242,194,26,0.0), rgba(242,194,26,0.55), rgba(242,194,26,0.0))",
                    filter: "blur(8px)",
                  }} />
                </span>
              </h1>

              <p className="mt-5 text-slate-200/80 text-[15px] md:text-[17px] max-w-2xl leading-[1.55]">
                Senior teams turning complex ideas into dependable products—secure by default, measurable in outcomes, and engineered to scale. Web, mobile, and AI, delivered with enterprise discipline and start‑up speed.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="/marketing/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[color:var(--brand-yellow)] text-slate-900 font-semibold px-6 py-3 text-base shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-shadow"
                >
                  Get a Project Plan
                  <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-white/90">
                    →
                  </span>
                </a>

                {/* secondary action */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white/90 px-5 py-3 text-sm backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
                >
                  Explore Our Services
                </a>
              </div>

              {/* Trust strip */}
              <div className="mt-8 flex items-center gap-3 text-white/70 text-xs md:text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" />
                Fixed milestones · Clear KPIs · Security by default · SLO‑backed
              </div>
            </div>

            {/* Right visual block (kept minimal height, adds epic look) */}
            <div className="lg:col-span-5 min-h-[260px]">
              <div className="relative h-[260px] md:h-[320px] lg:h-[380px]">
                {/* Floating decorative card */}
                <div className="absolute right-2 md:right-6 top-2 md:top-6 w-[260px] md:w-[320px] lg:w-[360px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="p-5 md:p-6">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Delivery Focus</div>
                    <div className="mt-2 text-white font-bold text-xl leading-tight">
                      Production confidence
                    </div>
                    <div className="mt-3 text-white/70 text-sm">
                      Typed APIs • CI/CD • SLOs • Observability • Rollback</div>
                  </div>
                  {/* progress bar */}
                  <div className="h-1.5 bg-white/10">
                    <div className="h-full bg-[color:var(--brand-yellow)] w-3/4" />
                  </div>
                </div>

                {/* Glow orb */}
                <div
                  className="absolute -right-10 bottom-0 w-[260px] h-[260px] rounded-full blur-3xl opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.65), rgba(11,73,182,0.45) 50%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* ========= STATS ========= */}
      <StatsStrip />

      {/* ========= SERVICES (unchanged below) ========= */}
      {/* Subtle radial gradient background to elevate this band */}
      <div id="services" className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,#E8F0FF_0%,transparent_60%)] opacity-70" />
        </div>

        <Section className="py-12 md:py-16">
          {/* Fancy header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-600 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand-yellow)]" />
              What we do
            </span>

            <h2 className="mt-4 mx-auto max-w-5xl text-[34px] sm:text-[42px] md:text-[52px] font-extrabold leading-[1.1] tracking-[-0.01em] text-slate-900">
              Full-Cycle Software Development for {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0b5fb6] via-[#1463d6] to-[#3b82f6]">
                Growth
              </span>
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#0b5fb6] to-transparent" />
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCardPro
              title="Website Development"
              desc="Fast, accessible, and SEO-sound websites built on modern JAMstack. We design component libraries and content models, wire in a headless CMS, and enforce performance budgets for sub-second LCP. Expect schema markup, analytics & consent, A/B hooks, localization, and an authoring workflow your marketing team will actually enjoy using."
              href="/marketing/contact"
              // @ts-ignore
              emoji="🌐"
            />

            <ServiceCardPro
              title="App Development"
              desc="Production-grade web & mobile apps with crisp UX and reliability. We design robust domain models, offline-first data layers with background sync, role-based access control, payments, and real-time features. Strong typing and tests, error boundaries, analytics, and accessibility are built-in—then we ship to web, app stores, or enterprise distribution."
              href="/marketing/contact"
              // @ts-ignore
              emoji="📱"
            />

            <ServiceCardPro
              title="AI Agents & Assistants"
              desc="Task-specific and multi-tool agents that actually deliver work: RAG over your data, structured outputs, function/tool calling, and workflow orchestration. We add evals, safety guardrails, tracing, and cost controls; tune retrieval, chunking, and ranking; and connect CRMs, docs, and ticketing so agents operate safely in your stack."
              href="/marketing/contact"
              // @ts-ignore
              emoji="🤖"
            />

            <ServiceCardPro
              title="Data & Analytics"
              desc="From events to insight. We implement trustworthy pipelines (ETL/ELT), model data with governance, and publish curated marts for self-serve dashboards. Think dbt-style transformations, warehouse reliability, experiment frameworks, and precise metric definitions—so decisions are fast and defensible."
              href="/marketing/contact"
              // @ts-ignore
              emoji="📊"
            />

            <ServiceCardPro
              title="Cloud Infrastructure"
              desc="Secure, scalable cloud foundations using Infrastructure as Code. VPCs and networking, autoscaling, observability, and disaster recovery with clear RPO/RTO targets. Least-privilege IAM by default; multi-region backups; cost visibility (FinOps) and runbooks so operations remain boring—in the best way."
              href="/marketing/contact"
              // @ts-ignore
              emoji="☁️"
            />

            <ServiceCardPro
              title="DevOps / CI-CD"
              desc="Developer-friendly pipelines and dependable releases. We automate linting, tests, and security scans; spin up ephemeral preview environments; manage feature flags and migrations; and codify release trains with rollback strategy, SLOs, and on-call playbooks. Faster cycle time, fewer incidents, happier engineers."
              href="/marketing/contact"
              // @ts-ignore
              emoji="🛠️"
            />

            <ServiceCardPro
              title="Integrations"
              desc="Clean integrations that survive edge cases: OAuth/SSO, webhooks with retries and idempotency keys, back-off and rate limiting, and resilient data mapping. We connect ERPs/CRMs, billing, identity, and messaging—monitoring every hop so sync is correct, observable, and Support can diagnose issues quickly."
              href="/marketing/contact"
              // @ts-ignore
              emoji="🔌"
            />

            <ServiceCardPro
              title="Consulting & CTO-as-a-Service"
              desc="Targeted senior help when you need clarity: product discovery, architecture and security reviews, scalability and performance tuning, or a pragmatic roadmap. We coach teams, level-up practices, and de-risk launches—translating strategy into an execution plan your engineers and stakeholders align on."
              href="/marketing/contact"
              // @ts-ignore
              emoji="🧭"
            />
          </div>
        </Section>
      </div>

      {/* ========= METHODOLOGIES ========= */}
      <Methodologies />

      {/* ========= TECH STACKS ========= */}
      <TechStacks />

      {/* ========= CTA SECTION ========= */}
      <DeepCta />


      <TechCompetency />

      <EngagementModels />

  


<MantraHero
  label="Our Mantra"
  quote={`Creativity is Intelligence\nHaving Fun.`}
  author="Albert Einstein"
/>


      <div className="h-10" />
    </div>
  );
}
