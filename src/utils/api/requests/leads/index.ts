import { api } from '@/utils/api/instance';

export interface GetLeadsParams {
  fullname: string;
}

export type GetLeadsRequestConfig = RequestConfig<GetLeadsParams>;

export const getLeads = async ({ params, config }: GetLeadsRequestConfig) =>
  api.get<LeadResponse[]>('leads', {
    ...config,
    params: { ...config?.params, ...params }
  });
