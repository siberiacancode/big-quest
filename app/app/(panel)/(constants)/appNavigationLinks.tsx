import { ActivitiesIcon, ProfileIcon, RatingIcon, SupportIcon } from '@/components/icons';
import { ROUTES } from '@/utils/constants';

export const APP_NAVIGATION_LINKS = [
  {
    icon: <ActivitiesIcon />,
    text: 'navigation.link.app.activities',
    href: ROUTES.APP.ACTIVITIES
  },
  {
    icon: <RatingIcon />,
    text: 'navigation.link.app.rating',
    href: ROUTES.APP.RATING
  },
  {
    icon: <SupportIcon />,
    text: 'navigation.link.app.support',
    href: ROUTES.APP.SUPPORT
  },
  {
    icon: <ProfileIcon />,
    text: 'navigation.link.app.profile',
    href: ROUTES.APP.PROFILE
  }
];
