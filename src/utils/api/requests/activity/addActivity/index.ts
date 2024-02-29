import { api } from '@/utils/api/instance';

export type PostOrganizationAddActivityParams = CreateActivityDto;

export type PostOrganizationAddActivityConfig = {
  params: PostOrganizationAddActivityParams;
  config?: RequestOptions;
};

export const postOrganizationAddActivity = async ({
  params,
  config
}: PostOrganizationAddActivityConfig) => api.post<ActivityResponse>('activity', params, config);
