import { metadataForPath } from '../../lib/seo';
import Banks from '../../views/Banks';

export const metadata = metadataForPath('/banks');

export default function Page() {
  return <Banks />;
}
