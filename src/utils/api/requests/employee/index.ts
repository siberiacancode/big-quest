import type { CreateEmployeeDto, UpdateEmployeeDto } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostEmployeeParams = CreateEmployeeDto;

export type PostEmployeeRequestConfig = RequestConfig<PostEmployeeParams>;

export const postEmployee = async ({ params, config }: PostEmployeeRequestConfig) =>
  api.post('employee', params, config);

export type PutEmployeeParams = UpdateEmployeeDto;

export type PutEmployeeRequestConfig = RequestConfig<PostEmployeeParams>;

export const putEmployee = async ({ params, config }: PostEmployeeRequestConfig) =>
  api.put('employee', params, config);
