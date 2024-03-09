import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getRefreshTokens } from '@/utils/api';
import { api } from '@/utils/api/instance';
import { generateServerHeadersInterceptor } from '@/utils/api/interceptors/generateServerHeadersInterceptor';
import { generateSetTokensInterceptor } from '@/utils/api/interceptors/generateSetTokensInterceptor';
import { COOKIES, ROUTES } from '@/utils/constants';
import { createTokensTimer } from '@/utils/jwt/helpers/createTokensTimer';

generateSetTokensInterceptor();
generateServerHeadersInterceptor();

const UN_AUTH_ROUTES = [ROUTES.AUTH];

const clearCookies = (
  response: NextResponse,
  cookies: Array<(typeof COOKIES)[keyof typeof COOKIES]>
) => cookies.forEach((cookie) => response.cookies.delete(cookie));

export async function middleware(request: NextRequest) {
  console.log('request.url: ', request.url);
  const authTokenCookie = request.cookies.get(COOKIES.ACCESS_TOKEN);
  const refreshTokenCookie = request.cookies.get(COOKIES.REFRESH_TOKEN);

  const isAuthenticated = !!authTokenCookie && !!refreshTokenCookie;

  if (!isAuthenticated && request.url.includes(ROUTES.AUTH)) {
    console.log('@.1 !isAuthenticated page is auth');
    return NextResponse.next();
  }

  if (!isAuthenticated && !request.url.includes(ROUTES.AUTH)) {
    console.log('@.2 !isAuthenticated page is not auth');
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  const tokensTimerCookie = request.cookies.get(COOKIES.TOKENS_TIMER);
  if (isAuthenticated) {
    if (tokensTimerCookie?.value && +tokensTimerCookie.value < Date.now()) {
      console.log('@.3 update tokens and user data');

      try {
        console.log('@.4 getRefreshTokens tokensTimerCookie done');
        await getRefreshTokens();
      } catch (error) {
        console.log('@.5 getRefreshTokens first error', error);
        const response = NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
        clearCookies(response, [
          COOKIES.REFRESH_TOKEN,
          COOKIES.ACCESS_TOKEN,
          COOKIES.TOKENS_TIMER,
          COOKIES.USER_SESSION
        ]);

        return response;
      }

      // try {
      //   const getUserMeResponse = await getUserMe();
      //   console.log('@', getUserMeResponse);

      //   // if (getUserMeResponse.roles.includes('SUPERADMIN') && request.url.includes(ROUTES.AUTH)) {
      //   //   console.log('@.4 SUPERADMIN');
      //   //   return NextResponse.redirect(new URL(ROUTES.ORG.ORGANIZATIONS.ROOT, request.url));
      //   // }
      //   try {
      //     await getRefreshTokens();
      //   } catch (error) {
      //     console.log('@.5 getRefreshTokens first error');
      //     const response = NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
      //     response.cookies.delete(COOKIES.REFRESH_TOKEN);
      //     response.cookies.delete(COOKIES.ACCESS_TOKEN);
      //     return response;
      //   }
      // } catch (error: any) {
      //   const responseError = error.cause as ResponseError;
      //   // console.log('@', responseError);
      //   if (responseError.response.status !== 401) {
      //     console.log('@.6 getUserMeResponse error, not 401');
      //     const response = NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
      //     response.cookies.delete(COOKIES.REFRESH_TOKEN);
      //     response.cookies.delete(COOKIES.ACCESS_TOKEN);
      //     return response;
      //   }

      //   console.log('@status', responseError.response.status);

      //   try {
      //     await getRefreshTokens();
      //   } catch (error) {
      //     console.log('@.7 getRefreshTokens second error');

      //     const response = NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
      //     response.cookies.delete(COOKIES.REFRESH_TOKEN);
      //     response.cookies.delete(COOKIES.ACCESS_TOKEN);
      //     return response;
      //   }
      // }

      const response = NextResponse.redirect(new URL(request.url));

      const { setTokens } = api.headers;

      console.log('@tokens update for browser', setTokens);

      response.headers.set(
        'Set-cookie',
        `${setTokens}, ${COOKIES.TOKENS_TIMER}=${createTokensTimer(5)}`
      );

      return response;
    }

    const userSessionCookie = request.cookies.get(COOKIES.USER_SESSION);
    if (userSessionCookie?.value) {
      const userSession: UserResponse = JSON.parse(userSessionCookie.value);

      if (
        userSession.roles.includes('SUPERADMIN') &&
        UN_AUTH_ROUTES.some((route) => request.url.includes(route))
      ) {
        console.log('@.4 SUPERADMIN from UN_AUTH_ROUTES');
        return NextResponse.redirect(new URL(ROUTES.ORG.ORGANIZATIONS.ROOT, request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
