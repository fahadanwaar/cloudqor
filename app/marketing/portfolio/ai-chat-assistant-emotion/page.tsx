// // app/marketing/portfolio/ai-chat-assistant-emotion/page.tsx
// import Image from "next/image";

// export const metadata = {
//   title: "AI Chat Assistant — Emotionally Aware | CloudQor",
//   description:
//     "Emotion-aware chatbot: Flask + Python backend, React/Next.js frontend, human-like conversations with sentiment-driven responses.",
// };

// const GALLERY = [
//   "/images/projects/ai-emotion-chat/ui-1.jpg",
//   "/images/projects/ai-emotion-chat/ui-2.jpg",
//   "/images/projects/ai-emotion-chat/ui-3.jpg",
// ];

// export default function Page() {
//   return (
//     <section className="max-w-6xl mx-auto">
//       {/* Header */}
//       <header className="mb-8">
//         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//           AI Chat Assistant — Emotionally Aware
//         </h1>
//         <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
//           A next-gen chatbot that senses sentiment and adapts its tone—built with a
//           Flask (Python) API and a React/Next.js client for fast, modern UX.
//         </p>
//       </header>

//       {/* Two-column layout */}
//       <div className="grid md:grid-cols-12 gap-8">
//         {/* LEFT: narrative */}
//         <div className="md:col-span-7 space-y-6">
//           <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[17px]">
//             We designed an intelligent assistant that goes beyond factual replies.
//             The model infers user sentiment and blends it into responses—supportive
//             when users sound frustrated, upbeat when they celebrate wins, and neutral
//             when clarity matters. The result is a conversational experience that feels
//             more human without sacrificing accuracy.
//           </p>

//           <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
//             <h2 className="text-xl font-semibold">Highlights</h2>
//             <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
//               <li>Emotion inference pipeline layered on top of LLM responses.</li>
//               <li>Flask API with typed endpoints, env-based secrets, and rate limiting.</li>
//               <li>React/Next.js UI with streaming replies and typing indicators.</li>
//               <li>Modular providers — swap models without core refactors.</li>
//             </ul>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {["Python", "Flask", "React", "Next.js", "Tailwind CSS", "OpenAI API"].map(t => (
//               <span
//                 key={t}
//                 className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: consistent image stack */}
//         <aside className="md:col-span-5 md:sticky md:top-24">
//           {/* Hero/cover (big) */}
//           <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm mb-4">
//             <Image
//               src="/images/projects/ai-emotion-chat/cover.jpg"
//               alt="AI Emotion Chat — cover"
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 40vw"
//               priority
//             />
//           </div>

//           {/* Three equal cards */}
//           <div className="grid grid-cols-3 gap-3">
//             {GALLERY.map((src) => (
//               <div key={src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
//                 <Image
//                   src={src}
//                   alt="AI Emotion Chat — UI"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 13vw"
//                 />
//               </div>
//             ))}
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export const metadata = {
  title: "AI Chat Assistant — Emotionally Aware | CloudQor",
  description:
    "Emotion-aware chatbot powered by Flask + Python backend and a React/Next.js client. Sentiment-adaptive responses for human-like conversations.",
};

const GALLERY = [
  "/images/projects/ai-emotion-chat/ui-1.jpg",
  "/images/projects/ai-emotion-chat/ui-2.jpg",
  "/images/projects/ai-emotion-chat/ui-3.jpg",
];

export default function Page() {
  return (
    <section className="relative max-w-6xl mx-auto">
      {/* subtle bg accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-fuchsia-400 via-violet-400 to-sky-400" />
        <div className="absolute -bottom-20 -right-24 h-64 w-64 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-400" />
      </div>

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/60 dark:bg-slate-900/60 backdrop-blur border-slate-200 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live demo ready
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            AI Chat Assistant — Emotionally Aware
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
          A next-gen assistant that senses sentiment and adapts its tone —
          engineered with a <strong>Flask (Python)</strong> API and a
          <strong> React/Next.js</strong> client for fast, modern UX.
        </p>

        {/* CTAs + KPIs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 text-white bg-gradient-to-tr from-violet-600 to-fuchsia-600 hover:opacity-95 shadow-lg"
          >
            Discuss this project
          </a>
          <a
            href="#highlights"
            className="rounded-xl px-5 py-3 border border-slate-300/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View highlights
          </a>

          <div className="ml-auto flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold">~120ms</div>
              <div className="text-slate-500">API P95 latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold">3x</div>
              <div className="text-slate-500">Higher session time</div>
            </div>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-12 gap-10">
        {/* LEFT: Story */}
        <div className="md:col-span-7 space-y-6">
          <p className="text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            We designed an assistant that goes beyond factual replies. It detects
            the user’s emotional state and blends it into responses—supportive when
            someone sounds frustrated, upbeat when they celebrate wins, and neutral
            when clarity matters. The result is a conversational experience that
            feels <em>considerate</em> and human without sacrificing accuracy.
          </p>

          <div
            id="highlights"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Emotion inference pipeline layered on top of LLM responses.</li>
              <li>Flask API with typed endpoints, env-based secrets, and rate limiting.</li>
              <li>React/Next.js UI with streaming replies + typing indicators.</li>
              <li>Provider adapters — swap models without core refactors.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-semibold mb-3">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "React", "Next.js", "Tailwind CSS", "OpenAI API"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* mini horizontal carousel (no deps) */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
            <div className="mb-2 text-sm text-slate-500">UI preview</div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {[ "/images/projects/ai-emotion-chat/cover.jpg", ...GALLERY ].map((src) => (
                <div key={src} className="relative snap-start shrink-0 w-[320px] h-[220px] rounded-xl overflow-hidden shadow-sm">
                  <Image src={src} alt="AI Emotion Chat UI" fill className="object-cover" sizes="320px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: premium image stack */}
        <aside className="md:col-span-5 md:sticky md:top-24">
          {/* gradient frame card */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 shadow-xl mb-4">
            <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-50 dark:bg-slate-800">
              <Image
                src="/images/projects/ai-emotion-chat/cover.jpg"
                alt="AI Emotion Chat — cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {GALLERY.map((src) => (
              <div key={src} className="p-[2px] rounded-xl bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow">
                <div className="relative aspect-square rounded-[10px] overflow-hidden">
                  <Image src={src} alt="AI Emotion Chat — UI" fill className="object-cover" sizes="(max-width: 768px) 100vw, 13vw" />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
