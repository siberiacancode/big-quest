import { api } from '@/utils/api/instance';

export type GetRefreshTokensRequestConfig = RequestConfig | void;

export const getRefreshTokens = async (requestConfig?: GetRefreshTokensRequestConfig) =>
  api.get('auth/refresh-tokens', requestConfig?.config);
