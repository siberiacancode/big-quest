import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';
import type { SidebarLinkInfo } from '@/utils/constants';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

interface ClosedSidebarSingleLinkProps {
  link: SidebarLinkInfo;
  pathname: string;
}

export const ClosedSidebarSingleLink = ({ link, pathname }: ClosedSidebarSingleLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <SidebarSingleLink link={link} pathname={pathname}>
          {link.icon}
        </SidebarSingleLink>
      </TooltipTrigger>
      <TooltipContent side='right'>
        <p>{link.text}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
