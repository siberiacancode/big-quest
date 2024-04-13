import { api } from '../../../instance';

interface GetTariffByLegalEntityIdParams {
  legalEntityId: string;
}

export type GetTariffByLegalEntityIdRequestConfig = RequestConfig<GetTariffByLegalEntityIdParams>;

export const getTariffByLegalEntityId = ({
  params,
  config
}: GetTariffByLegalEntityIdRequestConfig) =>
  api.get<TariffResponse>(`tariff/${params.legalEntityId}`, config);
