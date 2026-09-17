import { SkillCategory } from '@/lib/skills';

interface SkillsSectionProps {
  category: SkillCategory;
}

export default function SkillsSection({ category }: SkillsSectionProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/60 dark:text-paper/60">
        {category.category}
      </h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
