import {
  ActivityIcon,
  AwardIcon,
  Building2Icon,
  MailsIcon,
  MessageCircleMoreIcon,
  NewspaperIcon,
  PanelsTopLeftIcon,
  SmileIcon,
  UsersRoundIcon
} from 'lucide-react';

import { ROUTES } from './routes';

export const ORG_PANEL_NAVIGATION_LINKS: NavigationLinkInfo[] = [
  {
    text: 'navigation.link.org.lids',
    href: ROUTES.ORG.LIDS.ROOT,
    icon: <UsersRoundIcon />,
    subLinks: [
      { href: ROUTES.ORG.LIDS.PARTICIPANTS, text: 'navigation.link.org.participants' },
      { href: ROUTES.ORG.LIDS.ORGANIZATIONS, text: 'navigation.link.org.organizations' }
    ]
  },
  {
    text: 'navigation.link.org.organizations',
    href: ROUTES.ORG.ORGANIZATIONS.DASHBOARD,
    icon: <Building2Icon />
  },
  {
    text: 'navigation.link.org.activities',
    href: ROUTES.ORG.ACTIVITIES.DASHBOARD,
    icon: <ActivityIcon />
  },
  {
    text: 'navigation.link.org.participants',
    href: ROUTES.ORG.ROOT,
    icon: <SmileIcon />
  },
  {
    text: 'navigation.link.org.awards',
    href: ROUTES.ORG.ROOT,
    icon: <AwardIcon />
  },
  {
    text: 'navigation.link.org.messenger',
    href: ROUTES.ORG.ROOT,
    icon: <MessageCircleMoreIcon />
  },
  {
    text: 'navigation.link.org.mailing',
    href: ROUTES.ORG.ROOT,
    icon: <MailsIcon />
  },
  {
    text: 'navigation.link.org.news',
    href: ROUTES.ORG.ROOT,
    icon: <NewspaperIcon />
  },
  {
    text: 'navigation.link.org.profile',
    href: ROUTES.ORG.ROOT,
    icon: <PanelsTopLeftIcon />
  }
];
