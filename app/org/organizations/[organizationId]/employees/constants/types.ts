export interface EmployeeData {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: 'Administrator' | 'Leading' | 'Manager';
  phone: string;
  image?: any;
}
