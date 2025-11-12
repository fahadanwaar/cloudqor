// components/MantraHero.tsx
import React from "react";
import { Inter, Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const signature = Great_Vibes({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-signature" });

export type MantraHeroProps = {
  label?: string;
  quote?: string;
  author?: string;
  background?: string;
  className?: string;
};

export default function MantraHero({
  label = "Our Mantra",
  quote = `Creativity is Intelligence
Having Fun.`,
  author = "Albert Einstein",
  background = "#072643",
  className = "",
}: MantraHeroProps) {
  return (
    <section
      className={`${inter.variable} ${signature.variable} relative overflow-hidden ${className}`}
      style={{ backgroundColor: background }}
    >
      {/* ===== LAYERED BACKGROUND (rings + arcs + glow + beam + sparkles) ===== */}

      {/* Rotating rings cluster (very slow) */}
      <svg
        aria-hidden
        className="absolute inset-0 -z-30 w-full h-full text-white/10 mantra-rotate-slow"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <g stroke="currentColor" fill="none" strokeWidth="2">
          {/* dense left cluster */}
          {Array.from({ length: 22 }).map((_, i) => (
            <circle key={`lc-${i}`} cx="380" cy="300" r={110 + i * 34} opacity={0.26 - i * 0.0105} />
          ))}
          {/* dashed inner rings for texture */}
          {Array.from({ length: 6 }).map((_, i) => (
            <circle
              key={`ld-${i}`}
              cx="380"
              cy="300"
              r={120 + i * 22}
              opacity={0.25 - i * 0.03}
              strokeDasharray="12 14"
            />
          ))}
          {/* faint right arcs */}
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={`arc-${i}`}
              d={`M ${1040 + i * 55} -240 C ${1220 + i * 60} 140, ${1100 + i * 55} 560, ${930 + i * 48} 1020`}
              opacity={0.06}
            />
          ))}
        </g>
      </svg>

      {/* center-left glow (soft flicker) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 mantra-soft-fade"
        style={{
          background:
            "radial-gradient(900px 560px at 28% 30%, rgba(255,255,255,0.10), transparent 62%)",
        }}
      />

      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          opacity: 0.08,
          mixBlendMode: "screen",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px, 48px 48px",
          backgroundPosition: "-1px -1px",
        }}
      />

      {/* angled light beam (slow sweep) */}
      <div
        aria-hidden
        className="absolute -z-10 -left-1/3 top-0 w-[120%] h-[180%] rotate-[18deg] opacity-20 mantra-beam"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 40%, transparent 80%)",
          filter: "blur(6px)",
        }}
      />

      {/* glow orbs (gentle float) */}
      <div
        aria-hidden
        className="absolute -left-28 bottom-[-120px] w-[520px] h-[520px] rounded-full blur-3xl opacity-35 mantra-float"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(59,130,246,0.55), rgba(11,73,182,0.35) 55%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[-120px] top-[-80px] w-[420px] h-[420px] rounded-full blur-3xl opacity-25 mantra-float-delayed"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />

      {/* sparkles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {[
          { x: "22%", y: "18%" },
          { x: "34%", y: "42%" },
          { x: "68%", y: "30%" },
          { x: "76%", y: "58%" },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute block w-1.5 h-1.5 rounded-full bg-white/80 mantra-twinkle"
            style={{ left: s.x, top: s.y }}
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-28">
        {/* label + yellow underline */}
        <div className="text-white/80 text-xl md:text-2xl tracking-tight w-fit">
          {label}
          <div className="mt-1 h-[3px] w-8 rounded bg-[#F2C21A]" />
        </div>

        {/* quote */}
        <div className="mt-6 md:mt-8 flex items-start gap-4 mantra-fade-up">
          <div className="hidden sm:block text-white/60 text-[64px] leading-none select-none">“</div>
          <h1
            className="text-white font-extrabold tracking-tight leading-[1.06]"
            style={{
              fontFamily: "var(--font-inter), ui-sans-serif, system-ui, -apple-system",
              fontSize: "clamp(2.1rem, 4.6vw + 0.9rem, 5rem)",
            }}
          >
            {quote.split(/\r?\n/).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>

        {/* signature */}
        <div
          className="mt-10 md:mt-14 text-white/90 text-[26px] md:text-[34px] text-right mantra-slide-in"
          style={{ fontFamily: "var(--font-signature), cursive" }}
        >
          {author}
        </div>
      </div>

      {/* ---- lightweight global styles (no styled-jsx) ---- */}
      <style>
        {`
          @keyframes mh-rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .mantra-rotate-slow { animation: mh-rotate-slow 120s linear infinite; }

          @keyframes mh-beamMove { 0% { transform: translateX(-10%) rotate(18deg); }
            50% { transform: translateX(0%) rotate(18deg); } 100% { transform: translateX(-10%) rotate(18deg); } }
          .mantra-beam { animation: mh-beamMove 14s ease-in-out infinite; }

          @keyframes mh-softFade { 0%,100% { opacity: .55; } 50% { opacity: .8; } }
          .mantra-soft-fade { animation: mh-softFade 6s ease-in-out infinite; }

          @keyframes mh-float { 0% { transform: translateY(0); }
            50% { transform: translateY(-8px); } 100% { transform: translateY(0); } }
          .mantra-float { animation: mh-float 8s ease-in-out infinite; }
          .mantra-float-delayed { animation: mh-float 10s ease-in-out .8s infinite; }

          @keyframes mh-twinkle { 0%,100% { opacity: .2; transform: scale(.9); }
            50% { opacity: 1; transform: scale(1.1); } }
          .mantra-twinkle { animation: mh-twinkle 2.4s ease-in-out infinite; }

          @keyframes mh-fadeUp { 0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); } }
          .mantra-fade-up { animation: mh-fadeUp 700ms ease-out both; }

          @keyframes mh-slideIn { 0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); } }
          .mantra-slide-in { animation: mh-slideIn 800ms ease-out 200ms both; }
        `}
      </style>
    </section>
  );
}
