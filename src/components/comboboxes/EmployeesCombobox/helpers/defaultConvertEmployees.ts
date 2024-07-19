import type { EmployeeResponse } from '@/api-types';

export const defaultConvertEmployees = (employees: EmployeeResponse[]) =>
  employees.map((employee) => ({
    label: `${employee.lastName} ${employee.firstName} ${employee.middleName}`,
    value: employee.id
  }));
