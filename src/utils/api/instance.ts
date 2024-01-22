import { isSSR } from './helpers';
import { HttpClient } from './http-client';

export const api = new HttpClient({
  baseURL: isSSR ? `${process.env.API_URL}/api` : '/api'
});

console.log('@', typeof window === 'undefined');
if (typeof window === 'undefined') {
  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async (error) => {
      const originalConfig = error.config;

      if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          return api.call(originalConfig);
        }

        return Promise.resolve(error.response.data);
      }

      return Promise.reject(error);
    }
  );
}
