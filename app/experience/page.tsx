import type { Metadata } from 'next';
import ExperienceCard from '@/components/ExperienceCard';
import { getAllExperiences } from '@/lib/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience as a Software Engineer at Idemia-NSS and Software Engineering Intern positions, including achievements in designing and architecting solutions, optimizing CI/CD pipelines, and building scalable applications.',
  openGraph: {
    title: 'Experience | Justin Scott',
    description: 'Professional experience and career achievements.',
    type: 'website',
  },
};

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Professional Experience
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My career journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

