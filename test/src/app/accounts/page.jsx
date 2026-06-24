import { metadataForPath } from '../../lib/seo';
import Accounts from '../../views/Accounts';

export const metadata = metadataForPath('/accounts');

export default function Page() {
  return <Accounts />;
}
