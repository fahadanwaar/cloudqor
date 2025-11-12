// components/CostRingCTA.tsx
import React from "react";

const BRAND_BLUE = "#0B49B6";
const BRAND_YELLOW = "#F2C21A";

export default function CostRingCTA() {
  return (
    <section className="border-t border-slate-200/70 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <h2 className="text-[34px] md:text-[54px] font-extrabold leading-[1.08] text-slate-900 tracking-[-0.01em]">
              Wondering How Much <br /> Your Project Would <br /> Cost?
            </h2>
          </div>

          {/* Right: concentric rings + circular badge */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto w-[320px] h-[320px] md:w-[360px] md:h-[360px]">
              {/* faint ring background */}
              <svg
                viewBox="0 0 600 600"
                className="absolute inset-0 w-full h-full text-slate-300 group-hover:blur-[2px] transition duration-300"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <circle key={i} cx="300" cy="300" r={90 + i * 35} opacity={0.22 - i * 0.015} />
                  ))}
                </g>
              </svg>

              {/* centered circular badge */}
              <svg
                viewBox="0 0 260 260"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[260px] h-auto"
              >
                {/* outer ring */}
                <circle cx="130" cy="130" r="118" fill="#fff" stroke={BRAND_BLUE} strokeWidth="2" />

                {/* circular text */}
                <defs>
                  <path id="ringText" d="M130,130 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" />
                </defs>
                <text fontSize="12" fill={BRAND_BLUE}>
                  <textPath xlinkHref="#ringText" startOffset="0%">
                    Launch your Idea! • Launch your Idea! • Launch your Idea! •
                  </textPath>
                </text>

                {/* ARROW */}
                <g transform="translate(130,130)">
                  <path
                    d="M-40 0 H40 M22 -18 L40 0 L22 18"
                    fill="none"
                    stroke="#e11d48" /* default red */
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-300 group-hover:stroke-[color:var(--brand-yellow)]"
                    style={{ ["--brand-yellow" as any]: BRAND_YELLOW } as React.CSSProperties}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
