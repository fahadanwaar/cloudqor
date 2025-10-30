'use client';
import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function DashboardPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'all' | 'active' | 'planned' | 'archived'>('all');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter(p =>
      (status === 'all' || p.status === status) &&
      (p.title.toLowerCase().includes(q) ||
       p.summary.toLowerCase().includes(q) ||
       p.tags.join(' ').toLowerCase().includes(q))
    );
  }, [query, status]);

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">CloudQor Projects</h1>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
            className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="planned">Planned</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
