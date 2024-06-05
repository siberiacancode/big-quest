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
  const [userCredentials, setUserCredentials] = React.useState(defaultUserCredentials);

  const value = React.useMemo(
    () => ({ state: userCredentials, set: setUserCredentials }),
    [userCredentials, setUserCredentials]
  );

  return (
    <UserCredentialsContext.Provider value={value}>{children}</UserCredentialsContext.Provider>
  );
};
