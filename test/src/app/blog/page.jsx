import { metadataForPath } from '../../lib/seo';
import Blog from '../../views/Blog';

export const metadata = metadataForPath('/blog');

export default function Page() {
  return <Blog />;
}
