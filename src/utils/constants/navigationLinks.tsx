import React from 'react';
import { Building2Icon, UsersRoundIcon } from 'lucide-react';

import { ROUTES } from './routes';

export interface SidebarLinkInfo {
  id: string;
  text: string;
  href: string;
  icon?: React.JSX.Element;
  subLinks?: SidebarLinkInfo[];
}

export const navigationLinks: Record<UserRole, SidebarLinkInfo[]> = {
  organizer: [
    {
      id: crypto.randomUUID(),
      text: 'Лиды',
      href: ROUTES.LIDS,
      icon: <UsersRoundIcon />,
      subLinks: [
        { id: crypto.randomUUID(), href: ROUTES.LIDS_PARTICIPANTS, text: 'Участники' },
        { id: crypto.randomUUID(), href: ROUTES.LIDS_PARTNERS, text: 'Партнеры' }
      ]
    },
    {
      id: crypto.randomUUID(),
      text: 'Организации',
      href: ROUTES.ORGANIZATIONS,
      icon: <Building2Icon />
    }
  ],
  partner: []
};
