import { api } from '../../instance';

export const getOrganization = async ({ config }: RequestParams) =>
  api.get<OrganizationPaginationResponse>('organization', config);

export type PutOrganizationParams = UpdateOrganizationDto;

export const putOrganization = async ({ params, config }: RequestParams<PutOrganizationParams>) =>
  api.put<UpdateOrganizationDto>('organization', params, config);
