import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import PrototypeCard from '@/components/PrototypeCard';
import { getFeaturedProjects } from '@/lib/projects';
import { getFeaturedPrototypes } from '@/lib/prototypes';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions. 4.5 years of experience building enterprise applications and microservices.',
  openGraph: {
    title: 'Justin Scott | Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions.',
    type: 'website',
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const featuredPrototypes = getFeaturedPrototypes();

  return (
    <>
      <Hero
        headline="Justin Scott"
        subheadline="Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions. 4.5 years of experience designing, architecting, and engineering innovative solutions from scratch. Expertise in developing high-performance APIs and building scalable full-stack applications."
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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              <p>
                I'm a Full-Stack Software Engineer with 4.5 years of experience building enterprise applications
                and microservices for national security clients. My expertise lies in designing, architecting, and engineering
                innovative solutions from scratch. I excel at building scalable full-stack applications and developing high-performance APIs.
              </p>
              <p>
                I specialize in AI-augmented development, leveraging modern tools like Cursor and AI assistants to
                accelerate development while maintaining code quality. This allows me to focus on architecture, problem-solving,
                and delivering innovative solutions. I've built production RAG systems, LangGraph agents, and AI-powered
                applications that solve real-world problems.
              </p>
              <p>
                While I've worked on legacy system modernization projects, my passion lies in architecting new solutions from the ground up.
                I have a proven track record of reducing technical debt by 40%, optimizing CI/CD pipelines for 70%
                faster deployments, and implementing infrastructure-as-code solutions that reduce environment setup
                time by 50%. Currently working at Idemia-NSS, I focus on building robust, maintainable software using modern
                technologies like Angular, Spring Boot, PostgreSQL, and React. I'm passionate about writing clean code,
                designing elegant architectures, and delivering solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                A selection of projects I've built and deployed
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Featured Prototypes
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Experimental projects exploring AI, RAG systems, security tools, and innovative solutions
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                View All Projects & Prototypes
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Resume Download Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Download Resume
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              View or download my resume in PDF format
            </p>
            <div className="mt-8">
              <a
                href="/Justin-Scott-Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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

