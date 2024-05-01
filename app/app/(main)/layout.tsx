import { getUserSession } from '@/utils/helpers/server';

import { AppBottomNavigation } from './(components)/AppBottomNavigation/AppBottomNavigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const userSession = getUserSession();

  return (
    <div className='h-screen'>
      <div className='h-full overflow-y-auto pb-[100px] xxs:pb-[110px]'>{children}</div>
      {!!userSession && <AppBottomNavigation />}
    </div>
  );
};

export default AppLayout;
