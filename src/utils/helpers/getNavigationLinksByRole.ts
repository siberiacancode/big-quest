import type { UserResponseRolesItem } from '@/api-types';

import { ORGANIZER_LINKS } from '../constants';

export const getNavigationLinksByUserRole = (userRole: UserResponseRolesItem) => {
  switch (userRole) {
    case 'SUPERADMIN':
      return ORGANIZER_LINKS;
    case 'ADMIN':
      return ORGANIZER_LINKS;
    default:
      throw new Error('Invalid user role');
  }
};
