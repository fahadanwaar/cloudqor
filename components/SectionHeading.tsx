import React from "react";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  accentColor?: string; // e.g. "#0B49B6"
  accentBarColor?: string; // e.g. "#F2C21A"
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
  accentColor = "#0B49B6",
  accentBarColor = "#F2C21A",
}: Props) {
  return (
    <div className={`relative text-center ${className}`}>
      {/* soft radial glow behind heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
      >
        <div className="h-40 w-[560px] rounded-full blur-3xl opacity-60"
             style={{ background: `${accentColor}20` }} />
      </div>

      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1
                        text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accentBarColor }} />
          {eyebrow}
        </div>
      )}

      <h2
        className="mt-2 font-extrabold tracking-tight leading-[1.05]
                   text-transparent bg-clip-text drop-shadow-sm
                   text-balance"
        style={{
          fontSize: "clamp(32px, 4.8vw, 52px)",
          backgroundImage: `linear-gradient(90deg, ${accentColor}, #1677ff)`,
        }}
      >
        {title}
      </h2>

      {/* thin accent bar */}
      <div className="mt-3 flex justify-center">
        <span className="h-1 w-16 rounded-full" style={{ background: accentBarColor }} />
      </div>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
