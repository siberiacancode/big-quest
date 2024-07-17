import type { TariffResponse, UpdateTariffDto } from '@/api-types';
import { api } from '@/utils/api/instance';

type PutTariffByIdParams = UpdateTariffDto & { id: string };

export type PutTariffByIdRequestConfig = RequestConfig<PutTariffByIdParams>;

export const putTariffById = ({ params, config }: PutTariffByIdRequestConfig) =>
  api.put<TariffResponse>(`tariff/${params.id}`, params, config);
