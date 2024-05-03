import Image from 'next/image';

import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Typography } from '@/components/ui';

export const LeaveRequestSection = () => (
  <section className='container relative my-6'>
    <div className='flex w-full flex-col-reverse items-center justify-center gap-3 md:max-w-none md:flex-row md:py-10 lg:justify-between'>
      <div className='flex flex-col gap-2 md:gap-3'>
        <div className='flex flex-col gap-2'>
          <Typography variant='h1' tag='h2' className='text-[21px] md:text-4xl'>
            <I18nText path='landing.leaveRequest.title' />
          </Typography>
          <Typography tag='h2' variant='h1' className='text-[21px] text-taiga md:text-4xl'>
            <I18nText path='landing.leaveRequest.subtitle' />!
          </Typography>
        </div>

        <Typography tag='p' variant='body1' className='text-md lg:text-xl'>
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
        className='max-w-[260px] md:w-[440px] md:max-w-none'
      />
    </div>
  </section>
);
