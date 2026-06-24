import { metadataForPath } from '../../lib/seo';
import ScheduleCall from '../../views/ScheduleCall';

export const metadata = metadataForPath('/schedule-a-phone-call-or-video-meeting');

export default function Page() {
  return <ScheduleCall />;
}
