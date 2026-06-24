/** @typedef {import('next').Metadata} Metadata */

import { getStaticPageSeo } from '../data/seo/staticPages.js';

export const SITE = {
  name: 'Taxaccolega',
  legalName: 'Taxaccolega Chartered Accountants',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://staging.taxaccolega.co.uk',
  locale: 'en_GB',
  defaultImage: '/images/favicon.png',
  defaultDescription:
    'Expert chartered accountancy services in London. Tax returns, bookkeeping, payroll, VAT, company formation and more. Rated 5-stars on Google & Trustpilot.',
  defaultKeywords: [
    'accountants london',
    'chartered accountants',
    'tax return',
    'bookkeeping',
    'HMRC',
    'small business accountant',
  ],
  phone: '020 8127 0728',
  email: 'info@taxaccolega.co.uk',
  address: {
    street: '187a London Road',
    city: 'Croydon',
    region: 'Surrey',
    postalCode: 'CR0 2RJ',
    country: 'GB',
  },
};

/** Set NEXT_PUBLIC_ALLOW_INDEXING=true when launching to production. */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

export function getRobots() {
  if (ALLOW_INDEXING) {
    return {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    };
  }

  return {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  };
}

/**
 * @param {string} path
 * @returns {string}
 */
export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

/**
 * Strip HTML and collapse whitespace for meta descriptions.
 * @param {string} html
 * @param {number} [maxLength=160]
 * @returns {string}
 */
export function stripHtml(html, maxLength = 160) {
  const text = String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#8217;|&amp;|&quot;|&lt;|&gt;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}…`;
}

/**
 * @param {object} options
 * @param {string} options.title
 * @param {string} [options.description]
 * @param {string} [options.path]
 * @param {string[]} [options.keywords]
 * @param {string} [options.image]
 * @param {'website'|'article'} [options.type]
 * @param {Record<string, string>} [options.openGraph]
 * @returns {Metadata}
 */
export function createMetadata({
  title,
  description,
  path = '/',
  keywords,
  image,
  type = 'website',
  openGraph = {},
}) {
  const metaDescription = description || SITE.defaultDescription;
  const url = absoluteUrl(path);
  const imagePath = image || SITE.defaultImage;
  const imageUrl = imagePath.startsWith('http') ? imagePath : absoluteUrl(imagePath);

  return {
    title,
    description: metaDescription,
    keywords: keywords?.length ? keywords : SITE.defaultKeywords,
    alternates: {
      canonical: url,
    },
    robots: getRobots(),
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description: metaDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

/**
 * @param {{ title: string, subtitle?: string, path: string, heroImage?: string }} pageConfig
 * @param {string[]} [keywords]
 * @returns {Metadata}
 */
export function createAccountPageMetadata(pageConfig, keywords = []) {
  const description =
    pageConfig.subtitle ||
    `Professional ${pageConfig.title.toLowerCase()} from ${SITE.legalName}. HMRC-compliant support for UK businesses. Book a free consultation.`;

  return createMetadata({
    title: pageConfig.title,
    description,
    path: pageConfig.path,
    image: pageConfig.heroImage,
    keywords: [
      ...keywords,
      'accountants london',
      'chartered accountants',
      'UK accounting services',
    ],
  });
}

/**
 * @param {string} path
 * @param {import('../data/seo/staticPages.js').StaticPageSeo} seo
 * @returns {Metadata}
 */
export function createStaticPageMetadata(path, seo) {
  return createMetadata({
    title: seo.title,
    description: seo.description,
    path,
    keywords: seo.keywords,
    image: seo.image,
    type: seo.type,
  });
}

/**
 * @param {string} path
 * @returns {Metadata}
 */
export function metadataForPath(path) {
  const seo = getStaticPageSeo(path);

  if (seo) {
    return createStaticPageMetadata(path, seo);
  }

  const label = path
    .split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return createMetadata({
    title: label || 'Page',
    description: `Expert ${label?.toLowerCase() || 'accounting'} services from Taxaccolega. HMRC-compliant support for UK businesses.`,
    path,
  });
}

export const rootMetadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | London Chartered Accountants`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  keywords: SITE.defaultKeywords,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: SITE.defaultImage,
    apple: SITE.defaultImage,
  },
  robots: getRobots(),
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | London Chartered Accountants`,
    description: SITE.defaultDescription,
    images: [
      {
        url: absoluteUrl(SITE.defaultImage),
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | London Chartered Accountants`,
    description: SITE.defaultDescription,
    images: [absoluteUrl(SITE.defaultImage)],
  },
  alternates: {
    canonical: SITE.url,
  },
  category: 'Accounting',
};
