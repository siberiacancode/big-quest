'use client';

import { useRouter } from 'next/navigation';

import { I18nText } from '@/components/common';
import { TreeBackground } from '@/components/icons';
import { RegisterOrganizationForm } from '@/features';
import { ROUTES } from '@/utils/constants';

const RegisterOrganizationPage = () => {
  const router = useRouter();

  const onSuccessSubmit = () => router.push(ROUTES.LANDING.ROOT);

  return (
    <div className='relative flex min-h-screen items-center justify-center overflow-x-hidden p-5 sm:p-10'>
      <TreeBackground className='absolute' />
      <div className='flex flex-col items-center'>
        {/* // ? может вынести typography, а то в доке просто стили */}
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
          <I18nText path='feature.registerOrganization.title' />
        </h1>
        <div className='round relative z-10 mt-7 border bg-background p-5 xsx:w-full lg:mt-16 lg:p-10 sm:w-[450px]'>
          <RegisterOrganizationForm onSuccessSubmit={onSuccessSubmit} />
        </div>
      </div>
    </div>
  );
};

export default RegisterOrganizationPage;
