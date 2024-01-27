'use client';

import React from 'react';

import type { I18nProviderProps } from '@/utils/contexts/i18n';
import { I18nProvider } from '@/utils/contexts/i18n';
import { QueryProvider } from '@/utils/contexts/query';
import type { SessionProviderProps } from '@/utils/contexts/session';
import { SessionProvider } from '@/utils/contexts/session';

interface ProvidersProps {
  children: React.ReactNode;
  session: Omit<SessionProviderProps, 'children'>;
  i18n: Omit<I18nProviderProps, 'children'>;
}

const Providers: React.FC<ProvidersProps> = ({ children, session, i18n }) => (
  <QueryProvider>
    <I18nProvider {...i18n}>
      <SessionProvider {...session}>{children}</SessionProvider>
    </I18nProvider>
  </QueryProvider>
);

export default Providers;
