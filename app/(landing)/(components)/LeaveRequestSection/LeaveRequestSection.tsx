import Image from 'next/image';

import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Typography } from '@/components/ui';

export const LeaveRequestSection = () => (
  <section className='container relative my-6 flex justify-center text-center lg:text-start'>
    <div className='flex w-full max-w-96 flex-col-reverse items-center justify-center gap-3 md:max-w-none md:flex-row md:py-10 lg:justify-between'>
      <div className='flex flex-col gap-2 text-start md:gap-3'>
        <div className='flex flex-col gap-2'>
          <Typography variant='h1' tag='h1'>
            <I18nText path='landing.leaveRequest.title' />
          </Typography>
          <Typography variant='h1' tag='h1' className='text-taiga'>
            <I18nText path='landing.leaveRequest.subtitle' />!
          </Typography>
        </div>
        <Typography variant='body1' tag='p' className='text-md lg:text-xl'>
          <I18nText path='landing.leaveRequest.description' />
        </Typography>
        <RegisterOrganizationDialog
          trigger={
            <Button size='lg' variant='primary' className='mt-4 w-full px-[72px] md:w-fit'>
              <I18nText path='button.goToRegisterOrganization' />
            </Button>
          }
        />
      </div>
      <Image
        src={leaveRequestImage}
        alt='leaveRequest'
        className='hidden md:block md:w-[440px] md:max-w-none'
      />
    </div>
  </section>
);
