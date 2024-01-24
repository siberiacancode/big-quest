import { I18nText } from '@/components/common';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui';

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
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className='h-auto w-auto p-3' variant={isActive ? 'secondary' : 'ghost'}>
        {link.icon}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      side='right'
      className='flex w-40 translate-y-1/4 flex-col gap-1 rounded-2xl p-2'
    >
      {link.subLinks?.map((subLink, index) => (
        <NavigationSingleLink key={index} link={subLink} isActive={pathname === subLink.href}>
          <I18nText path={subLink.text} />
        </NavigationSingleLink>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
