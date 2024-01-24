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
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/1.0/auth/refresh-tokens`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer accessToken2`
            },
            credentials: 'include'
          });

          originalConfig._retry = true;

          return await api.call(originalConfig);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
