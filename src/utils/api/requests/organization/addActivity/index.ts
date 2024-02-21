import { api } from '@/utils/api/instance';

export type PostOrganizationAddActivityParams = OrganizationAddressDto;

export const postOrganizationAddActivity = async ({
  params,
  config
}: RequestParams<PostOrganizationAddActivityParams>) =>
  api.post(`organization/${params.organizationId}/addActivity`, params, config);
