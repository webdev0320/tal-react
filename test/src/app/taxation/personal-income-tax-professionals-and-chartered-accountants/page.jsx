import { metadataForPath } from '../../../lib/seo';
import PersonalIncomeTax from '../../../views/PersonalIncomeTax';

export const metadata = metadataForPath('/taxation/personal-income-tax-professionals-and-chartered-accountants');

export default function Page() {
  return <PersonalIncomeTax />;
}
