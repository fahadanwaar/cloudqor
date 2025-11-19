// components/WhatWeDoStrip.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    title: "Develop an MVP",
    description:
      "Launch foolproof MVPs that stand the test of time and give you signal fast.",
    icon: "/images/home/rocket.png",
    iconAlt: "Rocket launching",
  },
  {
    title: "Expand Your Team",
    description:
      "Get the best returns on investment with our hi-tech industry experts.",
    icon: "/images/home/team.png",
    iconAlt: "Team high-five",
  },
  {
    title: "Get CTO’s advice",
    description:
      "Know what market leaders have to say to grow your technical footprint.",
    icon: "/images/home/cto.png",
    iconAlt: "CTO advice",
  },
  {
    title: "Create a design",
    description:
      "We live and breathe design thinking. Take advantage of battle-tested patterns.",
    icon: "/images/home/design.png",
    iconAlt: "Design dashboard",
  },
];

export default function WhatWeDoStrip() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-10 md:py-14">
      {/* subtle gradient blob */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center opacity-50">
        <div className="h-44 w-[55%] rounded-[999px] bg-gradient-to-r from-[#C2E1FF] via-white to-[#FFD66B] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-8 flex flex-col items-center text-center md:mb-10">
          <p className="mb-2 inline-flex items-center rounded-full border border-[#D5E4FF] bg-white/70 px-3 py-[6px] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0050B3] shadow-sm">
            Services
          </p>
          <h2 className="text-[26px] md:text-[32px] font-extrabold leading-tight text-[#0050B3]">
            What can we do for you?
          </h2>
          <p className="mt-2 max-w-xl text-xs md:text-sm text-slate-600">
            Partner with a team that understands product, engineering and design
            — and ships fast with quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#004080]/40 bg-gradient-to-b from-[#002A5C] via-[#004A9F] to-[#0067D8] px-7 py-9 text-white shadow-[0_18px_40px_rgba(0,42,102,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_52px_rgba(0,42,102,0.65)]"
            >
              {/* background icon (bigger & clearer) */}
              <div className="pointer-events-none absolute -right-6 -bottom-10 h-40 w-40 opacity-20 blur-[1px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-35">
                <div className="relative h-full w-full">
                  <Image
                    src={card.icon}
                    alt={card.iconAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative z-10 flex flex-1 flex-col">
                {/* icon (image now fills the whole square) */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                  <Image
                    src={card.icon}
                    alt={card.iconAlt}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* title */}
                <h3 className="mb-3 text-[20px] md:text-[22px] font-semibold leading-snug">
                  {card.title}
                </h3>

                <div className="mb-4 h-[3px] w-10 rounded-full bg-[#FFC300] opacity-80 transition-all duration-300 group-hover:w-14 group-hover:bg-[#FFE063]" />

                {/* description */}
                <p className="text-[13px] md:text-[14px] leading-relaxed text-blue-100/90">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View all services CTA */}
        <div className="mt-9 flex justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-xs md:text-sm font-semibold text-[#0050B3] shadow-[0_8px_20px_rgba(0,40,85,0.16)] ring-1 ring-[#E0E7FF] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(0,40,85,0.24)]"
          >
            <span className="relative">
              View All Services
              <span className="absolute left-0 -bottom-[3px] h-[2px] w-0 bg-[#FFC300] transition-all duration-300 group-hover:w-full" />
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4C2] text-[#0050B3] transition-all duration-300 group-hover:bg-[#FFC300]">
              <span className="text-sm leading-none">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
