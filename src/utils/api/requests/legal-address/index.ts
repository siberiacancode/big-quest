import type { AddressResponse, CreateAddressDto, UpdateAddressDto } from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostLegalAddressParams = CreateAddressDto;
export type PostLegalAddressRequestConfig = RequestConfig<PostLegalAddressParams>;

export const postLegalAddress = async ({ params, config }: PostLegalAddressRequestConfig) =>
  api.post<AddressResponse>('legal-address', params, config);

export type PutLegalAddressByIdParams = UpdateAddressDto;
export type PutLegalAddressByIdRequestConfig = RequestConfig<PutLegalAddressByIdParams>;

export const putLegalAddressById = async ({ params, config }: PutLegalAddressByIdRequestConfig) =>
  api.put<AddressResponse>('legal-address', params, config);
