import { Experience } from '@/lib/experience';

interface ExperienceCardProps {
  experience: Experience;
  /** Cap the number of bullets shown (condensed timeline on the one-pager). */
  limit?: number;
}

export default function ExperienceCard({ experience, limit }: ExperienceCardProps) {
  const bullets = limit
    ? experience.achievements.slice(0, limit)
    : experience.achievements;

  return (
    <li className="relative border-l border-line-light pb-9 pl-7 last:pb-0 dark:border-line">
      <span
        className="absolute -left-[5.5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-paper dark:ring-ink"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-display text-lg font-bold tracking-tight text-ink dark:text-paper">
          {experience.role}{' '}
          <span className="text-accent-strong dark:text-accent-soft">
            · {experience.company}
          </span>
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-ink/60 dark:text-paper/60">
          {experience.startDate} – {experience.endDate}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
        {experience.location} · {experience.type}
      </p>
      <ul className="mt-3 space-y-2">
        {bullets.map((achievement, index) => (
          <li
            key={index}
            className="flex gap-2.5 text-sm leading-relaxed text-ink/75 dark:text-paper/75"
          >
            <span
              className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
              aria-hidden="true"
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
