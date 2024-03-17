import { ActivitiesBlock } from './components/ActivitiesBlock/ActivitiesBlock';
import { FeedbackSlider } from './components/FeedbackSlider/FeedbackSlider';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { LeaveRequestBlock } from './components/LeaveRequestBlock/LeaveRequestBlock';
import { NewsBlock } from './components/NewsBlock/NewsBlock';
import { SponsorsBlock } from './components/SponsorsBlock/SponsorsBlock';
import { StatisticsBlock } from './components/StatisticsBlock/StatisticsBlock';

const LandingPage = () => (
  <div>
    <Header />
    <InfoBlock />
    <NewsBlock />
    <StatisticsBlock activitiesAmount={3000} awardsAmount={1150} participantsAmount={10000} />
    <ActivitiesBlock />
    <SponsorsBlock />
    <FeedbackSlider />
    <LeaveRequestBlock />
    <Footer />
  </div>
);
export default LandingPage;
