'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';

import type { UserResponseRolesItem } from '@/api-types';
import { getNavigationLinksByUserRoles } from '@/utils/helpers';

import { ClosedNavigation } from '../ClosedNavigation/ClosedNavigation';
import { OpenedNavigation } from '../OpenedNavigation/OpenedNavigation';

interface SidebarNavigationProps {
  isOpen: boolean;
  userRoles: UserResponseRolesItem[];
}

export const SidebarNavigation = ({ isOpen, userRoles }: SidebarNavigationProps) => {
  const pathname = usePathname();
  const links = getNavigationLinksByUserRoles(userRoles);
  const [root] = useSelectedLayoutSegments();

  return isOpen ? (
    <OpenedNavigation links={links} pathname={pathname} root={root} />
  ) : (
    <ClosedNavigation links={links} pathname={pathname} root={root} />
  );
};
