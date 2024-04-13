import { getDevice } from '@/utils/helpers/server';

import { ActivitiesMapSection } from '../(components)/ActivitiesMapSection/ActivitiesMapSection';
import { ActivitiesSection } from '../(components)/ActivitiesSection/ActivitiesSection';
import { DesktopBannerSection } from '../(components)/DesktopBannerSection/DesktopBannerSection';
import { FeedbackSection } from '../(components)/FeedbackSection/FeedbackSection';
import { LeaveRequestSection } from '../(components)/LeaveRequestSection/LeaveRequestSection';
import { MobileBannerSection } from '../(components)/MobileBannerSection/MobileBannerSection';
import { NewsSection } from '../(components)/NewsSection/NewsSection';
import { SponsorsSection } from '../(components)/SponsorsSection/SponsorsSection';
import { StatisticsSection } from '../(components)/StatisticsSection/StatisticsSection';

const LandingPage = () => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  return (
    <>
      {isMobile ? <MobileBannerSection /> : <DesktopBannerSection />}
      <NewsSection />
      <StatisticsSection />
      <ActivitiesSection cityId='novosibirsk' />
      <ActivitiesMapSection cityId='novosibirsk' />
      <SponsorsSection />
      <FeedbackSection />
      <LeaveRequestSection />
    </>
  );
};

export default LandingPage;
