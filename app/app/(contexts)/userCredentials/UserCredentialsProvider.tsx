'use client';

import React from 'react';

import { type UserCredentials, UserCredentialsContext } from './UserCredentialsContext';

interface UserCredentialsProviderProps {
  children: React.ReactNode;
  defaultUserCredentials?: UserCredentials;
}

export const UserCredentialsProvider = ({
  children,
  defaultUserCredentials
}: UserCredentialsProviderProps) => {
  const [state, set] = React.useState(defaultUserCredentials);

  const value = React.useMemo(() => ({ state, set }), [state, set]);

  return (
    <UserCredentialsContext.Provider value={value}>{children}</UserCredentialsContext.Provider>
  );
};
