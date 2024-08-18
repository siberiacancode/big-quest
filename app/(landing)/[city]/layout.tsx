import { NotFoundComponent } from '@/components/common';
import { CITIES, ROUTES } from '@/utils/constants';

import { Footer } from '../(components)/Footer/Footer';
import { Header } from '../(components)/Header/Header';

interface LandingCityLayoutProps {
  children: React.ReactNode;
  params: {
    city: (typeof CITIES)[keyof typeof CITIES]['id'];
  };
}

const LandingCityLayout = ({ children, params }: LandingCityLayoutProps) => {
  if (!Object.keys(CITIES).includes(params.city.toUpperCase())) {
    return <NotFoundComponent link={ROUTES.LANDING.ROOT} />;
  }

  return (
    <>
      <Header cityId={params.city} />
      {children}
      <Footer cityId={params.city} />
    </>
  );
};

export default LandingCityLayout;
