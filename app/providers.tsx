'use client';

import { QueryProvider } from '@/utils/contexts/query';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <QueryProvider>{children}</QueryProvider>
);

export default Providers;
