import Image from 'next/image';

import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { Button, Typography } from '@/components/ui';

export const LeaveRequestSection = () => (
  <section className='container relative my-6'>
    <div className='flex items-center justify-center gap-3 md:py-10 lg:justify-between'>
      <div className='flex flex-col gap-2 md:gap-3'>
        <div className='flex flex-col gap-2'>
          <Typography tag='h1' variant='h1' className='text-xl md:text-4xl'>
            <I18nText path='landing.leaveRequest.title' />
          </Typography>
          <Typography tag='h2' variant='h1' className='text-xl text-taiga md:text-4xl'>
            <I18nText path='landing.leaveRequest.subtitle' />!
          </Typography>
        </div>

        <Typography tag='p' variant='body1' className='text-md lg:text-xl'>
          <I18nText path='landing.leaveRequest.description' />
        </Typography>
        <RegisterOrganizationDialog
          trigger={
            <div className='mt-4 w-full md:w-fit'>
              <Button size='lg' variant='primary' className='w-full'>
                <I18nText path='button.goToRegisterOrganization' />
              </Button>
            </div>
          }
        />
      </div>
      <div className='flex hidden items-center justify-center lg:block'>
        <Image src={leaveRequestImage} alt='leaveRequest' className='w-[440px]' />
      </div>
    </div>
  </section>
);
