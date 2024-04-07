import { api } from '../../../instance';

export type PutOrganizationByIdParams = UpdateOrganizationDto;
export type PutOrganizationByIdRequestConfig = RequestConfig<PutOrganizationByIdParams>;

export const putOrganizationById = async ({ params, config }: PutOrganizationByIdRequestConfig) =>
  api.put<UpdateOrganizationDto>(`organization/${params.id}`, params, config);
