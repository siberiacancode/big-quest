import React from 'react';

import { I18nText } from '@/components/common';
import { Accordion, Typography } from '@/components/ui';

import { NavigationSingleLink } from '../NavigationSingleLink/NavigationSingleLink';

import { OpenedNavigationNestedLink } from './OpenedNavigationNestedLink';

interface OpenedSidebarNavigationProps {
  pathname: string;
  links: NavigationLinkInfo[];
}

export const OpenedNavigation = ({ links, pathname }: OpenedSidebarNavigationProps) => (
  <Accordion asChild type='multiple'>
    <nav className='mt-10 flex w-full flex-col gap-2'>
      {links.map((link, index) => (
        <React.Fragment key={index}>
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
                <Typography variant='sub1' tag='p'>
                  <I18nText path={link.text} />
                </Typography>
              </NavigationSingleLink>
            </div>
          )}
        </React.Fragment>
      ))}
    </nav>
  </Accordion>
);
