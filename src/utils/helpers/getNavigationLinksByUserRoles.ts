import type { UserResponseRolesItem } from '@/api-types';

import { ORG_PANEL_AVAILABLE_ROLES, ORG_PANEL_NAVIGATION_LINKS } from '../constants';

export const getNavigationLinksByUserRoles = (userRoles: UserResponseRolesItem[]) => {
  if (userRoles.filter((role) => ORG_PANEL_AVAILABLE_ROLES.includes(role)).length) {
    return ORG_PANEL_NAVIGATION_LINKS;
  }
  throw new Error('Invalid user role');
};
