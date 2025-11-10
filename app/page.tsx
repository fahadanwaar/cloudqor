import Link from "next/link";

export const metadata = { title: "CloudQor — Cloud consulting, done right." };

// Brand colors
const BRAND_BLUE = "#0B49B6";   // logo blue
const BRAND_YELLOW = "#F2C21A"; // logo yellow

export default function HomePage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section
        className="
          relative -mt-[1px] overflow-hidden
          bg-[#061B2C] /* deep navy */
          text-white
        "
      >
        {/* --- Atmospheric layers (no tiny cubes) --- */}
        {/* Logo-blue blooms */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              `radial-gradient(900px 520px at 12% 0%, ${BRAND_BLUE}22 0%, transparent 60%),` + // faint logo-blue top-left
              `radial-gradient(780px 520px at 100% 20%, ${BRAND_BLUE}1F 0%, transparent 65%)`,
          }}
        />
        {/* Navy gradient sweep + vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,25,41,0) 0%, rgba(9,25,41,.35) 55%, rgba(9,25,41,.7) 100%), radial-gradient(1400px 700px at 50% 110%, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        {/* Angled bands (premium) */}
        <div
          aria-hidden
          className="absolute -right-[8%] top-[-12%] h-[160%] w-[75%] rotate-[28deg] rounded-[40px]"
          style={{ background: "linear-gradient(180deg, #0F314E 0%, #09243B 100%)", opacity: 0.70 }}
        />
        <div
          aria-hidden
          className="absolute right-[-22%] top-[28%] h-[160%] w-[85%] rotate-[32deg] rounded-[44px]"
          style={{ background: "linear-gradient(180deg, #0A2A44 0%, #082238 100%)", opacity: 0.90 }}
        />
        {/* Soft gold wedge (muted & classy) */}
        <div
          aria-hidden
          className="absolute right-[-18%] bottom-[-26%] h-[120%] w-[80%] rotate-[-22deg] rounded-[28px]"
          style={{ background: "linear-gradient(180deg, #9C9038 0%, #7E742F 100%)", opacity: 0.85 }}
        />

        {/* Content container */}
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-12">
          {/* Top padding roughly nav height */}
          <div className="pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-24">
            {/* Headline */}
            <h1
              className="
                max-w-[1000px]
                font-extrabold tracking-[-0.02em]
                leading-[0.95]
                text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px]
              "
            >
              Operate With
              <br />
              Software
              <br />
              Confidence.
            </h1>

            {/* Subtle logo-blue underline flourish */}
            <div
              className="mt-5 mb-8 h-[3px] w-24 rounded-full"
              style={{ background: BRAND_BLUE }}
            />

            {/* Sub-copy (premium, concise) */}
            <p className="max-w-4xl text-[18px] md:text-[20px] leading-[1.65] text-slate-200/95">
              We architect and deliver production platforms with senior engineering,
              cloud discipline, and measurable reliability—designed to scale, secured
              by default, and shipped on a cadence the business can plan around.
            </p>

            {/* CTA – slim version */}
            <div className="mt-10">
              <Link
                href="/marketing/contact"
                className="
                  group inline-flex items-center
                  rounded-full pl-5 pr-2 py-2
                  text-slate-900 font-semibold
                  shadow-[0_10px_24px_-12px_rgba(0,0,0,.45)]
                  transition-transform duration-200
                  hover:-translate-y-[1px]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                "
                style={{ backgroundColor: BRAND_YELLOW }}
              >
                <span className="text-[15px] leading-none">Let’s Start Building</span>
                <span
                  className="
                    ml-3 grid h-9 w-9 place-items-center rounded-full bg-white
                    transition-transform group-hover:translate-x-[1px]
                    border
                  "
                  style={{ borderColor: BRAND_BLUE, boxShadow: "0 5px 12px -8px rgba(0,0,0,.35)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      fill="none"
                      stroke={BRAND_BLUE}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with additional sections below… */}
    </main>
  );
}