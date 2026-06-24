import { metadataForPath } from '../../../lib/seo';
import LtdCompanyPackage from '../../../views/LtdCompanyPackage';

export const metadata = metadataForPath('/packages/ltd-company-pricing');

export default function Page() {
  return <LtdCompanyPackage />;
}
