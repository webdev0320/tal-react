import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { createMetadata, stripHtml } from '../lib/seo.js';
import { industryPages } from '../data/industryPages/index.js';
import { taxationSeo } from '../data/seo/taxationSeo.js';
import { packagesSeo } from '../data/seo/packagesSeo.js';

const publicDir = path.join(process.cwd(), 'public');

/**
 * @param {string} slugPath
 * @returns {{ title?: string, content?: string } | null}
 */
export function readWpPageData(slugPath) {
  const filePath = path.join(publicDir, 'wp-data', `${slugPath}.json`);
  if (!existsSync(filePath)) return null;

  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata}
 */
export function metadataForTaxationSlug(slug) {
  const seo = taxationSeo[slug];

  if (seo) {
    return createMetadata({
      title: seo.title,
      description: seo.description || seo.subtitle,
      path: `/taxation/${slug}`,
      keywords: seo.keywords,
    });
  }

  const wpData = readWpPageData(`taxation/${slug}`);
  const title = wpData?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return createMetadata({
    title,
    description: stripHtml(wpData?.content) || `Expert ${title.toLowerCase()} advice from Tal & Co chartered accountants in London.`,
    path: `/taxation/${slug}`,
    keywords: ['tax services uk', 'tax accountants london', slug.replace(/-/g, ' ')],
  });
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata}
 */
export function metadataForPackageSlug(slug) {
  const seo = packagesSeo[slug];

  if (seo) {
    return createMetadata({
      title: seo.title,
      description: seo.description,
      path: `/packages/${slug}`,
      keywords: seo.keywords,
    });
  }

  const wpData = readWpPageData(`packages/${slug}`) || readWpPageData(slug);
  const title = wpData?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return createMetadata({
    title,
    description: stripHtml(wpData?.content) || `Accounting package for ${title.toLowerCase()} from Taxaccolega. Fixed fees and expert UK support.`,
    path: `/packages/${slug}`,
    keywords: ['accounting packages uk', 'fixed fee accountant', slug.replace(/-/g, ' ')],
  });
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata}
 */
export function metadataForIndustrySlug(slug) {
  const config = industryPages[slug];
  const wpData = readWpPageData(`industries/${slug}`);
  const title =
    config?.title ||
    wpData?.title ||
    slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const description =
    config?.subtitle ||
    stripHtml(wpData?.content) ||
    `Specialist ${title.toLowerCase()} accountants in London. Industry-specific tax, bookkeeping and compliance support from Tal & Co.`;

  return createMetadata({
    title: `${title} Accountants UK`,
    description,
    path: `/industries/${slug}`,
    keywords: [`${title.toLowerCase()} accountant`, 'industry accountant uk', 'specialist accountant london'],
  });
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata | null}
 */
export function metadataForBlogSlug(slug) {
  const blogsPath = path.join(publicDir, 'blogs.json');
  if (!existsSync(blogsPath)) return null;

  try {
    const data = JSON.parse(readFileSync(blogsPath, 'utf8'));
    const post = data.posts?.find((entry) => entry.slug === slug);
    if (!post) return null;

    const description =
      stripHtml(post.excerpt) ||
      stripHtml(post.content) ||
      `Read ${post.title} — tax and accounting insights from Taxaccolega.`;

    return createMetadata({
      title: post.title,
      description,
      path: `/blog/${slug}`,
      type: 'article',
      openGraph: {
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
      },
    });
  } catch {
    return null;
  }
}

/**
 * @param {string[]} slugParts
 * @returns {import('next').Metadata}
 */
export function metadataForCatchAllSlug(slugParts) {
  const slugPath = slugParts.join('/');
  const wpData = readWpPageData(slugPath);
  const fallbackTitle = slugParts
    .at(-1)
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const title = wpData?.title || fallbackTitle || 'Our Services';
  const description =
    stripHtml(wpData?.content) ||
    `Expert ${title.toLowerCase()} services from Tal & Co chartered accountants. HMRC-compliant accounting and tax support in London.`;

  return createMetadata({
    title,
    description,
    path: `/${slugPath}`,
    keywords: ['accountants london', 'chartered accountants', title.toLowerCase()],
  });
}
