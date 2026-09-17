export interface Prototype {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  /** Optional screenshot (16:9 WebP in /public/projects). Most prototypes have no live site. */
  image?: string;
  imageAlt?: string;
  /** Short label shown on the branded cover when there's no screenshot. */
  kicker?: string;
  featured: boolean;
}

export const prototypes: Prototype[] = [
  {
    id: 'otto',
    title: 'Otto — Vehicle Maintenance',
    description:
      'B2C mobile-first app (Expo) + Fastify API for car maintenance reminders and service history. Decodes VINs via NHTSA vPIC, runs an offline SQLite garage with a calibration wizard, supports due-by-mileage AND due-by-date logic, local notifications, and receipt photos. Optional cloud sync, Stripe Pro tier, and PDF export. Monorepo with shared Zod schemas between mobile and API.',
    techStack: ['TypeScript', 'Expo', 'React Native', 'Fastify', 'SQLite', 'Zod', 'Stripe', 'AWS S3'],
    featured: true,
  },
  {
    id: 'beat-sync-clips',
    title: 'Beat-Sync Clips',
    description:
      'Hosted SaaS — "one video from your clips, cut to the beat." Upload a track plus video clips, librosa transient detection drives cut points, FFmpeg renders a single MP4 (9:16 or original aspect) with optional flash/zoom on cuts. Next.js + Tailwind frontend with Clerk auth, FastAPI backend handing off to RQ + Redis workers, Postgres for state, S3-compatible object storage, Stripe Checkout + webhooks, and slowapi rate limits.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'RQ', 'FFmpeg', 'librosa', 'Stripe', 'Clerk', 'S3'],
    featured: true,
  },
  {
    id: 'golf-swing-ai',
    title: 'Golf Swing AI',
    description:
      'Personal iOS app (Expo) + local Node server for golf swing analysis. Records 120/240 fps slo-mo on phone, compares side-by-side against baseline swings, and gets Claude-only vision coaching feedback. Server runs FFmpeg locally over LAN; designed to keep video processing on-device and on-network rather than in the cloud.',
    techStack: ['TypeScript', 'Expo', 'React Native', 'Node.js', 'FFmpeg', 'Claude', 'Vision'],
    featured: true,
  },
  {
    id: 'monthly-money',
    title: 'Monthly Money',
    description:
      'Local-first CLI + web UI that turns one month of bank statements into a report card. Upload PDF or CSV statements, enter income, get F → S letter grades per spending category and savings rate. Claude (no GPT) parses the statements and categorizes rows; grading itself is deterministic against a YAML benchmarks file so results are reproducible.',
    techStack: ['Node.js', 'TypeScript', 'Claude', 'PDF Parsing', 'YAML', 'CLI', 'Web UI'],
    featured: true,
  },
  {
    id: 'golfcaddie',
    title: 'AI Golf Caddie',
    description: 'Mobile-first Progressive Web App that provides personalized golf strategy recommendations using AI. Generates pre-round hole-by-hole strategies for all 18 holes (teebox, fairway, chip) and adapts them in real-time during play based on photos, distances, weather, and lie conditions. Features LangGraph agent orchestration, vision AI for course photo analysis, handicap-adjusted strategies, and real-time strategy updates.',
    techStack: ['Next.js 15', 'React 19', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'pgvector', 'TypeScript', 'Tailwind CSS 4'],
    githubLink: 'https://github.com/justinscott12/ai-golf-caddie',
    featured: true,
  },
  {
    id: 'credfinder',
    title: 'CredFinder - Security Agent',
    description: 'AI-powered security agent that detects hardcoded credentials in code repositories. Automatically stores credentials as environment variables and fixes code references.',
    techStack: ['Python', 'LangChain', 'LangGraph', 'OpenAI API', 'GitPython', 'YAML', 'CLI'],
    featured: true,
  },
  {
    id: 'pdftoolkit',
    title: 'PDF Toolkit',
    description: 'Free, privacy-focused PDF toolkit web application with 10+ tools including merge, split, compress, rotate, extract pages, watermark, and convert operations. All PDF processing happens client-side in the browser for complete privacy - files never leave the user\'s device. Built with Next.js 16, features SEO optimization, Google AdSense integration, and responsive design.',
    techStack: ['Next.js 16', 'TypeScript', 'React 19', 'pdf-lib', 'pdfjs-dist', 'jspdf', 'Tailwind CSS', 'shadcn/ui'],
    githubLink: 'https://github.com/justinscott12/pdf-toolkit',
    featured: true,
  },
  {
    id: 'legaltrace',
    title: 'LegalTrace - Lease Compliance',
    description: 'AI-powered commercial lease compliance checker for Florida property managers and landlords. Uses agentic AI with LangGraph to analyze lease agreements against Florida Chapter 83 statutes, identifying compliance issues and providing actionable recommendations. Features self-correcting workflows, human-in-the-loop interrupts, state-aware retrieval planning, and real-time reasoning trace. Built with FastAPI, Next.js 15, PostgreSQL with pgvector, and MCP protocol.',
    techStack: ['LangGraph', 'FastAPI', 'Next.js 15', 'pgvector', 'MCP', 'TypeScript'],
    githubLink: 'https://github.com/justinscott12/legaltrace',
    kicker: 'Agentic AI',
    featured: true,
  },
  {
    id: 'walrus',
    title: 'Walrus - Crypto Whale Tracker',
    description: 'Full-stack blockchain wallet tracking and analytics platform. Tracks wallet addresses across multiple chains (BTC, ETH, SOL, BSC, Polygon), monitors transactions, and sends multi-channel alerts (Telegram, Discord, Email, SMS, Push). Features ML insights, API access, and Stripe payment integration.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Stripe', 'WebSocket', 'JWT'],
    featured: true,
  },
  {
    id: 'movefinder',
    title: 'MoveFinder - Relocation Assistant',
    description: 'AI-powered relocation assistant. Chat to describe where you want to move (climate, cost, coast, mountains, etc.); the app extracts criteria, ranks US cities from a static dataset, and shows candidates on a map. Pick a city, then describe neighborhood preferences (walkable, safe, family-friendly, transit)—get ranked neighborhoods for that city, displayed on the same map.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind', 'OpenAI', 'Mapbox GL JS', 'REST API'],
    githubLink: 'https://github.com/justinscott12/movefinder',
    featured: true,
  },
  {
    id: 'personal-finance-dashboard',
    title: 'Personal Finance Dashboard',
    description: 'Personal-finance scenario dashboard with interactive sliders (salary, rent, expenses), plus a Model Context Protocol server that lets an AI assistant answer natural-language questions — savings rate, rent affordability, scenario comparisons — via typed tools (get_financial_snapshot, calculate_scenario, compare_scenarios).',
    techStack: ['MCP', 'Next.js', 'TypeScript', 'Python', 'React', 'Tailwind'],
    githubLink: 'https://github.com/justinscott12/personal-finance-dashboard',
    kicker: 'MCP server',
    featured: true,
  },
];

export function getAllPrototypes(): Prototype[] {
  return prototypes;
}

export function getFeaturedPrototypes(): Prototype[] {
  return prototypes.filter(prototype => prototype.featured);
}

