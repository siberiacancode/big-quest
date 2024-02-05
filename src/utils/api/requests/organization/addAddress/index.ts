import { api } from '@/utils/api/instance';

export type PostAddOrganizationAddressParams = AddOrganizationAddressDto;

export const postAddOrganizationAddress = async ({
  params,
  config
}: RequestParams<PostAddOrganizationAddressParams>) =>
  api.post('organization/addAddress', params, config);
