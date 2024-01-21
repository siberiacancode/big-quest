import React from 'react';

import { getNavigationLinksByUserRole } from '@/utils/helpers';

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  // TODO здесь будет роль лежать и по ней будем получать ссылки
  // const { user } = useUserContext()
  const navigationLinks = getNavigationLinksByUserRole('organizer');

  const toggleSidebarOpen = () => setSidebarOpen((prev) => !prev);

  return {
    state: { sidebarOpen, navigationLinks },
    functions: { toggleSidebarOpen }
  };
};
