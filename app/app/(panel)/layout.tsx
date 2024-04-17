import { AppNavigation } from './(components)/AppNavigation/AppNavigation';

interface AppProfileLayoutProps {
  children: React.ReactNode;
}

const AppProfileLayout = ({ children }: AppProfileLayoutProps) => (
  <>
    {children}
    <div className='absolute bottom-0 left-0 right-0 h-[70px] xxs:h-[80px]'>
      <AppNavigation />
    </div>
  </>
);

export default AppProfileLayout;
