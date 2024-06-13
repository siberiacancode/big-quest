export interface EmployeeData {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: 'ADMIN' | 'LEADING' | 'MANAGER';
  phone: string;
  status: string;
  image: string;
}
