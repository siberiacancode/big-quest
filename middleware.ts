import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { UserResponse } from '@/api-types';
import { CITIES, COOKIES, ORG_PANEL_AVAILABLE_ROLES, ROUTES } from '@/utils/constants';
import { getDevice } from '@/utils/helpers/server';

const UNAUTH_ROUTES = [ROUTES.APP.AUTH, ROUTES.ORG.AUTH, ROUTES.APP.ACTIVITIES];
const MOBILE_ONLY_ROUTES = [
  ROUTES.APP.AUTH,
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

  const userSession = userSessionCookie?.value
    ? (JSON.parse(userSessionCookie.value) as UserResponse)
    : undefined;

  const device = getDevice();
  const isMobile = device.type === 'mobile';

  const isOrgPanelAvailable = !!userSession?.roles?.filter((role) =>
    ORG_PANEL_AVAILABLE_ROLES.includes(role)
  ).length;
  const isAuthenticated = !!sessionIdCookie && !!userSessionCookie;

  const isUnAuthRoute = UNAUTH_ROUTES.some((route) => request.url.includes(route));
  const isMobileOnlyRoute = MOBILE_ONLY_ROUTES.some((route) => request.url.includes(route));

  console.log('@MOBILE_ONLY_ROUTES', isMobileOnlyRoute);
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

  console.log('@isOrgPanelAvailable', isOrgPanelAvailable);
  console.log('@!isAuthenticated', !isAuthenticated);
  console.log('@isLanding', isLanding);
  console.log('@isUnAuthRoute', isUnAuthRoute);

  if (!isAuthenticated && (isLanding || isUnAuthRoute)) {
    console.log('@.1 !isAuthenticated unauth page');
    return NextResponse.next();
  }

  const isOrg = request.url.includes(ROUTES.ORG.ORGANIZATIONS.ROOT);
  if (!isAuthenticated && !isUnAuthRoute && isOrg) {
    console.log('@.2 !isAuthenticated && isOrg, org page requires auth');
    return NextResponse.redirect(new URL(ROUTES.ORG.AUTH, request.url));
  }

  const isApp = request.url.includes(ROUTES.APP.ROOT);
  if (!isAuthenticated && !isUnAuthRoute && isApp) {
    console.log('@.3 !isAuthenticated, page requires auth');
    return NextResponse.redirect(new URL(ROUTES.APP.AUTH, request.url));
  }

  if (isOrg && !isUnAuthRoute && isAuthenticated && !isOrgPanelAvailable) {
    console.log('@.2 isAuthenticated && isOrg, org page requires certain roles');
    return NextResponse.redirect(new URL(ROUTES.ORG.AUTH, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
