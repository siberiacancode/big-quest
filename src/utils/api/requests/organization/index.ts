import type {
  OrganizationControllerFindOrganizationsParams,
  OrganizationListPaginationResponse,
  OrganizationServerError
} from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetOrganizationParams = OrganizationControllerFindOrganizationsParams;
export type GetOrganizationRequestConfig = RequestConfig<GetOrganizationParams>;

export const getOrganization = async ({ params, config }: GetOrganizationRequestConfig) =>
  api.get<OrganizationServerError | OrganizationListPaginationResponse>('organization', {
    ...config,
    params: { ...config?.params, ...params }
  });
