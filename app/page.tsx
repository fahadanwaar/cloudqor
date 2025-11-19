// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import WhatWeDoStrip from "@/components/WhatWeDoStrip";
import LaunchYourIdeaSection from "@/components/LaunchYourIdeaSection";
import SuccessStories from "@/components/SuccessStories";
import CollaborationModelsSection from "@/components/CollaborationModelsSection";
import MantraHero from "@/components/MantraHero";

const BRAND_BLUE = "#0050B3";
const BRAND_YELLOW = "#FFC300";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5FAFF] via-white to-[#E4F0FF]">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-[40%] bg-[radial-gradient(circle_at_30%_20%,rgba(0,80,179,0.35),transparent_60%)]" />
          <div className="absolute -left-40 bottom-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,129,255,0.18),transparent_70%)]" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-14 md:px-8 lg:flex-row lg:items-center lg:gap-16">
          {/* LEFT: copy + CTAs */}
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#4D74B7]">
              Production Platforms &amp; Cloud Engineering
            </p>

            <h1 className="text-[32px] leading-[1.05] text-[#05234A] sm:text-[40px] md:text-[50px] lg:text-[56px] font-extrabold tracking-[-0.03em]">
              <span className="block">Operate With</span>
              <span className="block">Software Confidence</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-slate-600">
              We architect and deliver production platforms with senior
              engineering, cloud discipline, and measurable reliability — designed
              to scale, secured by default, and shipped on a cadence your business
              can plan around.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/marketing/contact"
                className="inline-flex w-fit items-center gap-4 rounded-full bg-[color:var(--brand-blue,#0050B3)] px-8 py-3.5 text-sm md:text-base font-semibold text-white shadow-[0_14px_32px_rgba(0,44,95,0.35)] transition-all hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(0,44,95,0.45)]"
              >
                <span>Schedule a Meeting</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[color:var(--brand-blue,#0050B3)] text-lg shadow-[0_0_0_2px_rgba(255,255,255,0.6)]">
                  →
                </span>
              </Link>

              {/* subtle secondary link instead of big button */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
                <span>
                  Prefer to explore first?{" "}
                  <Link
                    href="/marketing/services"
                    className="font-semibold text-[color:var(--brand-blue,#0050B3)] underline-offset-4 hover:underline"
                  >
                    View our services
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: epic 3D dashboard-style hero visual */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-[540px] transform-gpu transition-all duration-700 ease-out hover:-translate-y-3 hover:rotate-1">
              {/* big soft glow behind everything */}
              <div className="pointer-events-none absolute -inset-12 rounded-[44px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,112,243,0.22),transparent_60%)] blur-3xl opacity-80" />

              {/* back layer card for depth */}
              <div className="pointer-events-none absolute inset-x-6 -top-5 -bottom-5 -z-10 opacity-70">
                <div className="h-full w-full rounded-[40px] bg-gradient-to-br from-[#E1ECFF] via-white to-[#D6E6FF] blur-sm shadow-[0_40px_90px_rgba(15,23,42,0.55)]" />
              </div>

              {/* gradient frame for 3D edge */}
              <div className="relative rounded-[34px] bg-gradient-to-br from-[#E1ECFF] via-white to-[#D6E6FF] p-[1px] shadow-[0_32px_80px_rgba(15,23,42,0.32)]">
                {/* main card */}
                <div className="relative flex flex-col overflow-hidden rounded-[32px] bg-white/98 ring-1 ring-[#E2EBFA]">
                  {/* top content row */}
                  <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-3 md:px-7 md:pt-7">
                    <div className="max-w-[70%]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#A4B2D3]">
                        Delivery Focus
                      </p>
                      <p className="mt-3 text-lg md:text-xl font-bold leading-snug text-[#05234A]">
                        Production platforms that stay healthy
                      </p>
                    </div>

                    {/* small metric pill – live dashboard feel */}
                    <div className="rounded-2xl bg-[#05234A] px-4 py-2 text-[10px] text-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.55)]">
                      <p className="text-[11px] font-semibold text-white">
                        99.98% uptime
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-300">
                        12-month rolling
                      </p>
                    </div>
                  </div>

                  {/* capabilities row */}
                  <div className="px-6 pb-3 text-[11px] md:px-7 md:text-[12px] text-slate-600">
                    <span>Typed APIs</span>
                    <span className="mx-1.5">·</span>
                    <span>Observability</span>
                    <span className="mx-1.5">·</span>
                    <span>SLOs</span>
                    <span className="mx-1.5">·</span>
                    <span>Rollback playbooks</span>
                    <span className="mx-1.5">·</span>
                    <span>Cost visibility</span>
                  </div>

                  {/* mini metrics row */}
                  <div className="flex flex-wrap gap-4 px-6 pb-4 text-[11px] md:px-7 text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>
                        <span className="font-semibold text-slate-800">
                          &lt; 15 min
                        </span>{" "}
                        rollback playbooks
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span>
                        <span className="font-semibold text-slate-800">
                          4x
                        </span>{" "}
                        faster incident recovery
                      </span>
                    </div>
                  </div>

                  {/* progress bar track */}
                  <div className="relative px-6 pb-6 md:px-7 md:pb-7">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E4ECFA]">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#FFC300] via-[#FFD95C] to-[#FFB000] animate-shimmer" />
                    </div>
                    <div className="mt-3 flex justify-between text-[11px] font-medium text-slate-400">
                      <span>Reliability maturity</span>
                      <span>Cost visibility</span>
                    </div>

                    {/* subtle gradient ring in corner for depth */}
                    <div className="pointer-events-none absolute -right-10 -bottom-8 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,112,243,0.2),transparent_65%)] opacity-80 animate-float-slow" />
                  </div>
                </div>
              </div>

              {/* floating logo tile – now below card, no text overlap */}
              <div className="absolute left-6 -bottom-12 flex h-[120px] w-[120px] items-center justify-center rounded-[30px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.35)] ring-1 ring-[#E3ECFB] animate-float-slow">
                <div className="relative h-16 w-16 rounded-2xl bg-[conic-gradient(from_190deg_at_50%_50%,#0050B3_0deg,#00A3FF_120deg,#FFC300_240deg,#0050B3_360deg)] p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[18px] bg-[color:var(--brand-blue,#0050B3)] shadow-[0_10px_26px_rgba(0,80,179,0.55)]">
                    <Image
                      src="/cloudqor-icon.png"
                      alt="CloudQor"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REST OF PAGE ===== */}
      <WhatWeDoStrip />
      <LaunchYourIdeaSection />
      <SuccessStories />
      <CollaborationModelsSection />
      <MantraHero
        label="Our Mantra"
        quote={`Creativity is Intelligence\nHaving Fun.`}
        author="Albert Einstein"
      />
    </>
  );
}
