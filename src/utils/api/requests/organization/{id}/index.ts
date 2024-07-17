import type { OrganizationResponse, UpdateOrganizationDto } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PutOrganizationByIdParams = UpdateOrganizationDto & { id: string };
export type PutOrganizationByIdRequestConfig = RequestConfig<PutOrganizationByIdParams>;

export const putOrganizationById = async ({ params, config }: PutOrganizationByIdRequestConfig) =>
  api.put<UpdateOrganizationDto>(`organization/${params.id}`, params, config);

interface GetOrganizationByIdParams {
  id: string;
}

export type GetOrganizationByIdRequestConfig = RequestConfig<GetOrganizationByIdParams>;

export const getOrganizationById = async ({ params, config }: GetOrganizationByIdRequestConfig) =>
  api.get<OrganizationResponse>(`organization/${params.id}`, config);
