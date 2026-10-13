import { proofPoints } from '@/lib/proof';

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line-light dark:border-line">
      {/* Atmosphere: faded grid + a single restrained accent glow */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="rise flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong dark:text-accent-soft">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            AI-native engineering · Claude Code · Real users
          </div>

          <h1 className="rise rise-1 mt-5 font-display text-5xl font-bold tracking-tight text-ink dark:text-paper sm:text-6xl">
            Justin Scott
          </h1>

          <p className="rise rise-1 mt-2 font-display text-xl font-semibold text-accent-strong dark:text-accent-soft sm:text-2xl">
            AI-Native Full-Stack Engineer
          </p>

          <p className="rise rise-2 mt-5 text-xl leading-8 text-ink/80 dark:text-paper/80 sm:text-2xl sm:leading-9">
            I build and ship real software by directing AI coding agents — and
            bring the{' '}
            <span className="font-medium text-ink dark:text-paper">
              system design, UX judgment, and verification
            </span>{' '}
            that turn generated code into products people actually use.
          </p>

          <p className="rise rise-3 mt-5 max-w-2xl text-base leading-7 text-ink/60 dark:text-paper/60">
            Software engineer at Idemia-NSS (Angular, Spring Boot, PostgreSQL)
            by day. The rest of the time I ship my own products with Claude
            Code — and build the skills and MCP tooling that make it faster.
          </p>

          <p className="rise rise-3 mt-4 flex items-center gap-1.5 text-sm font-medium text-ink/60 dark:text-paper/60">
            <PinIcon />
            Tampa, FL · Remote-friendly
          </p>

          <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>

        <dl className="rise rise-4 mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-light bg-line-light dark:border-line dark:bg-line lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="flex flex-col-reverse justify-end bg-paper-2 px-5 py-5 dark:bg-surface"
            >
              <dt className="mt-1 text-sm leading-snug text-ink/60 dark:text-paper/60">
                {point.label}
              </dt>
              <dd className="font-display text-3xl font-bold tracking-tight text-ink dark:text-paper">
                {point.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
