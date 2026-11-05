export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  /** Label for `link` (default "Visit site"). */
  linkLabel?: string;
  /** Internal case-study page, e.g. "/projects/us-election-tracker". */
  caseStudy?: string;
  /** Screenshot in /public/projects (16:9 WebP). Omit for repos with no live site. */
  image?: string;
  imageAlt?: string;
  /** Short label shown on the branded cover when there's no screenshot. */
  kicker?: string;
  /** One-line proof point (users, downloads, tests…) shown under the title. Keep it verifiable. */
  proof?: string;
  featured: boolean;
}

/*
 * Election-site users from Google Analytics: 3.8K active users Nov 1–5, 2026 (midterm week), 5.1K Jan 1–Oct 12.
 * Other proof figures: mod downloads from
 * Modrinth (Nov 2, 2026: 10,360 across all projects; Advancement Tracker 5,824);
 * MCP server listed on npm (0.1.2) and the official MCP Registry.
 * LeaseTrace figures from its evals page (Nov 2, 2026): held-out leases, Opus 5.5 medium, 39 runs.
 * Avery Light FX from Google Analytics (Nov 2, 2026): 1.7K active users in calendar 2025, traffic concentrated Oct–Dec.
 */
export const projects: Project[] = [
  {
    id: 'leasetrace',
    title: 'LeaseTrace',
    proof: '97% precision and recall on held-out leases, 0 fabricated citations',
    description:
      'Checks a Florida residential lease against the landlord-tenant statute, clause by clause. Claude extracts facts with a quote for each; rules I wrote from the statute decide what is illegal, so every finding links to the lease text and the exact subsection. Measured on 30 labeled leases, with recorded audits that replay for free.',
    techStack: ['Claude API', 'Structured outputs', 'TypeScript', 'Evals', 'React', 'GitHub Pages'],
    link: 'https://justinscott12.github.io/leasetrace/',
    linkLabel: 'Watch an audit',
    githubLink: 'https://github.com/justinscott12/leasetrace',
    caseStudy: '/projects/leasetrace',
    image: '/projects/leasetrace.webp',
    imageAlt: 'LeaseTrace: a lease excerpt marked with highlighter colors for a violation and two void terms, with the statute behind each',
    featured: true,
  },
  {
    id: 'storm-replay',
    title: 'Storm Replay',
    proof: 'Finds the Moore EF5 within 2 km of its surveyed touchdown',
    description:
      'Replays real NEXRAD Doppler radar of five famous tornadoes in the browser, with no backend. My own Archive II and bzip2 decoder runs in Web Workers, WebGL draws the radar, and an in-browser detector marks rotation over NWS warnings and damage paths.',
    techStack: ['TypeScript', 'WebGL', 'Web Workers', 'MapLibre GL', 'Binary format decoding', 'GitHub Pages'],
    link: 'https://justinscott12.github.io/storm-replay/',
    linkLabel: 'Open the replay',
    githubLink: 'https://github.com/justinscott12/storm-replay',
    image: '/projects/storm-replay.webp',
    imageAlt: 'Storm Replay — Moore, Oklahoma radar velocity with the auto-detected rotation riding the damage path',
    featured: true,
  },
  {
    id: 'us-election-tracker',
    title: 'US Election Tracker',
    proof: '3,800 users in midterm week, 1m 46s average engagement',
    description:
      'Ran live results for the 2026 midterms: 16 Senate, 15 governor and 21 House races refreshed about every 20 seconds from the NPR feed, behind a CDN cache that kept server load flat through the election-night spike. Races are called from the feed, from prediction markets at 99.5%, or by hand. Plus electoral maps for every presidential election since 1928, a demographics map, 51 state hubs, and two quizzes.',
    techStack: ['Next.js', 'TypeScript', 'Interactive SVG maps', 'Prediction-market odds', 'Census & BLS data', 'Netlify'],
    link: 'https://us-election-tracker.com',
    image: '/projects/us-election-tracker.webp',
    imageAlt: 'US Election Tracker — 2024 electoral map with the 270-to-win bar and state-by-state results',
    featured: true,
  },
  {
    id: 'minecraft-mods',
    title: 'Minecraft Fabric Mods',
    proof: '10,000+ downloads',
    description:
      'Quality-of-life Fabric mods, kept current with each Minecraft release through a Claude Code pipeline I built: a custom skill, an MCP decompiler to diff versions, and my own publishing MCP server.',
    techStack: ['Java', 'Fabric', 'Mixins', 'Gradle', 'Claude Code', 'MCP'],
    link: 'https://modrinth.com/mod/advancement-tracker',
    linkLabel: 'View on Modrinth',
    kicker: 'Fabric · Modrinth',
    featured: true,
  },
  {
    id: 'modrinth-mcp',
    title: 'Modrinth MCP Server',
    proof: 'Open source · npm + MCP Registry',
    description:
      'MCP server that lets Claude and other AI assistants search Modrinth and publish mod releases. Listed in the official MCP Registry and installable as a Claude Code plugin — I ship my own mod updates with it.',
    techStack: ['MCP', 'TypeScript', 'Node.js', 'Claude Code plugin', 'npm'],
    link: 'https://www.npmjs.com/package/@justinscott12/modrinth-mcp',
    linkLabel: 'View on npm',
    githubLink: 'https://github.com/justinscott12/modrinth-mcp',
    kicker: 'Model Context Protocol',
    featured: false,
  },
  {
    id: 'averylightfx',
    title: 'Avery Light FX',
    proof: '1,700+ visitors last season',
    description:
      'Info site for a drive-up Halloween and Christmas light show: hours, show status, directions, and Venmo donations for charity. Includes a secured admin panel wired to the show’s xSchedule API.',
    techStack: ['Next.js', 'TypeScript', 'NextAuth.js', 'xSchedule API', 'Tailwind CSS', 'Netlify'],
    link: 'https://averylightfx.com/',
    image: '/projects/averylightfx.webp',
    imageAlt: 'Avery Light FX — Halloween light show site with show hours and the FM station for music',
    featured: true,
  },
  {
    id: 'dungeonhelper',
    title: 'DungeonHelper',
    description:
      'RAG assistant for Destiny 2 dungeon mechanics — OpenAI embeddings + Pinecone retrieval with streaming Claude answers, plus Zod validation, rate limiting, and response caching.',
    techStack: ['RAG', 'OpenAI', 'Pinecone', 'Claude', 'Next.js', 'TypeScript'],
    kicker: 'RAG assistant',
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
