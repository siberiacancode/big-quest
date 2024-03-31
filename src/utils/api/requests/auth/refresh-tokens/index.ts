import { api } from '@/utils/api/instance';

export type GetAuthRefreshTokensRequestConfig = RequestConfig | void;

export const getAuthRefreshTokens = async (requestConfig?: GetAuthRefreshTokensRequestConfig) =>
  api.get('auth/refresh-tokens', requestConfig?.config);
