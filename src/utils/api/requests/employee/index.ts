import type { CreateEmployeeDto, UpdateEmployeeDto } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostEmployeeParams = CreateEmployeeDto;

export type PostEmployeeRequestConfig = RequestConfig<PostEmployeeParams>;

export const postEmployee = async ({ params, config }: PostEmployeeRequestConfig) =>
  api.post('employee', params, config);

export type PutEmployeeParams = UpdateEmployeeDto & { id: string };

export type PutEmployeeRequestConfig = RequestConfig<PutEmployeeParams>;

export const putEmployee = async ({ params, config }: PutEmployeeRequestConfig) =>
  api.put(`employee/${params.id}`, params, config);

export interface DeleteEmployeeParams {
  id: string;
}

export type DeleteEmployeeRequestConfig = RequestConfig<DeleteEmployeeParams>;

export const deleteEmployee = async ({ params, config }: DeleteEmployeeRequestConfig) =>
  api.delete(`employee/${params.id}`, config);
