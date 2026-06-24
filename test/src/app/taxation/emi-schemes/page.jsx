import { metadataForPath } from '../../../lib/seo';
import EmiSchemesPage from '../../../views/EmiSchemes';

export const metadata = metadataForPath('/taxation/emi-schemes');

export default function Page() {
  return <EmiSchemesPage />;
}
