import { api } from '@/utils/api/instance';

export type GetAddressRequestConfig = RequestConfig | void;

export const getAddress = async (requestConfig?: GetAddressRequestConfig) =>
  api.get<AddressResponse[]>('Address', requestConfig?.config);
