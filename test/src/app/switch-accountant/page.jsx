import { metadataForPath } from '../../lib/seo';
import SwitchAccountant from '../../views/SwitchAccountant';

export const metadata = metadataForPath('/switch-accountant');

export default function Page() {
  return <SwitchAccountant />;
}
