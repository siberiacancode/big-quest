import { api } from '@/utils/api/instance';

interface GetOrganizationAddressesByIdParams {
  id: string;
}

export type GetOrganizationAddressesByIdRequestConfig =
  RequestConfig<GetOrganizationAddressesByIdParams>;

export const getOrganizationAddressesById = async ({
  params,
  config
}: GetOrganizationAddressesByIdRequestConfig) =>
  api.get<OrganizationAddressesResponse>(`/organization/${params.id}/addresses`, config);
