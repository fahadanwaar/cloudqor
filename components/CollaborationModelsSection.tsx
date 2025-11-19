// components/CollaborationModelsSection.tsx
"use client";

import Image from "next/image";

const MODELS = [
  {
    title: "Time and Material",
    description:
      "We empower you to choose our Time and Material model where you only pay for the time and quality resources spent on the project.",
    icon: "/images/home/model-time.png", // apni icons yahan
    iconAlt: "Time and material",
  },
  {
    title: "Fixed Scope Product Development",
    description:
      "Pull down barriers like compromised quality and slow project delivery with our Fixed Scope Product Development model under a fixed budget.",
    icon: "/images/home/model-fixed.png",
    iconAlt: "Fixed scope product development",
  },
  {
    title: "Hire Dedicated Development Team",
    description:
      "Leverage your global footprint in the rising techno-verse with our self-driven, smart, and skilled team of software developers.",
    icon: "/images/home/model-team.png",
    iconAlt: "Dedicated development team",
  },
];

export default function CollaborationModelsSection() {
  return (
    <section className="bg-[#F7FAFF] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[30px] md:text-[38px] font-extrabold leading-tight text-[#0050B3]">
            Collaboration Models
            <br className="hidden md:block" /> For Everlasting Partnerships
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-600">
            Our unique &quot;Happy Paths&quot; approach is a predictive and
            transparent way to implement your idea. Choose what suits you best.
          </p>
        </div>

        {/* Icons + Cards together */}
        <div className="grid gap-8 md:grid-cols-3">
          {MODELS.map((model) => (
            <div
              key={model.title}
              className="flex flex-col items-center md:items-stretch"
            >
              {/* icon directly above its card */}
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#002A5C] to-[#005FD1] shadow-[0_16px_40px_rgba(0,31,77,0.35)]">
                  <div className="relative h-11 w-11">
                    <Image
                      src={model.icon}
                      alt={model.iconAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* card */}
              <article className="w-full rounded-[26px] bg-white px-7 py-7 text-left shadow-[0_20px_55px_rgba(15,23,42,0.10)] ring-1 ring-slate-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.16)]">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                  {model.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-600">
                  {model.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
