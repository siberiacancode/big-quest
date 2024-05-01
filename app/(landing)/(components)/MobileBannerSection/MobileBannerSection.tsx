'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bannerImage from '@/assets/images/landing/banner.webp';
import { I18nText } from '@/components/common';
import { TitleLogoIcon } from '@/components/icons';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

export const MobileBannerSection = () => (
  <section className='container flex h-screen overflow-x-hidden px-5 pb-10'>
    <div className='flex w-full flex-col items-center justify-center'>
      <Image src={bannerImage} alt='info image' className='w-[46rem]' />

      <div className='flex flex-col items-center justify-center gap-4 px-8 text-center'>
        <TitleLogoIcon className='w-56' />

        <Typography tag='h2' variant='body1' className='text-lg'>
          <I18nText path='landing.info.title.mobile' />
        </Typography>
      </div>

      <div className='mt-20 flex w-full flex-col gap-4'>
        <div className='w-full'>
          <Link
            href={{
              pathname: ROUTES.APP.AUTH,
              query: { step: 'excursion' }
            }}
            className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-full')}
          >
            <I18nText path='button.getQR' />
          </Link>
        </div>
        <div className='w-full'>
          <Link
            href={{
              pathname: ROUTES.APP.AUTH,
              query: { step: 'login' }
            }}
            className={cn(
              buttonVariants({ size: 'lg', variant: 'ghost' }),
              'w-full border border-taiga text-taiga hover:bg-taiga hover:text-white md:border-none'
            )}
          >
            <I18nText path='button.alreadyHaveQR' />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
