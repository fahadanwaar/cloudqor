// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.image; // simple: aapke type me image hi hai
  const isInternal = project.link?.startsWith("/"); // internal route?

  const CTA =
    project.link ?
      (isInternal ? (
        <Link className="btn btn-ghost" href={project.link} aria-label={`View ${project.title}`}>
          View
        </Link>
      ) : (
        <a
          className="btn btn-ghost"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
        >
          View
        </a>
      )) : null;

  return (
    <article
      className="group card p-5 flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
      aria-label={project.title}
    >
      <div className="aspect-video relative rounded-xl overflow-hidden mb-4 bg-slate-50 dark:bg-slate-800">
        {cover ? (
          <Image
            src={cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-slate-500">
            CloudQor
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold">{project.title}</h3>

      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex-1 line-clamp-3">
        {project.summary}
      </p>

      <div className="flex items-center justify-between mt-4 gap-3">
        <div className="flex flex-wrap gap-2 text-xs">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-800/70">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">{CTA}</div>
      </div>
    </article>
  );
}
