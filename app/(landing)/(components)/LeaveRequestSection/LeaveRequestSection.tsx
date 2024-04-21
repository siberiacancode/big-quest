import Image from 'next/image';

import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Typography } from '@/components/ui';

export const LeaveRequestSection = () => (
  <section className='relative mb-[67px] mt-[60px]'>
    <div className='container flex justify-between gap-3'>
      <div className='flex flex-col gap-3 py-20'>
        <Typography tag='h2' variant='h1' className='text-3xl lg:text-4xl'>
          <I18nText path='landing.leaveRequest.title' />
        </Typography>
        <Typography tag='h2' variant='h1' className='text-3xl text-taiga lg:text-4xl'>
          <I18nText path='landing.leaveRequest.subtitle' />
        </Typography>

        <Typography tag='p' variant='body1' className='mt-3 text-xl'>
          <I18nText path='landing.leaveRequest.description' />
        </Typography>
        <RegisterOrganizationDialog
          trigger={
            <Button size='lg' variant='primary' className='mt-10 w-full px-[72px] md:w-fit'>
              <Typography variant='h6' className='text-white'>
                <I18nText path='button.goToRegisterOrganization' />
              </Typography>
            </Button>
          }
        />
      </div>
      <div className='hidden lg:flex lg:items-center lg:justify-center'>
        <Image src={leaveRequestImage} alt='leaveRequest' className='w-[446px]' />
      </div>
    </div>
  </section>
);
