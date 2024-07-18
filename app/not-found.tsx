import { headers } from 'next/headers';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getUserSession } from '@/utils/helpers/server';

import Layout from './org/(panel)/layout';

const NotFoundComponent = ({ link }: { link: string }) => (
  <div className='flex h-full w-full flex-col items-center justify-center gap-2 p-6'>
    <Typography variant='h3'>
      <I18nText path='page.notFound.title' />
    </Typography>
    <Link
      href={{
        pathname: link,
        query: { step: 'login' }
      }}
      className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-full max-w-96')}
    >
      <I18nText path='button.backToRoot' />
    </Link>
  </div>
);

const NotFound = () => {
  const userSession = getUserSession();
  const headersList = headers();

  const pathname = headersList.get('referer');
  const isOrg = pathname?.includes('/org/');
  const isPartner = pathname?.includes('/partner/');

  // TODO будем ли отслеживать org / partner пути для редиректа
  console.log(userSession, pathname, isOrg, isPartner);

  return (
    <>
      {!userSession && (
        <div className='h-screen w-screen'>
          <NotFoundComponent link='/' />
        </div>
      )}
      {userSession && (
        <Layout>
          <NotFoundComponent link='/org/organizations/dashboard' />
        </Layout>
      )}
    </>
  );
};

export default NotFound;
