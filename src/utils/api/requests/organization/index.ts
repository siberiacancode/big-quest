import { api } from '../../instance';

export const getOrganizationById = async ({ config }: RequestParams) =>
  api.get<OrganizationResponse>(`organization/${config?.params?.id}`, config);
