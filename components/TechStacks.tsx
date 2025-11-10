// components/TechStacks.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Stack = {
  name: string;
  srcs: string[]; // multiple URLs for reliable fallback
  tagline?: string; // one-line pill text
};

/* ---------- Fallback-friendly icon ---------- */
function IconImg({
  alt,
  srcs,
  size = 72,
  className = "",
}: {
  alt: string;
  srcs: string[];
  size?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const src = srcs[Math.min(idx, srcs.length - 1)];
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      unoptimized
      className={className}
      onError={() => {
        if (idx < srcs.length - 1) setIdx(idx + 1);
      }}
    />
  );
}

/* ---------- Content ---------- */
const stacks: Stack[] = [
  {
    name: "Ruby On Rails",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg",
      "https://cdn.simpleicons.org/rubyonrails/CC0000",
    ],
    tagline: "Proven in production ",
  },
  {
    name: "Node Js",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
      "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    ],
    tagline: "Enterprise-ready ",
  },
  {
    name: "Flask",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      "https://cdn.simpleicons.org/flask/000000",
    ],
    tagline: "Developer favorite ",
  },
  {
    name: "Next JS",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.simpleicons.org/nextdotjs/000000",
      "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
    ],
    tagline: "Trusted at scale ",
  },
  {
    name: "Nest JS",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      "https://cdn.simpleicons.org/nestjs/E0234E",
    ],
    tagline: "Mature ecosystem ",
  },
  {
    name: "Python",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.simpleicons.org/python/3776AB",
    ],
    tagline: "Battle-tested ",
  },
  {
    name: "Django",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      "https://cdn.simpleicons.org/django/092E20",
    ],
    tagline: "Proven in production ",
  },
  {
    name: "Express JS",
    srcs: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.simpleicons.org/express/000000",
    ],
    tagline: "Enterprise-ready ",
  },
];

/* ---------- One-time fade-in ---------- */
function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}

/* ---------- Fancy 3D Card ---------- */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * -10; // tilt X
    const ry = (px - 0.5) * 10; // tilt Y
    const tx = (px - 0.5) * 10; // translate
    const ty = (py - 0.5) * 10;

    setStyle({
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateX(${tx}px) translateY(${ty}px)`,
      // Shine position
      background:
        `radial-gradient(600px 220px at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.35), transparent 60%)`,
    });
  };

  const reset = () => setStyle({});

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={[
        "relative overflow-hidden rounded-3xl border",
        "border-slate-200/70 bg-white/70 backdrop-blur-md",
        "shadow-[0_18px_40px_-24px_rgba(2,6,23,.45)]",
        "transition-[transform,box-shadow] duration-300",
        "hover:shadow-[0_40px_90px_-40px_rgba(2,6,23,.55)]",
        className,
      ].join(" ")}
      style={style}
    >
      {/* subtle gradient frame */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40 [mask-image:linear-gradient(black,transparent_65%)]" />
      {/* colorful halo on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100 bg-[conic-gradient(from_180deg,rgba(99,102,241,0.18),rgba(236,72,153,0.18),rgba(249,115,22,0.18),rgba(99,102,241,0.18))]" />
      {children}
    </div>
  );
}

export default function TechStacks() {
  const mounted = useMounted();
  const headerGradient = useMemo(
    () =>
      "bg-clip-text text-transparent bg-[linear-gradient(92deg,#0f172a_0%,#111827_35%,#334155_70%,#94a3b8_100%)]",
    []
  );

  return (
    <section className="relative mx-auto max-w-[1200px] px-4 md:px-8 py-12 md:py-16">
      {/* Soft grid + vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
        [background-image:radial-gradient(rgba(2,6,23,.07)_1px,transparent_1px)]
        [background-size:20px_20px] [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
      />

      {/* Title */}
      <div className="max-w-4xl">
        <h2 className={`text-[36px] md:text-[48px] font-extrabold leading-[1.05] tracking-tight ${headerGradient}`}>
          What Tech Stacks We Use?
        </h2>
        <div className="mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-amber-400" />
        <p className="mt-4 max-w-3xl text-[16.5px] md:text-[18px] text-slate-600">
          We balance people and tools to deliver secure, fast, and reliable software — with uncompromising quality.
        </p>
      </div>

      {/* Grid */}
      <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {stacks.map((s, i) => {
          const pillText = s.tagline ?? "";

          return (
            <li
              key={s.name}
              className={[
                "group/card relative",
                "transition-all duration-500",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <TiltCard>
                <div className="relative z-[1] flex flex-col items-center px-6 pb-7 pt-8 text-center">
                  {/* Icon cluster */}
                  <div className="relative">
                    {/* conic halo */}
                    <div className="absolute inset-0 -z-10 scale-[1.18] rounded-full opacity-60 blur-[18px] bg-[conic-gradient(from_0deg,rgba(99,102,241,0.25),rgba(236,72,153,0.25),rgba(249,115,22,0.25),rgba(99,102,241,0.25))]" />
                    {/* circle */}
                    <div
                      className="
                        relative flex items-center justify-center
                        h-[144px] w-[144px] md:h-[156px] md:w-[156px]
                        rounded-full border border-slate-200 bg-white
                        shadow-[0_14px_38px_-22px_rgba(2,6,23,.35)]
                        transition-all duration-300
                        group-hover/card:-translate-y-1
                        group-hover/card:shadow-[0_36px_80px_-34px_rgba(2,6,23,.5)]
                      "
                    >
                      {/* inner sheen */}
                      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/70 to-transparent" />
                      <IconImg
                        alt={s.name}
                        srcs={s.srcs}
                        size={80}
                        className="
                          h-[70px] w-[70px] md:h-[80px] md:w-[80px] object-contain
                          opacity-90 grayscale
                          transition-all duration-300
                          group-hover/card:opacity-100 group-hover/card:grayscale-0
                        "
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mt-4 text-[18px] md:text-[20px] font-semibold tracking-tight text-slate-900">
                    {s.name}
                  </div>

                  {/* One-line pill with yellow dot */}
                  {pillText && (
                    <div className="mt-3">
                      <span
                        className="
                          inline-flex items-center whitespace-nowrap
                          rounded-full border border-slate-200 bg-white/80 backdrop-blur
                          px-3.5 py-1.5 text-[12.5px] md:text-[13px] text-slate-700
                          shadow-[0_1px_0_rgba(15,23,42,0.05)]
                          transition-colors duration-200 group-hover/card:bg-white
                        "
                      >
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_0_3px_rgba(250,204,21,0.25)]" />
                        {pillText}
                      </span>
                    </div>
                  )}
                </div>
              </TiltCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
