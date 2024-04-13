import { api } from '../../../instance';

type PutTariffByIdParams = UpdateTariffDto;

export type PutTariffByIdRequestConfig = RequestConfig<PutTariffByIdParams>;

export const putTariffById = ({ params, config }: PutTariffByIdRequestConfig) =>
  api.put(`tariff/${params.id}`, params, config);
