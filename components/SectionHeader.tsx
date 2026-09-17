interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/**
 * Consistent eyebrow + title + subtitle used at the top of every section.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <div
          className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong dark:text-accent-soft ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base leading-7 text-ink/60 dark:text-paper/60 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
