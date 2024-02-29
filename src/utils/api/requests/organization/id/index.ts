import { api } from '../../../instance';

interface GetOrganizationByIdParams {
  id: string;
}

export const getOrganizationById = async ({
  params,
  config
}: RequestConfig<GetOrganizationByIdParams>) =>
  api.get<OrganizationResponse>(`organization/${params.id}`, config);
