// components/EngagementModels.tsx
"use client";

import Image from "next/image";
import React from "react";

const BRAND_BLUE = "#0B5FB6";

type Model = {
  icon: string; // path under /public
  title: string;
  blurb: string;
};

const models: Model[] = [
  {
    icon: "/icon/time-material.png",
    title: "Time & Material",
    blurb:
      "Pay only for the time and skill applied—ideal for evolving scope, discovery phases, and long-running initiatives.",
  },
  {
    icon: "/icon/fixed-scope.png",
    title: "Fixed-Scope Delivery",
    blurb:
      "Defined milestones, outcomes, and a fixed budget. Best for well-specified work with a tight timeline.",
  },
  {
    icon: "/icon/dedicated-team.png",
    title: "Dedicated Team",
    blurb:
      "A stable, senior squad embedded with you—governed by SLOs and a roadmap, scaling up or down as needed.",
  },
];

export default function EngagementModels() {
  return (
    <section aria-label="Collaboration Models" className="relative">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2
          className="text-center text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-[-0.01em]"
          style={{ color: BRAND_BLUE }}
        >
          Collaboration Models for Long-Term Partnerships
        </h2>

        <p className="mt-3 text-center text-slate-500 text-[15px] md:text-[16px]">
          Choose the engagement style that fits your goals—transparent, predictable, and delivery-focused.
        </p>

        {/* centered rows with equal spacing & dividers */}
        <div className="mt-10 md:mt-12 divide-y divide-slate-200/80">
          {models.map((m, i) => (
            <article
              key={i}
              className="mx-auto max-w-[940px] flex items-center gap-5 md:gap-7 py-6 md:py-8 hover:bg-slate-50 transition-colors rounded-2xl"
            >
              {/* ICON CIRCLE — perfect circular mask even if PNG has white bg */}
              <div
                className="relative shrink-0 w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border border-slate-200/70 bg-white overflow-hidden shadow-sm flex items-center justify-center"
                style={{
                  WebkitMaskImage: "radial-gradient(circle, #000 99%, transparent 100%)",
                  maskImage: "radial-gradient(circle, #000 99%, transparent 100%)",
                }}
              >
                <Image
                  src={m.icon}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 64px, 72px"
                  className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>

              <div className="flex-1">
                <h3 className="text-[18px] md:text-[22px] font-semibold text-slate-900">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-[14px] md:text-[16px] leading-[1.6] text-slate-600">
                  {m.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
