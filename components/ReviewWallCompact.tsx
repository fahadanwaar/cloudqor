// components/ReviewWallCompact.tsx
import Image from "next/image";

type ReviewItem = {
  src: string;
  alt: string;
  rating?: number;
  date?: string;
  source?: string;
  blurb?: string;
};

const REVIEWS: ReviewItem[] = [
  {
    src: "/images/reviews/upwork-1.jpg",
    alt: "Client review 1",
    rating: 5,
    date: "Jun 13, 2025",
    source: "Upwork",
    blurb: "Genuine, fast iterations; will continue working.",
  },
  {
    src: "/images/reviews/upwork-2.jpg",
    alt: "Client review 2",
    rating: 5,
    source: "Upwork",
    blurb: "Great client. Love to work with him.",
  },
  {
    src: "/images/reviews/upwork-3.jpg",
    alt: "Client review 3",
    rating: 5,
    source: "Upwork",
    blurb: "Python expert, remarkable API improvements.",
  },
  {
    src: "/images/reviews/upwork-4.jpg",
    alt: "Client review 4",
    rating: 5,
    source: "Upwork",
    blurb: "Very proactive & solution-oriented.",
  },
];

export default function ReviewWallCompact() {
  return (
    <section id="reviews" className="mt-24">
      {/* subtle section divider to separate from projects above */}
      <div className="relative mb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-slate-700/60" />
      </div>

      {/* badge + dominant headline */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="mx-auto mb-3 h-10 w-10 grid place-items-center rounded-full bg-slate-100 dark:bg-slate-800">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-slate-500">
            <path
              fill="currentColor"
              d="M7.5 11c1.38 0 2.5 1.12 2.5 2.5S8.88 16 7.5 16 5 14.88 5 13.5V13c0-3.31 2.69-6 6-6v2c-2.21 0-4 1.79-4 4zm9 0c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16 14 14.88 14 13.5V13c0-3.31 2.69-6 6-6v2c-2.21 0-4 1.79-4 4z"
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
            Proof
          </span>{" "}
          <span className="text-slate-900 dark:text-white/90">over</span>{" "}
          <span className="underline underline-offset-8 decoration-4 decoration-indigo-500/60">
            promises
          </span>
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Real words from recent projects—no edits, no fluff.
        </p>
      </div>

      {/* grid: 1 col on mobile, 2 col on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((r) => (
          <figure
            key={r.src}
            className="
              group relative rounded-2xl p-[1.5px]
              bg-gradient-to-br from-slate-200/90 via-slate-100 to-white
              dark:from-slate-800/70 dark:via-slate-900/70 dark:to-slate-950
              shadow-sm transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            <div className="rounded-[18px] overflow-hidden bg-white dark:bg-slate-900 ring-1 ring-slate-200/80 dark:ring-slate-800/80 group-hover:ring-indigo-400/40">
              {/* compact screenshot — no crop */}
              <div className="relative w-full h-32 md:h-36 lg:h-40 bg-slate-900">
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* compact meta */}
              <figcaption className="px-4 py-3 text-[12px] text-slate-600 dark:text-slate-400 flex items-center gap-2">
                {typeof r.rating === "number" && <span>★★★★★</span>}
                {r.rating && <span>{r.rating.toFixed(1)}</span>}
                {r.date && <span className="text-slate-400">· {r.date}</span>}
                <span className="ml-auto px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  {r.source ?? "Verified"}
                </span>
              </figcaption>

              {r.blurb && (
                <div className="px-4 pb-4 text-sm text-slate-700 dark:text-slate-300">
                  “{r.blurb}”
                </div>
              )}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
