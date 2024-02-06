import React from 'react';

import { api } from '@/utils/api/instance';
import { generateRefreshTokenInterceptor } from '@/utils/api/interceptors';

export const useRefreshTokens = (isAuthenticated: boolean) => {
  React.useEffect(() => {
    if (!isAuthenticated) return;

    const refreshInterceptor = generateRefreshTokenInterceptor();
    // const SSRCookiesInterceptor = generateSSRCookiesInterceptor();

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
      // api.interceptors.request.eject(SSRCookiesInterceptor);
    };
  }, [isAuthenticated]);
};
