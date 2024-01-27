import { api } from '../instance';
import { postRefreshTokens } from '../requests/refreshTokens';

export const generateRefreshTokenInterceptor = () =>
  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async (error) => {
      const originalConfig = error.config;

      if (!error.response) return Promise.reject(error);

      if (
        !originalConfig.headers?.referer?.includes('/auth') &&
        error.response.status === 401 &&
        !originalConfig._retry
      ) {
        try {
          await postRefreshTokens();

          originalConfig._retry = true;

          return await api.call(originalConfig);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
