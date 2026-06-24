import { metadataForPath } from '../../../lib/seo';
import InheritanceTaxPlanning from '../../../views/InheritanceTaxPlanning';

export const metadata = metadataForPath('/taxation/inheritance-tax-planning');

export default function Page() {
  return <InheritanceTaxPlanning />;
}
