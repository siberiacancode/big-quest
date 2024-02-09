import { ActivityIcon, MapPinIcon, UserIcon, UsersRoundIcon } from 'lucide-react';

export const HEADER_OPTIONS = {
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

export const SPONSOR_PROFILE_LINKS = {
  icon: <UserIcon />,
  title: 'organization.profile.header.profile',
  value: HEADER_OPTIONS.PROFILE,
  link: 'profile'
};

export const PARTNER_PROFILE_LINKS = [
  {
    icon: <UserIcon />,
    title: 'organization.profile.header.profile',
    value: HEADER_OPTIONS.PROFILE,
    link: 'profile'
  },
  {
    icon: <MapPinIcon />,
    title: 'organization.profile.header.addresses',
    value: HEADER_OPTIONS.ADDRESSES,
    link: 'addresses'
  },
  {
    icon: <UsersRoundIcon />,
    title: 'organization.profile.header.employees',
    value: HEADER_OPTIONS.EMPLOYEES,
    link: 'employees'
  },
  {
    icon: <ActivityIcon />,
    title: 'organization.profile.header.activities',
    value: HEADER_OPTIONS.ACTIVITIES,
    link: 'activities'
  },
  {
    icon: <ActivityIcon />,
    title: 'organization.profile.header.schedule',
    value: HEADER_OPTIONS.SCHEDULE,
    link: 'schedule'
  }
];
