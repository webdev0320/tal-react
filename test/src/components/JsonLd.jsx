import { SITE, absoluteUrl } from '../lib/seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: absoluteUrl(SITE.defaultImage),
  image: absoluteUrl(SITE.defaultImage),
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  priceRange: '££',
  sameAs: [
    'https://www.facebook.com/Taxaccolega',
    'https://twitter.com/Taxaccolega',
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
