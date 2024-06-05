'use client';

import React from 'react';

export interface UserCredentials {
  userId: string;
  code: string;
}

export interface UserCredentialsContextParams {
  state?: UserCredentials;
  set: (userCredentials: UserCredentials) => void;
}

export const UserCredentialsContext = React.createContext<UserCredentialsContextParams>({
  set: () => {}
});
