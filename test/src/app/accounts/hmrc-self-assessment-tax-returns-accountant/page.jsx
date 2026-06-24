import pageConfig from '../../../data/accountsPages/hmrc-self-assessment-tax-returns-accountant.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import SelfAssessment from '../../../views/SelfAssessment';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <SelfAssessment />;
}
