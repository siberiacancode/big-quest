import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui';
import type { SidebarLinkInfo } from '@/utils/constants';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

interface ClosedSidebarSingleLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
}

export const ClosedSidebarSingleLink = ({ link, pathname }: ClosedSidebarSingleLinkProps) => (
  <div>
    {!link.subLinks && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SidebarSingleLink link={link} pathname={pathname}>
              {link.icon}
            </SidebarSingleLink>
          </TooltipTrigger>
          <TooltipContent>
            <p>{link.text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
    {!!link.subLinks && (
      <HoverCard>
        <HoverCardTrigger>
          <Button variant={pathname.startsWith(link.href) ? 'secondary' : 'ghost'}>
            {link.icon}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent align='end' className='flex flex-col gap-3'>
          {link.subLinks?.map((subLink) => (
            <SidebarSingleLink key={subLink.id} link={subLink} pathname={pathname}>
              {subLink.text}
            </SidebarSingleLink>
          ))}
        </HoverCardContent>
      </HoverCard>
    )}
  </div>
);
