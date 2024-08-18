import { NotFoundComponent } from '@/components/common';
import { ROLES_BY_ROUTE, ROUTES } from '@/utils/constants';
import { getUserSession } from '@/utils/helpers/server';

import AppLayout from './app/(main)/layout';
import OrgLayout from './org/(panel)/layout';

const NotFound = () => {
  const userSession = getUserSession();

  return (
    <>
      {!userSession && (
        <div className='h-screen w-screen'>
          <NotFoundComponent link={ROUTES.LANDING.ROOT} />
        </div>
      )}
      {userSession && userSession.roles.some((role) => ROLES_BY_ROUTE.PARTNER.includes(role)) && (
        <div className='h-screen w-screen'>
          <NotFoundComponent link={ROUTES.PARTNER.ROOT} />
        </div>
      )}
      {userSession && userSession.roles.some((role) => ROLES_BY_ROUTE.APP.includes(role)) && (
        <AppLayout>
          <NotFoundComponent link={ROUTES.APP.PROFILE.ROOT} />
        </AppLayout>
      )}
      {userSession && userSession.roles.some((role) => ROLES_BY_ROUTE.ORG.includes(role)) && (
        <OrgLayout>
          <NotFoundComponent link={ROUTES.ORG.ORGANIZATIONS.DASHBOARD} />
        </OrgLayout>
      )}
    </>
  );
};

export default NotFound;
