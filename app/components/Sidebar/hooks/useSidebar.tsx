'use client';

import React from 'react';
import { setCookie } from 'cookies-next';

import { COOKIES } from '@/utils/constants';

interface UseSidebarParams {
  defaultOpen: boolean;
}

export const useSidebar = ({ defaultOpen }: UseSidebarParams) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggleSidebarOpen = () => {
    setCookie(COOKIES.SIDEBAR, !isOpen);
    setIsOpen(!isOpen);
  };

  return {
    state: { isOpen },
    functions: { toggleSidebarOpen }
  };
};
