import { api } from '../../instance';

export type GetOrganizationRequestConfig = RequestConfig | void;

export const getOrganization = async (requestConfig?: GetOrganizationRequestConfig) =>
  api.get<OrganizationListPaginationResponse>('organization', requestConfig?.config);

export type PutOrganizationParams = UpdateOrganizationDto;
export type PutOrganizationRequestConfig = RequestConfig<PutOrganizationParams>;

export const putOrganization = async ({ params, config }: PutOrganizationRequestConfig) =>
  api.put<UpdateOrganizationDto>('organization', params, config);
