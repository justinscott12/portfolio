'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/#work', label: 'Work', section: 'work' },
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/projects', label: 'Projects', section: null },
  { href: '/#contact', label: 'Contact', section: 'contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const onHome = pathname === '/';

  // Scroll-spy: highlight the nav item for the section in view (homepage only).
  useEffect(() => {
    if (!onHome) return;
    const ids = navLinks.map((l) => l.section).filter(Boolean) as string[];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line-light/80 bg-paper/80 backdrop-blur-md dark:border-line/80 dark:bg-ink/80">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Justin Scott — home"
          >
            <Image
              src="/icon.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg transition-transform group-hover:-rotate-3"
            />
            <span className="font-display text-lg font-bold tracking-tight text-ink dark:text-paper">
              Justin Scott
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive =
                (onHome && link.section !== null && active === link.section) ||
                (link.href === '/projects' && pathname.startsWith('/projects'));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent-strong dark:text-accent-soft'
                      : 'text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/Justin-Scott-Resume.pdf"
              download
              className="btn btn-secondary ml-2 px-4 py-2 text-sm"
            >
              Résumé
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-md p-2 text-ink/80 hover:bg-ink/5 dark:text-paper/80 dark:hover:bg-paper/10 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="space-y-1 pb-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 dark:text-paper/80 dark:hover:bg-paper/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Justin-Scott-Resume.pdf"
              download
              className="btn btn-primary mt-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Résumé
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
