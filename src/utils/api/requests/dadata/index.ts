import { api } from '@/utils/api/instance';

export type GetDadataRequestConfig = RequestConfig | void;

export const getDadata = async (requestConfig?: GetDadataRequestConfig) =>
  api.get<AddressResponse[]>('dadata', requestConfig?.config);
