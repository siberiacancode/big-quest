import React from 'react';

import type { SidebarLinkInfo } from '@/utils/constants';

import { ClosedSidebarSingleLink } from './ClosedSidebarSingleLink';

interface ClosedSidebarNavigationProps {
  pathname: string;
  links: SidebarLinkInfo[];
}

export const ClosedSidebarNavigation = ({ links, pathname }: ClosedSidebarNavigationProps) => (
  <nav className=' mt-10 flex flex-col items-center gap-2'>
    {links.map((link) => (
      <ClosedSidebarSingleLink link={link} pathname={pathname} />
    ))}
  </nav>
);
