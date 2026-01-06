import { Experience } from '@/lib/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0">
      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {experience.role}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">{experience.company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{experience.location}</span>
          <span className="hidden sm:inline">•</span>
          <span>{experience.type}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.achievements.map((achievement, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

