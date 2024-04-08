import { api } from '../../../instance';

export type PutOrganizationByIdParams = UpdateOrganizationDto;
export type PutOrganizationByIdRequestConfig = RequestConfig<PutOrganizationByIdParams>;

export const putOrganizationById = async ({ params, config }: PutOrganizationByIdRequestConfig) =>
  api.put<UpdateOrganizationDto>(`organization/${params.id}`, params, config);

interface GetOrganizationByIdParams {
  id: string;
}

export type GetOrganizationByIdRequestConfig = RequestConfig<GetOrganizationByIdParams>;

export const getOrganizationById = async ({ params, config }: GetOrganizationByIdRequestConfig) =>
  api.get<OrganizationResponse>(`organization/${params.id}`, config);
