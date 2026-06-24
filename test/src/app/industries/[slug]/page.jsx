import { notFound } from 'next/navigation';

import IndustryPage from '../../../views/IndustryPage';
import { getIndustryContentBySlug, listIndustryContentSlugs } from '../../../lib/industry-content';
import { getIndustryPageData } from '../../../lib/industry-pages';
import { metadataForIndustrySlug } from '../../../lib/seo-generators';

export async function generateStaticParams() {
  return listIndustryContentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return metadataForIndustrySlug(slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const industryContent = await getIndustryContentBySlug(slug);

  if (!industryContent) {
    notFound();
  }

  const pageData = getIndustryPageData(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <IndustryPage
      pageData={{
        ...pageData,
        title: industryContent.title || pageData.title,
        subtitle: industryContent.subtitle || pageData.subtitle,
        contentHtml: industryContent.contentHtml,
        faqs: industryContent.faqs.length > 0 ? industryContent.faqs : pageData.faqs,
      }}
    />
  );
}
