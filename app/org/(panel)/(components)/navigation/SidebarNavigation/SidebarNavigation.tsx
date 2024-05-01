'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';

import type { UserResponseRolesItem } from '@/api-types';
import { getNavigationLinksByUserRole } from '@/utils/helpers';

import { ClosedNavigation } from '../ClosedNavigation/ClosedNavigation';
import { OpenedNavigation } from '../OpenedNavigation/OpenedNavigation';

interface SidebarNavigationProps {
  isOpen: boolean;
  userRole: UserResponseRolesItem;
}

export const SidebarNavigation = ({ isOpen, userRole }: SidebarNavigationProps) => {
  const pathname = usePathname();
  const links = getNavigationLinksByUserRole(userRole);
  const [root] = useSelectedLayoutSegments();

  return isOpen ? (
    <OpenedNavigation links={links} pathname={pathname} root={root} />
  ) : (
    <ClosedNavigation links={links} pathname={pathname} root={root} />
  );
};
