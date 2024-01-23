import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

interface ClosedSidebarNestedLinkProps {
  link: NavigationLinkInfo;
  isActive: boolean;
  pathname: string;
}

export const ClosedSidebarNestedLink = ({
  link,
  isActive,
  pathname
}: ClosedSidebarNestedLinkProps) => (
  <HoverCard>
    <HoverCardTrigger>
      <Button variant={isActive ? 'secondary' : 'ghost'}>{link.icon}</Button>
    </HoverCardTrigger>
    <HoverCardContent side='right' className='flex w-36 translate-y-1/4 flex-col gap-1 p-2'>
      {link.subLinks?.map((subLink) => (
        <SidebarSingleLink key={subLink.id} link={subLink} isActive={pathname === subLink.href}>
          {subLink.text}
        </SidebarSingleLink>
      ))}
    </HoverCardContent>
  </HoverCard>
);
