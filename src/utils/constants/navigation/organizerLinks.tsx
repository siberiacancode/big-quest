import { Building2Icon, UsersRoundIcon } from 'lucide-react';

import { ROUTES } from '../routes';

export const ORGANIZER_LINKS: NavigationLinkInfo[] = [
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
];
