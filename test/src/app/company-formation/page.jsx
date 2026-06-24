import { metadataForPath } from '../../lib/seo';
import CompanyFormation from '../../views/CompanyFormation';

export const metadata = metadataForPath('/company-formation');

export default function Page() {
  return <CompanyFormation />;
}
