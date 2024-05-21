'use client';

import React from 'react';

import type { UserResponse } from '@/api-types';

import { UserContext } from './UserContext';

export interface UserProviderProps {
  children: React.ReactNode;
  defaultUser: UserResponse;
}

export const UserProvider = ({ children, defaultUser }: UserProviderProps) => {
  const [user, setUser] = React.useState<UserResponse>(defaultUser);

  const value = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
