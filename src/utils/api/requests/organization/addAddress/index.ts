import { api } from '@/utils/api/instance';

export type PostOrganizationAddAddressParams = OrganizationAddAddressDto;

export const postOrganizationAddAddress = async ({
  params,
  config
}: RequestParams<PostOrganizationAddAddressParams>) =>
  api.post(`organization/${params.organizationId}/addAddress`, params, config);
