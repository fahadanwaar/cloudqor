'use client';

import { useMemo, useState } from 'react';
import type { Project } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

type Props = {
  projects: Project[];
  initialTab?: string;
  tabs?: string[];
};

const BRAND_BLUE = '#0B49B6';
const BRAND_YELLOW = '#F2C21A';

export default function PortfolioTabs({ projects, initialTab = 'All', tabs }: Props) {
  // 1) Derive tab labels
  const derivedTabs = useMemo(() => {
    if (tabs?.length) return ['All', ...tabs];

    const set = new Set<string>();
    for (const p of projects) for (const t of p.tags ?? []) set.add(t);

    // deterministic order
    const unique = Array.from(set).sort((a, b) => a.localeCompare(b));
    return ['All', ...unique];
  }, [projects, tabs]);

  const [active, setActive] = useState<string>(
    derivedTabs.includes(initialTab) ? initialTab : derivedTabs[0]
  );

  // 2) Filter projects by active tab
  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.tags?.includes(active));
  }, [active, projects]);

  return (
    <div className="mt-4">
      {/* Tabs bar (centered, no bottom border) */}
      <div className="relative mb-6">
        <nav className="w-full flex flex-wrap items-center justify-center gap-6 pb-2">
          {derivedTabs.map((label) => {
            const isActive = label === active;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={[
                  'relative whitespace-nowrap text-lg font-semibold transition-colors',
                  isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300',
                ].join(' ')}
                style={isActive ? { color: BRAND_BLUE } : undefined} // active = brand blue
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
                {isActive && (
                  // centered, yellow underline (no gradient)
                  <span
                    className="pointer-events-none mx-auto mt-2 block h-[3px] w-8 rounded-full"
                    style={{ backgroundColor: BRAND_YELLOW }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-slate-500 dark:text-slate-400">
            No projects in “{active}” yet.
          </div>
        )}
      </div>
    </div>
  );
}
