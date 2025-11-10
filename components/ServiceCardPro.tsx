"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  href?: string; // defaults to contact
  /** 1) emoji like "🤖" or "🌐" */
  emoji?: string;
  /** 2) local image path like "/icons/modernization.svg" (public folder) */
  imgSrc?: string;
  /** 3) Lucide (or any) icon component (kept for backward compatibility) */
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  iconClassName?: string;
  className?: string;
  badge?: string;
};

const NAVY = "#072643";

export default function ServiceCardPro({
  title,
  desc,
  href = "/marketing/contact",
  emoji,
  imgSrc,
  Icon,
  iconClassName = "",
  className = "",
  badge,
}: Props) {
  const hasIcon = Boolean(emoji || imgSrc || Icon);

  return (
    <article
      className={[
        "group relative overflow-hidden",
        "rounded-[28px] border border-slate-200 bg-white",
        "p-7 md:p-8 h-full",
        "shadow-[0_14px_48px_-24px_rgba(2,6,23,.12)]",
        "transition-all duration-300",
        "hover:-translate-y-[2px] hover:shadow-[0_30px_90px_-40px_rgba(2,6,23,.35)] hover:border-transparent",
        className,
      ].join(" ")}
    >
      {/* background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25] transition-opacity duration-300 group-hover:opacity-[0.5]"
        style={{
          background:
            "radial-gradient(700px 700px at -20% 120%, rgba(2,6,23,0.04) 0%, transparent 60%), radial-gradient(600px 600px at 120% -10%, rgba(2,6,23,0.04) 0%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(160% 120% at 50% 35%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 96%)",
          maskImage:
            "radial-gradient(160% 120% at 50% 35%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 96%)",
        }}
      />

      {/* hover wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[28px]"
        style={{
          backgroundColor: NAVY,
          backgroundImage:
            "radial-gradient(600px 300px at 100% 0%, rgba(255,255,255,0.08), rgba(255,255,255,0))",
          mixBlendMode: "multiply",
        }}
      />

      {/* ring glow */}
      <div className="absolute inset-0 rounded-[28px] ring-0 ring-yellow-400/0 group-hover:ring-2 group-hover:ring-yellow-400/40 transition-all duration-300" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col">
        {badge ? (
          <span className="mb-4 w-fit rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-colors">
            {badge}
          </span>
        ) : null}

        {/* ICON WRAPPER — always visible */}
        {hasIcon && (
          <div
            className={[
              "mb-5 inline-flex size-14 items-center justify-center rounded-2xl",
              "bg-white/90 ring-1 ring-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,.75)]",
              "transition-all duration-300",
              "group-hover:bg-white/10 group-hover:ring-white/20 group-hover:shadow-none",
            ].join(" ")}
          >
            {emoji ? (
              <span
                className="text-[28px] leading-none transition-all duration-300
                           group-hover:brightness-110 group-hover:saturate-125"
                aria-hidden
              >
                {emoji}
              </span>
            ) : imgSrc ? (
              <Image
                src={imgSrc}
                alt=""
                width={28}
                height={28}
                className="transition-all duration-300 group-hover:opacity-95"
              />
            ) : Icon ? (
              <Icon
                className={[
                  "h-7 w-7 text-[#0B49B6] transition-colors duration-300",
                  "group-hover:text-white",
                  iconClassName,
                ].join(" ")}
                strokeWidth={2.2}
              />
            ) : null}
          </div>
        )}

        <h3
          className={[
            "text-[22px] md:text-[24px] font-extrabold tracking-tight",
            "text-slate-900 transition-colors duration-300 group-hover:text-white",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "mt-3 text-[15px] leading-7 flex-1",
            "text-slate-600 transition-colors duration-300 group-hover:text-slate-200",
          ].join(" ")}
        >
          {desc}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-semibold"
        >
          <span className="text-[#0B49B6] transition-colors duration-300 group-hover:text-white">
            Explore More
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#0B49B6] group-hover:text-yellow-400">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
