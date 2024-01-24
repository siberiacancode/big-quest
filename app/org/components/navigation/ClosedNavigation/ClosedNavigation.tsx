import React from 'react';

import { ClosedNavigationNestedLink } from './ClosedNavigationNestedLink';
import { ClosedNavigationSingleLink } from './ClosedNavigationSingleLink';

interface ClosedNavigationProps {
  pathname: string;
  links: NavigationLinkInfo[];
}

export const ClosedNavigation = ({ links, pathname }: ClosedNavigationProps) => (
  <nav className='mt-10 flex flex-col gap-2'>
    {links.map((link, index) => (
      <React.Fragment key={index}>
        {!link.subLinks && (
          <ClosedNavigationSingleLink link={link} isActive={pathname === link.href} />
        )}
        {!!link.subLinks && (
          <ClosedNavigationNestedLink
            link={link}
            isActive={pathname.startsWith(link.href)}
            pathname={pathname}
          />
        )}
      </React.Fragment>
    ))}
  </nav>
);
