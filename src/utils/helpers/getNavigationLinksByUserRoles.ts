import type { UserResponseRolesItem } from '@/api-types';

import { ORG_PANEL_NAVIGATION_LINKS, ROLES_BY_ROUTE } from '../constants';

export const getNavigationLinksByUserRoles = (userRoles: UserResponseRolesItem[]) => {
  if (userRoles.filter((role) => ROLES_BY_ROUTE.ORG.includes(role)).length) {
    return ORG_PANEL_NAVIGATION_LINKS;
  }
  throw new Error('Invalid user role');
};
