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

export const ORG_PROFILE_LINKS: ProfileLinkInfo[] = [
  {
    icon: <UserIcon />,
    title: 'organization.profile.header.profile',
    value: HEADER_OPTIONS.PROFILE
  },
  {
    icon: <MapPinIcon />,
    title: 'organization.profile.header.addresses',
    value: HEADER_OPTIONS.ADDRESSES
  },
  {
    icon: <UsersRoundIcon />,
    title: 'organization.profile.header.employees',
    value: HEADER_OPTIONS.EMPLOYEES
  },
  {
    icon: <ActivityIcon />,
    title: 'organization.profile.header.activities',
    value: HEADER_OPTIONS.ACTIVITIES
  },
  {
    icon: <ActivityIcon />,
    title: 'organization.profile.header.schedule',
    value: HEADER_OPTIONS.SCHEDULE
  }
];
