'use client';

import React from 'react';

import { api } from '@/utils/api/instance';

import type { Session } from './SessionContext';
import { SessionContext } from './SessionContext';

export interface SessionProviderProps {
  children: React.ReactNode;
  defaultSession: Session;
}

export const SessionProvider = ({ children, defaultSession }: SessionProviderProps) => {
  const [session, setSession] = React.useState<Session>(defaultSession);

  const value = React.useMemo(() => ({ session, setSession }), [session, setSession]);

  React.useEffect(() => {
    if (!session.isAuthenticated) return;

    const refreshInterceptor = api.interceptors.response.use(
      (response) => {
        return response.data;
      },
      async (error) => {
        const originalConfig = error.config;
        if (!error.response) return Promise.reject(error);

        if (error.response.status === 401 && !originalConfig._retry) {
          // refresh logic
          originalConfig._retry = true;
          return api.call(originalConfig);
        }

        return Promise.reject(error);
      }
    );

    return () => api.interceptors.response.eject(refreshInterceptor);
  }, [session.isAuthenticated]);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};
