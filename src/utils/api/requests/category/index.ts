import { api } from '@/utils/api/instance';

export type GetCategoryConfig = RequestConfig | void;

export const getCategory = async (requestConfig?: GetCategoryConfig) =>
  api.get<string[]>('category', requestConfig?.config);
