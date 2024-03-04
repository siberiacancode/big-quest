import { api } from '@/utils/api/instance';

export type GetCategoryConfig = RequestConfig;

export const getCategory = async ({ config }: GetCategoryConfig) =>
  api.get<string[]>('category', config);
