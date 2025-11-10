'use client';

import { useEffect, useState } from 'react';

type Card = { label: string; value: string };
type Anchor = { right: string; top?: string; bottom?: string };

const CARDS: Card[] = [
  { label: 'Cloud Cost', value: '–28% AWS spend' },
  { label: 'AI Assist', value: '↓ 42% response time' },
  { label: 'Deploy Speed', value: '3× faster CI' },
  { label: 'Latency (p95)', value: '–120ms' },
  { label: 'Lead Gen', value: '+62% MQLs' },
  { label: 'Churn Risk', value: '–18% in 90d' },
  { label: 'CSAT', value: '4.9 ★ rating' },
];

// ---- non-overlapping anchor pools ----
// pick ONE from TOP and ONE from BOTTOM to ensure separation
const TOP_ANCHORS: Anchor[] = [
  { right: '2.5rem', top: '1.25rem' },
  { right: '10rem', top: '1.25rem' },
  { right: '6.5rem', top: '0.75rem' },
];

const BOTTOM_ANCHORS: Anchor[] = [
  { right: '3rem', bottom: '1.75rem' },
  { right: '11rem', bottom: '2.25rem' },
  { right: '7rem', bottom: '2rem' },
];

function pickOne<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function pickTwoCards(): [Card, Card] {
  const a = pickOne(CARDS);
  let b = pickOne(CARDS);
  // ensure distinct
  while (b === a) b = pickOne(CARDS);
  return [a, b];
}

export default function HeroKpiCards() {
  // deterministic defaults for SSR → CSR hydration
  const [cards, setCards] = useState<[Card, Card]>([CARDS[0], CARDS[1]]);
  const [topAnchor, setTopAnchor] = useState<Anchor>(TOP_ANCHORS[0]);
  const [bottomAnchor, setBottomAnchor] = useState<Anchor>(BOTTOM_ANCHORS[0]);

  useEffect(() => {
    const [c1, c2] = pickTwoCards();
    setCards([c1, c2]);
    setTopAnchor(pickOne(TOP_ANCHORS));
    setBottomAnchor(pickOne(BOTTOM_ANCHORS));
  }, []);

  return (
    <>
      {/* morphing blob */}
      <div
        className="absolute right-2 top-2 h-[85%] w-[70%] bg-gradient-to-br from-[#E8F1FF] to-[#CFE7FF] blur-md"
        style={{ animation: 'blob 14s ease-in-out infinite' }}
        aria-hidden
      />

      {/* TOP card (hidden on xs to reduce clutter) */}
      <div
        className="hidden sm:block absolute rounded-2xl bg-white/85 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-xl px-4 py-3 transition-all"
        style={{
          right: topAnchor.right,
          top: topAnchor.top,
        }}
      >
        <div className="text-xs text-slate-500">{cards[0].label}</div>
        <div className="mt-1 font-semibold text-slate-800 dark:text-slate-100">{cards[0].value}</div>
      </div>

      {/* BOTTOM card */}
      <div
        className="absolute rounded-2xl bg-white/85 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-xl px-4 py-3 transition-all"
        style={{
          right: bottomAnchor.right,
          bottom: bottomAnchor.bottom,
        }}
      >
        <div className="text-xs text-slate-500">{cards[1].label}</div>
        <div className="mt-1 font-semibold text-slate-800 dark:text-slate-100">{cards[1].value}</div>
      </div>
    </>
  );
}
