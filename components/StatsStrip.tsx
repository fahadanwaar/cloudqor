import React from "react";
import SectionHeading from "@/components/SectionHeading";

type Stat = { value: string; suffix?: string; label: string };

const STATS: Stat[] = [
  { value: "150", suffix: "+", label: "Full Stack Developers" },
  { value: "300", suffix: "+", label: "Solutions Delivered\nSuccessfully" },
  { value: "200", suffix: "+", label: "Tech Stacks" },
  { value: "98", suffix: "%", label: "Customer Happiness\nIndex" },
  { value: "3/4", label: "Customers Stay For\nFuture Projects" },
];

const BRAND_BLUE = "#0B49B6";
const BRAND_YELLOW = "#F2C21A";
const STRIP_BG = "#F6F9FC";

export default function StatsStrip() {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-16"
      style={{ backgroundColor: STRIP_BG }}
    >
      {/* very subtle background halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(750px 750px at -12% 28%, rgba(2,6,23,0.03) 0%, rgba(2,6,23,0.018) 42%, rgba(2,6,23,0) 66%),
            radial-gradient(750px 750px at 112% 72%, rgba(2,6,23,0.03) 0%, rgba(2,6,23,0.018) 42%, rgba(2,6,23,0) 66%)
          `,
          backgroundRepeat: "no-repeat",
          WebkitMaskImage:
            "radial-gradient(160% 130% at 50% 45%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 96%)",
          maskImage:
            "radial-gradient(160% 130% at 50% 45%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 96%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Polished heading */}
        <SectionHeading
          eyebrow="By the numbers"
          title={<>Achievements Through The Years…</>}
          subtitle="Outcomes we consistently deliver for clients across products and platforms."
          className="mb-6 md:mb-8"
          accentColor={BRAND_BLUE}
          accentBarColor={BRAND_YELLOW}
        />

        {/* Flat grid with thin separators only */}
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-200">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="px-4 md:px-6 py-6 md:py-8 text-center"
            >
              {/* Numbers – crisp & professional, but smaller */}
              <div
                className="leading-none font-extrabold text-slate-900 tracking-tight tabular-nums lining-nums"
                style={{ fontSize: "clamp(30px,4.8vw,46px)" }}
              >
                {s.value.includes("/") ? (
                  <>
                    <span>{s.value.split("/")[0]}</span>
                    <span className="px-1 text-red-500">/</span>
                    <span>{s.value.split("/")[1]}</span>
                  </>
                ) : (
                  <span>{s.value}</span>
                )}
                {s.suffix ? (
                  <span className="pl-1.5 text-red-500">{s.suffix}</span>
                ) : null}
              </div>

              <div
                className="mt-3 text-slate-600 whitespace-pre-line"
                style={{ fontSize: "clamp(13px,1.8vw,15px)", lineHeight: 1.35 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* slightly tighter extra space below strip */}
        <div className="mt-8 md:mt-10" />
      </div>
    </section>
  );
}
