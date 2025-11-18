// import Image from "next/image";
// import Link from "next/link";

// export const metadata = {
//   title: "CASH Agility — Lean-Agile Consulting Website | CloudQor",
//   description:
//     "Modern French-language marketing site for CASH Agility, showcasing lean-agile consulting services, enterprise coaching, and lead generation.",
// };

// const BRAND_BLUE = "#0B49B6";
// const BRAND_YELLOW = "#F2C21A";

// export default function CashAgilityProjectPage() {
//   return (
//     <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16 lg:py-20 space-y-12 md:space-y-16">
//       {/* Breadcrumb */}
//       <nav className="text-sm text-slate-500 flex items-center gap-2">
//         <Link href="/marketing/portfolio" className="hover:text-slate-700">
//           Portfolio
//         </Link>
//         <span>/</span>
//         <span className="text-slate-700 font-medium">CASH Agility</span>
//       </nav>

//       {/* HERO / header card */}
//       <div
//         className="
//           relative overflow-hidden
//           rounded-[24px] md:rounded-[30px]
//           border border-slate-200/70 dark:border-slate-800
//           bg-white dark:bg-slate-950
//           px-6 md:px-10 lg:px-12 py-10 md:py-14
//           shadow-[0_14px_48px_-20px_rgba(2,6,23,.25)]
//         "
//       >
//         {/* subtle bg blobs */}
//         <div className="pointer-events-none absolute -top-32 -left-40 h-[360px] w-[360px] rounded-full bg-[#E8F1FF] blur-2xl opacity-80" />
//         <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#ECF8FF] blur-2xl opacity-80" />
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.18]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
//             backgroundSize: "24px 24px",
//           }}
//         />

//         <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
//           {/* LEFT: text */}
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow,#F2C21A)]" />
//               Case Study
//             </div>

//             <h1 className="mt-4 text-[30px] sm:text-[38px] md:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] text-slate-900 dark:text-white">
//               CASH Agility — Lean-Agile Consulting Website
//             </h1>

//             <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
//               Boost your business growth with agile and flexible solutions. CASH Agility is a
//               French-language marketing site for an Agile consultancy that helps enterprises
//               modernize through lean-agile transformation, AI-assisted practices, and
//               human-centric coaching.
//             </p>

//             {/* meta chips */}
//             <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
//               {["Marketing Site", "Consulting", "B2B", "French-language"].map((tag) => (
//                 <span
//                   key={tag}
//                   className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm
//                              dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* primary CTA */}
//             <div className="mt-6">
//               <Link
//                 href="https://www.cashagility.com/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group inline-flex items-center rounded-full pl-5 pr-2 py-2 text-white font-semibold shadow-sm"
//                 style={{ backgroundColor: BRAND_BLUE }}
//               >
//                 <span className="text-[15px]">View Live Site</span>
//                 <span
//                   className="ml-3 grid h-8 w-8 place-items-center rounded-full transition-transform group-hover:translate-x-0.5"
//                   style={{ backgroundColor: BRAND_YELLOW, color: BRAND_BLUE }}
//                 >
//                   <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden>
//                     <path
//                       d="M5 12h14M13 5l7 7-7 7"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT: cover image */}
//           <div className="relative h-[220px] md:h-[260px] lg:h-[280px]">
//             <div className="absolute inset-0 rounded-[24px] border border-slate-200/70 bg-slate-900/3 overflow-hidden shadow-lg dark:border-slate-800">
//               <Image
//                 src="/images/projects/cash-agility/cover.jpg" // make sure this exists
//                 alt="CASH Agility website preview"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
//         {/* LEFT column */}
//         <div className="space-y-8">
//           <section>
//             <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
//               Project Overview
//             </h2>
//             <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
//               The goal was to give CASH Agility a modern, credible online presence that speaks
//               directly to French-speaking executives and public-sector stakeholders. The site
//               explains who they are, what they do, and why they’re different—while keeping the
//               content structure simple enough to maintain and extend.
//             </p>
//           </section>

//           <section>
//             <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
//               What it does
//             </h3>
//             <ul className="mt-3 space-y-3 text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
//               <li>
//                 <strong className="font-semibold text-slate-900 dark:text-slate-100">
//                   Tells the story clearly:
//                 </strong>{" "}
//                 Hero and service sections explain CASH Agility’s mission, services, and value
//                 proposition in clear, French-language copy.
//               </li>
//               <li>
//                 <strong className="font-semibold text-slate-900 dark:text-slate-100">
//                   Showcases services:
//                 </strong>{" "}
//                 Dedicated bands for Lean-Agile transformation, government services, product
//                 strategy, engineering excellence, ALM/PPM implementation, Agile recruitment, and
//                 organizational change.
//               </li>
//               <li>
//                 <strong className="font-semibold text-slate-900 dark:text-slate-100">
//                   Builds credibility:
//                 </strong>{" "}
//                 Highlights experience, training, and thought-leadership to reassure risk-averse
//                 buyers evaluating consulting partners.
//               </li>
//               <li>
//                 <strong className="font-semibold text-slate-900 dark:text-slate-100">
//                   Drives leads:
//                 </strong>{" "}
//                 Clear “Contactez-nous” calls-to-action guide visitors toward booking discovery
//                 calls and workshops.
//               </li>
//               <li>
//                 <strong className="font-semibold text-slate-900 dark:text-slate-100">
//                   Designed to scale:
//                 </strong>{" "}
//                 Reusable content blocks and card layouts make it easy to add new services or case
//                 studies without redesigning the whole site.
//               </li>
//             </ul>
//           </section>
//         </div>

//         {/* RIGHT column: project meta */}
//         <aside className="space-y-6">
//           <section className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:bg-slate-950/70 dark:border-slate-800">
//             <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
//               Project Details
//             </h3>
//             <dl className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
//               <div className="flex justify-between gap-4">
//                 <dt className="text-slate-500">Client</dt>
//                 <dd className="font-medium text-slate-800 dark:text-slate-100">
//                   CASH Agility
//                 </dd>
//               </div>
//               <div className="flex justify-between gap-4">
//                 <dt className="text-slate-500">Type</dt>
//                 <dd className="font-medium text-slate-800 dark:text-slate-100">
//                   Consulting Website
//                 </dd>
//               </div>
//               <div className="flex justify-between gap-4">
//                 <dt className="text-slate-500">Role</dt>
//                 <dd className="font-medium text-slate-800 dark:text-slate-100">
//                   Design & Development
//                 </dd>
//               </div>
//               <div className="flex justify-between gap-4">
//                 <dt className="text-slate-500">Status</dt>
//                 <dd className="font-medium text-emerald-600 dark:text-emerald-400">
//                   Live
//                 </dd>
//               </div>
//             </dl>
//           </section>

//           <section className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:bg-slate-950/70 dark:border-slate-800">
//             <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
//               Stack
//             </h3>
//             <ul className="mt-4 flex flex-wrap gap-2 text-xs">
//               {["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"].map(
//                 (tech) => (
//                   <li
//                     key={tech}
//                     className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-900 dark:text-slate-200"
//                   >
//                     {tech}
//                   </li>
//                 )
//               )}
//             </ul>
//           </section>
//         </aside>
//       </div>
//     </section>
//   );
// }
// app/marketing/portfolio/cash-agility/page.tsx
import Image from "next/image";

export const metadata = {
  title: "CASH Agility — Lean-Agile Consulting Website | CloudQor",
  description:
    "Modern French-language marketing site for CASH Agility, showcasing lean-agile consulting services, enterprise coaching, and lead generation.",
};

const COVER = "/images/projects/cash-agility/cover.jpg";
const GALLERY = [
  "/images/projects/cash-agility/ui-1.jpg",
  "/images/projects/cash-agility/ui-2.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-sky-400 via-blue-500 to-emerald-500" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-amber-400 via-yellow-500 to-sky-500" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Lean-Agile consulting presence
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            CASH Agility — Lean-Agile Consulting Website
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          French-language marketing site that helps CASH Agility clearly explain its
          Lean-Agile transformation services, enterprise coaching, and government-grade
          delivery expertise—while driving visitors toward “Contactez-nous” calls.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 text-white shadow-lg bg-gradient-to-tr from-blue-600 via-sky-600 to-emerald-500 hover:opacity-95"
          >
            View highlights
          </a>
          <a
            href="https://www.cashagility.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View live site
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">25+ yrs</div>
              <div className="text-slate-500">Agile experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold">35k+</div>
              <div className="text-slate-500">People trained</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: narrative */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            CASH Agility needed a modern site that speaks directly to French-speaking
            executives and public-sector leaders. The experience focuses on a strong hero
            message, a clear explanation of services, and simple navigation, so visitors
            can quickly understand who they are and why they’re different—and get to a
            contact form without friction.
          </p>

          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>
                Story-driven hero section in French that explains the value of agile and
                flexible solutions with a clear primary CTA.
              </li>
              <li>
                Service grid for Lean-Agile transformation, government services, product
                strategy, and training—each with concise copy and iconography.
              </li>
              <li>
                Layout, typography, and color system inspired by modern SaaS brands but
                tuned to CASH Agility’s identity (navy, yellow, and off-white).
              </li>
              <li>
                Responsive, component-based design so new services, case studies, or
                languages can be added without redoing the layout.
              </li>
              <li>
                Built for performance and SEO with clean semantic HTML, accessible
                components, and fast loading on mobile.
              </li>
            </ul>
          </div>

          {/* mobile-only preview */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:hidden">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY.map((src) => (
                <div
                  key={src}
                  className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt="CASH Agility UI"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: image stack */}
        <aside className="md:col-span-5 md:sticky md:top-32">
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-600 to-emerald-500 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src={COVER}
                alt="CASH Agility — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src) => (
              <div
                key={src}
                className="p-[2px] rounded-xl bg-gradient-to-tr from-amber-50 to-sky-50 dark:from-slate-800 dark:to-slate-900 shadow"
              >
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={src}
                    alt="CASH Agility UI"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
