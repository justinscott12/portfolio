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
    id: 'dungeonhelper',
    title: 'Day 1 Mechanics Assistant',
    description: 'AI-powered RAG application for Destiny 2 teams. Built with Next.js, Pinecone vector database, and Anthropic Claude API. Implements semantic search with real-time streaming responses.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Pinecone', 'Anthropic Claude', 'OpenAI Embeddings', 'RAG'],
    featured: true,
  },
  {
    id: 'golfcaddie',
    title: 'Golf Caddie - AI Strategy',
    description: 'AI-powered golf caddie that generates personalized hole-by-hole strategies. Uses LangGraph agent orchestration, vision AI for photo analysis, and real-time strategy adaptation.',
    techStack: ['Next.js 15', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'pgvector', 'TypeScript'],
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
    description: 'Client-side PDF toolkit web application. All processing happens in the browser for privacy. Features merge, split, compress, rotate, and convert operations.',
    techStack: ['Next.js 16', 'TypeScript', 'pdf-lib', 'pdfjs-dist', 'jspdf', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'langgraph-mcp',
    title: 'LangGraph + MCP Example',
    description: 'Educational project demonstrating LangGraph agents interacting with MCP (Model Context Protocol) servers. Shows core concepts of both technologies.',
    techStack: ['Python', 'LangGraph', 'LangChain', 'MCP', 'FastMCP', 'OpenAI'],
    featured: false,
  },
  {
    id: 'walrus',
    title: 'Walrus - Crypto Whale Tracker',
    description: 'Full-stack blockchain wallet tracking and analytics platform. Tracks wallet addresses across multiple chains (BTC, ETH, SOL, BSC, Polygon), monitors transactions, and sends multi-channel alerts (Telegram, Discord, Email, SMS, Push). Features ML insights, API access, and Stripe payment integration.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Stripe', 'WebSocket', 'JWT'],
    featured: true,
  },
];

export function getAllPrototypes(): Prototype[] {
  return prototypes;
}

export function getFeaturedPrototypes(): Prototype[] {
  return prototypes.filter(prototype => prototype.featured);
}

