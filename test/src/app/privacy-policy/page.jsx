import { metadataForPath } from '../../lib/seo';
import PrivacyPolicy from '../../views/PrivacyPolicy';

export const metadata = metadataForPath('/privacy-policy');

export default function Page() {
  return <PrivacyPolicy />;
}
