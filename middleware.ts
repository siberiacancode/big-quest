import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { generateServerHeadersInterceptor } from '@/utils/api/interceptors/generateServerHeadersInterceptor';
import { CITIES, COOKIES, ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

generateServerHeadersInterceptor();

const UNAUTH_ROUTES = [ROUTES.LANDING.ROOT, ROUTES.AUTH, ROUTES.ORG.AUTH, ROUTES.APP.ACTIVITIES];
const MOBILE_ONLY_ROUTES = [
  ROUTES.AUTH,
  ROUTES.APP.PROFILE.ROOT,
  ROUTES.APP.RATING,
  ROUTES.APP.SUPPORT,
  ROUTES.APP.TAIGA
];

export const middleware = (request: NextRequest) => {
  const { pathname } = new URL(request.url);
  console.info('\nMIDDLEWARE REQUEST:', request.method, request.url, pathname, new Date());

  if (request.method !== 'GET') return NextResponse.next();

  const sessionIdCookie = request.cookies.get(COOKIES.SESSION_ID);
  const userSessionCookie = request.cookies.get(COOKIES.USER_SESSION);

  const device = getDevice();
  const isMobile = device.type === 'mobile';

  const isAuthenticated = !!sessionIdCookie && !!userSessionCookie;
  const isAuthRoute = !UNAUTH_ROUTES.some((route) => request.url.includes(route));
  const isMobileOnlyRoute = MOBILE_ONLY_ROUTES.some((route) => request.url.includes(route));

  if (!isMobile && isMobileOnlyRoute) {
    return NextResponse.redirect(
      new URL(
        `${ROUTES.REDIRECT}?to=${request.url.includes('excursion') ? 'excursion' : 'login'}`,
        request.url
      )
    );
  }

  const isLanding =
    pathname === ROUTES.LANDING.ROOT ||
    Object.values(CITIES).some((city) => request.url.includes(city.id));

  if (!isAuthenticated && (isLanding || !isAuthRoute)) {
    console.log('@.1 !isAuthenticated unauth page');
    return NextResponse.next();
  }

  const isOrg = request.url.includes(ROUTES.ORG.ORGANIZATIONS.ROOT);
  if (!isAuthenticated && isOrg) {
    console.log('@.2 !isAuthenticated && isOrg, org page requires auth');
    return NextResponse.redirect(new URL(ROUTES.ORG.AUTH, request.url));
  }

  if (!isAuthenticated && isAuthRoute) {
    console.log('@.3 !isAuthenticated, page requires auth');
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  if (isAuthenticated && isAuthRoute) {
    console.log('@.4 isAuthenticated');
    const userSessionCookie = request.cookies.get(COOKIES.USER_SESSION);

    if (userSessionCookie?.value) {
      const userSession: UserResponse = JSON.parse(userSessionCookie.value);

      if (
        (userSession.roles.includes('SUPERADMIN') || userSession.roles.includes('ADMIN')) &&
        UNAUTH_ROUTES.some((route) => request.url.includes(route))
      ) {
        return NextResponse.redirect(new URL(ROUTES.ORG.ORGANIZATIONS.DASHBOARD, request.url));
      }
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
