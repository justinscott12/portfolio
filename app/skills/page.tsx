import type { Metadata } from 'next';
import SkillsSection from '@/components/SkillsSection';
import { getAllSkills } from '@/lib/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills and technologies including AI-augmented development tools (Cursor, GitHub Copilot), AI/ML technologies (RAG Systems, LangGraph, LangChain), Angular, React, Java, Spring Boot, TypeScript, Node.js, PostgreSQL, MongoDB, Docker, AWS, Terraform, and more.',
  openGraph: {
    title: 'Skills | Justin Scott',
    description: 'Technical skills and technologies I work with.',
    type: 'website',
  },
};

export default function SkillsPage() {
  const skills = getAllSkills();

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Skills & Technologies
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I use to build software solutions, including AI-augmented development tools and AI/ML technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {skills.map((category) => (
            <SkillsSection key={category.category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

