interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative bg-slate-50 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            {subheadline}
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-gray-400">
            Full-Stack Engineering · Product & Systems Design · Production Delivery
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="rounded-md bg-slate-900 dark:bg-white px-6 py-3 text-base font-semibold text-white dark:text-gray-900 shadow-sm hover:bg-slate-800 dark:hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:focus-visible:outline-white transition-colors"
                >
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="text-base font-semibold leading-7 text-gray-900 dark:text-white hover:text-slate-600 dark:hover:text-gray-300 transition-colors"
                >
                  {secondaryCTA.text} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

