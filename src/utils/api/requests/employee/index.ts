import type { EmployeeControllerGetEmployeesParams, EmployeeListResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetEmployeeParams = EmployeeControllerGetEmployeesParams;

export type GetEmployeeRequestConfig = RequestConfig<GetEmployeeParams>;

export const getEmployee = async ({ params, config }: GetEmployeeRequestConfig) =>
  api.get<EmployeeListResponse>('employee', {
    ...config,
    params: { ...config?.params, ...params }
  });
