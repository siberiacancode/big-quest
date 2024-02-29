import { api } from '@/utils/api/instance';

export type PostOrganizationEditActivityParams = ActivityResponse;

export type PostOrganizationEditActivityConfig = {
  params: PostOrganizationEditActivityParams;
  config?: RequestOptions;
};

export const postOrganizationEditActivity = async ({
  params,
  config
}: PostOrganizationEditActivityConfig) => api.put(`activity/${params.id}`, params, config);
