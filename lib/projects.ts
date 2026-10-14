export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  /** Label for `link` (default "Visit site"). */
  linkLabel?: string;
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
 * Proof figures as of Oct 12, 2026: election-site users from Google Analytics (5.1K active users, Jan 1–Oct 12); mod downloads from
 * Modrinth (7,571 across all projects; Advancement Tracker 4,426);
 * MCP server listed on npm (0.1.2) and the official MCP Registry.
 */
export const projects: Project[] = [
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
    proof: '5,000+ users this year',
    description:
      'Live election-night results with a poll-closing schedule, prediction-market odds for every major race, and House and Senate control odds. Plus state-by-state electoral maps for all 25 presidential elections since 1928, an 11-layer demographics map, 51 state hubs, and two quizzes.',
    techStack: ['Next.js', 'TypeScript', 'Interactive SVG maps', 'Prediction-market odds', 'Census & BLS data', 'Netlify'],
    link: 'https://us-election-tracker.com',
    image: '/projects/us-election-tracker.webp',
    imageAlt: 'US Election Tracker — 2024 electoral map with the 270-to-win bar and state-by-state results',
    featured: true,
  },
  {
    id: 'minecraft-mods',
    title: 'Minecraft Fabric Mods',
    proof: '7,500+ downloads',
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
    proof: 'Visitor info site for a holiday light show',
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
