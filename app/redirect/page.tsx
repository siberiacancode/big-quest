import { headers } from 'next/headers';

import { I18nText, Logo, QRCode } from '@/components/common';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

interface RedirectPageProps {
  searchParams: { to?: 'excursion' | 'login' };
}

const RedirectPage = ({ searchParams }: RedirectPageProps) => {
  const headersList = headers();
  const host = headersList.get('host');
  const redirectTo = searchParams.to ?? 'login';

  return (
    <div className='relative flex min-h-screen items-center overflow-auto'>
      <Logo
        href={ROUTES.LANDING.ROOT}
        className='absolute left-1/2 top-[72px] -translate-x-1/2 fill-taiga'
      />
      <div className='container mb-8 mt-[140px] flex max-w-[763px] items-center justify-between gap-[47px] mdx:flex-col mdx:gap-5'>
        <div className='mdx:text-center'>
          <Typography variant='h1' tag='h1'>
            <I18nText path='redirect.title' />
          </Typography>
          <Typography variant='h5' className='mt-6 font-normal'>
            <I18nText path='redirect.description' />
          </Typography>
        </div>
        <div className='max-h-[272px] w-full max-w-[272px] overflow-hidden rounded-xl'>
          <QRCode
            text={`${host}${ROUTES.APP.AUTH}?step=${redirectTo}`}
            options={{
              margin: 5,
              color: {
                light: '#219653',
                dark: '#FFFFFF'
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;
