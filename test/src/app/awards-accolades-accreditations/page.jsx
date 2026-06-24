import { metadataForPath } from '../../lib/seo';
import Awards from '../../views/Awards';

export const metadata = metadataForPath('/awards-accolades-accreditations');

export default function Page() {
  return <Awards />;
}
