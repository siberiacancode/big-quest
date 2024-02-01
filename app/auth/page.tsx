'use client';

import { I18nText } from '@/components/common';

import { LoginForm } from './components/LoginForm/LoginForm';

const AuthPage = () => (
  <div>
    <div className='flex h-screen items-center justify-center'>
      <div className='flex w-[300px] flex-col justify-center space-y-6 sm:w-[350px]'>
        <h3 className='text-center text-2xl font-semibold'>
          <I18nText path='org.auth.title' />
        </h3>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default AuthPage;
