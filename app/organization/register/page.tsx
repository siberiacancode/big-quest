'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import treeBackground from '@/assets/images/treeBackground.png';
import { I18nText } from '@/components/common';
import { RegisterOrganizationForm } from '@/features';
import { ROUTES } from '@/utils/constants';

const RegisterOrganizationPage = () => {
  const router = useRouter();

  const onSuccessSubmit = () => router.push(ROUTES.LANDING.ROOT);

  return (
    <div className='relative flex min-h-screen items-center justify-center p-5 sm:p-10'>
      <Image className='absolute ' src={treeBackground} alt='' />
      <div className='flex flex-col items-center'>
        {/* // ? может вынести typography, а то в доке просто стили */}
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
          <I18nText path='feature.registerOrganization.title' />
        </h1>
        <div className='round xsx:w-full relative z-10 mt-7 flex border bg-background p-5 lg:mt-16 lg:p-10 sm:w-[450px]'>
          <RegisterOrganizationForm onSuccessSubmit={onSuccessSubmit} />
        </div>
      </div>
    </div>
  );
};

export default RegisterOrganizationPage;
