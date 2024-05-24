import { getDevice, getUserSession } from '@/utils/helpers/server';

import { AppBottomNavigation } from './(components)/AppBottomNavigation/AppBottomNavigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const userSession = getUserSession();
  const device = getDevice();
  const isMobile = device.type === 'mobile';

  return (
    <div className='h-screen min-h-screen overflow-y-auto bg-secondary 2sm:h-full'>
      {/* Здесь должен быть хэдер с поиском и кнопками */}
      <div className='h-fit min-h-full max-w-[880px] xs:m-4 2md:mx-[100px] 2md:my-[60px] 2lg:mx-[200px] xl:mx-auto'>
        {children}
      </div>
      {!!userSession && isMobile && <AppBottomNavigation />}
    </div>
  );
};

export default AppLayout;
