export interface ProofPoint {
  value: string;
  label: string;
}

/**
 * Hero proof strip — the four numbers a recruiter should see first. Keep every figure verifiable
 * and update them when they move (as of Oct 12, 2026):
 * - mod downloads: Modrinth creator dashboard / API (7,571 across all projects)
 * - election-site users: Google Analytics
 * - MCP: npm downloads, last 30 days (201; steady ~6–8/day since the Aug launch spike)
 * - enterprise: Idemia-NSS since Mar 2022 (intern → software engineer)
 */
export const proofPoints: ProofPoint[] = [
  { value: '7,500+', label: 'downloads of my Minecraft mods' },
  { value: '1,300+', label: 'users on my election-results site' },
  { value: '200+/mo', label: 'npm downloads of my open-source MCP server' },
  { value: '4+ yrs', label: 'shipping enterprise software at Idemia-NSS' },
];
