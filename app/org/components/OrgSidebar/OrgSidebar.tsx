'use client';

import { Sidebar, type SidebarProps } from '../../../components/Sidebar/Sidebar';
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
