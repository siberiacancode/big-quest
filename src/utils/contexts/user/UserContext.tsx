'use client';

import React from 'react';

export interface UserContextParams {
  user: UserResponse;
  setUser: (user: UserResponse) => void;
}

export const UserContext = React.createContext<UserContextParams>({
  user: {} as UserResponse,
  setUser: () => {}
});
