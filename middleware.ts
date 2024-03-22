import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getRefreshTokens } from '@/utils/api';
import { api } from '@/utils/api/instance';
import { generateServerHeadersInterceptor } from '@/utils/api/interceptors/generateServerHeadersInterceptor';
import { generateSetTokensInterceptor } from '@/utils/api/interceptors/generateSetTokensInterceptor';
import { COOKIES, ROUTES } from '@/utils/constants';
import { createTokensTimer, TOKENS_TIMER_EXPIRATION } from '@/utils/jwt/';

generateSetTokensInterceptor();
generateServerHeadersInterceptor();

const UNAUTH_ROUTES = [ROUTES.AUTH, ROUTES.LANDING.ROOT];

const clearCookies = (
  response: NextResponse,
  cookies: Array<(typeof COOKIES)[keyof typeof COOKIES]>
) => cookies.forEach((cookie) => response.cookies.delete(cookie));

export async function middleware(request: NextRequest) {
  console.info('\nMIDDLEWARE REQUEST:', request.method, request.url, new Date());

  if (request.method !== 'GET') return NextResponse.next();

  const authTokenCookie = request.cookies.get(COOKIES.ACCESS_TOKEN);
  const refreshTokenCookie = request.cookies.get(COOKIES.REFRESH_TOKEN);

  const isAuthenticated = !!authTokenCookie && !!refreshTokenCookie;

  if (!isAuthenticated && UNAUTH_ROUTES.some((route) => request.url.includes(route))) {
    console.log('@.1 !isAuthenticated page is auth');
    return NextResponse.next();
  }

  if (!isAuthenticated && !request.url.includes(ROUTES.AUTH)) {
    console.log('@.2 !isAuthenticated page is not auth');
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  if (isAuthenticated) {
    const tokensTimerCookie = request.cookies.get(COOKIES.TOKENS_TIMER);
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

      const response = NextResponse.next();

      const { setTokens } = api.headers;

      response.headers.set(
        'Set-cookie',
        `${setTokens}, ${COOKIES.TOKENS_TIMER}=${createTokensTimer(TOKENS_TIMER_EXPIRATION)}; Path=/; Expires=Tue, 09 Apr 2024 08:13:54 GMT; HttpOnly; SameSite=Lax`
      );

      return response;
    }

    const userSessionCookie = request.cookies.get(COOKIES.USER_SESSION);

    if (userSessionCookie?.value) {
      const userSession: UserResponse = JSON.parse(userSessionCookie.value);

      if (
        userSession.roles.includes('SUPERADMIN') &&
        UNAUTH_ROUTES.some((route) => request.url.includes(route))
      ) {
        return NextResponse.redirect(new URL(ROUTES.ORG.ORGANIZATIONS.ROOT, request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
