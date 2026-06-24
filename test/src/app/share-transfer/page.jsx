import { metadataForPath } from '../../lib/seo';
import ShareTransfer from '../../views/ShareTransfer';

export const metadata = metadataForPath('/share-transfer');

export default function Page() {
  return <ShareTransfer />;
}
