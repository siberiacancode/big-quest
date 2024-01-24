import { I18nText } from '@/components/common';
import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui';

import { NavigationSingleLink } from '../NavigationSingleLink/NavigationSingleLink';

interface ClosedNavigationNestedLinkProps {
  link: NavigationLinkInfo;
  isActive: boolean;
  pathname: string;
}

export const ClosedNavigationNestedLink = ({
  link,
  isActive,
  pathname
}: ClosedNavigationNestedLinkProps) => (
  <HoverCard>
    <HoverCardTrigger>
      <Button className='h-auto w-auto p-3' variant={isActive ? 'secondary' : 'ghost'}>
        {link.icon}
      </Button>
    </HoverCardTrigger>
    <HoverCardContent side='right' className='flex w-36 translate-y-1/4 flex-col gap-1 p-2'>
      {link.subLinks?.map((subLink, index) => (
        <NavigationSingleLink key={index} link={subLink} isActive={pathname === subLink.href}>
          <I18nText path={subLink.text} />
        </NavigationSingleLink>
      ))}
    </HoverCardContent>
  </HoverCard>
);
