import pageConfig from '../../../data/accountsPages/payroll-services.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import PayrollServices from '../../../views/PayrollServices';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <PayrollServices />;
}
