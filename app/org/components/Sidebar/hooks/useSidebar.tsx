'use client';

import React from 'react';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebarOpen = () => setIsOpen(!isOpen);

  return {
    state: { isOpen },
    functions: { toggleSidebarOpen }
  };
};
