import React from 'react';

import { ClosedNavigationNestedLink } from './ClosedNavigationNestedLink';
import { ClosedNavigationSingleLink } from './ClosedNavigationSingleLink';

interface ClosedNavigationProps {
  root: string;
  pathname: string;
  links: NavigationLinkInfo[];
}

export const ClosedNavigation = ({ links, pathname, root }: ClosedNavigationProps) => (
  <nav className='mt-10 flex flex-col gap-2'>
    {links.map((link, index) => (
      <React.Fragment key={index}>
        {!link.subLinks && (
          <ClosedNavigationSingleLink link={link} isActive={pathname === link.href} />
        )}
        {!!link.subLinks && (
          <ClosedNavigationNestedLink
            link={link}
            isActive={link.href.includes(root)}
            pathname={pathname}
          />
        )}
      </React.Fragment>
    ))}
  </nav>
);
