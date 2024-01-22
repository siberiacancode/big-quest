import React from 'react';

import type { SidebarLinkInfo } from '@/utils/constants';

import { ClosedSidebarNestedLink } from './ClosedSidebarNestedLink';
import { ClosedSidebarSingleLink } from './ClosedSidebarSingleLink';

interface ClosedSidebarNavigationProps {
  pathname: string;
  links: SidebarLinkInfo[];
}

export const ClosedSidebarNavigation = ({ links, pathname }: ClosedSidebarNavigationProps) => (
  <nav className='mt-10 flex flex-col gap-2'>
    {links.map((link) => (
      <>
        {!link.subLinks && <ClosedSidebarSingleLink link={link} pathname={pathname} />}
        {!!link.subLinks && <ClosedSidebarNestedLink link={link} pathname={pathname} />}
      </>
    ))}
  </nav>
);
