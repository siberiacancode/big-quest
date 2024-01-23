import React from 'react';

import { Accordion } from '@/components/ui';

import { NavigationSingleLink } from '../NavigationSingleLink/NavigationSingleLink';

import { OpenedNavigationNestedLink } from './OpenedNavigationNestedLink';

interface OpenedSidebarNavigationProps {
  pathname: string;
  links: NavigationLinkInfo[];
}

export const OpenedNavigation = ({ links, pathname }: OpenedSidebarNavigationProps) => (
  <Accordion asChild type='multiple'>
    <nav className='mt-10 flex w-full flex-col gap-2'>
      {links.map((link) => (
        <React.Fragment key={link.id}>
          {!!link.subLinks && (
            <OpenedNavigationNestedLink
              link={link}
              isActive={pathname.startsWith(link.href)}
              pathname={pathname}
            />
          )}
          {!link.subLinks && (
            <div className='flex'>
              <NavigationSingleLink isActive={pathname === link.href} link={link}>
                {link.icon}
                {link.text}
              </NavigationSingleLink>
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  </Accordion>
);
