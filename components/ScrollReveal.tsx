'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Single IntersectionObserver that reveals any element marked with
 * `data-reveal` as it scrolls into view. Server components stay server
 * components — they just add the attribute. Respects prefers-reduced-motion
 * (elements are shown immediately) and degrades gracefully without JS
 * (the `html.js` gate in globals.css keeps content visible).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'),
    );
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
