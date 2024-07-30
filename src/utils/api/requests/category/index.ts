import type { CategoryControllerGetCategoriesParams, CategoryListResponse } from '@/api-types';
import { api } from '@/utils/api/instance';

export type GetCategoriesParams = CategoryControllerGetCategoriesParams;
export type GetCategoriesRequestConfig = RequestConfig<GetCategoriesParams>;

export const getCategories = async ({ params, config }: GetCategoriesRequestConfig) =>
  api.get<CategoryListResponse>('category', {
    ...config,
    params: { ...config?.params, ...params }
  });
