import React from 'react';

import { ClosedSidebarNestedLink } from './ClosedSidebarNestedLink';
import { ClosedSidebarSingleLink } from './ClosedSidebarSingleLink';

interface ClosedSidebarNavigationProps {
  pathname: string;
  links: NavigationLinkInfo[];
}

export const ClosedSidebarNavigation = ({ links, pathname }: ClosedSidebarNavigationProps) => (
  <nav className='mt-10 flex flex-col gap-2'>
    {links.map((link) => (
      <React.Fragment key={link.id}>
        {!link.subLinks && (
          <ClosedSidebarSingleLink link={link} isActive={pathname === link.href} />
        )}
        {!!link.subLinks && (
          <ClosedSidebarNestedLink
            link={link}
            isActive={pathname.startsWith(link.href)}
            pathname={pathname}
          />
        )}
      </React.Fragment>
    ))}
  </nav>
);
