import type { AddressResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export interface GetLegalAddressesByLegalIdParams {
  legalId: string;
}

export type GetLegalAddressesByLegalIdRequestConfig =
  RequestConfig<GetLegalAddressesByLegalIdParams>;

export const getLegalAddressesByLegalId = async ({
  params,
  config
}: GetLegalAddressesByLegalIdRequestConfig) =>
  api.get<AddressResponse[]>(`legal-addresses/${params.legalId}`, config);
