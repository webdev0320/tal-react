import { metadataForPath } from '../../../lib/seo';
import BookkeepingServices from '../../../views/BookkeepingServices';

export const metadata = metadataForPath('/accounts/bookkeeping');

export default function Page() {
  return <BookkeepingServices />;
}
