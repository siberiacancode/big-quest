import { headers } from 'next/headers';

import { api } from '../instance';

export const generateServerHeadersInterceptor = () =>
  api.interceptors.request.use((config) => {
    const headersList = headers();
    const cookie = headersList.get('cookie');

    if (cookie && config.headers) {
      config.headers.cookie = cookie;
    }

    return config;
  });
