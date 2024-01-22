import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui';
import type { SidebarLinkInfo } from '@/utils/constants';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

interface ClosedSidebarNestedLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
}

export const ClosedSidebarNestedLink = ({ link, pathname }: ClosedSidebarNestedLinkProps) => (
  <HoverCard>
    <HoverCardTrigger>
      <Button variant={pathname.startsWith(link.href) ? 'secondary' : 'ghost'}>{link.icon}</Button>
    </HoverCardTrigger>
    <HoverCardContent side='right' className='flex w-36 translate-y-1/4 flex-col gap-1 p-2'>
      {link.subLinks?.map((subLink) => (
        <SidebarSingleLink key={subLink.id} link={subLink} pathname={pathname}>
          {subLink.text}
        </SidebarSingleLink>
      ))}
    </HoverCardContent>
  </HoverCard>
);
