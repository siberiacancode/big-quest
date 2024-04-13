import Image from 'next/image';

import authImage from '@/assets/images/auth.webp';
import { I18nText, Logo } from '@/components/common';
import { Typography } from '@/components/ui';

import { LoginForm } from './(components)/LoginForm/LoginForm';

const OrgAuthPage = () => (
  <div className='flex min-h-screen flex-col items-center justify-between p-10'>
    <div className='flex flex-1 items-center justify-around gap-12 p-5 md:gap-28'>
      <div className='flex max-w-[450px] flex-col space-y-6'>
        <div className='mb-20 flex justify-start'>
          <Logo className='fill-taiga' />
        </div>
        <div>
          <Typography variant='h2' tag='h1' className='my-[30px] text-start text-4xl'>
            <I18nText path='org.auth.title' />
          </Typography>
          <LoginForm />
        </div>
      </div>
      <Image src={authImage} alt='auth image' className='mt-20 hidden xl:block' />
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
