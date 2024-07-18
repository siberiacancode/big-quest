import { ActivitiesSection } from '../(components)/ActivitiesSection/ActivitiesSection';
import { BannerSection } from '../(components)/BannerSection/BannerSection';
import { FAQSection } from '../(components)/FAQSection/FAQSection';
import { FeedbackSection } from '../(components)/FeedbackSection/FeedbackSection';
import { LeaveRequestSection } from '../(components)/LeaveRequestSection/LeaveRequestSection';
import { NewsSection } from '../(components)/NewsSection/NewsSection';
import { StatisticsSection } from '../(components)/StatisticsSection/StatisticsSection';

const LandingPage = () => (
  <>
    <BannerSection />
    <NewsSection />
    <StatisticsSection />
    <ActivitiesSection cityId='kemerovo' />
    <FeedbackSection />
    <FAQSection cityId='kemerovo' />
    <LeaveRequestSection />
  </>
);

export default LandingPage;
