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
      <Button variant={isActive ? 'secondary' : 'ghost'}>{link.icon}</Button>
    </HoverCardTrigger>
    <HoverCardContent side='right' className='flex w-36 translate-y-1/4 flex-col gap-1 p-2'>
      {link.subLinks?.map((subLink) => (
        <NavigationSingleLink key={subLink.id} link={subLink} isActive={pathname === subLink.href}>
          {subLink.text}
        </NavigationSingleLink>
      ))}
    </HoverCardContent>
  </HoverCard>
);
