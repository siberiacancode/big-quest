'use server';

import { checkMobileDevice } from '@/utils/helpers/checkMobileDevice';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = checkMobileDevice();

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <DesktopLayout>{children}</DesktopLayout>
  );
};

export default MainLayout;
