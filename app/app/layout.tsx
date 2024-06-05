import { AppProviders } from './providers';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => <AppProviders>{children}</AppProviders>;

export default AppLayout;
