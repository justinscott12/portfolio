import { Education } from '@/lib/education';

interface EducationCardProps {
  education: Education;
  /** Show only the top N highlights (keeps the one-pager compact). */
  maxHighlights?: number;
}

export default function EducationCard({
  education: edu,
  maxHighlights,
}: EducationCardProps) {
  const highlights = edu.highlights
    ? maxHighlights
      ? edu.highlights.slice(0, maxHighlights)
      : edu.highlights
    : [];

  return (
    <div className="rounded-2xl border border-line-light bg-paper-2 p-6 dark:border-line dark:bg-surface">
      <div className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-display text-lg font-bold tracking-tight text-ink dark:text-paper">
          {edu.degree}
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-ink/60 dark:text-paper/60">
          {edu.startDate ? `${edu.startDate} – ${edu.endDate}` : edu.endDate}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
        {edu.school} · {edu.location}
      </p>
      {highlights.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {highlights.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
