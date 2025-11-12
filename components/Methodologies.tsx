// components/Methodologies.tsx
"use client";

import Image from "next/image";

/**
 * Icons live in:
 *   /public/icon/agile.png
 *   /public/icon/scrum.png
 *
 * Changes requested:
 * - Match Engagement section sizing only (container + fonts + spacing)
 * - Do NOT change icons or their styling
 */

const BRAND_BLUE = "#0b5fb6";

const TOKENS = {
  // === match Engagement ===
  maxW: 1040,          // outer container cap
  contentW: 940,       // row + divider width
  // ========================
  iconCircle: 72,      // keep your circle size
  gap: 20,             // space between circle and title (comfortable)
  title: "text-[18px] md:text-[22px] font-semibold text-slate-900",
  para: "text-[14px] md:text-[16px] leading-[1.6] text-slate-600",
};

export default function Methodologies() {
  return (
    <section className="bg-[#F7FAFC]">
      <div
        className="mx-auto px-4 md:px-6 py-12 md:py-16"
        style={{ maxWidth: TOKENS.maxW }}
      >
        {/* Header (kept; just font sizes aligned with Engagement) */}
        <header className="text-center">
          <h2 className="font-extrabold tracking-[-0.01em] text-[#0b5fb6] text-[28px] sm:text-[34px] md:text-[40px]">
            Methodologies We Support
          </h2>
          <p className="mx-auto mt-3 max-w-[880px] text-[14px] md:text-[16px] leading-[1.6] text-slate-600">
            Over 300 software projects are enjoying sky-high business results with our
            genius usage of modern software development practices. We value your investments.
          </p>
        </header>

        {/* Rows (width/spacing aligned) */}
        <div className="mt-10 space-y-10">
          <Row title="Agile" iconSrc="/icon/agile.png">
            We employ an iterative and incremental SDLC, breaking large projects into
            manageable series of steps to achieve control and adaptability, delivering
            top-quality and error-free software.
          </Row>

          <Divider />

          <Row title="Scrum" iconSrc="/icon/scrum.png">
            We rely on the self-organizing framework, Scrum, to promote transparency and
            collaboration. It simplifies project delivery allowing our teams to self-manage
            and adapt to changing requirements.
          </Row>

          <Divider />
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Divider (same width as rows) ---------------------- */
function Divider() {
  return (
    <div className="mx-auto w-full" style={{ maxWidth: TOKENS.contentW }}>
      <div className="h-px w-full bg-slate-200/80" />
    </div>
  );
}

/* ---------------------- Row (icon + title on one line) ---------------------- */
function Row({
  title,
  iconSrc,
  children,
}: {
  title: string;
  iconSrc: string;
  children: React.ReactNode;
}) {
  // Paragraph indent so it aligns under the title (not under the icon)
  const indent = TOKENS.iconCircle + TOKENS.gap;

  return (
    <div className="mx-auto w-full" style={{ maxWidth: TOKENS.contentW }}>
      {/* icon + title */}
      <div className="flex items-center" style={{ columnGap: TOKENS.gap }}>
        <CircleIcon src={iconSrc} alt={title} />
        <h3 className={TOKENS.title}>{title}</h3>
      </div>

      {/* paragraph */}
      <div className="mt-2" style={{ paddingLeft: indent }}>
        <p className={TOKENS.para}>{children}</p>
      </div>
    </div>
  );
}

/* ---------------------- CircleIcon (unchanged styling, just uses TOKENS sizes) ---------------------- */
function CircleIcon({ src, alt }: { src: string; alt: string }) {
  const size = TOKENS.iconCircle;
  return (
    <div
      className="
        relative shrink-0 rounded-full overflow-hidden bg-white
        shadow-[0_6px_20px_rgba(15,23,42,0.07)] border-2
      "
      style={{ width: size, height: size, borderColor: BRAND_BLUE }}
    >
      {/* keep your original rendering approach */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
