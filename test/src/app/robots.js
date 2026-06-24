import { ALLOW_INDEXING, SITE } from '../lib/seo.js';

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  if (ALLOW_INDEXING) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/wp-data/'],
      },
      sitemap: `${SITE.url}/sitemap.xml`,
      host: SITE.url,
    };
  }

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };
}
