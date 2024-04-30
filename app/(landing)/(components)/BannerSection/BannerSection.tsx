'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bannerImage from '@/assets/images/landing/banner.webp';
import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

export const BannerSection = () => (
  <section
    id='banner'
    className='container flex h-screen items-center justify-center md:mt-0 md:h-fit'
  >
    <div className='-mt-20 flex w-full flex-col items-center justify-between overflow-hidden px-2 sm:-mt-0 lg:flex-row-reverse lg:gap-32 lg:py-32'>
      <div className='-mr-10 w-full items-center lg:-mr-20'>
        <Image src={bannerImage} alt='banner image' />
      </div>

      <div className='mt-8 flex w-full flex-col justify-center gap-2 text-center lg:mb-20'>
        <div className='flex flex-col gap-2 lg:gap-4 lg:text-left'>
          <Typography tag='h1' variant='h1' className='text-2xl lg:text-5xl'>
            <I18nText path='landing.info.title' />
          </Typography>

          <Typography tag='p' variant='body1' className='text-md text-wrap leading-5 lg:text-xl'>
            <I18nText path='landing.info.subtitle' />
          </Typography>
        </div>

        <div className='mt-10 flex w-full flex-col gap-4 lg:w-[90%] lg:flex-row'>
          <Link
            href={{
              pathname: ROUTES.AUTH,
              query: { step: 'login' }
            }}
            className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-full')}
          >
            <I18nText path='button.auth' />
          </Link>
          <div className='w-full mdx:rounded-md mdx:border mdx:border-taiga'>
            <Link
              href={{
                pathname: ROUTES.AUTH,
                query: { step: 'excursion' }
              }}
              className={cn(buttonVariants({ size: 'lg', variant: 'white' }), 'w-full')}
            >
              <I18nText path='button.getQR' />
            </Link>
          </div>
        </div>

        <div className='mt-5 block w-full text-center md:hidden'>
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
