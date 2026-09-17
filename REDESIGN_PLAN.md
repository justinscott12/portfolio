# Portfolio Redesign Plan — justin-scott.dev

For the executing agent. This is an approved plan. Work through it phase by phase. Do not re-litigate the direction decisions in "Locked Decisions" — they were made by the owner. Ask before doing anything outside this document's scope. After each phase, run the verification in §10 before moving on.

Repo: github.com/justinscott12/portfolio · Stack: Next.js 16, React 19, Tailwind CSS v4, TypeScript, static export (`output: 'export'`) · Live: https://justin-scott.dev · Audited: 2026-09-16

## 1. Purpose & Audience (the "why" behind every task)

This site is Justin's living resume — it replaces the PDF. Its job:

- Someone gets the URL at a tech meetup and opens it on their phone.
- Within ~10 seconds they think "this person ships real things — I want to talk to them."
- They can reach out in one tap.

Target employer: startups / smaller, anti-corporate engineering shops (the owner specifically named River Point Technology, where he interned in 2021 — this is in the experience data). The tone should read as a builder who ships, not a corporate résumé.

Every change below is judged against: **does this make a founder/engineer want to talk to Justin?**

## 2. Locked Decisions (do not change)

| Decision | Choice |
|---|---|
| Architecture | Strong one-pager (Home) that tells the whole story, plus a dedicated `/projects` detail page. Fold Experience, Education, Skills, and Contact into the one-pager as sections. Remove them as separate nav pages. |
| Visual direction | Distinctive & memorable — a real identity (accent color, characterful headings, project screenshots, subtle motion). Intentional and anti-corporate, not loud. |
| Positioning | Depth-first. Lead with 2–3 flagship live products + reliability. AI-native (Cursor/Claude) is framed as how he moves fast, not the headline. De-risk the "vibe-coder / breadth-over-depth" read. |
| Phone number | Remove it everywhere (JSON-LD + Contact). Keep email + LinkedIn + GitHub. |

## 3. Audit Summary (current state → problems)

### Strengths to preserve
- Clean, modern stack; static export; per-page metadata; Person JSON-LD already present.
- No leftover "STS" branding anywhere — already clean.
- Genuinely strong substance: 4 live B2C products, an MCP server, real RAG/agentic work, a WVU CS degree, and current SWE role at Idemia-NSS.

### Problems (prioritized)

**P0 — First impression & the shareable link**
1. Hero is a 60-word run-on paragraph. No punchy value prop; unreadable on a phone at a glance. (`components/Hero.tsx`, `app/page.tsx`)
2. No visual identity. Generic black-on-white Tailwind starter — no accent, no personality, no motion, no display type. Reads corporate-generic, the opposite of the target.
3. No social/OG share image. Sharing justin-scott.dev in a text/Slack/LinkedIn produces a blank preview. This is the exact medium (a handed-out link) the site is optimized for. (`app/layout.tsx` metadata)
4. Domain mismatch. JSON-LD + OpenGraph url say justinscott.dev; the live site is justin-scott.dev. No metadataBase. (`app/layout.tsx`)

**P1 — Projects (strongest asset, weakest presentation)**
5. Zero screenshots. 4 live products, none of them shown. Highest-impact single fix. (`components/ProjectCard.tsx`)
6. Tag soup. devresumes renders 15 tech pills; signal drowns. Cap at ~6.
7. Triple redundancy on `/projects`. 5 projects + 11 prototypes + a 7-item "Public Repositories" list repeating the same repos a third time. (`app/projects/page.tsx`)
8. `featured: true` on everything — the "Featured" distinction is meaningless. (`lib/projects.ts`, `lib/prototypes.ts`)
9. Inconsistent titles — "US Election Tracker" / "devresumes.com" beside lowercase "dungeonhelper", "averylightfx", "youre-being-robbed".

**P2 — Structure & correctness**
10. 6 nav pages spread thin content across clicks (Education = one card; Skills = pill lists). Consolidate per Locked Decisions.
11. `components/ContactForm.tsx` is dead code — `app/contact/page.tsx` never renders it.
12. Phone number (304) 282-4087 is public in JSON-LD + Contact (see Locked Decisions → remove).
13. Positioning leans quantity ("15+ projects in two years… idea to prototype in hours"). Reframe to depth-first.

## 4. Target Design System

Implement as CSS variables / Tailwind v4 `@theme` tokens so the accent is swappable in one place.

### 4.1 Color tokens
Define in `app/globals.css`. These are the recommended starting palette — a confident, slightly-unexpected accent on a near-black/off-white base. Justin can swap the accent by editing these two lines only.

```css
@import "tailwindcss";

@theme {
  /* Accent — recommended: emerald "signal" (swap here if desired) */
  --color-accent: #10b981;
  --color-accent-hover: #059669;

  /* Neutrals */
  --color-ink: #0b0f17;        /* near-black base for dark surfaces */
  --color-surface: #0f1523;    /* dark card surface */
  --color-paper: #fafaf9;      /* off-white for light mode */
  --color-line: #1e2637;       /* dark borders */
}
```

- Keep light + dark both first-class (currently dark via `prefers-color-scheme`). Ensure the accent passes WCAG AA (≥4.5:1) for text uses and ≥3:1 for large text / UI on both themes.
- Replace the generic blue/purple tag pills with a single neutral pill style + the accent used sparingly (CTAs, active states, "Live" badges, links). One accent, used with restraint = memorable.

### 4.2 Typography
- Headings: add a characterful display font via `next/font/google` — Space Grotesk (geometric, techy, non-corporate). Apply to h1/h2/hero.
- Body: keep Inter.
- Tighten hero scale and letter-spacing; establish a clear type ramp (display / h1 / h2 / lead / body / caption).

### 4.3 Motion (tasteful, gated by prefers-reduced-motion)
- Section scroll-reveal (fade + 8–12px translate) using IntersectionObserver or CSS `@starting-style`.
- Card hover: lift + border-accent transition (already partially present).
- Smooth anchor scrolling for the one-pager nav.
- No autoplay, no parallax, nothing that fights readability.

### 4.4 Component specs
- **ProjectCard (redesign):** screenshot thumbnail (16:9) on top → title (proper case) → 1–2 line description → max 6 curated tags → footer with Live ↗ / GitHub ↗ / Case study actions. Add a green "Live" badge for deployed products. Alt text required on every image.
- **Section headers:** consistent eyebrow + title + one-line subtitle pattern.
- **Buttons:** primary (accent-filled) + secondary (ghost/underline). Consistent focus rings.

## 5. Target Information Architecture

### One-pager (`app/page.tsx`) — top to bottom
1. **Hero** — name, one-line value prop, one supporting line, primary CTA "See my work", secondary "Get in touch". Small credibility strip ("4 live products · MCP server · WVU CS").
2. **Featured Work** — exactly 3 flagship live products, image-forward (recommend: DevResumes, Election Tracker, You're Being Robbed). Ends with "View all projects →" to `/projects`.
3. **About** — 2 short paragraphs, depth-first (see §6).
4. **Experience** — condensed timeline (Idemia-NSS SWE → Intern → River Point). Keep measurable wins; trim to 2–3 bullets each.
5. **Skills** — compact, grouped, de-emphasized (supporting evidence, not a wall).
6. **Education** — one compact line/card (WVU, B.S. CS, May 2024 + 2–3 top highlights, not all 11).
7. **Contact CTA** — bold "Let's talk" section: Email, LinkedIn, Download Résumé (PDF) buttons. No phone.

### Nav (`components/Header.tsx`)
- Anchor links to one-pager sections: Work · About · Experience · Contact
- Projects → `/projects` (real route)
- Résumé button (keep PDF download as secondary — the site is now the primary resume)
- Sticky header stays; active-section highlight is a nice-to-have.

### `/projects` detail page (`app/projects/page.tsx`)
- Projects grid (all 5, redesigned cards) → Prototypes grid (all 11).
- Delete the redundant "Public Repositories" list; replace with a single "See all repos on GitHub →" link.

### Remove as separate routes (fold into one-pager)
- `app/experience/page.tsx`, `app/education/page.tsx`, `app/skills/page.tsx`, `app/contact/page.tsx`.
- Keep the `lib/*.ts` data and the card components; the one-pager sections consume them.
- Add redirects or leave them removed (static export → just delete routes; ensure no dead nav/footer links remain).

## 6. Copy (use verbatim; adjust only for accuracy)

### Hero
- **Name:** Justin Scott
- **Value prop (h1 support / lead):** I design and ship production software end-to-end. Four live B2C products, an MCP server, and real RAG/agentic systems — built for reliability, not just demos.
- **Supporting line (smaller):** Full-stack engineer (TypeScript · Java/Spring Boot · Python) at Idemia-NSS, building my own products on the side. AI-native workflow, human-grade standards.
- **Eyebrow / credibility strip:** 4 live products · MCP server · WVU Computer Science
- **CTAs:** primary **See my work** (→ #work) · secondary **Get in touch** (→ #contact)

Replaces the current 60-word run-on. AI is present as how he works, not the headline.

### About (2 short paragraphs)
> I'm a full-stack engineer at Idemia-NSS, shipping Angular + Spring Boot + PostgreSQL for clients in highly regulated industries — where reliability, security, and audit-ready code aren't optional.
>
> On my own time I design and ship products end-to-end: DevResumes (AI resume builder, Stripe, GCP Cloud Run + Neon), a US Election Tracker, and You're Being Robbed (wealth-inequality data viz), plus agentic and RAG tools and a Model Context Protocol server. Cursor and Claude let me move from idea to working product fast — tests, review, and shipped reliability stay non-negotiable.

### Project display names (normalize titles; keep URLs/slugs as-is)
| slug | display name |
|---|---|
| devresumes | DevResumes |
| us-election-tracker | US Election Tracker |
| youre-being-robbed | You're Being Robbed |
| dungeonhelper | DungeonHelper |
| averylightfx | Avery Light FX |

### Curated tag lists (cap at 6, lead with the impressive/relevant)
- **DevResumes:** Next.js · Spring Boot · GCP Cloud Run · Neon Postgres · OpenAI · Stripe
- **US Election Tracker:** Next.js · TypeScript · Interactive SVG · REST API · Python · SEO
- **You're Being Robbed:** Next.js · Recharts · TypeScript · Data Viz · Tailwind

(Apply the same "top 6" curation to every card; keep full stack in a tooltip/expand only if trivial.)

## 7. Work Plan (phased, ordered)

Do phases in order. Each task lists files and acceptance criteria (AC).

### Phase 0 — Foundations & correctness (fast, high-value)
- 0.1 **Fix domain + metadataBase.** In `app/layout.tsx`, set `metadataBase: new URL('https://justin-scott.dev')`; make every url/canonical use justin-scott.dev. **AC:** no justinscott.dev (no hyphen) remains except in sameAs.
- 0.2 **Remove phone number.** Delete `telephone` from JSON-LD in `app/layout.tsx`; remove the Phone block from the Contact section. **AC:** (304) appears nowhere in the repo.
- 0.3 **Add favicon + app icons.** Add `app/icon.svg` (or favicon.ico) with a simple accent mark (e.g., "JS" monogram). **AC:** tab shows a real icon.
- 0.4 **Delete dead code.** Remove `components/ContactForm.tsx` (unused) unless Phase 5 wires a real backend. **AC:** no unreferenced components; `npm run lint` clean.

### Phase 1 — Design system
- 1.1 **Tokens** — implement §4.1 palette in `app/globals.css` (`@theme`). **AC:** accent swappable in one place; AA contrast verified light + dark.
- 1.2 **Typography** — add Space Grotesk for headings via `next/font`; wire body/heading font variables in `app/layout.tsx`. **AC:** headings visibly distinct from body.
- 1.3 **Button + pill + section-header primitives** — standardize. **AC:** one consistent button/pill style sitewide; blue/purple pill colors gone.
- 1.4 **Motion utilities** — scroll-reveal + smooth anchor scroll, gated by prefers-reduced-motion. **AC:** reveals fire once on scroll; reduced-motion users get no transforms.

### Phase 2 — Project screenshots (asset generation)
- 2.1 Capture screenshots of each live product (devresumes.com, us-election-tracker.com, yourebeingrobbed.com, averylightfx.com) at desktop width; save 16:9 optimized WebP/PNG to `public/projects/<slug>.webp`. If a site is down, use a clean placeholder and flag it.
- 2.2 Add `image` + `imageAlt` fields to the Project/Prototype interfaces (`lib/projects.ts`, `lib/prototypes.ts`) and populate. **AC:** every featured card has a real screenshot with descriptive alt text.

### Phase 3 — Component redesign
- 3.1 **ProjectCard / PrototypeCard** per §4.4. **AC:** matches spec; ≤6 tags; images lazy-loaded with alt.
- 3.2 **Hero** rebuilt for punchy value prop + credibility strip + 2 CTAs (§6). **AC:** no run-on paragraph; scannable on a 375px viewport.
- 3.3 **Header/Footer** updated for one-pager nav (§5). **AC:** no links to deleted routes; sticky nav works; mobile menu works.

### Phase 4 — One-pager assembly
- 4.1 **Curate featured** — set exactly 3 flagship live products `featured: true`; the rest false. **AC:** homepage "Featured Work" shows 3, image-forward.
- 4.2 **Build sections** on `app/page.tsx` in the §5 order (Hero → Featured Work → About → Experience → Skills → Education → Contact), consuming existing lib/* data. Condense Experience bullets and Education highlights. **AC:** whole story on one page; each section has an id anchor.
- 4.3 **Contact CTA** — bold "Let's talk" with Email / LinkedIn / Résumé buttons, no phone. **AC:** all three actions work; email is mailto:jscottwv@gmail.com.

### Phase 5 — /projects cleanup
- 5.1 Redesign `/projects` with the new cards; delete the "Public Repositories" block; add a single "See all repos on GitHub →" link. **AC:** no project appears more than once; page reads clean.
- 5.2 Remove `app/experience`, `app/education`, `app/skills`, `app/contact` routes. **AC:** build succeeds; no 404-linked nav/footer entries.

### Phase 6 — Share image & polish
- 6.1 **OG image** — add a branded `public/og.png` (1200×630: name, one-line value prop, accent). Reference via `openGraph.images` + `twitter.images` in `app/layout.tsx`. **AC:** link preview renders name + tagline + image.
- 6.2 **Final visual QA** — desktop + mobile, light + dark. Spacing rhythm, alignment, hover/focus states.

## 8. Accessibility & Performance Checklist
- All images have meaningful alt; decorative images `alt=""`.
- Color contrast AA for text, 3:1 for UI, in both themes (verify the accent).
- Visible focus rings on every interactive element.
- prefers-reduced-motion respected.
- Keyboard: nav, anchor links, mobile menu, all CTAs reachable and operable.
- Lighthouse (mobile) targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95.
- Screenshots optimized (WebP, sized, lazy-loaded) so the image-forward homepage stays fast.

## 9. Out of Scope (do not do without asking)
- New backend features, auth, databases, or a server-backed contact form (site is static export). A Formspree-style form may be proposed later but is not part of this plan.
- Writing new projects/content beyond curating and re-copying what exists.
- A full SEO/keyword campaign (the OG/canonical/favicon fixes here are correctness, not a campaign).
- Analytics, cookie banners, or third-party embeds.
- Changing the tech stack, hosting, or build pipeline.

## 10. Definition of Done / Verification (run after each phase, and at the end)
- `npm run lint` → clean.
- `npm run build` → succeeds (static export, no errors/warnings introduced).
- `npm run dev` → manual pass:
  - One-pager tells the whole story; scannable on 375px mobile in ~10s.
  - Hero value prop is punchy; no run-on paragraph.
  - Featured Work shows 3 live products with screenshots.
  - /projects has no duplicate listings and no "Public Repositories" wall.
  - No phone number anywhere; email/LinkedIn/Résumé all work.
  - Light + dark both look intentional; accent used with restraint.
- Grep gates: no `(304)`, no bare justinscott.dev, no links to deleted routes, no blue-50/purple-50 tag styles left.
- Lighthouse mobile meets §8 targets.
- Share-preview check: justin-scott.dev renders name + tagline + OG image.

## 11. Suggested commit sequence
1. `chore: fix domain/metadata, remove phone, add favicon`
2. `feat: design tokens + typography`
3. `feat: project screenshots + card redesign`
4. `feat: one-pager assembly`
5. `refactor: clean up /projects, remove folded routes`
6. `feat: OG image + final polish`
