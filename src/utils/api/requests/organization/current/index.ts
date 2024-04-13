import { api } from '@/utils/api/instance';

export type GetOrganizationCurrentRequestConfig = RequestConfig | void;

export const getOrganizationCurrent = async (requestConfig?: GetOrganizationCurrentRequestConfig) =>
  api.get<OrganizationResponse>('organization/current', requestConfig?.config);
