'use client';

import { useMemo, useState } from 'react';
import type { Project } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

type Props = {
  projects: Project[];
  // Optional: preselect a tab by label
  initialTab?: string;
  // Optional: control which tags show as top-level tabs (order matters)
  tabs?: string[];
};

export default function PortfolioTabs({ projects, initialTab = 'All', tabs }: Props) {
  // 1) Derive tab labels
  const derivedTabs = useMemo(() => {
    if (tabs?.length) return ['All', ...tabs];

    // Build unique tag list from all projects
    const set = new Set<string>();
    projects.forEach(p => p.tags?.forEach(t => set.add(t)));
    return ['All', ...Array.from(set).sort()];
  }, [projects, tabs]);

  const [active, setActive] = useState<string>(
    derivedTabs.includes(initialTab) ? initialTab : derivedTabs[0]
  );

  // 2) Filter
  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter(p => p.tags?.includes(active));
  }, [active, projects]);

  return (
    <div className="mt-4">
      {/* Tabs bar */}
      <div className="relative mb-6 overflow-x-auto">
        <nav className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-2">
          {derivedTabs.map(label => {
            const isActive = label === active;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={[
                  'whitespace-nowrap text-lg font-semibold transition-colors',
                  isActive
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300',
                ].join(' ')}
              >
                {label}
                {isActive && (
                  <span className="block h-[2px] w-full rounded bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 mt-2" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
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
