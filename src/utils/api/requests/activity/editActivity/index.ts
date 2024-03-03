import { api } from '@/utils/api/instance';

export type PostOrganizationEditActivityParams = ActivityResponse;

export type PostOrganizationEditActivityConfig = {
  params: PostOrganizationEditActivityParams;
  config?: RequestOptions;
};

export const postOrganizationEditActivity = async ({
  params,
  config
}: PostOrganizationEditActivityConfig) => api.post(`activity/${params.id}`, params, config);
