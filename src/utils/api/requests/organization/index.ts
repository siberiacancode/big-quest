import { api } from '../../instance';

export const getOrganization = async ({ config }: RequestConfig) =>
  api.get<OrganizationPaginationResponse>('organization', config);
