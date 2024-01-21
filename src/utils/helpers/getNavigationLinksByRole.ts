import { navigationLinks } from '../constants/navigationLinks';

export const getNavigationLinksByUserRole = (userRole: UserRole) => {
  switch (userRole) {
    case 'organizer':
      return navigationLinks.organizer;
    case 'partner':
      return navigationLinks.partner;
    default:
      return [];
  }
};
