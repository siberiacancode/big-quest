import { YMaps } from '@pbe/react-yandex-maps';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => (
  <>
    <Header />
    <YMaps>{children}</YMaps>
    <Footer />
  </>
);

export default LandingLayout;
