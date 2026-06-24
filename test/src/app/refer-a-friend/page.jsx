import { metadataForPath } from '../../lib/seo';
import ReferAFriend from '../../views/ReferAFriend';

export const metadata = metadataForPath('/refer-a-friend');

export default function Page() {
  return <ReferAFriend />;
}
