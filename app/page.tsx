import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import PrototypeCard from '@/components/PrototypeCard';
import { getFeaturedProjects } from '@/lib/projects';
import { getFeaturedPrototypes } from '@/lib/prototypes';
import { getAllEducation } from '@/lib/education';
import EducationCard from '@/components/EducationCard';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Full-stack software engineer with 4.5+ years of experience. Designs and ships production systems and own products; strong in architecture, full-stack development, and disciplined AI-assisted engineering.',
  openGraph: {
    title: 'Justin Scott | Full-Stack Software Engineer',
    description: 'Full-stack software engineer. Architecture, production systems, and end-to-end product development with rigorous engineering practices.',
    type: 'website',
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const featuredPrototypes = getFeaturedPrototypes();
  const education = getAllEducation();

  return (
    <>
      <Hero
        headline="Justin Scott"
        subheadline="Full-stack software engineer with 4.5+ years of experience designing, architecting, and shipping production systems. I specialize in building my own products and solutions—from requirements through deployment—with emphasis on clean architecture, maintainability, and rigorous engineering. Proficient in AI-assisted development as part of a disciplined workflow."
        primaryCTA={{
          text: 'View Projects',
          href: '/projects',
        }}
        secondaryCTA={{
          text: 'View Experience',
          href: '/experience',
        }}
      />

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              <p>
                I work full time in federal-sector software development while <strong className="text-gray-900 dark:text-white">specializing in the end-to-end design and engineering of my own products and solutions</strong>. I own the full lifecycle: requirements, architecture, implementation, and deployment. I apply <strong className="text-gray-900 dark:text-white">AI-assisted development</strong> (e.g., Cursor, LLM tooling) where it improves throughput, while maintaining code quality, testability, and architectural clarity—not as a substitute for engineering judgment.
              </p>
              <p>
                I regularly solve complex issues using AI, prompt engineering, and context management—and have completed tasks that typically take 3–4 hours in about 15 minutes when the problem and tooling align. I have shipped production RAG pipelines, LangGraph-based agents, and full-stack applications across multiple domains. My workflow centers on clear specs, iterative delivery, and ownership of the resulting code. Measured outcomes in prior roles include a 40% reduction in technical debt, 70% faster CI/CD cycles, and infrastructure-as-code that cut environment setup time in half.
              </p>
              <p>
                I work with Python, FastAPI, Java, Spring Boot, REST APIs, Next.js, PostgreSQL for transactional databases, and Pinecone for vector stores. I prioritize clean code, explicit architecture, production-ready delivery, and modern technology and design practices—whether for internal tools, side products, or client systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      {education.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-gray-800/50 border-t border-slate-200 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Education
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Academic background
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="/education"
                className="text-base font-semibold text-gray-900 dark:text-white hover:text-slate-600 dark:hover:text-gray-300 transition-colors"
              >
                View full education <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-gray-800/50 border-t border-slate-200 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Production and side projects I have designed, built, and deployed
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 dark:bg-white dark:text-gray-900 hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
              >
                View All Projects
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Featured Prototypes */}
      {featuredPrototypes.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Featured Prototypes
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Side projects and experiments in AI, RAG, security tooling, and systems design
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredPrototypes.slice(0, 3).map((prototype) => (
                <PrototypeCard key={prototype.id} prototype={prototype} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 dark:bg-white dark:text-gray-900 hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
              >
                View All Projects & Prototypes
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Resume Download Section */}
      <section className="py-20 bg-slate-50 dark:bg-gray-800/50 border-t border-slate-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Download Resume
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Resume available for download in PDF format
            </p>
            <div className="mt-8">
              <a
                href="/Justin-Scott-Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 dark:bg-white dark:text-gray-900 hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
              >
                Download Resume (PDF)
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

