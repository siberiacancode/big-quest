import { AppNavigation } from './(components)/AppNavigation/AppNavigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <div className='h-screen overflow-y-hidden'>
    <div className='h-full overflow-y-auto pb-[100px] xxs:pb-[110px]'>{children}</div>
    <div className='absolute bottom-0 left-0 right-0 z-10 h-[70px] xxs:h-[80px]'>
      <AppNavigation />
    </div>
  </div>
);

export default AppLayout;
