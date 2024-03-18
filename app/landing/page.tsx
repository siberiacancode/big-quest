import { ActivitiesSection } from './components/ActivitiesSection/ActivitiesBlock';
import { BannerSection } from './components/BannerSection/BannerSection';
import { FeedbackSlider } from './components/FeedbackSlider/FeedbackSlider';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { LeaveRequestSection } from './components/LeaveRequestSection/LeaveRequestSection';
import { NewsSection } from './components/NewsSection/NewsSection';
import { SponsorsSection } from './components/SponsorsSection/SponsorsSection';
import { StatisticsSection } from './components/StatisticsSection/StatisticsSection';

const LandingPage = () => (
  <div>
    <Header />
    <BannerSection />
    <NewsSection />
    <StatisticsSection />
    <ActivitiesSection />
    <SponsorsSection />
    <FeedbackSlider />
    <LeaveRequestSection />
    <Footer />
  </div>
);
export default LandingPage;
