import type { AddressResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export interface DeleteLegalAddressByIdParams {
  id: string;
}
export type DeleteLegalAddressByIdRequestConfig = RequestConfig<DeleteLegalAddressByIdParams>;

export const deleteLegalAddressById = async ({
  params,
  config
}: DeleteLegalAddressByIdRequestConfig) =>
  api.delete<boolean>(`legal-address/${params.id}`, config);

export interface GetLegalAddressByIdParams {
  id: string;
}
export type GetLegalAddressByIdRequestConfig = RequestConfig<GetLegalAddressByIdParams>;

export const getLegalAddressById = async ({ params, config }: GetLegalAddressByIdRequestConfig) =>
  api.get<AddressResponse>(`legal-address/${params.id}`, config);
