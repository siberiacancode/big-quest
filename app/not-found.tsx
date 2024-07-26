import { NotFoundComponent } from '@/components/common';
import { ROUTES } from '@/utils/constants';
import { getUserSession } from '@/utils/helpers/server';

import Layout from './org/(panel)/layout';

const NotFound = () => {
  const userSession = getUserSession();

  return (
    <>
      {!userSession && (
        <div className='h-screen w-screen'>
          <NotFoundComponent link={ROUTES.LANDING.ROOT} />
        </div>
      )}
      {userSession && (
        <Layout>
          <NotFoundComponent link={ROUTES.ORG.ORGANIZATIONS.DASHBOARD} />
        </Layout>
      )}
    </>
  );
};

export default NotFound;
