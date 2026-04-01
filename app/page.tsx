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
  description:
    'AI-focused software engineer shipping LLM-powered product capabilities and full-stack web apps. Production experience in federal-sector software, AWS, Ansible, and platform delivery.',
  openGraph: {
    title: 'Justin Scott | Full-Stack Software Engineer',
    description:
      'AI-focused software engineer. Full-stack delivery, production systems, and disciplined engineering with modern AI-native tooling.',
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
        subheadline="AI-focused software engineer who designs, integrates, and ships LLM-powered product capabilities (APIs, prompts-as-code, evaluation-minded workflows) alongside full-stack web applications. Works in an AI-native development workflow (Cursor and modern LLM tooling) while keeping code review, testing, and architecture non-negotiable—with strong production experience in customer-facing software, AWS and Ansible-based operations, and measurable platform wins."
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
                I work full time as a software engineer at Idemia-NSS while continuing to <strong className="text-gray-900 dark:text-white">design and ship my own products</strong> end to end. My resume summary: AI-focused engineering—integrating LLM-powered capabilities with full-stack web work—using an AI-native workflow (Cursor and modern tooling) to move faster on implementation and refactors without trading off review, tests, or architecture.
              </p>
              <p>
                Production background includes <strong className="text-gray-900 dark:text-white">biometric and customer-facing software</strong>, AWS and Ansible-based operations, and measurable wins such as a ~90% reduction in file usage and scalable, maintainable infrastructure. On the job I deliver with Angular, Spring Boot, PostgreSQL, and Agile/SAFe teams; on side products I lean on TypeScript, React, Next.js, Node, Express, and MongoDB—matching the stack called out on my resume.
              </p>
              <p>
                Skills on my resume emphasize the same tools I use daily: Angular, React, Next.js, Java, Spring Boot, TypeScript, Node.js, Express.js, Python, FastAPI, PostgreSQL, AWS, Terraform, Docker, GitLab CI, RAG, and Cursor—plus certifications in SAFe and HashiCorp Terraform.
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

