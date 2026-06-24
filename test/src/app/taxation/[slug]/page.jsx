import TaxationSubPage from '../../../views/TaxationSubPage';
import { metadataForTaxationSlug } from '../../../lib/seo-generators';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return metadataForTaxationSlug(slug);
}

export default function Page({ params }) {
  return <TaxationSubPage params={params} />;
}
