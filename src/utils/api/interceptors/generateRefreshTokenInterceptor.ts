import { api } from '../instance';
import { getRefreshTokens } from '../requests';

export const generateRefreshTokenInterceptor = () =>
  api.interceptors.response.use(
    (response) => response.data,
    async (error) => {
      const originalConfig = error.config;

      if (!error.response) return Promise.reject(error);

      if (
        error.response.status === 401 &&
        !originalConfig._retry &&
        !originalConfig.url.includes('auth/refresh-tokens')
      ) {
        try {
          await getRefreshTokens();

          originalConfig._retry = true;

          return await api.call(originalConfig);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
