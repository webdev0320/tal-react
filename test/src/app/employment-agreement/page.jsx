import { metadataForPath } from '../../lib/seo';
import EmploymentAgreement from '../../views/EmploymentAgreement';

export const metadata = metadataForPath('/employment-agreement');

export default function Page() {
  return <EmploymentAgreement />;
}
