'use client';

import React from 'react';

import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEYS.SIDEBAR) === 'true'
  );

  const toggleSidebarOpen = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.SIDEBAR, String(!isOpen));
    setIsOpen(!isOpen);
  };

  return {
    state: { isOpen },
    functions: { toggleSidebarOpen }
  };
};
