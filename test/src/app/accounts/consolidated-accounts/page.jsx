import pageConfig from '../../../data/accountsPages/consolidated-accounts.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import ConsolidatedAccounts from '../../../views/ConsolidatedAccounts';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <ConsolidatedAccounts />;
}
