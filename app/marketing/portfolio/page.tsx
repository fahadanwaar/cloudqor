import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = { title: 'Portfolio — CloudQor' };

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Selected case studies and highlights.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
