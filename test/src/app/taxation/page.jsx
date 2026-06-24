import { metadataForPath } from '../../lib/seo';
import Taxation from '../../views/Taxation';

export const metadata = metadataForPath('/taxation');

export default function Page() {
  return <Taxation />;
}
