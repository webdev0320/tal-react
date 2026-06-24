import DynamicWpPage from '../../views/DynamicWpPage';
import { metadataForCatchAllSlug } from '../../lib/seo-generators';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return metadataForCatchAllSlug(slug);
}

export default function Page() {
  return <DynamicWpPage />;
}
