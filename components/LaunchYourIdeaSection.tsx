// components/LaunchYourIdeaSection.tsx
"use client";

import Link from "next/link";

export default function LaunchYourIdeaSection() {
  return (
    <section className="relative overflow-hidden bg-[#022D53] text-white">
      {/* RIGHT SIDE RINGS */}
      <svg
        className="pointer-events-none absolute inset-y-0 right-[-15%] w-[70%] opacity-40"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ringsGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#304f73" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0b355c" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="300" r="260" fill="none" stroke="url(#ringsGradient)" strokeWidth="3" />
        <circle cx="300" cy="300" r="220" fill="none" stroke="url(#ringsGradient)" strokeWidth="3" />
        <circle cx="300" cy="300" r="180" fill="none" stroke="url(#ringsGradient)" strokeWidth="3" />
        <circle cx="300" cy="300" r="140" fill="none" stroke="url(#ringsGradient)" strokeWidth="3" />
        <circle cx="300" cy="300" r="100" fill="none" stroke="url(#ringsGradient)" strokeWidth="3" />
      </svg>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20 lg:px-12">
        {/* LEFT TEXT */}
        <div className="max-w-3xl">
          <p className="text-[30px] leading-[1.35] font-medium md:text-[40px] lg:text-[44px]">
            We go beyond traditional problem-
            solving techniques and old-fashioned
            promises to assist visionaries like you to
            transform on a massive scale
          </p>

          <p className="mt-8 text-[28px] leading-tight font-extrabold md:text-[36px]">
            —{" "}
            <span className="font-extrabold">
              With Logic, Innovation, And Emotion.
            </span>
          </p>
        </div>

        {/* RIGHT 3D CIRCULAR CTA */}
        <div className="flex justify-center md:justify-end">
          <Link
            href="/contact"
            aria-label="Launch your idea - go to contact page"
            className="group relative inline-flex items-center justify-center"
          >
            {/* OUTER 3D DISC */}
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-[#0e3a67] via-[#022D53] to-[#010f1f] shadow-[0_26px_60px_rgba(0,0,0,0.65)]">
              <div className="absolute inset-3 rounded-full border border-white/10" />

              {/* INNER 3D WHITE PLATE */}
              <div className="relative flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-br from-white via-[#f4f7ff] to-[#dbe3f4] shadow-[inset_0_8px_18px_rgba(255,255,255,0.9),inset_0_-10px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:translate-y-0.5">
                <div className="absolute inset-8 rounded-full border border-[#c4cedf]" />

                {/* SVG TEXT + ARROW */}
                <svg
                  viewBox="0 0 200 200"
                  className="h-52 w-52 transition-colors duration-300"
                >
                  <defs>
                    <path
                      id="launchCirclePath"
                      d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                    />

                    {/* subtle arrow shadow */}
                    <filter id="arrowShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="1.6"
                        floodColor="#000000"
                        floodOpacity="0.25"
                      />
                    </filter>
                  </defs>

                  {/* circular text 
                      default: blue, hover: yellow */}
                  <text
                    fontSize="10"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif"
                    letterSpacing="1.3"
                    className="fill-[#3E5F9C] transition-colors duration-300 group-hover:fill-[#FFC300]"
                  >
                    <textPath
                      href="#launchCirclePath"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      Launch Your Idea! · Launch Your Idea! · Launch Your Idea! ·
                    </textPath>
                  </text>

                  {/* STRAIGHT, THINNER YELLOW ARROW */}
                  <g
                    transform="translate(100,100)"
                    filter="url(#arrowShadow)"
                    fill="none"
                    stroke="#FFC300"
                    strokeWidth="4.5"  // thinner stroke
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* straight shaft */}
                    <line x1="-24" y1="0" x2="16" y2="0" />

                    {/* arrow head */}
                    <polyline points="8,-10 16,0 8,10" />
                  </g>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
