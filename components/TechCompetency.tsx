// components/TechCompetency.tsx
"use client";

import Image from "next/image";
import React from "react";

type Slide = { title: string; blurb: string; img: string };

// Right-side brand blue
const BRAND_BLUE = "#0B5FB6";

const slides: Slide[] = [
  {
    title: "Artificial Intelligence (AI)",
    blurb:
      "Applied AI across NLP, computer vision, and predictive analytics. We build eval-driven models with clear guardrails, integrate them into core workflows, and operate them with reliable MLOps so decisions are faster and measurably better.",
    img: "/tech/ai.png",
  },
  {
    title: "Internet of Things (IoT)",
    blurb:
      "End-to-end IoT platforms: secure device onboarding, resilient connectivity, time-series ingestion, digital twins, and real-time dashboards. Designed for interoperability, OTA updates, and edge processing—so fleets stay observable and efficient.",
    img: "/tech/iot.png",
  },
  {
    title: "Augmented & Virtual Reality (AR/VR)",
    blurb:
      "Immersive training, sales enablement, and operations. We craft spatial UX, 3D content pipelines, and multi-platform deployment (WebAR/VR, mobile, headsets) with analytics to prove impact beyond the demo.",
    img: "/tech/arvr.png",
  },
  {
    title: "Machine Learning (ML)",
    blurb:
      "Modern ML engineering: feature stores, experiment tracking, scalable training & tuning, and low-latency serving. We add monitoring, drift detection, and continuous improvement so models perform in production—not just in notebooks.",
    img: "/tech/ml.png",
  },
];

export default function TechCompetency() {
  const [index, setIndex] = React.useState(0);
  const len = slides.length;

  // Autoplay (hover to pause)
  const hovered = React.useRef(false);
  React.useEffect(() => {
    const id = setInterval(() => {
      if (!hovered.current) setIndex((i) => (i + 1) % len);
    }, 5000);
    return () => clearInterval(id);
  }, [len]);

  const goTo = (i: number) => setIndex(i);

  return (
    <section aria-label="Technology Capabilities" className="relative">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Heading in brand blue */}
        <h2
          className="text-center text-[28px] sm:text-[34px] md:text-[40px] font-extrabold tracking-[-0.01em]"
          style={{ color: BRAND_BLUE }}
        >
          Our Technology Capabilities
        </h2>

        {/* Viewport (no border/box/shadow) */}
        <div
          className="relative mt-8 md:mt-10 overflow-hidden"
          onMouseEnter={() => (hovered.current = true)}
          onMouseLeave={() => (hovered.current = false)}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <article
                key={i}
                className="min-w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-4"
              >
                {/* Illustration — centered, modest size */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="p-5 md:p-7 flex items-center justify-center">
                    <figure className="w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px]">
                      <Image
                        src={s.img}
                        alt={s.title}
                        width={1000}
                        height={750}
                        className="w-full h-auto object-contain"
                        priority={i === index}
                      />
                    </figure>
                  </div>
                </div>

                {/* Copy */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="p-5 md:p-7">
                    <span
                      className="inline-flex items-center gap-2 text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        color: BRAND_BLUE,
                        backgroundColor: "rgba(11,95,182,0.12)",
                      }}
                    >
                      Technology
                    </span>
                    <h3 className="mt-2 text-[24px] sm:text-[28px] md:text-[32px] font-extrabold tracking-tight text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14px] md:text-[16px] leading-[1.65] text-slate-600 max-w-[60ch]">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots in brand blue (arrows removed) */}
        <div className="mt-6 flex justify-center gap-1.5">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  active ? "w-8" : "w-2 bg-slate-300"
                }`}
                style={active ? { backgroundColor: BRAND_BLUE } : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
