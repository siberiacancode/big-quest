'use client';

import React from 'react';

import type {
  I18nProviderProps,
  SessionProviderProps,
  ThemeProviderProps,
  UserProviderProps
} from '@/utils/contexts';
import {
  I18nProvider,
  QueryProvider,
  SessionProvider,
  ThemeProvider,
  UserProvider
} from '@/utils/contexts';

interface ProvidersProps {
  children: React.ReactNode;
  session: Omit<SessionProviderProps, 'children'>;
  i18n: Omit<I18nProviderProps, 'children'>;
  user: Omit<UserProviderProps, 'children'>;
  theme: Omit<ThemeProviderProps, 'children'>;
}

export const Providers: React.FC<ProvidersProps> = ({ children, session, i18n, theme, user }) => (
  <QueryProvider>
    <I18nProvider {...i18n}>
      <ThemeProvider {...theme}>
        <SessionProvider {...session}>
          <UserProvider {...user}>{children}</UserProvider>
        </SessionProvider>
      </ThemeProvider>
    </I18nProvider>
  </QueryProvider>
);
