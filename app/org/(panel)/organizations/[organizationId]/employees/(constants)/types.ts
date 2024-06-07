import type { Role } from '@/api-types';

export interface EmployeeData {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: Role;
  phone: string;
  status: string;
  image: string;
}
