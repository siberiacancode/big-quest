import React from 'react';
import { Building2Icon, UsersRoundIcon } from 'lucide-react';

import { PAGE_PATHS } from '@/utils/constants';

export interface SidebarLinkInfo {
  id: number;
  text: string;
  href: string;
  icon: React.JSX.Element;
  subLinks?: SidebarLinkInfo[];
}

export const linksInfo: { [key: string]: SidebarLinkInfo[] } = {
  organizer: [
    {
      id: 1,
      text: 'Лиды',
      href: PAGE_PATHS.LIDS,
      icon: <UsersRoundIcon />
    },
    {
      id: 2,
      text: 'Организации',
      href: PAGE_PATHS.ORGANIZATIONS,
      icon: <Building2Icon />
    }
  ]
};
