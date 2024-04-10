'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';

import { getNavigationLinksByUserRole } from '@/utils/helpers';

import { ClosedNavigation } from '../ClosedNavigation/ClosedNavigation';
import { OpenedNavigation } from '../OpenedNavigation/OpenedNavigation';

interface SidebarNavigationProps {
  isOpen: boolean;
  userRole: UserRole;
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
