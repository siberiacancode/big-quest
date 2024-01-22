'use client';

import React from 'react';

export interface Session {
  isAuthenticated: boolean;
}

export interface SessionContextParams {
  session: Session;
  setSession: (session: Session) => void;
}

export const SessionContext = React.createContext<SessionContextParams>({
  session: { isAuthenticated: false },
  setSession: () => {}
});
