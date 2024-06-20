import { api } from '@/utils/api/instance';

export interface GetEmployeeParams {
  current?: number;
  limit?: number;
  organizationId: string;
}

export type GetEmployeeRequestConfig = RequestConfig<GetEmployeeParams>;

export const getEmployee = async ({ params, config }: GetEmployeeRequestConfig) =>
  api.get<$TSFIXME>('employee', {
    ...config,
    params: { ...config?.params, ...params }
  });
