import { api } from '@/utils/api/instance';

export type PostOrganizationAddAddressParams = OrganizationAddressDto;

export const postOrganizationAddAddress = async ({
  params,
  config
}: RequestParams<PostOrganizationAddAddressParams>) =>
  api.post(`organization/${params.organizationId}/addAddress`, params, config);
