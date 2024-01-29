'use client';

import React from 'react';

import type { Session } from './SessionContext';
import { SessionContext } from './SessionContext';
import { useRefreshTokens } from './useRefreshTokens';

export interface SessionProviderProps {
  children: React.ReactNode;
  defaultSession: Session;
}

export const SessionProvider = ({ children, defaultSession }: SessionProviderProps) => {
  const [session, setSession] = React.useState<Session>(defaultSession);

  const value = React.useMemo(() => ({ session, setSession }), [session, setSession]);

  useRefreshTokens(session.isAuthenticated);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};
