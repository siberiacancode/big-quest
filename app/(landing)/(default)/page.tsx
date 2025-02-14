import { ActivitiesMapSection } from '../(components)/ActivitiesMapSection/ActivitiesMapSection';
import { ActivitiesSection } from '../(components)/ActivitiesSection/ActivitiesSection';
import { BannerSection } from '../(components)/BannerSection/BannerSection';
import { FAQSection } from '../(components)/FAQSection/FAQSection';
import { FeedbackSection } from '../(components)/FeedbackSection/FeedbackSection';
import { LeaveRequestSection } from '../(components)/LeaveRequestSection/LeaveRequestSection';
import { NewsSection } from '../(components)/NewsSection/NewsSection';
import { SponsorsSection } from '../(components)/SponsorsSection/SponsorsSection';
import { StatisticsSection } from '../(components)/StatisticsSection/StatisticsSection';

const LandingPage = () => (
  <>
    <BannerSection />
    <NewsSection />
    <StatisticsSection />
    <ActivitiesSection cityId='novosibirsk' />
    <ActivitiesMapSection cityId='novosibirsk' />
    <SponsorsSection />
    <FeedbackSection />
    <FAQSection cityId='novosibirsk' />
    <LeaveRequestSection />
  </>
);

export default LandingPage;
