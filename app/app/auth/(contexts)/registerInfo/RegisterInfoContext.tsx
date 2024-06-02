'use client';

import React from 'react';

export interface RegisterInfo {
  userId: string;
  code: string;
}

export interface RegisterInfoContextParams {
  registerInfo?: RegisterInfo;
  setRegisterInfo: (registerInfo: RegisterInfo) => void;
}

export const RegisterInfoContext = React.createContext<RegisterInfoContextParams>({
  setRegisterInfo: () => {}
});
