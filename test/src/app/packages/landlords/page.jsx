import { metadataForPath } from '../../../lib/seo';
import LandlordsPackage from '../../../views/LandlordsPackage';

export const metadata = metadataForPath('/packages/landlords');

export default function Page() {
  return <LandlordsPackage />;
}
