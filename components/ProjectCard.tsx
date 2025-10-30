import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-5 flex flex-col">
      <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
        {project.image ? (
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center bg-brand/10 text-brand">CloudQor</div>
        )}
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex-1">{project.summary}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-2 text-xs">
          {project.tags.map((t) => (
            <span key={t} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800">{t}</span>
          ))}
        </div>
        {project.link && (
          <Link className="btn btn-ghost" href={project.link} target="_blank">View</Link>
        )}
      </div>
    </div>
  );
}
