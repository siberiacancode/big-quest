import { api } from '../instance';

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
        // refresh logic
        originalConfig._retry = true;
        return api.call(originalConfig);
      }

      return Promise.reject(error);
    }
  );
