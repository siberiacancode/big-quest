import type { EmployeePosition } from '@/api-types';

export interface EmployeeData {
  id?: string;
  avatar?: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  organizationId: string;
  phone: string;
  position: EmployeePosition;
  userId?: string;
}
