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
          <div
            className="rise flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong dark:text-accent-soft"
          >
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            4 live products · MCP server · WVU Computer Science
          </div>

          <h1
            className="rise rise-1 mt-5 font-display text-5xl font-bold tracking-tight text-ink dark:text-paper sm:text-6xl"
          >
            Justin Scott
          </h1>

          <p
            className="rise rise-2 mt-5 text-xl leading-8 text-ink/80 dark:text-paper/80 sm:text-2xl sm:leading-9"
          >
            I design and ship production software end-to-end. Four live B2C
            products, an MCP server, and real RAG/agentic systems —{' '}
            <span className="font-medium text-ink dark:text-paper">
              built for reliability, not just demos.
            </span>
          </p>

          <p
            className="rise rise-3 mt-5 max-w-2xl text-base leading-7 text-ink/60 dark:text-paper/60"
          >
            Full-stack engineer (TypeScript · Java/Spring Boot · Python) at
            Idemia-NSS, building my own products on the side. AI-native
            workflow, human-grade standards.
          </p>

          <div
            className="rise rise-4 mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
