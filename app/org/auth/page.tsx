import type { Metadata } from 'next';
import Image from 'next/image';

import authImage from '@/assets/images/auth.webp';
import { I18nText, Logo } from '@/components/common';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';
import { getI18n } from '@/utils/contexts/i18n/getI18n';

import { LoginForm } from './(components)/LoginForm/LoginForm';

export const generateMetadata = async (): Promise<Metadata> => {
  const i18n = await getI18n('ru');

  return {
    title: `${i18n.formatMessage({ id: 'metadata.page.org' })} | ${i18n.formatMessage({ id: 'metadata.page.org.auth' })}`,
    description: `${i18n.formatMessage({ id: 'metadata.page.org' })} | ${i18n.formatMessage({ id: 'metadata.page.org.auth' })}`
  };
};

const OrgAuthPage = () => (
  <div className='flex min-h-screen flex-col items-center justify-between p-2'>
    <div className='flex flex-1 items-center justify-around gap-28 xlx:gap-12 xlx:p-5'>
      <div className='flex flex-col space-y-6'>
        <div className='mb-10'>
          <Logo href={ROUTES.LANDING.ROOT} className='fill-taiga' />
        </div>
        <div>
          <Typography variant='h1' tag='h1' className='my-[30px] text-center'>
            <I18nText path='org.auth.title' />
          </Typography>
          <LoginForm />
        </div>
      </div>
      <Image src={authImage} alt='auth image' className='w-[36rem] xlx:block xlx:w-96 mdx:hidden' />
    </div>
    <footer className='m-3 flex flex-wrap justify-center divide-x divide-solid divide-gray-700 *:px-1 mdx:divide-x-0'>
      <Typography variant='body3' className='text-foreground'>
        Copyright © {new Date().getFullYear()} <I18nText path='site.title' />
      </Typography>
      <Typography variant='body3' className='text-muted-foreground underline'>
        <I18nText path='org.auth.footer.siteRules' />
      </Typography>
      <Typography variant='body3' className='text-muted-foreground underline'>
        <I18nText path='org.auth.footer.privacyPolicy' />
      </Typography>
    </footer>
  </div>
);

export default OrgAuthPage;
