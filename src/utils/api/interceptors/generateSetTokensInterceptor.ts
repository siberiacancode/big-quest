import { isSSR } from '../helpers';
import { api } from '../instance';

export const generateSetTokensInterceptor = () =>
  api.interceptors.response.use((response) => {
    if (isSSR && response.url.includes('auth/refresh-tokens')) {
      api.setHeaders({ setTokens: response.headers.getSetCookie().join(' ') });
    }
    return response.data;
  });
