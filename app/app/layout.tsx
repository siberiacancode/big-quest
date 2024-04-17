import { getDevice } from '@/utils/helpers/server';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  // TODO add blocker screen for desktop
  return isMobile ? children : null;
};

export default AppLayout;
