import { api } from '@/utils/api/instance';

export const getRefreshTokens = async (params?: RequestConfig) =>
  api.get('auth/refresh-tokens', params?.config);
