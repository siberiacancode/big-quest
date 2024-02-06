// import { COOKIES } from '@/utils/constants';

// import { isSSR } from '../helpers';
// import { api } from '../instance';

// export const generateSSRCookiesInterceptor = () =>
//   api.interceptors.request.use(async (config) => {
//     if (isSSR) {
//       const { cookies } = await import('next/headers');
//       const accessToken = cookies().get(COOKIES.ACCESS_TOKEN)?.value;
//       const refreshToken = cookies().get(COOKIES.REFRESH_TOKEN)?.value;

//       if (accessToken && config.headers) {
//         config.headers.set(
//           'Cookie',
//           `${COOKIES.REFRESH_TOKEN}=${refreshToken}; ${COOKIES.ACCESS_TOKEN}=${accessToken};`
//         );
//       }
//     }

//     return config;
//   });
