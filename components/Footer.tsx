import Link from 'next/link';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line-light bg-paper dark:border-line dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-display text-sm font-bold tracking-tight text-[#04231a]"
                aria-hidden="true"
              >
                JS
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-ink dark:text-paper">
                Justin Scott
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink/60 dark:text-paper/60">
              Full-stack engineer shipping live B2C products, RAG/agentic
              systems, and an MCP server. Tampa, FL.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60 dark:text-paper/60">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/70 transition-colors hover:text-accent-strong dark:text-paper/70 dark:hover:text-accent-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60 dark:text-paper/60">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:jscottwv@gmail.com"
                  className="text-sm text-ink/70 transition-colors hover:text-accent-strong dark:text-paper/70 dark:hover:text-accent-soft"
                >
                  jscottwv@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/justin-scott12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/70 transition-colors hover:text-accent-strong dark:text-paper/70 dark:hover:text-accent-soft"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/justinscott12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/70 transition-colors hover:text-accent-strong dark:text-paper/70 dark:hover:text-accent-soft"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/Justin-Scott-Resume.pdf"
                  download
                  className="text-sm text-ink/70 transition-colors hover:text-accent-strong dark:text-paper/70 dark:hover:text-accent-soft"
                >
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line-light pt-8 text-sm text-ink/60 dark:border-line dark:text-paper/60">
          <p>&copy; {currentYear} Justin Scott. Built with Next.js &amp; Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
