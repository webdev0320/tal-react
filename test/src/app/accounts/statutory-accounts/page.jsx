import pageConfig from '../../../data/accountsPages/statutory-accounts.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import StatutoryAccounts from '../../../views/StatutoryAccounts';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <StatutoryAccounts />;
}
