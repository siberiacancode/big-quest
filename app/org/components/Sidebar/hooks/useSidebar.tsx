'use client';

import React from 'react';

import { getNavigationLinksByUserRole } from '@/utils/helpers';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigationLinks = getNavigationLinksByUserRole('organizer');

  const toggleSidebarOpen = () => setIsOpen(!isOpen);

  return {
    state: { isOpen, navigationLinks },
    functions: { toggleSidebarOpen }
  };
};
