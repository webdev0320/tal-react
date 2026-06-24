import { metadataForPath } from '../../lib/seo';
import ContactUs from '../../views/ContactUs';

export const metadata = metadataForPath('/contact-us');

export default function Page() {
  return <ContactUs />;
}
