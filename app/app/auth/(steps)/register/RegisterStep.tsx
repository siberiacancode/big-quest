'use client';

import React from 'react';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import loveIllustration from '@/assets/illustrations/love.webp';
import { I18nText } from '@/components/common';
import { buttonVariants, InputOTP, InputOTPGroup, InputOTPSlot, Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import { useRegisterInfo, useWizard } from '../../(contexts)';

export const RegisterStep = () => {
  const { registerInfo } = useRegisterInfo();
  const { setStepId } = useWizard();

  if (!registerInfo) {
    setStepId('excursion');
    return null;
  }

  return (
    <div className='flex h-screen flex-col items-center overflow-y-auto px-4 py-11'>
      <Image src={loveIllustration} alt='' />
      <Typography variant='h5' className='mt-6 font-semibold'>
        <I18nText path='auth.register.title' />
      </Typography>
      <Typography variant='body2' className='mt-4 text-center text-muted-foreground'>
        <I18nText path='auth.register.description' values={{ br: <br /> }} />
      </Typography>
      <div className='mt-8 flex items-center'>
        <Typography variant='sub5'>
          <I18nText path='auth.register.id' />
        </Typography>
        <Typography variant='sub1' className='ml-3 text-taiga'>
          {registerInfo.userId}
        </Typography>
      </div>
      <div className='mt-3'>
        <Typography variant='sub5' className='text-center'>
          <I18nText path='auth.register.code' />
        </Typography>
        <InputOTP maxLength={4} defaultValue={registerInfo.code}>
          <InputOTPGroup className='mt-3'>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Typography variant='body3' className='mt-6 flex-grow text-center'>
        <I18nText
          path='auth.register.changeCode'
          values={{
            // eslint-disable-next-line react/no-unstable-nested-components
            settingsLink: (children: React.ReactNode) => (
              <Link href={ROUTES.APP.PROFILE.EDIT(registerInfo.userId)}>
                <Typography variant='body3' className='text-taiga underline'>
                  {children}
                </Typography>
              </Link>
            )
          }}
        />
      </Typography>
      <Link
        href={ROUTES.APP.PROFILE.ROOT}
        className={cx('w-full flex-shrink', buttonVariants({ variant: 'primary', size: 'lg' }))}
      >
        <I18nText path='button.okay' />
      </Link>
    </div>
  );
};
