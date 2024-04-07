import { api } from '../../instance';

export type GetOrganizationRequestConfig = RequestConfig | void;

export const getOrganization = async (requestConfig?: GetOrganizationRequestConfig) =>
  api.get<OrganizationListPaginationResponse>('organization', requestConfig?.config);
