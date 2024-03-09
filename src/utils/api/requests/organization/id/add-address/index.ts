import { api } from '@/utils/api/instance';

export type PostOrganizationAddAddressParams = OrganizationAddressDto;
export type PostOrganizationAddAddressRequestConfig =
  RequestConfig<PostOrganizationAddAddressParams>;

export const postOrganizationAddAddress = async ({
  params: { organizationId, ...params },
  config
}: PostOrganizationAddAddressRequestConfig) =>
  api.post(`organization/${organizationId}/add-address`, params, config);
