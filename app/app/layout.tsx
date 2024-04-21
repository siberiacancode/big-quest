import { getDevice } from '@/utils/helpers/server';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  // TODO move mobile check to middleware
  return isMobile ? children : null;
};

export default AppLayout;
