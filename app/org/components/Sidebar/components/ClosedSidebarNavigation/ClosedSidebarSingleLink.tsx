import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { SidebarSingleLink } from '../SidebarSingleLink/SidebarSingleLink';

interface ClosedSidebarSingleLinkProps {
  link: NavigationLinkInfo;
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
