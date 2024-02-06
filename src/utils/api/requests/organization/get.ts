import { api } from '../../instance';

export const getOrganization = async ({ config }: RequestParams) =>
  api.get<OrganizationPaginationResponse[]>('organization', config);
