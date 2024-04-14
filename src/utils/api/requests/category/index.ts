import { api } from '@/utils/api/instance';

export type GetCategoryConfig = RequestConfig | void;

export const getCategory = async (requestConfig?: GetCategoryConfig) =>
  api.get<CategoryResponse[]>('category', requestConfig?.config);
