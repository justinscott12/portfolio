export interface Prototype {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  featured: boolean;
}

export const prototypes: Prototype[] = [
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
    techStack: ['Next.js 15', 'TypeScript', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'pgvector', 'MCP', 'Tailwind CSS'],
    githubLink: 'https://github.com/justinscott12/legaltrace',
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
    description: 'Web dashboard for personal finance scenarios with interactive sliders (salary, rent, expenses). Includes an MCP server for Cursor: ask natural-language questions like savings rate, rent affordability, or scenario comparisons. Tools expose get_financial_snapshot, calculate_scenario, compare_scenarios, and rent_affordability. Finance model matches Desmos-style equations (bi-weekly pay, deductions, take-home, savings %).',
    techStack: ['Next.js', 'React', 'TypeScript', 'Python', 'MCP', 'Tailwind'],
    githubLink: 'https://github.com/justinscott12/personal-finance-dashboard',
    featured: true,
  },
];

export function getAllPrototypes(): Prototype[] {
  return prototypes;
}

export function getFeaturedPrototypes(): Prototype[] {
  return prototypes.filter(prototype => prototype.featured);
}

