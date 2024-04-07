import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default LandingLayout;
