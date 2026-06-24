import { metadataForPath } from '../../lib/seo';
import AboutUs from '../../views/AboutUs';

export const metadata = metadataForPath('/about-us');

export default function Page() {
  return <AboutUs />;
}
