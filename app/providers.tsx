'use client';

import React from 'react';

import type { I18nProviderProps, SessionProviderProps, ThemeProviderProps } from '@/utils/contexts';
import { I18nProvider, QueryProvider, SessionProvider, ThemeProvider } from '@/utils/contexts';

interface ProvidersProps {
  children: React.ReactNode;
  session: Omit<SessionProviderProps, 'children'>;
  i18n: Omit<I18nProviderProps, 'children'>;
  theme: Omit<ThemeProviderProps, 'children'>;
}

const Providers: React.FC<ProvidersProps> = ({ children, session, i18n, theme }) => (
  <QueryProvider>
    <I18nProvider {...i18n}>
      <ThemeProvider {...theme}>
        <SessionProvider {...session}>{children}</SessionProvider>
      </ThemeProvider>
    </I18nProvider>
  </QueryProvider>
);

export default Providers;
