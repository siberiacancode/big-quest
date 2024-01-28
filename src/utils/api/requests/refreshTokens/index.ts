import { api } from '@/utils/api/instance';

export const postRefreshTokens = async (params?: RequestParams) =>
  api.post('refresh-tokens', undefined, params?.config);
