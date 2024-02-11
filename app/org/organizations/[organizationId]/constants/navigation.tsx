import type { LucideIcon } from 'lucide-react';
import { ActivityIcon, MapPinIcon, UserIcon, UsersRoundIcon } from 'lucide-react';

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
  link: string;
}

export const ORGANIZER_PROFILE_TABS: ProfileTab[] = [];
export const FRANCHISEE_PROFILE_TABS: ProfileTab[] = [];

export const SPONSOR_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    link: 'profile'
  }
];

export const PARTNER_PROFILE_TABS: ProfileTab[] = [
  {
    icon: UserIcon,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    link: 'profile'
  },
  {
    icon: MapPinIcon,
    title: 'organization.profile.header.addresses',
    value: ORGANIZATION_PROFILE_TAB_VALUES.ADDRESSES,
    link: 'addresses'
  },
  {
    icon: UsersRoundIcon,
    title: 'organization.profile.header.employees',
    value: ORGANIZATION_PROFILE_TAB_VALUES.EMPLOYEES,
    link: 'employees'
  },
  {
    icon: ActivityIcon,
    title: 'organization.profile.header.activities',
    value: ORGANIZATION_PROFILE_TAB_VALUES.ACTIVITIES,
    link: 'activities'
  },
  {
    icon: ActivityIcon,
    title: 'organization.profile.header.schedule',
    value: ORGANIZATION_PROFILE_TAB_VALUES.SCHEDULE,
    link: 'schedule'
  }
];
