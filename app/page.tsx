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
  title: { absolute: 'Justin Scott — Full-Stack Engineer' },
  description:
    'Full-stack engineer shipping production software end-to-end — live B2C products, an MCP server, and real RAG/agentic systems. TypeScript, Java/Spring Boot, Python. Built for reliability, not just demos.',
  // OpenGraph/Twitter (incl. og.png + url) inherited from the root layout.
};

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
              title="Products I've shipped"
              subtitle="A live data platform with real users, an MCP server, and an agentic AI tool — designed and built end-to-end."
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

      {/* About */}
      <section
        id="about"
        className="scroll-mt-16 border-b border-line-light bg-ink/[0.02] dark:border-line dark:bg-paper/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div data-reveal>
            <SectionHeader eyebrow="About" title="How I work" />
          </div>
          <div
            data-reveal
            data-reveal-delay="1"
            className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-ink/75 dark:text-paper/75"
          >
            <p>
              I&apos;m a full-stack engineer at{' '}
              <strong className="font-semibold text-ink dark:text-paper">
                Idemia-NSS
              </strong>
              , shipping Angular + Spring Boot + PostgreSQL for clients in highly
              regulated industries — where reliability, security, and audit-ready
              code aren&apos;t optional.
            </p>
            <p>
              On my own time I design and ship products end-to-end: a{' '}
              <strong className="font-semibold text-ink dark:text-paper">
                US Election Tracker
              </strong>{' '}
              with real users,{' '}
              <strong className="font-semibold text-ink dark:text-paper">
                DevResumes
              </strong>{' '}
              (an AI resume builder with Stripe, GCP Cloud Run + Neon), plus
              agentic and RAG tools and a{' '}
              <strong className="font-semibold text-ink dark:text-paper">
                Model Context Protocol server
              </strong>
              . Cursor and Claude let me move from idea to working product fast —
              tests, review, and shipped reliability stay non-negotiable.
            </p>
          </div>
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
                limit={3}
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
              subtitle="Depth across the stack — languages, frameworks, AI tooling, data, and cloud."
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
