import { metadataForPath } from '../../../lib/seo';
import SoleTraderPackage from '../../../views/SoleTraderPackage';

export const metadata = metadataForPath('/packages/sole-trader');

export default function Page() {
  return <SoleTraderPackage />;
}
