import { isSSR } from './helpers';
import { HttpClient } from './http-client';

export const api = new HttpClient({
  baseURL: isSSR ? `${process.env.API_URL}/api/1.0` : '/api/1.0'
});

api.interceptors.request.use(async (config) => {
  if (!isSSR) return config;

  const headersList = (await import('next/headers')).headers();
  const cookie = headersList.get('cookie');

  if (cookie && config.headers) {
    config.headers.cookie = cookie;
  }

  console.log('@interceptor config', config);
  return config;
});
