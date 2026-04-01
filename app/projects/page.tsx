import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import PrototypeCard from '@/components/PrototypeCard';
import { getAllProjects } from '@/lib/projects';
import { getAllPrototypes } from '@/lib/prototypes';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of full-stack web applications, software projects, and experimental prototypes built with modern technologies including Java, Spring Boot, React, TypeScript, AI/ML, and more.',
  openGraph: {
    title: 'Projects | Justin Scott',
    description: 'Portfolio of full-stack web applications, software projects, and experimental prototypes.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const prototypes = getAllPrototypes();

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Projects & Prototypes
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A collection of projects I've built and deployed, plus experimental prototypes exploring AI, RAG systems, and innovative solutions
          </p>
        </div>

        {/* Production Projects */}
        {projects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Production Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Prototypes & Experiments */}
        {prototypes.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Prototypes & Experiments
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {prototypes.map((prototype) => (
                <PrototypeCard key={prototype.id} prototype={prototype} />
              ))}
            </div>
          </div>
        )}

        {/* Public Repositories */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Public Repositories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Explore my open-source projects and contributions on GitHub.
          </p>
          <div className="space-y-3">
            <a
              href="https://github.com/justinscott12/dungeonhelper"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    dungeonhelper
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Destiny 2 companion—dungeon mechanics and loadout guidance (Next.js, TypeScript)
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
            <a
              href="https://github.com/justinscott12/youre-being-robbed"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    youre-being-robbed
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Wealth-inequality awareness—evidence and exploration (Express, MongoDB, TypeScript)
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
            <a
              href="https://github.com/justinscott12/ai-golf-caddie"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    ai-golf-caddie
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    AI-powered golf strategy app with LangGraph agents and vision AI
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
            <a
              href="https://github.com/justinscott12/pdf-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    pdf-toolkit
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Privacy-focused PDF toolkit - all processing happens client-side
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
            <a
              href="https://github.com/justinscott12/legaltrace"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    legaltrace
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    AI-powered lease compliance checker with agentic workflows
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
            <a
              href="https://github.com/justinscott12/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    portfolio
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    This portfolio website - Next.js 16, TypeScript, Tailwind CSS v4
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
            <a
              href="https://github.com/justinscott12"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    View All Repositories
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    See all my public repositories on GitHub
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

