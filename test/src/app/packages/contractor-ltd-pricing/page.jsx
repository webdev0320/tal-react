import { metadataForPath } from '../../../lib/seo';
import ContractorLtdPackage from '../../../views/ContractorLtdPackage';

export const metadata = metadataForPath('/packages/contractor-ltd-pricing');

export default function Page() {
  return <ContractorLtdPackage />;
}
