import { metadataForPath } from '../../lib/seo';
import RegisteredAddress from '../../views/RegisteredAddress';

export const metadata = metadataForPath('/registered-address');

export default function Page() {
  return <RegisteredAddress />;
}
