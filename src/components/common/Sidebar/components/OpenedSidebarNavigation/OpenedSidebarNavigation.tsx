import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { SidebarLinkInfo } from '@/utils/constants';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

import { OpenedSidebarSubLink } from './OpenedSidebarSubLink';

interface OpenedSidebarNavigationProps {
  pathname: string;
  links: SidebarLinkInfo[];
}

export const OpenedSidebarNavigation = ({ links, pathname }: OpenedSidebarNavigationProps) => (
  <Accordion asChild type='multiple'>
    <nav className=' mt-10 flex flex-col items-center gap-2'>
      {links?.map((link) => (
        <div>
          {!!link.subLinks && (
            <AccordionItem
              value={link.id}
              className={cn(
                'relative rounded-md border-none px-4',
                pathname.startsWith(link.href)
                  ? 'bg-secondary hover:bg-secondary/80'
                  : 'bg-background hover:bg-secondary/80'
              )}
            >
              <AccordionTrigger className='py-2 hover:no-underline'>
                <div className={cn('flex items-center justify-between ')}>
                  <div className='flex gap-3'>
                    {link.icon}
                    {link.text}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className='flex flex-col items-center gap-3'>
                {link.subLinks?.map((subLink) => (
                  <OpenedSidebarSubLink key={subLink.id} link={subLink} pathname={pathname} />
                ))}
              </AccordionContent>
            </AccordionItem>
          )}
          {!link.subLinks && (
            <SidebarSingleLink pathname={pathname} link={link}>
              {link.icon}
              {link.text}
            </SidebarSingleLink>
          )}
        </div>
      ))}
    </nav>
  </Accordion>
);
