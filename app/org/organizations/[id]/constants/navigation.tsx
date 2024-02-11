import { ActivityIcon, MapPinIcon, UserIcon, UsersRoundIcon } from 'lucide-react';

export const ORGANIZATION_PROFILE_TAB_VALUES = {
  PROFILE: 'profile',
  ADDRESSES: 'addresses',
  EMPLOYEES: 'employees',
  ACTIVITIES: 'activities',
  SCHEDULE: 'schedule'
};

export const INFORMATION_OPTIONS = {
  PROFILE: 'organization.profile.information.name',
  ADDRESSES: 'organization.profile.information.profile',
  EMPLOYEES: 'employees',
  ACTIVITIES: 'activities',
  SCHEDULE: 'schedule'
};

export const SPONSOR_PROFILE_TABS = [
  {
    icon: <UserIcon />,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    link: 'profile'
  }
];

export const PARTNER_PROFILE_TABS = [
  {
    icon: <UserIcon />,
    title: 'organization.profile.header.profile',
    value: ORGANIZATION_PROFILE_TAB_VALUES.PROFILE,
    link: 'profile'
  },
  {
    icon: <MapPinIcon />,
    title: 'organization.profile.header.addresses',
    value: ORGANIZATION_PROFILE_TAB_VALUES.ADDRESSES,
    link: 'addresses'
  },
  {
    icon: <UsersRoundIcon />,
    title: 'organization.profile.header.employees',
    value: ORGANIZATION_PROFILE_TAB_VALUES.EMPLOYEES,
    link: 'employees'
  },
  {
    icon: <ActivityIcon />,
    title: 'organization.profile.header.activities',
    value: ORGANIZATION_PROFILE_TAB_VALUES.ACTIVITIES,
    link: 'activities'
  },
  {
    icon: <ActivityIcon />,
    title: 'organization.profile.header.schedule',
    value: ORGANIZATION_PROFILE_TAB_VALUES.SCHEDULE,
    link: 'schedule'
  }
];
