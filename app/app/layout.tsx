import { UserCredentialsProvider } from './(contexts)';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <UserCredentialsProvider>{children}</UserCredentialsProvider>
);

export default AppLayout;
