import pageConfig from '../../../data/accountsPages/management-accounts.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import ManagementAccounts from '../../../views/ManagementAccounts';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <ManagementAccounts />;
}
