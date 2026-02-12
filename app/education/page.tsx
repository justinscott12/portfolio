import type { Metadata } from 'next';
import EducationCard from '@/components/EducationCard';
import { getAllEducation } from '@/lib/education';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Education background: West Virginia University, B.S. Computer Science.',
  openGraph: {
    title: 'Education | Justin Scott',
    description: 'Education and academic background.',
    type: 'website',
  },
};

export default function EducationPage() {
  const education = getAllEducation();

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Education
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Academic background and relevant coursework
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
