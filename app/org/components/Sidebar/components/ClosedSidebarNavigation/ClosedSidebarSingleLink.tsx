import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';
import type { SidebarLinkInfo } from '@/utils/constants';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

interface ClosedSidebarSingleLinkProps {
  link: SidebarLinkInfo;
  isActive: boolean;
}

export const ClosedSidebarSingleLink = ({ link, isActive }: ClosedSidebarSingleLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <SidebarSingleLink link={link} isActive={isActive}>
          {link.icon}
        </SidebarSingleLink>
      </TooltipTrigger>
      <TooltipContent side='right'>
        <p>{link.text}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
