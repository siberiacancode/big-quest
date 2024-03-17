import Image from 'next/image';

import yellowWavyLine from '@/assets/icons/shapes/yellowWavyLine.svg';
import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Typography } from '@/components/ui';

export const LeaveRequestBlock = () => (
  <section className='relative flex px-16 py-[108px] 2lgx:items-center mdx:px-11 mdx:py-16 xsx:px-5'>
    <div className='w-1/2 2lgx:mx-auto 2lgx:w-[90%] xsx:flex xsx:w-full xsx:flex-col xsx:items-center'>
      <Typography tag='h2' variant='h1' className='mdx:text-2xl xsx:text-center xsx:text-xl'>
        <I18nText path='landing.leaveRequest.title' />
      </Typography>
      <div className='relative inline-block'>
        <Typography tag='h2' variant='h1' className='text-taiga mdx:text-2xl xsx:text-xl'>
          <I18nText path='landing.leaveRequest.subtitle' />
        </Typography>
        <div className='absolute bottom-0 left-0 translate-y-1/2'>
          <Image src={yellowWavyLine} alt='' className='max-w-full' />
        </div>
      </div>
      <Typography
        tag='p'
        variant='body1'
        className='mt-3 text-[20px] xlx:w-[90%] mdx:text-lg xsx:text-center xsx:text-[15px]'
      >
        <I18nText path='landing.leaveRequest.description' />
      </Typography>
      <RegisterOrganizationDialog
        trigger={
          <Button
            size='lg'
            className='mt-[34px] w-1/2 bg-taiga text-white hover:bg-taiga-foreground mdx:mt-5 xsx:mt-[24px] xsx:w-full'
          >
            <I18nText path='button.goToRegisterOrganization' />
          </Button>
        }
      />
    </div>
    <div className='absolute bottom-0 right-0 2lgx:hidden'>
      <Image src={leaveRequestImage} alt='leaveRequest' />
    </div>
  </section>
);
