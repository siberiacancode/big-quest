import React from 'react';

import LoginForm from './components/LoginForm/LoginForm';

export const AuthPage = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex w-[300px] flex-col justify-center space-y-6 sm:w-[350px]'>
        <h3 className='text-center text-2xl font-semibold'>Вход</h3>
        <LoginForm />
      </div>
    </div>
  );
};
