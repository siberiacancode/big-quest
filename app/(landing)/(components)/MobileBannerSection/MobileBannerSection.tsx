'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bannerImage from '@/assets/images/landing/banner.webp';
import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

export const MobileBannerSection = () => (
  <section id='banner' className='container flex h-screen overflow-x-hidden px-5 pb-10'>
    <div className='flex w-full flex-col items-center '>
      <Image
        src={bannerImage}
        alt='info image'
        className='w-[46rem] mdx:w-[90%] mdx:max-w-[30rem] xxsx:size-[260px]'
      />

      <div className='mt-5 flex flex-col items-center justify-center gap-4 text-center xxsx:gap-0'>
        <Typography tag='h2' variant='h4' className='font-medium'>
          <I18nText path='landing.info.title' />
        </Typography>
        <Typography tag='h2' variant='body1' className='xxsx:text-sm'>
          <I18nText path='landing.info.subtitle' />
        </Typography>
      </div>

      <div className='mt-[70px] flex w-full flex-col gap-4'>
        <Link
          href={{
            pathname: ROUTES.AUTH,
            query: { step: 'login' }
          }}
          className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-[300px] mdx:w-full')}
        >
          <I18nText path='button.auth' />
        </Link>
        <div className='w-full rounded-md border border-taiga'>
          <Link
            href={{
              pathname: ROUTES.AUTH,
              query: { step: 'excursion' }
            }}
            className={cn(buttonVariants({ size: 'lg', variant: 'white' }), 'w-full ')}
          >
            <I18nText path='button.getQR' />
          </Link>
        </div>
        <div className='mt-1 hidden text-center underline 2xsx:block'>
          <Link href={ROUTES.ORG.AUTH}>
            <Typography
              variant='body2'
              className='text-gray-two hover:font-semibold hover:text-taiga'
            >
              <I18nText path='button.organizationsEntrance' />
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
