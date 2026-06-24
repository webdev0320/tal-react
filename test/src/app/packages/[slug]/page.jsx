import PackagePage from '../../../views/PackagePage';
import { metadataForPackageSlug } from '../../../lib/seo-generators';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return metadataForPackageSlug(slug);
}

export default function Page({ params }) {
  return <PackagePage params={params} />;
}
