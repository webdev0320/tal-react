import { metadataForPath } from '../../../lib/seo';
import CryptocurrencyTax from '../../../views/CryptocurrencyTax';

export const metadata = metadataForPath('/taxation/cryptocurrency');

export default function Page() {
  return <CryptocurrencyTax />;
}
