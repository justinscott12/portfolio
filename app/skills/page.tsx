import type { Metadata } from 'next';
import SkillsSection from '@/components/SkillsSection';
import { getAllSkills } from '@/lib/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills: TypeScript, Next.js, React, Angular, React Native, Expo, Spring Boot, Node.js, FastAPI, Fastify, Python, Java, PostgreSQL, Neon, OpenAI, Claude, RAG, LangGraph, Pinecone, AWS, GCP Cloud Run, Terraform, Docker, Stripe, and more.',
  openGraph: {
    title: 'Skills | Justin Scott',
    description: 'Technical skills and technologies.',
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
            Technologies and tools used in production systems and product development
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

