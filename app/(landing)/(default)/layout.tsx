import { Footer } from '../../(components)/Footer/Footer';
import { Header } from '../(components)/Header/Header';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => (
  <>
    <Header cityId='novosibirsk' />
    {children}
    <Footer cityId='novosibirsk' />
  </>
);

export default LandingLayout;
