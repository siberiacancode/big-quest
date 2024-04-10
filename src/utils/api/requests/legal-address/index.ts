import { api } from '@/utils/api/instance';

export type PostLegalAddressParams = CreateAddressDto;
export type PostLegalAddressRequestConfig = RequestConfig<PostLegalAddressParams>;

export const postLegalAddress = async ({ params, config }: PostLegalAddressRequestConfig) =>
  api.post<AddressResponse>('legal-address', params, config);
