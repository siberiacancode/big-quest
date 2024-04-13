import { api } from '../../instance';

export interface GetOrganizationParams {
  limit?: number;
  current?: number;
  id?: string;
  ids?: string;
  name?: string;
  locality?: string;
  stage?: Stage;
  type?: LegalType;
  sort?: string;
}
export type GetOrganizationRequestConfig = RequestConfig<GetOrganizationParams>;

export const getOrganization = async (requestConfig?: GetOrganizationRequestConfig) =>
  api.get<OrganizationListPaginationResponse>('organization', requestConfig?.config);
