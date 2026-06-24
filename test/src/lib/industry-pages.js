import { industryPages, industrySlugs } from '../data/industryPages/index.js';

/**
 * @returns {string[]}
 */
export function listIndustrySlugs() {
  return industrySlugs;
}

/**
 * @param {string} slug
 * @returns {import('../data/industryPages/restaurants.js').default | null}
 */
export function getIndustryPageData(slug) {
  return industryPages[slug] || null;
}

/**
 * @param {string} currentSlug
 * @param {number} [limit]
 * @returns {{ title: string; link: string }[]}
 */
export function getIndustrySidebarItems(currentSlug, limit = 3) {
  const page = industryPages[currentSlug];
  if (page?.quickNav) return page.quickNav.slice(0, limit);

  return listIndustrySlugs()
    .filter((slug) => slug !== currentSlug)
    .slice(0, limit)
    .map((slug) => ({
      title: industryPages[slug]?.title || slug,
      link: `/industries/${slug}`,
    }));
}
