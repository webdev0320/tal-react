import { metadataForPath } from '../../../lib/seo';
import CompanyTaxReturn from '../../../views/CompanyTaxReturn';

export const metadata = metadataForPath('/taxation/company-tax-return-accountants');

export default function Page() {
  return <CompanyTaxReturn />;
}
