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
          <div>
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
      </div>
    </div>
  );
}

