import { api } from '../../instance';

type PutTariffParams = UpdateTariffDto;

export type PutTariffRequestConfig = RequestConfig<PutTariffParams>;

export const putTariff = ({ params, config }: PutTariffRequestConfig) =>
  api.put('/tariff', params, config);
