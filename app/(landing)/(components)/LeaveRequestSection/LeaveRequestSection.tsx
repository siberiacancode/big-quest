import Image from 'next/image';

import leaveRequestImage from '@/assets/images/landing/leaveRequest.webp';
import { I18nText } from '@/components/common';
import { RegisterOrganizationDialog } from '@/components/dialogs';
import { WavyLineIcon } from '@/components/icons';
import { Button, Typography } from '@/components/ui';

export const LeaveRequestSection = () => (
  <section className='relative mb-6 mt-4 md:mt-28'>
    <div className='container flex justify-between gap-3'>
      <div className='flex flex-col gap-3 py-20'>
        <Typography tag='h2' variant='h1' className='text-3xl lg:text-3xl'>
          <I18nText path='landing.leaveRequest.title' />
        </Typography>
        <div className='relative inline-block'>
          <Typography tag='h2' variant='h1' className='text-3xl text-taiga'>
            <I18nText path='landing.leaveRequest.subtitle' />
          </Typography>
          <div className='absolute -bottom-2 left-0 translate-y-1/2'>
            <WavyLineIcon width='100%' />
          </div>
        </div>
        <Typography tag='p' variant='body1' className='mt-3 text-xl'>
          <I18nText path='landing.leaveRequest.description' />
        </Typography>
        <RegisterOrganizationDialog
          trigger={
            <Button size='lg' variant='primary' className='mt-10 w-full md:w-1/2'>
              <I18nText path='button.goToRegisterOrganization' />
            </Button>
          }
        />
      </div>
      <div className='hidden lg:flex lg:items-center lg:justify-center'>
        <Image src={leaveRequestImage} alt='leaveRequest' className='w-[500px]' />
      </div>
    </div>
  </section>
);
