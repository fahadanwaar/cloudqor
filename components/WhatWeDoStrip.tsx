// components/WhatWeDoStrip.tsx
"use client";

import Image from "next/image";

const CARDS = [
  {
    title: "Develop an MVP",
    description:
      "Launch foolproof MVPs that stand the test of time and give you signal fast.",
    icon: "/images/home/rocket.png", // 👉 apni icon ki file yahan rakho
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
    <section className="bg-[#F5F7FB] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-[30px] md:text-[40px] font-extrabold text-[#0050B3] mb-10 md:mb-14">
          What can we do for you?
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[32px] bg-gradient-to-b from-[#002855] to-[#0050B3] px-8 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
            >
              {/* Icon */}
              <div className="mb-8 h-16 w-16">
                <div className="relative h-full w-full">
                  <Image
                    src={card.icon}
                    alt={card.iconAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-[26px] font-bold leading-tight mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-[15px] leading-relaxed text-blue-100">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
