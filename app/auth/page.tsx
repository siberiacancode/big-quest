import Image from 'next/image';

import AuthImage from '@/assets/images/auth.webp';
import { I18nText, Logo } from '@/components/common';

import { AuthFooter } from './components/AuthFooter/AuthFooter';
import { LoginForm } from './components/LoginForm/LoginForm';

const AuthPage = () => (
  <div className='flex h-screen flex-col items-center justify-between p-2'>
    <div className='flex h-full items-center justify-around gap-28 xlx:gap-12 xlx:p-5'>
      <div className='flex flex-col space-y-6'>
        <div className='mb-10'>
          <Logo className='fill-taiga' />
        </div>
        <div>
          <h3 className='my-10 text-center text-4xl font-bold xlx:text-2xl'>
            <I18nText path='org.auth.title' />
          </h3>
          <LoginForm />
        </div>
      </div>
      <Image src={AuthImage} alt='auth image' className='w-[36rem] xlx:block xlx:w-96 mdx:hidden' />
    </div>
    <AuthFooter />
  </div>
);

export default AuthPage;
