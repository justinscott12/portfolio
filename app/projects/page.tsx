import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import PrototypeCard from '@/components/PrototypeCard';
import SectionHeader from '@/components/SectionHeader';
import { getAllProjects } from '@/lib/projects';
import { getAllPrototypes } from '@/lib/prototypes';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'The full portfolio — live B2C products plus AI, RAG, and agentic prototypes and experiments that Justin Scott has designed, built, and shipped.',
  // OpenGraph/Twitter (incl. og.png + url) inherited from the root layout.
};

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

export default function ProjectsPage() {
  const projects = getAllProjects();
  const prototypes = getAllPrototypes();

  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden border-b border-line-light dark:border-line">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Everything I've built"
            subtitle="Live B2C products up top, then the prototypes and experiments where I push new stacks, AI patterns, and agentic tooling."
          />
        </div>
      </section>

      {/* Live & production products */}
      <section className="border-b border-line-light dark:border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60 dark:text-paper/60">
            Live &amp; production
          </h2>
          <div
            data-reveal
            className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Prototypes & experiments */}
      <section className="bg-ink/[0.02] dark:bg-paper/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60 dark:text-paper/60">
            Prototypes &amp; experiments
          </h2>
          <div
            data-reveal
            className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {prototypes.map((prototype) => (
              <PrototypeCard key={prototype.id} prototype={prototype} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-line-light bg-paper-2 p-6 text-center dark:border-line dark:bg-surface">
            <p className="text-sm text-ink/70 dark:text-paper/70">
              More repositories, works-in-progress, and one-off experiments live
              on GitHub.
            </p>
            <a
              href="https://github.com/justinscott12"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent mt-2 inline-flex items-center gap-1.5 text-sm"
            >
              See all repos on GitHub <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
