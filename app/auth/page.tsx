'use client';

import Image from 'next/image';

import AuthImage from '@/assets/images/AuthImage.png';
import { I18nText, Logo } from '@/components/common';

import { LoginForm } from './components/LoginForm/LoginForm';

const AuthPage = () => (
  <div className='flex h-screen flex-col items-center justify-between p-2'>
    <div className='flex h-full items-center justify-around gap-24'>
      <div className='flex flex-col space-y-6'>
        <div className='mb-8 smx:mb-0'>
          <Logo fill='taiga-light' />
        </div>
        <div>
          <h3 className='my-8 text-center text-3xl font-bold smx:text-2xl'>
            <I18nText path='org.auth.title' />
          </h3>
          <LoginForm />
        </div>
      </div>
      <Image src={AuthImage} alt='authImage' className='lgx:w-72 smx:hidden lg:w-[28rem]' />
    </div>
    <div className='m-3 flex divide-solid text-xs smx:flex-col smx:divide-y sm:divide-x'>
      <span className='px-2'>
        Copyright © 2023 <I18nText path='app.title' />
      </span>
      <span className='px-2 text-muted-foreground underline'>
        <I18nText path='org.auth.footer.siteRules' />
      </span>
      <span className='px-2 text-muted-foreground underline'>
        <I18nText path='org.auth.footer.privacyPolicy' />
      </span>
    </div>
  </div>
);

export default AuthPage;
