'use client';

import { usePathname } from 'next/navigation';

import { getNavigationLinksByUserRole } from '@/utils/helpers';

import { ClosedNavigation } from '../ClosedNavigation/ClosedNavigation';
import { OpenedNavigation } from '../OpenedNavigation/OpenedNavigation';

interface SidebarNavigationProps {
  isOpen: boolean;
  userRole: UserRole;
}

export const SidebarNavigation = ({ isOpen, userRole }: SidebarNavigationProps) => {
  const links = getNavigationLinksByUserRole(userRole);
  const pathname = usePathname();

  return isOpen ? (
    <OpenedNavigation links={links} pathname={pathname} />
  ) : (
    <ClosedNavigation links={links} pathname={pathname} />
  );
};
