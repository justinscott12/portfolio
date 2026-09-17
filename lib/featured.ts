import { projects, type Project } from './projects';
import { prototypes } from './prototypes';

/**
 * Curated homepage "Featured Work" lineup, in display order.
 * Spans projects + prototypes; edit this list to change what headlines the site.
 * (Project and Prototype are structurally identical, so both render via ProjectCard.)
 */
const HOMEPAGE_FEATURED_IDS = [
  'us-election-tracker',
  'personal-finance-dashboard',
  'legaltrace',
];

export function getHomepageFeatured(): Project[] {
  const all: Project[] = [...projects, ...prototypes];
  return HOMEPAGE_FEATURED_IDS.map((id) =>
    all.find((item) => item.id === id),
  ).filter((item): item is Project => Boolean(item));
}
