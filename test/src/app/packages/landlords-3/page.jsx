import { metadataForPath } from '../../../lib/seo';
import LandlordsPackage from '../../../views/LandlordsPackage';

export const metadata = metadataForPath('/packages/landlords-3');

export default function Page() {
  return <LandlordsPackage />;
}
