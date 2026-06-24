import { metadataForPath } from '../../lib/seo';
import CompanySecretarial from '../../views/CompanySecretarial';

export const metadata = metadataForPath('/company-secretarial');

export default function Page() {
  return <CompanySecretarial />;
}
