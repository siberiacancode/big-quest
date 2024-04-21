import { AppBottomNavigation } from './(components)/AppBottomNavigation/AppBottomNavigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <div className='h-screen'>
    <div className='h-full overflow-y-auto pb-[100px] xxs:pb-[110px]'>{children}</div>
    <AppBottomNavigation />
  </div>
);

export default AppLayout;
