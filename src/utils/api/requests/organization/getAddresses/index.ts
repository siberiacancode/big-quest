import { api } from '@/utils/api/instance';

interface GetOrganizationAddressesByIdParams {
  id: string;
}

export const getOrganizationAddressesById = async ({
  params,
  config
}: RequestConfig<GetOrganizationAddressesByIdParams>) =>
  api.get<OrganizationAddressesResponse>(`/organization/${params.id}/addresses`, config);
