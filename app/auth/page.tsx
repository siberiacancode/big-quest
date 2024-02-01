import Image from 'next/image';

import AuthImage from '@/assets/images/auth.webp';
import { I18nText, Logo } from '@/components/common';

import { LoginForm } from './components/LoginForm/LoginForm';

const AuthPage = () => (
  <div className='flex h-screen flex-col items-center justify-between p-2'>
    <div className='flex h-full items-center justify-around gap-24'>
      <div className='flex w-80 flex-col space-y-6 mdx:w-96 lg:w-96'>
        <div className='mb-8'>
          <Logo className='fill-taiga' />
        </div>
        <div>
          <h3 className='my-8 text-center text-2xl font-bold'>
            <I18nText path='org.auth.title' />
          </h3>
          <LoginForm />
        </div>
      </div>
      <Image src={AuthImage} alt='auth image' className='w-[28rem] lgx:block lgx:w-72 mdx:hidden' />
    </div>
    <div className='m-3 flex flex-wrap justify-center divide-x divide-solid divide-gray-700 text-xs *:px-1 mdx:divide-x-0'>
      <span>
        Copyright © {new Date().getFullYear()} <I18nText path='app.title' />
      </span>
      <span className='text-muted-foreground underline'>
        <I18nText path='org.auth.footer.siteRules' />
      </span>
      <span className='text-muted-foreground underline'>
        <I18nText path='org.auth.footer.privacyPolicy' />
      </span>
    </div>
  </div>
);

export default AuthPage;
