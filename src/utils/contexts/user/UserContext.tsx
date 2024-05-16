'use client';

import React from 'react';

import type { UserResponse } from '@/api-types';

export interface UserContextParams {
  user: UserResponse;
  setUser: (user: UserResponse) => void;
}

export const UserContext = React.createContext<UserContextParams>({
  user: {} as UserResponse,
  setUser: () => {}
});
