// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  /** Optional: index from parent so we can priority-load above-the-fold covers */
  index?: number;
};

export default function ProjectCard({ project, index }: Props) {
  const cover = project.image; // string path from /public
  const isInternal = project.link?.startsWith("/");
  const priority = typeof index === "number" ? index < 3 : false; // top 3 get priority

  return (
    <article
      className="relative group card p-5 flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition"
      aria-label={project.title}
    >
      {/* Full-card clickable overlay (keeps markup clean & keyboard accessible) */}
      {project.link &&
        (isInternal ? (
          <Link
            href={project.link}
            prefetch
            className="absolute inset-0 z-10 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={`Open ${project.title}`}
            title={project.title}
          />
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-10 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={`Open ${project.title}`}
            title={project.title}
          />
        ))}

      {/* Cover */}
      <div className="aspect-video relative rounded-xl overflow-hidden mb-4 bg-slate-50 dark:bg-slate-800">
        {cover ? (
          <Image
            src={cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority={priority}
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-slate-500">
            CloudQor
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{project.title}</h3>

      {/* Summary */}
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex-1 line-clamp-3">
        {project.summary}
      </p>

      {/* Tags + 'View' hint (pointer-events-none so overlay gets the click) */}
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

        {project.link && (
          <span className="ml-auto text-slate-700 dark:text-slate-200 group-hover:underline pointer-events-none">
            View
          </span>
        )}
      </div>
    </article>
  );
}
