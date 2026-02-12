import { Education } from '@/lib/education';

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education: edu }: EducationCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-gray-700 last:border-l-0 last:pb-0">
      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-slate-900 dark:bg-white"></div>
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {edu.degree}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
            {edu.startDate} – {edu.endDate}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">{edu.school}</span>
          <span className="hidden sm:inline">·</span>
          <span>{edu.location}</span>
        </div>
      </div>
      {edu.highlights && edu.highlights.length > 0 && (
        <ul className="space-y-2">
          {edu.highlights.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
