import type { LucideIcon } from 'lucide-react';
import { ActivityIcon, MapPinIcon, UserIcon, UsersRoundIcon } from 'lucide-react';

import { ROUTES } from '@/utils/constants';

export const ORGANIZATION_PROFILE_TAB_VALUES = {
  PROFILE: 'profile',
  ADDRESSES: 'addresses',
  EMPLOYEES: 'employees',
  ACTIVITIES: 'activities',
  SCHEDULE: 'schedule'
};

export interface ProfileTab {
  icon: LucideIcon;
  title: string;
  value: string;
  route: (typeof ROUTES.ORG.ORGANIZATIONS)[Exclude<
    keyof typeof ROUTES.ORG.ORGANIZATIONS,
    'ROOT' | 'DASHBOARD'
  >];
}

export const ORGANIZER_PROFILE_TABS: ProfileTab[] = [];
export const FRANCHISEE_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    route: ROUTES.ORG.ORGANIZATIONS.PROFILE
  }
];

export const SPONSOR_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    route: ROUTES.ORG.ORGANIZATIONS.PROFILE
  }
];

export const PARTNER_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    route: ROUTES.PARTNER.PROFILE
  },
  {
    icon: MapPinIcon,
    title: 'organization.profile.header.addresses',
    value: ORGANIZATION_PROFILE_TAB_VALUES.ADDRESSES,
    route: ROUTES.PARTNER.ADDRESSES
  },
  {
    icon: UsersRoundIcon,
    title: 'organization.profile.header.employees',
    value: ORGANIZATION_PROFILE_TAB_VALUES.EMPLOYEES,
    route: ROUTES.PARTNER.EMPLOYEES
  },
  {
    icon: ActivityIcon,
    title: 'organization.profile.header.activities',
    value: ORGANIZATION_PROFILE_TAB_VALUES.ACTIVITIES,
    route: ROUTES.PARTNER.ACTIVITIES
  },
  {
    icon: ActivityIcon,
    title: 'organization.profile.header.schedule',
    value: ORGANIZATION_PROFILE_TAB_VALUES.SCHEDULE,
    route: ROUTES.PARTNER.SCHEDULE
  }
];
