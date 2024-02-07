import {
  ActivityIcon,
  Building2Icon,
  MailsIcon,
  MessageCircleMoreIcon,
  NewspaperIcon,
  PanelsTopLeftIcon,
  SmileIcon,
  UsersRoundIcon
} from 'lucide-react';

import { ROUTES } from '../routes';

export const ORGANIZER_LINKS: NavigationLinkInfo[] = [
  {
    text: 'navigation.link.lids',
    href: ROUTES.ORG.LIDS.ROOT,
    icon: <UsersRoundIcon />,
    subLinks: [
      { href: ROUTES.ORG.LIDS.PARTICIPANTS, text: 'navigation.link.participants' },
      { href: ROUTES.ORG.LIDS.ORGANIZATIONS, text: 'navigation.link.organizations' }
    ]
  },
  {
    text: 'navigation.link.organizations',
    href: ROUTES.ORG.ORGANIZATIONS.ROOT,
    icon: <Building2Icon />
  },
  {
    text: 'navigation.link.activities',
    href: ROUTES.ORG.ROOT,
    icon: <ActivityIcon />
  },
  {
    text: 'navigation.link.participants',
    href: ROUTES.ORG.ROOT,
    icon: <SmileIcon />
  },
  {
    text: 'navigation.link.awards',
    href: ROUTES.ORG.ROOT,
    icon: <MessageCircleMoreIcon />
  },
  {
    text: 'navigation.link.messenger',
    href: ROUTES.ORG.ROOT,
    icon: <Building2Icon />
  },
  {
    text: 'navigation.link.mailing',
    href: ROUTES.ORG.ROOT,
    icon: <MailsIcon />
  },
  {
    text: 'navigation.link.news',
    href: ROUTES.ORG.ROOT,
    icon: <NewspaperIcon />
  },
  {
    text: 'navigation.link.profile',
    href: ROUTES.ORG.ROOT,
    icon: <PanelsTopLeftIcon />
  }
];
