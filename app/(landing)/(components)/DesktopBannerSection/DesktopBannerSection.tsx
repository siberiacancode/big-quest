'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bannerImage from '@/assets/images/landing/banner.webp';
import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

export const DesktopBannerSection = () => (
  <section
    id='banner'
    className='container relative flex mdx:h-screen mdx:overflow-x-hidden mdx:px-5 mdx:pb-10'
  >
    <div className='flex w-full flex-col-reverse items-center px-2 mdx:flex-col mdx:justify-center mdx:px-0 md:flex-row'>
      <Image src={bannerImage} alt='info image' className='w-[46rem] md:hidden' />
      <div className='mb-[365px] mt-[200px] flex w-1/2 max-w-[664px] flex-col gap-2 2xlx:mb-[240px] 2xlx:mt-[100px] xlx:max-w-[500px] mdx:mt-5 mdx:w-full mdx:justify-center mdx:gap-4 mdx:px-8 mdx:text-center'>
        <div className='flex flex-col gap-6 mdx:gap-4'>
          <Typography
            tag='h1'
            variant='h1'
            className='text-5xl 2lgx:text-4xl mdx:text-2xl mdx:font-medium 2xl:text-[56px] 2xl:leading-[70px]'
          >
            <I18nText path='landing.info.title' />
          </Typography>

          <Typography
            tag='p'
            variant='body1'
            className='text-wrap text-2xl	2lgx:text-xl mdx:text-lg'
          >
            <I18nText path='landing.info.subtitle' />
          </Typography>
        </div>
        <div className='mt-10 flex w-full flex-col gap-4 mdx:mt-[70px] md:flex-row lg:mt-10'>
          <Link
            href={{
              pathname: ROUTES.AUTH,
              query: { step: 'excursion' }
            }}
            className={cn(
              buttonVariants({ size: 'lg', variant: 'primary' }),
              'w-[300px] mdx:w-full'
            )}
          >
            <I18nText path='button.auth' />
          </Link>
          <div className='w-full mdx:rounded-md mdx:border mdx:border-taiga'>
            <Link
              href={{
                pathname: ROUTES.AUTH,
                query: { step: 'login' }
              }}
              className={cn(buttonVariants({ size: 'lg', variant: 'white' }), 'w-full')}
            >
              <I18nText path='button.getQR' />
            </Link>
          </div>

          <div className='hidden text-center mdx:mt-1 mdx:text-center 2xsx:block'>
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
    </div>
    <Image
      src={bannerImage}
      alt='info image'
      className='absolute -right-[15%] top-[10%] max-h-[658px] w-[60%] max-w-[780px] 3xlx:-right-[3%] 3xlx:w-[50%] 2xlx:right-0 2xlx:w-[43%] xlx:top-[10%] lgx:top-[10%] mdx:hidden'
    />
  </section>
);
