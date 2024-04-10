import type { LucideIcon } from 'lucide-react';
import { ActivityIcon, MapPinIcon, UserIcon, UsersRoundIcon } from 'lucide-react';

import { ROUTES } from '@/utils/constants';

export const ORG_ORGANIZATION_TAB_VALUES = {
  PROFILE: 'profile',
  ADDRESSES: 'addresses',
  EMPLOYEES: 'employees',
  ACTIVITIES: 'activities',
  SCHEDULE: 'schedule'
} as const;

export interface ProfileTab {
  icon: LucideIcon;
  title: string;
  value: string;
  route: (typeof ROUTES.ORG.ORGANIZATIONS)[Extract<
    keyof typeof ROUTES.ORG.ORGANIZATIONS,
    keyof typeof ORG_ORGANIZATION_TAB_VALUES
  >];
}

export const ORGANIZER_PROFILE_TABS: ProfileTab[] = [];
export const FRANCHISEE_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORG_ORGANIZATION_TAB_VALUES.PROFILE,
    route: ROUTES.ORG.ORGANIZATIONS.PROFILE
  }
];

export const SPONSOR_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORG_ORGANIZATION_TAB_VALUES.PROFILE,
    route: ROUTES.ORG.ORGANIZATIONS.PROFILE
  }
];

export const PARTNER_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORG_ORGANIZATION_TAB_VALUES.PROFILE,
    route: ROUTES.ORG.ORGANIZATIONS.PROFILE
  },
  {
    icon: MapPinIcon,
    title: 'organization.profile.header.addresses',
    value: ORG_ORGANIZATION_TAB_VALUES.ADDRESSES,
    route: ROUTES.ORG.ORGANIZATIONS.ADDRESSES
  },
  {
    icon: UsersRoundIcon,
    title: 'organization.profile.header.employees',
    value: ORG_ORGANIZATION_TAB_VALUES.EMPLOYEES,
    route: ROUTES.ORG.ORGANIZATIONS.EMPLOYEES
  },
  {
    icon: ActivityIcon,
    title: 'organization.profile.header.activities',
    value: ORG_ORGANIZATION_TAB_VALUES.ACTIVITIES,
    route: ROUTES.ORG.ORGANIZATIONS.ACTIVITIES
  },
  {
    icon: ActivityIcon,
    title: 'organization.profile.header.schedule',
    value: ORG_ORGANIZATION_TAB_VALUES.SCHEDULE,
    route: ROUTES.ORG.ORGANIZATIONS.SCHEDULE
  }
];
