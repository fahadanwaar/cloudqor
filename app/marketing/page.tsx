import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl/tight md:text-5xl font-bold">CloudQor
          <span className="block text-xl md:text-2xl font-medium text-slate-500">Cloud consulting, done right.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
          We design and deliver scalable cloud platforms, observability, and delightful dashboards.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/dashboard" className="btn btn-primary">View Dashboard</Link>
          <Link href="/portfolio" className="btn">Portfolio</Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
        <Image src="/cloudqor-icon.png" alt="CloudQor" fill className="object-contain p-10 bg-brand/5" />
      </div>
    </section>
  );
}
// // app/page.tsx
// import Image from "next/image";
// import Link from "next/link";
// // import WhatWeDoStrip from "@/components/WhatWeDoStrip";

// const NAVY = "#072643";
// const OLIVE = "#817A35";
// const BRAND_YELLOW = "#F2C21A";

// export default function Home() {
//   return (
//     <>
//       {/* ===== HERO ===== */}
//       <section className="relative overflow-hidden">
//         {/* background layers */}
//         <div className="pointer-events-none absolute inset-0 -z-10">
//           {/* base navy + soft gradients */}
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundColor: NAVY,
//               backgroundImage:
//                 "radial-gradient(1200px 600px at 0% 0%, rgba(15,23,42,0.75), transparent 55%), radial-gradient(1200px 600px at 50% 0%, rgba(15,23,42,0.85), transparent 60%)",
//             }}
//           />
//           {/* big diagonal olive panel (right side) */}
//           <div
//             className="absolute -right-[32%] -top-10 h-[150%] w-[80%] rotate-[-12deg]"
//             style={{
//               background: `linear-gradient(to bottom, ${OLIVE}, #6f692f)`,
//             }}
//           />
//         </div>

//         <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-14 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//           {/* LEFT: text */}
//           <div className="lg:col-span-7">
//             <div className="text-slate-300 font-semibold tracking-wide">
//               Production Platforms &amp; Cloud Engineering
//             </div>

//             <h1 className="mt-3 text-white text-[30px] sm:text-[44px] md:text-[58px] lg:text-[66px] font-extrabold leading-[1.05] tracking-[-0.01em]">
//               <span className="block">Operate With</span>
//               <span className="block">Software</span>
//               <span className="block">Confidence.</span>
//             </h1>

//             <p className="mt-5 text-slate-200/80 text-[15px] md:text-[17px] max-w-2xl leading-[1.55]">
//               We architect and deliver production platforms with senior
//               engineering, cloud discipline, and measurable reliability—designed
//               to scale, secured by default, and shipped on a cadence the business
//               can plan around.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/marketing/contact"
//                 className="inline-flex items-center gap-3 rounded-full bg-[color:var(--brand-yellow,#F2C21A)] text-slate-900 font-semibold px-6 py-3 text-base shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-shadow"
//               >
//                 Let’s Start Building
//                 <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-white/90">
//                   →
//                 </span>
//               </Link>

//               <Link
//                 href="/marketing/services"
//                 className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white/90 px-5 py-3 text-sm backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
//               >
//                 Explore Our Services
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT: visual */}
//           <div className="lg:col-span-5 min-h-[260px]">
//             <div className="relative h-[260px] md:h-[320px] lg:h-[380px]">
//               {/* floating card */}
//               <div className="absolute right-2 md:right-6 top-2 md:top-6 w-[260px] md:w-[320px] lg:w-[360px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
//                 <div className="p-5 md:p-6">
//                   <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
//                     Delivery Focus
//                   </div>
//                   <div className="mt-2 text-white font-bold text-xl leading-tight">
//                     Production platforms that stay healthy
//                   </div>
//                   <div className="mt-3 text-white/70 text-sm">
//                     Typed APIs • Observability • SLOs • Rollback playbooks •
//                     Cost visibility
//                   </div>
//                 </div>
//                 <div className="h-1.5 bg-white/10">
//                   <div
//                     className="h-full w-3/4"
//                     style={{ backgroundColor: BRAND_YELLOW }}
//                   />
//                 </div>
//               </div>

//               {/* logo tile */}
//               <div className="absolute -left-2 bottom-4 w-[150px] h-[150px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
//                 <div className="relative h-16 w-16 rounded-2xl bg-slate-900/5 overflow-hidden">
//                   <Image
//                     src="/cloudqor-icon.png"
//                     alt="CloudQor"
//                     fill
//                     className="object-contain p-2"
//                   />
//                 </div>
//               </div>

//               {/* glow orb */}
//               <div
//                 className="absolute -right-10 bottom-0 w-[260px] h-[260px] rounded-full blur-3xl opacity-40"
//                 style={{
//                   background:
//                     "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.65), rgba(11,73,182,0.45) 50%, transparent 70%)",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       ===== WHAT CAN WE DO FOR YOU STRIP =====
//       <WhatWeDoStrip />
//     </>
//   );
// }
