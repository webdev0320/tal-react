import { metadataForPath } from '../../../lib/seo';
import SelfAssessment from '../../../views/SelfAssessment';

export const metadata = metadataForPath('/accounts/self-assessment');

export default function Page() {
  return <SelfAssessment />;
}
