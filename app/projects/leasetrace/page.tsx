import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Case study: LeaseTrace, an AI lease checker you can measure',
  description:
    'How I rebuilt a Florida lease checker so that its quality is a number instead of a feeling: the model only extracts facts, code applies the statute, and a labeled set of leases scores every change.',
};

const SITE = 'https://justinscott12.github.io/leasetrace/';

const STATS = [
  { value: '97%', label: 'precision and recall on held-out leases' },
  { value: '0', label: 'fabricated citations in 39 held-out runs' },
  { value: '$0.07', label: 'per audit on Claude Opus 5.5' },
  { value: '$0', label: 'cost to me per visitor' },
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink dark:text-paper">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-7 text-ink/75 dark:text-paper/75">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2 text-base leading-7 text-ink/75 dark:text-paper/75">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-ink dark:text-paper">{children}</strong>;
}

export default function LeaseTraceCaseStudyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/projects"
        className="text-sm font-medium text-accent-strong hover:underline dark:text-accent-soft"
      >
        ← All projects
      </Link>

      <div className="mt-6">
        <SectionHeader
          as="h1"
          eyebrow="Case study"
          title="An AI lease checker you can measure"
          subtitle="LeaseTrace checks a Florida residential lease against the landlord-tenant statute and marks every clause that conflicts with it. The first version read well and was wrong. The second is built around a number: how often it's right on leases it has never seen."
        />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-line-light p-4 dark:border-line">
            <dt className="text-xs leading-5 text-ink/60 dark:text-paper/60">{s.label}</dt>
            <dd className="mt-1 text-2xl font-bold tracking-tight text-ink dark:text-paper">{s.value}</dd>
          </div>
        ))}
      </dl>

      <H2>Version 1 looked right</H2>
      <P>
        The first version, LegalTrace, was an agent pipeline that read a lease and wrote findings with statute
        citations. The output was convincing. It was also checking commercial leases against a part of the
        statute that only covers residential tenancies, its critique step was hard-coded to pass, and it had
        no way to tell a correct finding from a confident wrong one. Nothing measured it, so nothing caught
        it.
      </P>
      <P>
        I started over with one rule: <Strong>every quality claim has to be a number from leases the system
        wasn&apos;t tuned on.</Strong>
      </P>

      <H2>The model reads; code decides</H2>
      <P>
        The model never judges legality. Claude reads the lease and returns 21 facts (how the deposit is
        held, notice periods, entry hours, waiver clauses and so on), each with a quote copied from the lease.
        Code then finds every quote in the lease text, and 18 rules I wrote from quoted subsections of Chapter
        83 decide what&apos;s a problem.
      </P>
      <Bullets
        items={[
          <>
            <Strong>No invented law.</Strong> The model can&apos;t cite anything. Citations are constants in the
            rules, a test checks each rule&apos;s quote against the official statute text, and any finding whose
            citation or quote doesn&apos;t check out is dropped before it&apos;s shown.
          </>,
          <>
            <Strong>Silence isn&apos;t compliance.</Strong> Each fact is present, absent or unclear, and an
            unclear one becomes &ldquo;needs review&rdquo; instead of a guess.
          </>,
          <>
            <Strong>Fitting the API&apos;s limits.</Strong> Structured outputs rejected my first schema for size,
            so I bisected the limit and moved to a fixed list of facts whose values are validated in code. The
            schema the API enforces no longer grows as facts are added.
          </>,
        ]}
      />

      <H2>Making it measurable</H2>
      <P>
        I wrote 22 fictional Florida leases with labels for every problem in them, plus 35 compliant clauses
        built to look like violations, and split them into tuning and held-out sets. A finding only counts if
        it names the right rule, the right subsection, overlaps the right clause and has the right severity.
        Each lease runs three times, so run-to-run variation shows up as a number too.
      </P>
      <P>
        The runs store the extracted facts, so when I change a rule I can re-score every past run for free.
        That turned two bugs from the first eval run into quick fixes. A lease that rolls over to
        month-to-month with 10 days&apos; notice was missed because the rule skipped all fixed-term leases,
        and a manager named without an address was softened to &ldquo;needs review&rdquo; when the law
        treats it as a missing disclosure. In both cases the model had extracted the facts correctly, and the
        rule was wrong.
      </P>

      <H2>When 100% is the wrong answer</H2>
      <P>
        After those fixes the held-out leases scored 100%, identically on every run. That didn&apos;t mean
        the system was perfect. It meant the test had stopped measuring anything: I&apos;d written short
        leases with one plainly worded problem per clause, and real leases aren&apos;t like that.
      </P>
      <P>
        So I built a hard set: long leases assembled from realistic boilerplate, with the problems buried
        where real forms put them. They hide in a list of reasons the landlord may enter, behind
        &ldquo;unless otherwise required by law&rdquo;, in a later section than the deposit terms, or in a
        scanned layout. On those, the held-out score dropped to 92.9%, which is a more honest number.
      </P>

      <H2>The failure I left in</H2>
      <P>
        One held-out lease ends a month-to-month tenancy with notice &ldquo;by the 15th, effective at the
        end of that month&rdquo;. In every run the model worked out that this means 13 to 16 days, but the
        fact holds one number, so it reported the term as unclear, and the rule asked for review instead of
        calling it void. The fix is easy. Making it would mean tuning on a test lease, which would make the
        published number meaningless, so it stays on the{' '}
        <a href={`${SITE}#/evals`} className="text-accent-strong underline dark:text-accent-soft">
          evals page
        </a>{' '}
        as a known failure.
      </P>

      <H2>Cost and model choice</H2>
      <P>
        I ran the held-out leases on cheaper models and lower effort settings. Opus 5.5 at medium effort was
        the most accurate at about 7 cents an audit. Haiku 5.5 came within a few points at a third of a cent,
        which is the kind of trade-off a real deployment would be built on. Visitors cost me nothing:
        the sample audits are recorded runs that replay in the browser, and checking your own lease uses
        your own API key, sent straight from your browser to Anthropic.
      </P>

      <H2>What I&apos;d keep doing</H2>
      <Bullets
        items={[
          'Keep the model out of decisions that code can make from a written rule.',
          'Score every change against held-out cases, and never tune on them.',
          'Treat a perfect score as a sign the test is too easy.',
          'Publish the failures next to the headline number.',
        ]}
      />

      <div className="mt-14 flex flex-wrap gap-3">
        <a
          href={`${SITE}#/audit/mixed`}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Watch an audit
        </a>
        <a
          href={`${SITE}#/evals`}
          className="rounded-lg border border-line-light px-4 py-2 text-sm font-semibold text-ink hover:border-accent dark:border-line dark:text-paper"
        >
          See the evals
        </a>
        <Link
          href="/projects"
          className="rounded-lg border border-line-light px-4 py-2 text-sm font-semibold text-ink hover:border-accent dark:border-line dark:text-paper"
        >
          More projects
        </Link>
      </div>
    </article>
  );
}
