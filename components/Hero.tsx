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
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            {subheadline}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="text-base font-semibold leading-7 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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

