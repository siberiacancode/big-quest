import { api } from '@/utils/api/instance';

export const getRefreshTokens = async (params?: RequestParams) =>
  api.get('auth/refresh-tokens', params?.config);
