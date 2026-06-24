import { metadataForPath } from '../../lib/seo';
import Software from '../../views/Software';

export const metadata = metadataForPath('/software');

export default function Page() {
  return <Software />;
}
