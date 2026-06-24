import { metadataForPath } from '../../../lib/seo';
import CharitiesPackage from '../../../views/CharitiesPackage';

export const metadata = metadataForPath('/packages/charities-pricing');

export default function Page() {
  return <CharitiesPackage />;
}
