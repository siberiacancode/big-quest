'use client';

import React from 'react';

export interface UserCredentials {
  userId: string;
  code: string;
}

export interface UserCredentialsContextParams {
  userCredentials?: UserCredentials;
  setUserCredentials: (registerInfo: UserCredentials) => void;
}

export const UserCredentialsContext = React.createContext<UserCredentialsContextParams>({
  setUserCredentials: () => {}
});
