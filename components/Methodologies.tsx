// components/Methodologies.tsx
"use client";

import Image from "next/image";

/**
 * Put icons in:
 *   /public/icon/agile.png
 *   /public/icon/scrum.png
 *
 * This version:
 * - Icon is clipped to a perfect circle (no visible square).
 * - Circle a bit smaller, icon fills nicely.
 * - Row content (icon+title and paragraph) sits between the same two lines.
 */

const BRAND_BLUE = "#0b5fb6";

const TOKENS = {
  maxW: 1200,          // outer section cap
  contentW: 1040,      // width used by the row + dividers (inside the lines)
  iconCircle: 72,      // circle diameter (smaller so it feels tighter)
  gap: 14,             // space between circle and title
  title: "text-[32px] leading-[40px] font-semibold text-slate-800",
  para: "text-[18px] leading-[30px] text-slate-600",
};

export default function Methodologies() {
  return (
    <section className="bg-[#F7FAFC]">
      <div className="mx-auto px-6 md:px-10 py-14 md:py-20" style={{ maxWidth: TOKENS.maxW }}>
        {/* Header */}
        <header className="text-center">
          <h2 className="font-extrabold tracking-[-0.01em] text-[#0b5fb6] text-[44px] leading-[52px] md:text-[48px] md:leading-[56px]">
            Methodologies We Support
          </h2>
          <p className="mx-auto mt-5 max-w-[980px] text-[18px] leading-[28px] text-slate-600">
            Over 300 software projects are enjoying sky-high business results with our
            genius usage of modern software development practices. We value your investments.
          </p>
        </header>

        {/* Rows */}
        <div className="mt-14 space-y-12">
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

/* ---------------------- Divider (kept same width as rows) ---------------------- */
function Divider() {
  return (
    <div className="mx-auto w-full" style={{ maxWidth: TOKENS.contentW }}>
      <div className="h-px w-full bg-slate-200" />
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

/* ---------------------- CircleIcon (clipped, no square edges) ---------------------- */
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
      {/* Image fills the circle; any square background gets clipped away */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover" // cover ensures the circle is filled edge-to-edge
        unoptimized
      />
    </div>
  );
}
