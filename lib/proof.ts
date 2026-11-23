export interface ProofPoint {
  value: string;
  label: string;
}

/**
 * Hero proof strip — the four numbers a recruiter should see first. Keep every figure verifiable
 * and update them when they move (as of Oct 12, 2026):
 * - mod downloads: Modrinth creator dashboard / API (Nov 2, 2026: 10,360 across all projects)
 * - election-site users: Google Analytics, 3.8K active users Nov 1–5, 2026 (midterm week; ~2.6K on Nov 4).
 *   Year to date was 5.1K as of Oct 12; GA users don't add across ranges, so don't sum the two.
 * - MCP: npm downloads, last 30 days (201; steady ~6–8/day since the Aug launch spike)
 * - enterprise: Idemia-NSS since Mar 2022 — intern Mar 2022–Apr 2024, full-time since Jun 2024.
 *   The 4+ yrs total includes the internship; the label must say so. \u2011 is a non-breaking hyphen
 *   so "2-year" doesn't split across lines in the 2-column mobile grid.
 */
export const proofPoints: ProofPoint[] = [
  { value: '10,000+', label: 'downloads of my Minecraft mods' },
  { value: '3,800', label: 'users on my live election-results site in midterm week' },
  { value: '200+/mo', label: 'npm downloads of my open-source MCP server' },
  { value: '4+ yrs', label: 'at Idemia-NSS: 2.5 full\u2011time, after a 2\u2011year internship' },
];
