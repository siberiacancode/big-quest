import type {
  AddressesListResponse,
  OrganizationControllerGetAddressesWithOrganizationParams
} from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetOrganizationAddressesParams =
  OrganizationControllerGetAddressesWithOrganizationParams;

export type GetOrganizationAddressesRequestConfig = RequestConfig<GetOrganizationAddressesParams>;

export const getOrganizationAddresses = async ({
  params,
  config
}: GetOrganizationAddressesRequestConfig) =>
  api.get<AddressesListResponse>('organization/addresses', {
    ...config,
    params: { ...params, ...config?.params }
  });
