import { api } from '@/utils/api/instance';

export type PostOrganizationEditEmployeeParams = OrganizationEmployeeDto;

export type PostOrganizationEditEmployeeConfig = RequestConfig<PostOrganizationEditEmployeeParams>;

// TODO: Мы же edit для определенного сотрудника прокидывать будем, так что сюда id нужно будет добавить
export const postOrganizationEditEmployee = async ({
  params,
  config
}: PostOrganizationEditEmployeeConfig) => api.put(`organization/edit-employee`, params, config);
