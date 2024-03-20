import { ActivitiesSection } from './components/ActivitiesSection/ActivitiesSection';
import { BannerSection } from './components/BannerSection/BannerSection';
import { FeedbackSlider } from './components/FeedbackSlider/FeedbackSlider';
import { LeaveRequestSection } from './components/LeaveRequestSection/LeaveRequestSection';
import { NewsSection } from './components/NewsSection/NewsSection';
import { SponsorsSection } from './components/SponsorsSection/SponsorsSection';
import { StatisticsSection } from './components/StatisticsSection/StatisticsSection';

const LandingPage = () => (
  <>
    <BannerSection />
    <NewsSection />
    <StatisticsSection />
    <ActivitiesSection />
    <SponsorsSection />
    <FeedbackSlider />
    <LeaveRequestSection />
  </>
);
export default LandingPage;
