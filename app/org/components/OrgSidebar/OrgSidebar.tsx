'use client';

import { Sidebar } from '../../../components/Sidebar/Sidebar';
import { SidebarNavigation } from '../navigation/SidebarNavigation/SidebarNavigation';

export const OrgSidebar = () => {
  // TODO
  const userRole = 'organizer';

  return <Sidebar>{(isOpen) => <SidebarNavigation isOpen={isOpen} userRole={userRole} />}</Sidebar>;
};
