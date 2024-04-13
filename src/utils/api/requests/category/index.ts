import { api } from '@/utils/api/instance';

export type GetCategoryRequestConfig = RequestConfig | void;

export const getCategory = async (requestConfig?: GetCategoryRequestConfig) =>
  api.get<string[]>('category', requestConfig?.config);
