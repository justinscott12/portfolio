import { SkillCategory } from '@/lib/skills';

interface SkillsSectionProps {
  category: SkillCategory;
}

export default function SkillsSection({ category }: SkillsSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-lg bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

