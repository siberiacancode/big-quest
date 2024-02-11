import { api } from '../../../instance';

interface GetOrganizationByIdParams {
  id: string;
}

export const getOrganizationById = async ({
  params,
  config
}: RequestParams<GetOrganizationByIdParams>) =>
  api.get<OrganizationResponse>(`organization/${params.id}`, config);
