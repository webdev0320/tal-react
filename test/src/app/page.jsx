import Home from '../Home';
import { metadataForPath } from '../lib/seo';

export const metadata = metadataForPath('/');

export default function Page() {
  return <Home />;
}
