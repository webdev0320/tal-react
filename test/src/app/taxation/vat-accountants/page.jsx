import { metadataForPath } from '../../../lib/seo';
import VatAccountants from '../../../views/VatAccountants';

export const metadata = metadataForPath('/taxation/vat-accountants');

export default function Page() {
  return <VatAccountants />;
}
