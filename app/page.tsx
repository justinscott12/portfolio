import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import SkillsSection from '@/components/SkillsSection';
import SectionHeader from '@/components/SectionHeader';
import { getHomepageFeatured } from '@/lib/featured';
import { getAllExperiences } from '@/lib/experience';
import { getAllEducation } from '@/lib/education';
import { getAllSkills } from '@/lib/skills';

export const metadata: Metadata = {
  title: { absolute: 'Justin Scott — AI-Native Full-Stack Engineer' },
  description:
    'AI-native full-stack engineer: I ship real products by directing AI coding agents like Claude Code, with the system design, UX judgment, and verification to make them production-grade. 7,500+ mod downloads, 1,300+ users, an open-source MCP server.',
  // OpenGraph/Twitter (incl. og.png + url) inherited from the root layout.
};

/** The four-step method in "How I work". Keep each claim backed by something on this site. */
const WORK_STEPS = [
  {
    title: 'Frame the problem',
    body: 'Specs with hard boundaries and a definition of done before any code: what is in scope, what must not change, and how we will know it works.',
  },
  {
    title: 'Design the system',
    body: "The calls an agent shouldn't make alone: data model, failure modes, rate limits, caching, and what happens under real traffic.",
  },
  {
    title: 'Direct the agents',
    body: "Claude Code with custom skills, MCP servers, and parallel subagents — and when the tooling I need doesn't exist, I build and publish it.",
  },
  {
    title: 'Verify like a skeptic',
    body: 'Real browsers at phone and desktop widths, both themes, production-like conditions. Small, revertable commits. Done means proven.',
  },
];

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Home() {
  const featured = getHomepageFeatured();
  const experiences = getAllExperiences();
  const education = getAllEducation();
  const skills = getAllSkills();

  return (
    <>
      <Hero />

      {/* Featured Work */}
      <section
        id="work"
        className="scroll-mt-16 border-b border-line-light dark:border-line"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div data-reveal>
            <SectionHeader
              eyebrow="Featured work"
              title="Things people actually use"
              subtitle="Live products with real users — each one designed, built, and shipped end-to-end."
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <div
                key={project.id}
                data-reveal
                data-reveal-delay={String(Math.min(i + 1, 3))}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div data-reveal className="mt-10">
            <a
              href="/projects"
              className="link-accent inline-flex items-center gap-1.5 text-sm"
            >
              View all projects <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* How I work (anchor stays #about for the nav) */}
      <section
        id="about"
        className="scroll-mt-16 border-b border-line-light bg-ink/[0.02] dark:border-line dark:bg-paper/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div data-reveal>
            <SectionHeader
              eyebrow="How I work"
              title="AI does the typing. I do the engineering."
              subtitle="Anyone can prompt a model. The leverage is knowing what to ask for, catching what it gets wrong, and getting the result in front of real users. That's the job I do with Claude Code every day."
            />
          </div>

          <ol
            data-reveal
            data-reveal-delay="1"
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {WORK_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-line-light bg-paper-2 p-6 dark:border-line dark:bg-surface"
              >
                <span className="font-display text-sm font-bold tabular-nums text-accent-strong dark:text-accent-soft">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-ink dark:text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <figure
            data-reveal
            data-reveal-delay="2"
            className="mt-8 rounded-2xl border border-accent/40 bg-accent/[0.06] p-6 sm:p-8"
          >
            <figcaption className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong dark:text-accent-soft">
              In practice · US Election Tracker, Oct 2026
            </figcaption>
            <p className="mt-3 max-w-4xl text-lg leading-8 text-ink/80 dark:text-paper/80">
              Three weeks before election night I took the site from audit to
              production in one session: 80 baseline screenshots across phone,
              desktop, light, and dark; a server pinned to UTC that exposed a
              hydration bug hitting every US visitor; a stale election-night
              header and an independent candidate drawn as a Republican, both
              caught before launch. It shipped as{' '}
              <strong className="font-semibold text-ink dark:text-paper">
                21 small, individually revertable commits
              </strong>{' '}
              with before/after evidence for every change.
            </p>
          </figure>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-16 border-b border-line-light dark:border-line"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div data-reveal>
            <SectionHeader
              eyebrow="Experience"
              title="Where I've worked"
              subtitle="Enterprise delivery in regulated industries, plus the infrastructure work that keeps teams fast."
            />
          </div>
          <ol data-reveal data-reveal-delay="1" className="mt-10 max-w-3xl">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                limit={4}
              />
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-16 border-b border-line-light bg-ink/[0.02] dark:border-line dark:bg-paper/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div data-reveal>
            <SectionHeader
              eyebrow="Skills"
              title="What I build with"
              subtitle="AI-native workflow on top of a real full-stack foundation — the second is what makes the first trustworthy."
            />
          </div>
          <div
            data-reveal
            data-reveal-delay="1"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((category) => (
              <SkillsSection key={category.category} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="scroll-mt-16 border-b border-line-light dark:border-line"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div data-reveal>
            <SectionHeader eyebrow="Education" title="Education" />
          </div>
          <div data-reveal data-reveal-delay="1" className="mt-8 max-w-2xl">
            {education.map((edu) => (
              <EducationCard key={edu.id} education={edu} maxHighlights={4} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div
            data-reveal
            className="relative overflow-hidden rounded-3xl border border-line-light bg-paper-2 px-6 py-14 text-center dark:border-line dark:bg-surface sm:px-12"
          >
            <div
              aria-hidden="true"
              className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_0%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20"
            />
            <div className="relative mx-auto max-w-2xl">
              <div className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong dark:text-accent-soft">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                Contact
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink dark:text-paper sm:text-5xl">
                {"Let's talk"}
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink/70 dark:text-paper/70">
                Always up for talking shop or the right opportunity. Based in
                Tampa, FL — open to remote and mostly-remote hybrid.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:jscottwv@gmail.com" className="btn btn-primary">
                  <MailIcon /> Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/justin-scott12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-6 text-sm text-ink/60 dark:text-paper/60">
                <a href="mailto:jscottwv@gmail.com" className="link-accent">
                  jscottwv@gmail.com
                </a>{' '}
                ·{' '}
                <a
                  href="https://github.com/justinscott12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
