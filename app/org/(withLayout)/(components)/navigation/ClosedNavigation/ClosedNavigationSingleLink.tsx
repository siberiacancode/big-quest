import { I18nText } from '@/components/common';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { NavigationSingleLink } from '../NavigationSingleLink/NavigationSingleLink';

interface ClosedNavigationSingleLinkProps {
  link: NavigationLinkInfo;
  isActive: boolean;
}

export const ClosedNavigationSingleLink = ({ link, isActive }: ClosedNavigationSingleLinkProps) => (
  <TooltipProvider delayDuration={300}>
    <Tooltip>
      <TooltipTrigger>
        <NavigationSingleLink link={link} isActive={isActive}>
          {link.icon}
        </NavigationSingleLink>
      </TooltipTrigger>
      <TooltipContent side='right'>
        <p>
          <I18nText path={link.text} />
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
