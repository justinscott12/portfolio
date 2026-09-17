import { Prototype } from '@/lib/prototypes';

interface PrototypeCardProps {
  prototype: Prototype;
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

export default function PrototypeCard({ prototype }: PrototypeCardProps) {
  const tags = prototype.techStack.slice(0, 6);

  return (
    <article className="group flex flex-col rounded-2xl border border-line-light bg-paper-2 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/5 dark:border-line dark:bg-surface dark:hover:shadow-black/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-base font-bold tracking-tight text-ink dark:text-paper">
          {prototype.title}
        </h3>
        <span className="shrink-0 rounded-full border border-line-light px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-ink/60 dark:border-line dark:text-paper/60">
          Prototype
        </span>
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
        {prototype.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {(prototype.link || prototype.githubLink) && (
        <div className="mt-auto flex items-center gap-4 border-t border-line-light pt-4 dark:border-line">
          {prototype.link && (
            <a
              href={prototype.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent inline-flex items-center gap-1 text-sm"
            >
              View demo <ArrowUpRight />
            </a>
          )}
          {prototype.githubLink && (
            <a
              href={prototype.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink/70 transition-colors hover:text-ink dark:text-paper/70 dark:hover:text-paper"
            >
              GitHub <ArrowUpRight />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
