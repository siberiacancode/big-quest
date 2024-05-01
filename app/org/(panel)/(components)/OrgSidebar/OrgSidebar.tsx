'use client';

import type { SidebarProps } from 'app/(components)/Sidebar/Sidebar';
import { Sidebar } from 'app/(components)/Sidebar/Sidebar';

import { SidebarNavigation } from '../navigation/SidebarNavigation/SidebarNavigation';

type OrgSidebarProps = Omit<SidebarProps, 'children'>;

export const OrgSidebar = (props: OrgSidebarProps) => (
  <Sidebar {...props}>
    {(isOpen) => <SidebarNavigation isOpen={isOpen} userRole='SUPERADMIN' />}
  </Sidebar>
);
