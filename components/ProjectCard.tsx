import Image from 'next/image';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const tags = project.techStack.slice(0, 6);
  const isLive = Boolean(project.link);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line-light bg-paper-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/5 dark:border-line dark:bg-surface dark:hover:shadow-black/30">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line-light dark:border-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} — screenshot`}
            width={1200}
            height={675}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="bg-grid flex h-full w-full items-center justify-center bg-ink/[0.03] dark:bg-ink">
            <span className="font-display text-sm font-semibold text-ink/40 dark:text-paper/40">
              {project.title}
            </span>
          </div>
        )}
        {isLive && (
          <span className="badge-live absolute left-3 top-3 bg-paper-2/85 backdrop-blur-sm dark:bg-surface/80">
            Live
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold tracking-tight text-ink dark:text-paper">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {(project.link || project.githubLink) && (
          <div className="mt-auto flex items-center gap-4 border-t border-line-light pt-4 dark:border-line">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent inline-flex items-center gap-1 text-sm"
              >
                Visit site <ArrowUpRight />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink/70 transition-colors hover:text-ink dark:text-paper/70 dark:hover:text-paper"
              >
                GitHub <ArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
