import { FeedbackSlider } from './components/FeedbackSlider/FeedbackSlider';
import { Footer } from './components/Footer/Footer';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { LeaveRequestBlock } from './components/LeaveRequestBlock/LeaveRequestBlock';
import { NewsBlock } from './components/NewsBlock/NewsBlock';
import { SponsorsBlock } from './components/SponsorsBlock/SponsorsBlock';
import { StatisticsBlock } from './components/StatisticsBlock/StatisticsBlock';

const LandingPage = () => (
  <div>
    <InfoBlock />
    <NewsBlock />
    <StatisticsBlock />
    <SponsorsBlock />
    <FeedbackSlider />
    <LeaveRequestBlock />
    <Footer />
  </div>
);
export default LandingPage;
