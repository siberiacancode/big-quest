import { CITIES } from '@/utils/constants';

import { ActivitiesSection } from '../(components)/ActivitiesSection/ActivitiesSection';
import { BannerSection } from '../(components)/BannerSection/BannerSection';
import { FAQSection } from '../(components)/FAQSection/FAQSection';
import { FeedbackSection } from '../(components)/FeedbackSection/FeedbackSection';
import { LeaveRequestSection } from '../(components)/LeaveRequestSection/LeaveRequestSection';
import { NewsSection } from '../(components)/NewsSection/NewsSection';
import { StatisticsSection } from '../(components)/StatisticsSection/StatisticsSection';

export const generateStaticParams = () => Object.values(CITIES).map((city) => ({ slug: city.id }));

interface LandingCityPageProps {
  params: {
    city: (typeof CITIES)[keyof typeof CITIES]['id'];
  };
}

const LandingCityPage = ({ params }: LandingCityPageProps) => (
  <>
    <BannerSection />
    <NewsSection />
    <StatisticsSection />
    <ActivitiesSection cityId={params.city} />
    <FeedbackSection />
    <FAQSection cityId={params.city} />
    <LeaveRequestSection />
  </>
);

export default LandingCityPage;
