"use client";

import Link from "next/link";
import React from "react";

const NAVY = "#08233F";
const BRAND_BLUE = "#0B49B6";
const BRAND_YELLOW = "#F2C21A"; // <-- add yellow

export default function DeepCta() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-40">
      {/* Base deep navy background */}
      <div className="absolute inset-0 -z-20" style={{ backgroundColor: NAVY }} />

      {/* Right-side concentric “arcs” */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.45]"
        style={{
          backgroundImage: `
            radial-gradient(1200px 700px at 115% 5%, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 50%),
            repeating-radial-gradient(1200px 700px at 115% 5%, rgba(255,255,255,.05) 0px, rgba(255,255,255,0) 80px, rgba(255,255,255,0) 160px)
          `,
          backgroundRepeat: "no-repeat",
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom-left diagonal lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -bottom-8 w-[65%] h-[55%] -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(16,102,197,.35) 0 2px, rgba(255,255,255,0) 2px 42px)",
          maskImage:
            "radial-gradient(120% 120% at 0% 100%, rgba(0,0,0,.9) 40%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 0% 100%, rgba(0,0,0,.9) 40%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Right circular glow/accent */}
      <div
        aria-hidden
        className="absolute -right-10 -bottom-24 w-[520px] h-[520px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(11,115,230,.55), rgba(11,115,230,.12) 65%, transparent 70%)",
          filter: "blur(2px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1100px] px-5 text-center">
        <h2
          className="text-white font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(28px,5.2vw,56px)" }}
        >
          Sharp Minds. Stable Code. <br className="hidden sm:block" />
          Crash-Free Launch
        </h2>

        <div className="mt-8 md:mt-10">
          <Link
            href="/marketing/contact"
            className="
              inline-flex items-center gap-3
              rounded-full bg-white text-slate-900
              font-semibold px-6 py-3 md:px-7 md:py-3.5
              shadow-[0_14px_40px_-12px_rgba(2,6,23,.45)]
              transition-transform duration-300 hover:-translate-y-0.5
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
          >
            Build Your Team Now
            <span
              className="
                inline-grid size-8 place-items-center rounded-full
                ring-2 ring-[color:var(--brand-yellow)]   /* <-- yellow ring */
                text-[color:var(--brand-blue)]             /* arrow stays blue */
                bg-white
              "
              style={{
                ["--brand-blue" as any]: BRAND_BLUE,
                ["--brand-yellow" as any]: BRAND_YELLOW,
              }}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
