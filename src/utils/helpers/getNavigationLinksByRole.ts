import { ORGANIZER_LINKS } from '../constants';

export const getNavigationLinksByUserRole = (userRole: UserRole) => {
  switch (userRole) {
    case 'organizer':
      return ORGANIZER_LINKS;
    default:
      throw new Error('Invalid user role');
  }
};
