'use client';

import { SidebarNavigation } from '../navigation/SidebarNavigation/SidebarNavigation';

import { Sidebar } from './Sidebar';

export const OrgSidebar = () => {
  // TODO
  const userRole = 'organizer';

  return <Sidebar>{(isOpen) => <SidebarNavigation isOpen={isOpen} userRole={userRole} />}</Sidebar>;
};
