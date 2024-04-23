import { CITIES } from '@/utils/constants';
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

export const generateStaticParams = () => Object.values(CITIES).map((city) => ({ slug: city.id }));

interface LandingCityPageProps {
  params: {
    city: (typeof CITIES)[keyof typeof CITIES]['id'];
  };
}

const LandingCityPage = ({ params }: LandingCityPageProps) => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  return (
    <>
      {isMobile ? <MobileBannerSection /> : <DesktopBannerSection />}
      <NewsSection isMobile={isMobile} />
      <StatisticsSection />
      <ActivitiesSection cityId={params.city} />
      <ActivitiesMapSection cityId={params.city} />
      <SponsorsSection />
      <FeedbackSection />
      <LeaveRequestSection />
    </>
  );
};

export default LandingCityPage;
