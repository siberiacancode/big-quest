import type { UserResponseRolesItem } from '@/api-types';

export const ROLES_BY_ROUTE = {
  ORG: ['ADMIN', 'SUPERADMIN'],
  PARTNER: ['LEADING', 'MANAGER'],
  APP: ['USER']
} satisfies Record<string, UserResponseRolesItem[]>;
