import { metadataForPath } from '../../lib/seo';
import Legal from '../../views/Legal';

export const metadata = metadataForPath('/legal');

export default function Page() {
  return <Legal />;
}
