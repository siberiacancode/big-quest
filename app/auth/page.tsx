'use client';

import Image from 'next/image';

import AuthImage from '@/assets/images/AuthImage.png';
// import AuthImage from '@/assets/images/authMask.svg';
import { I18nText, Logo } from '@/components/common';

import { LoginForm } from './components/LoginForm/LoginForm';

const AuthPage = () => (
  <div className='flex h-screen flex-col items-center justify-between'>
    <div className='flex h-full items-center gap-24'>
      <div className='flex w-[300px] flex-col space-y-6 sm:w-[350px]'>
        <div className='mb-8 smx:mb-0'>
          <Logo color='quest-green' />
        </div>
        <div>
          <h3 className='my-8 text-center text-3xl font-bold smx:text-2xl'>
            <I18nText path='org.auth.title' />
          </h3>
          <LoginForm />
        </div>
      </div>
      <Image src={AuthImage} alt='authImage' className='lgx:w-80 smx:hidden' />
    </div>
    <h3 className='m-3 text-center text-sm mdx:text-xs'>
      Copyright © 2023 Большой квест | Правила пользования сайтом | Политика конфинденциальности
    </h3>
  </div>
);

export default AuthPage;
