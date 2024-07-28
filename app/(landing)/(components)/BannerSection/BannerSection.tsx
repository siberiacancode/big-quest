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
    className='container -mt-[72px] flex h-screen items-center justify-center pt-[72px] md:pt-0 4xl:h-fit'
  >
    <div className='mt-5 flex w-full flex-col items-center justify-between px-2 sm:-mt-0 lg:flex-row-reverse lg:gap-32 lg:py-32'>
      <div className='-mr-10 w-full items-center  overflow-hidden lg:-mr-20'>
        <Image src={bannerImage} alt='banner image' />
      </div>

      <div className='mt-4 flex w-full flex-col justify-center text-center lg:mb-20 lg:mt-8'>
        <div className='flex flex-col gap-2 text-3xl lg:gap-6 lg:text-left'>
          <Typography variant='h1' tag='h1' className='lg:text-[56px] lg:leading-[70px]'>
            <I18nText path='landing.info.title' />
          </Typography>

          <Typography tag='p' variant='body1' className='text-wrap text-sm leading-5 lg:text-2xl'>
            <I18nText path='landing.info.subtitle' />
          </Typography>
        </div>

        <div className='mt-6 flex w-full  flex-col items-center gap-4 lg:mt-10 lg:w-[90%] lg:flex-row lg:gap-8'>
          <Link
            href={{
              pathname: ROUTES.APP.AUTH,
              query: { step: 'login' }
            }}
            className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-full max-w-96')}
          >
            <I18nText path='button.auth' />
          </Link>
          <div className='w-full max-w-96 mdx:rounded-md mdx:border mdx:border-taiga'>
            <Link
              href={{
                pathname: ROUTES.APP.AUTH,
                query: { step: 'excursion' }
              }}
              className={cn(buttonVariants({ size: 'lg', variant: 'white' }), 'w-full')}
            >
              <I18nText path='button.getQR' />
            </Link>
          </div>
        </div>

        <div className='mb-8 mt-4 block w-full text-center md:hidden'>
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
