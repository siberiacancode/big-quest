import { api } from '@/utils/api/instance';

export interface GetAddressParams {
  address: string;
}

export type GetAddressRequestConfig = RequestConfig<GetAddressParams>;

export const getAddress = async ({ params, config }: GetAddressRequestConfig) =>
  api.get<AddressResponseDto[]>('address', {
    ...config,
    params: { ...config?.params, ...params }
  });
