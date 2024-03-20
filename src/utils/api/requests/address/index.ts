import { api } from '@/utils/api/instance';

export interface GetAddressParams {
  address: string;
}

export type GetAddressRequestConfig = RequestConfig<GetAddressParams>;

export const getAddress = async ({ params, config }: GetAddressRequestConfig) =>
  api.get<AddressResponse[]>('address', { ...config, params: { ...config?.params, ...params } });
