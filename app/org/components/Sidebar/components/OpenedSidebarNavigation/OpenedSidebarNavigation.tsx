import React from 'react';

import { Accordion } from '@/components/ui';
import type { SidebarLinkInfo } from '@/utils/constants';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

import { OpenedSidebarNestedLink } from './OpenedSidebarNestedLink';

interface OpenedSidebarNavigationProps {
  pathname: string;
  links: SidebarLinkInfo[];
}

export const OpenedSidebarNavigation = ({ links, pathname }: OpenedSidebarNavigationProps) => (
  <Accordion asChild type='multiple'>
    <nav className='mt-10 flex w-full flex-col gap-2'>
      {links.map((link) => (
        <React.Fragment key={link.id}>
          {!!link.subLinks && <OpenedSidebarNestedLink pathname={pathname} link={link} />}
          {!link.subLinks && (
            <SidebarSingleLink pathname={pathname} link={link}>
              {link.icon}
              {link.text}
            </SidebarSingleLink>
          )}
        </React.Fragment>
      ))}
    </nav>
  </Accordion>
);
