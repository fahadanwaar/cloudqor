// components/WordRotate.tsx
'use client';
import { useEffect, useMemo, useState } from 'react';

type Props = {
  words: string[];
  interval?: number; // ms
  className?: string;
};

export default function WordRotate({ words, interval = 2000, className = '' }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [interval, words.length]);

  // Reserve width to avoid layout jump
  const maxCh = useMemo(
    () => Math.max(...words.map((w) => w.length)),
    [words]
  );

  return (
    <span className="inline-block relative align-baseline" style={{ width: `${maxCh}ch` }}>
      <span key={i} className={`absolute inset-0 animate-fade-up ${className}`}>
        {words[i]}
      </span>
      {/* invisible placeholder to keep height */}
      <span className="invisible">{words[i]}</span>
    </span>
  );
}
