import pageConfig from '../../../data/accountsPages/auto-enrolment-pension-contributions.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import Pensions from '../../../views/Pensions';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <Pensions />;
}
