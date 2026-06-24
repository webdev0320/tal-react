import { metadataForPath } from '../../../lib/seo';
import AnnualAccounts from '../../../views/AnnualAccounts';

export const metadata = metadataForPath('/accounts/annual-accounts');

export default function Page() {
  return <AnnualAccounts />;
}
