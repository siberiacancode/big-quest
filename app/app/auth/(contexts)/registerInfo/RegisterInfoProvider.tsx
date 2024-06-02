'use client';

import React from 'react';

import type { RegisterInfo } from './RegisterInfoContext';
import { RegisterInfoContext } from './RegisterInfoContext';

interface RegisterInfoProviderProps {
  children: React.ReactNode;
}

export const RegisterInfoProvider = ({ children }: RegisterInfoProviderProps) => {
  const [registerInfo, setRegisterInfo] = React.useState<RegisterInfo | undefined>();

  const value = React.useMemo(
    () => ({ registerInfo, setRegisterInfo }),
    [registerInfo, setRegisterInfo]
  );

  return <RegisterInfoContext.Provider value={value}>{children}</RegisterInfoContext.Provider>;
};
