'use client';

import type { SidebarProps } from 'app/components';
import { Sidebar } from 'app/components';

import { SidebarNavigation } from '../navigation/SidebarNavigation/SidebarNavigation';

type OrgSidebarProps = Omit<SidebarProps, 'children'>;

export const OrgSidebar = (props: OrgSidebarProps) => {
  const userRole = 'organizer';

  return (
    <Sidebar {...props}>
      {(isOpen) => <SidebarNavigation isOpen={isOpen} userRole={userRole} />}
    </Sidebar>
  );
};
