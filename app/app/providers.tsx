import { UserCredentialsProvider } from './(contexts)';

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <UserCredentialsProvider>{children}</UserCredentialsProvider>
);
