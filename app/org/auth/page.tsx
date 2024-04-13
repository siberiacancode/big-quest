import Image from 'next/image';

import authImage from '@/assets/images/auth.webp';
import { I18nText, Logo } from '@/components/common';
import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { LoginForm } from './(components)/LoginForm/LoginForm';

const OrgAuthPage = () => (
  <div className='flex min-h-screen flex-col items-center justify-between p-2'>
    <div className='flex flex-1 items-center justify-around gap-28 xlx:gap-12 xlx:p-5'>
      <div className='flex flex-col space-y-6'>
        <div className='mb-10'>
          <Logo href={ROUTES.LANDING.ROOT} className='fill-taiga' />
        </div>
        <div>
          <Typography variant='h2' tag='h2' className='my-[30px] text-center text-4xl xlx:text-2xl'>
            <I18nText path='org.auth.title' />
          </Typography>
          <LoginForm />
        </div>
      </div>
      <Image src={authImage} alt='auth image' className='w-[36rem] xlx:block xlx:w-96 mdx:hidden' />
    </div>
    <footer className='m-3 flex flex-wrap justify-center divide-x divide-solid divide-gray-700 *:px-1 mdx:divide-x-0'>
      <Typography variant='body3' className='text-foreground'>
        Copyright © {new Date().getFullYear()} <I18nText path='app.title' />
      </Typography>
      <Typography variant='body3' className='underline'>
        <I18nText path='org.auth.footer.siteRules' />
      </Typography>
      <Typography variant='body3' className='underline'>
        <I18nText path='org.auth.footer.privacyPolicy' />
      </Typography>
    </footer>
  </div>
);

export default OrgAuthPage;
