import { api } from '../../../instance';

interface GetOrganizationByIdParams {
  id: string;
}

export type GetOrganizationByIdRequestConfig = RequestConfig<GetOrganizationByIdParams>;

export const getOrganizationById = async ({ params, config }: GetOrganizationByIdRequestConfig) =>
  api.get<OrganizationResponse>(`organization/${params.id}`, config);
