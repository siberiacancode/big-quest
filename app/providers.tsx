'use client';

import { QueryProvider } from '@/utils/contexts/query';
import type { SessionProviderProps } from '@/utils/contexts/session';
import { SessionProvider } from '@/utils/contexts/session';

interface ProvidersProps {
  children: React.ReactNode;
  session: Omit<SessionProviderProps, 'children'>;
}

const Providers: React.FC<ProvidersProps> = ({ children, session }) => (
  <QueryProvider>
    <SessionProvider {...session}>{children}</SessionProvider>
  </QueryProvider>
);

export default Providers;
