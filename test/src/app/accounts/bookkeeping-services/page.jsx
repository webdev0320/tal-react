import pageConfig from '../../../data/accountsPages/bookkeeping-services.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import BookkeepingServices from '../../../views/BookkeepingServices';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <BookkeepingServices />;
}
