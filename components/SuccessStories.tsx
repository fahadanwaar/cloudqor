// components/SuccessStories.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

const PAGE_SIZE = 2; // 2 cards per slide

export default function SuccessStories() {
  const caseStudies = useMemo<Project[]>(
    () => projects.filter((p) => p.status !== "archived"),
    []
  );

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(caseStudies.length / PAGE_SIZE));

  const start = page * PAGE_SIZE;
  const visible = caseStudies.slice(start, start + PAGE_SIZE);

  const go = (dir: "prev" | "next") => {
    setPage((prev) => {
      if (dir === "prev") return prev <= 0 ? 0 : prev - 1;
      return prev >= totalPages - 1 ? totalPages - 1 : prev + 1;
    });
  };

  return (
    <section className="bg-[#F5F7FB] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading + subtitle + arrows */}
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[30px] md:text-[38px] font-extrabold text-[#0050B3]">
              Our Success Stories
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base text-slate-600">
              Innovators from across the industry have trusted Qbatch to build
              high-impact products.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto text-[#0050B3]">
            <button
              type="button"
              onClick={() => go("prev")}
              disabled={page === 0}
              aria-label="Previous success stories"
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg leading-none transition-all ${
                page === 0
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-slate-300 bg-white hover:border-[#0050B3] hover:text-[#0050B3] shadow-sm"
              }`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go("next")}
              disabled={page === totalPages - 1}
              aria-label="Next success stories"
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg leading-none transition-all ${
                page === totalPages - 1
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-slate-300 bg-white hover:border-[#0050B3] hover:text-[#0050B3] shadow-sm"
              }`}
            >
              →
            </button>
          </div>
        </div>

        {/* Cards row – 2 per slide on desktop, 1 on mobile */}
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>

        {/* Explore More CTA – CENTERED */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/marketing/portfolio" // yahan apna portfolio listing route
            className="group inline-flex items-center gap-4 text-lg md:text-xl font-semibold text-[#0050B3]"
          >
            <span className="relative">
              Explore More
              {/* yellow underline on hover */}
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#FFC300] transition-all duration-300 group-hover:w-full" />
            </span>

            {/* circle with arrow */}
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0E7FF] bg-white transition-all duration-300 group-hover:bg-[#FFC300] group-hover:border-[#FFC300]">
              <span className="text-base md:text-lg">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* SINGLE CARD – wide, Qbatch-style */
function CaseStudyCard({ project }: { project: Project }) {
  const primaryTag = project.tags?.[0];

  const ImageBlock = (
    <div className="relative h-48 w-full overflow-hidden rounded-[32px] bg-slate-200 md:h-52">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );

  return (
    <article className="group flex flex-col">
      {/* IMAGE CLICKABLE -> project page */}
      {project.link ? (
        <Link href={project.link} aria-label={project.title} className="block">
          {ImageBlock}
        </Link>
      ) : (
        ImageBlock
      )}

      {/* Meta row: logo placeholder + tag */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE4E8] text-sm font-bold text-[#D6264E]">
            {project.title.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              {project.title}
            </span>
          </div>
        </div>

        {primaryTag && (
          <span className="rounded-full bg-[#0050B3] px-3 py-1 text-xs font-medium text-white shadow-sm transition-colors duration-300 group-hover:bg-[#003A80]">
            {primaryTag}
          </span>
        )}
      </div>

      {/* Big title / summary */}
      <div className="mt-4">
        <p className="text-[17px] md:text-[19px] font-semibold leading-snug text-slate-800">
          {project.summary}
        </p>
      </div>

      {/* View link HATA DIYA – ab sirf image se navigate hoga */}
    </article>
  );
}
