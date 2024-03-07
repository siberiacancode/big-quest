export type EmployeeActionType = 'add' | 'edit';

export interface EmployeeData {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  phone: string;
}
