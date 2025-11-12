"use client";

import React, { useMemo, useState } from "react";

/* ---------- brand ---------- */
const BRAND_BLUE = "#0B49B6";   // logo blue
const BRAND_YELLOW = "#F2C21A"; // brand yellow
const NAVY = "#072643";

/* ---------- data ---------- */
const PROJECT_TYPES = [
  "Website",
  "App",
  "AI Agents",
  "Data / Analytics",
  "Cloud Infra",
  "DevOps / CI-CD",
  "Integrations",
  "Consulting",
] as const;

const BUDGETS = ["$2,000 – $5,000", "$5,000 – $10,000", "More than $10,000"] as const;

/* =========================================================
   PAGE
   ========================================================= */
export default function ContactPage() {
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [details, setDetails] = useState("");
  const remaining = useMemo(() => Math.max(0, 800 - details.length), [details]);

  const toggleType = (label: string) =>
    setTypes((prev) => (prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);

    const fd = new FormData(e.currentTarget);

    // honeypot
    if ((fd.get("companyWebsite") as string)?.trim()) {
      setOk(true);
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setTypes([]);
      setBudget(null);
      setDetails("");
      return;
    }

    const payload = {
      name: (fd.get("name") as string)?.trim() || null,
      email: (fd.get("email") as string)?.trim() || null,
      company: (fd.get("company") as string)?.trim() || null,
      role: (fd.get("role") as string)?.trim() || null,
      phone: (fd.get("phone") as string)?.trim() || null,
      referral: (fd.get("referral") as string)?.trim() || null,
      project_types: types,
      budget,
      details: details.trim() || null,
    };

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");

      setOk(true);
      (e.target as HTMLFormElement).reset();
      setTypes([]);
      setBudget(null);
      setDetails("");
    } catch {
      setOk(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white">
      {/* ===== Mini Hero ===== */}
      <section className="border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-8 md:py-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-[28px] md:text-[38px] font-extrabold tracking-[-0.01em] text-slate-900 leading-tight">
              Let’s talk{" "}
              <span className="relative inline-block align-baseline">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#0ea5e9,#2563eb,#7c3aed)] animate-glow">
                  code
                </span>
                <span
                  className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full"
                  style={{ background: BRAND_YELLOW }}
                />
              </span>
            </h1>
            <p className="text-[15px] md:text-[16px] text-slate-600">
              Quick form. No sales fluff—just the info we need to send a plan.
            </p>

            {/* Category chips under hero */}
            <div className="flex flex-wrap gap-2 pt-1">
              {PROJECT_TYPES.map((label) => {
                const active = types.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleType(label)}
                    className={[
                      "rounded-full px-3.5 py-1.5 text-[13px] border transition-colors duration-200",
                      active
                        ? "shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1"
                        : "text-slate-700 border-slate-300 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/60",
                    ].join(" ")}
                    style={
                      active
                        ? {
                            backgroundColor: BRAND_BLUE, // active bg
                            borderColor: BRAND_BLUE,
                            color: "#FFFFFF",            // active text = white
                          }
                        : undefined
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Content: Left form / Right friendly animation ===== */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: form */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              {/* 2-col essentials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UnderlineField label="Name" name="name" required />
                <UnderlineField label="Email" name="email" type="email" required />
                <UnderlineField label="Company" name="company" />
                <UnderlineField label="Role" name="role" />
                <UnderlineField label="Phone" name="phone" />
                <UnderlineField label="How did you hear about us?" name="referral" />
              </div>

              {/* Budget radios (compact) */}
              <div className="space-y-2">
                <Label>Budget</Label>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <label
                      key={b}
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 border border-slate-300 text-[13px] text-slate-700 cursor-pointer hover:border-slate-400"
                    >
                      <input
                        type="radio"
                        name="budget_choice"
                        className="accent-[#072643]"
                        checked={budget === b}
                        onChange={() => setBudget(b)}
                      />
                      {b}
                    </label>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <Label>Project details</Label>
                <textarea
                  name="details"
                  rows={5}
                  maxLength={800}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[14px] outline-none focus:border-slate-900 focus:ring-2 focus:ring-[rgba(7,38,67,0.08)]"
                  placeholder="What do you want to build? Links, timelines, constraints…"
                />
                <div className="text-xs text-slate-500 text-right">{remaining} characters left</div>
              </div>

              {/* Hidden mirrors + honeypot */}
              <input type="hidden" name="projectTypes" value={types.join(", ")} />
              <input type="hidden" name="budget" value={budget ?? ""} />
              <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Actions */}
              <div className="flex items-center gap-4 pt-1">
                <button
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold text-slate-900 shadow-sm hover:shadow-md transition disabled:opacity-60"
                  style={{ backgroundColor: BRAND_YELLOW }}
                >
                  {submitting ? "Sending…" : "Send message"} <span>→</span>
                </button>
                {ok === true && <span className="text-emerald-600 text-sm">Thanks! We’ll reply soon.</span>}
                {ok === false && <span className="text-rose-600 text-sm">Something went wrong. Try again.</span>}
              </div>
            </form>
          </div>

          {/* RIGHT: chat-style contact animation */}
          <div className="lg:col-span-5">
            <div className="relative h-[260px] md:h-[320px] rounded-2xl overflow-hidden border border-slate-200">
              {/* background */}
              <div className="absolute inset-0" style={{ backgroundColor: NAVY }} />
              <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_20%_0%,rgba(255,255,255,0.10),transparent_60%)]" />

              {/* header note */}
              <div className="absolute top-3 left-4 text-white/70 text-xs">
                We typically reply in 1–2 business days
              </div>

              {/* chat stack */}
              <div className="absolute inset-0 flex flex-col justify-center gap-3 px-5">
                {/* left bubble */}
                <div className="self-start max-w-[78%] rounded-2xl rounded-bl-sm bg-white/90 text-slate-900 text-sm px-4 py-2 shadow-sm animate-bubble-in">
                  Hey! Tell us a bit about your project and your timeline.
                </div>

                {/* right bubble (typing) */}
                <div className="self-end max-w-[78%] rounded-2xl rounded-br-sm bg-white/10 text-white/90 text-sm px-4 py-2 border border-white/10 backdrop-blur-sm animate-bubble-in delay-150">
                  <span className="inline-flex gap-1 items-center">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </span>
                </div>

                {/* right bubble (answer) */}
                <div className="self-end max-w-[78%] rounded-2xl rounded-br-sm bg-white/10 text-white/90 text-sm px-4 py-2 border border-white/10 backdrop-blur-sm animate-bubble-in delay-500">
                  Thanks! We’ll review and reply with a plan & estimate.
                </div>
              </div>

              {/* paper plane */}
              <svg
                className="absolute bottom-4 right-4 h-5 w-5 text-white/80 animate-plane"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </div>

            {/* local css for animation */}
            <style>{`
              @keyframes bubbleIn {
                0% { opacity: 0; transform: translateY(6px) scale(0.98); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
              .animate-bubble-in { animation: bubbleIn 450ms ease-out both; }
              .delay-150 { animation-delay: 150ms; }
              .delay-500 { animation-delay: 500ms; }

              @keyframes dotPulse {
                0%, 60%, 100% { transform: translateY(0); opacity: .5; }
                30% { transform: translateY(-2px); opacity: 1; }
              }
              .typing-dot {
                width: 6px; height: 6px; border-radius: 9999px;
                background: ${BRAND_YELLOW};
                box-shadow: 0 0 8px rgba(242,194,26,.5);
                display: inline-block;
                animation: dotPulse 1.2s infinite;
              }
              .typing-dot:nth-child(2) { animation-delay: .2s; }
              .typing-dot:nth-child(3) { animation-delay: .4s; }

              @keyframes plane {
                0% { transform: translate(12px, 6px) rotate(8deg); opacity: .0; }
                40% { opacity: 1; }
                100% { transform: translate(0,0) rotate(0deg); opacity: 1; }
              }
              .animate-plane { animation: plane 1200ms ease-out 700ms both; }

              @keyframes glowShift { 
                0%,100% { filter: drop-shadow(0 0 0 rgba(242,194,26,0.0)); } 
                50% { filter: drop-shadow(0 0 12px rgba(242,194,26,0.45)); } 
              }
              .animate-glow { animation: glowShift 3.2s ease-in-out infinite; }
            `}</style>
          </div>
        </div>
      </section>

      {/* ===== Cost / Rings CTA (hover: blur rings + arrow turns yellow) ===== */}
      <CostRingCTA />
    </main>
  );
}

/* =========================================================
   Small components
   ========================================================= */
function Label({ children }: React.PropsWithChildren) {
  return <p className="text-[12px] uppercase tracking-[0.18em] text-slate-500">{children}</p>;
}

function UnderlineField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-[13px] text-slate-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-slate-300 focus:border-slate-900 outline-none py-2 text-[14px]"
      />
    </div>
  );
}

/* =========================================================
   CTA SECTION (Rings + Arrow that turns yellow on hover)
   ========================================================= */
function CostRingCTA() {
  return (
    <section className="border-t border-slate-200/70 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <h2 className="text-[34px] md:text-[54px] font-extrabold leading-[1.08] text-slate-900 tracking-[-0.01em]">
              Wondering How Much <br /> Your Project Would <br /> Cost?
            </h2>
          </div>

          {/* Right: concentric rings + circular badge */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto w-[320px] h-[320px] md:w-[360px] md:h-[360px]">
              {/* faint ring background */}
              <svg
                viewBox="0 0 600 600"
                className="absolute inset-0 w-full h-full text-slate-300 group-hover:blur-[2px] transition duration-300"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <circle key={i} cx="300" cy="300" r={90 + i * 35} opacity={0.22 - i * 0.015} />
                  ))}
                </g>
              </svg>

              {/* centered circular badge */}
              <svg
                viewBox="0 0 260 260"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[260px] h-auto"
              >
                {/* outer ring */}
                <circle cx="130" cy="130" r="118" fill="#fff" stroke={BRAND_BLUE} strokeWidth="2" />

                {/* circular text path */}
                <defs>
                  <path id="ringText" d="M130,130 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" />
                </defs>
                <text fontSize="12" fill={BRAND_BLUE}>
                  {/* @ts-ignore: xlinkHref is valid on SVG in React */}
                  <textPath xlinkHref="#ringText" startOffset="0%">
                    Launch your Idea! • Launch your Idea! • Launch your Idea! •
                  </textPath>
                </text>

                {/* ARROW (turns yellow on hover) */}
                <g transform="translate(130,130)">
                  <path
                    d="M-40 0 H40 M22 -18 L40 0 L22 18"
                    fill="none"
                    stroke="#e11d48" /* base red */
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-300 group-hover:stroke-[color:var(--brand-yellow)]"
                    style={{ ["--brand-yellow" as any]: BRAND_YELLOW } as React.CSSProperties}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
