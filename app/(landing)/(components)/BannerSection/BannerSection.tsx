'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import airplane from '@/assets/images/landing/banner/airplane.webp';
import bigImage from '@/assets/images/landing/banner/bigImage.webp';
import circularLogo from '@/assets/images/landing/banner/circularLogo.webp';
import greenArrow from '@/assets/images/landing/banner/greenArrow.webp';
import lamp from '@/assets/images/landing/banner/lamp.webp';
import redArrow from '@/assets/images/landing/banner/redArrow.webp';
import smallGreenArrow from '@/assets/images/landing/banner/smallGreenArrow.webp';
import stars from '@/assets/images/landing/banner/stars.webp';
import whiteLines from '@/assets/images/landing/banner/whiteLines.webp';
import yellowArrow from '@/assets/images/landing/banner/yellowArrow.webp';
import yellowBoldArrow from '@/assets/images/landing/banner/yellowBoldArrow.webp';
import { I18nText } from '@/components/common';
import { TelegramColoredIcon } from '@/components/icons';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

export const BannerSection = () => (
  <section
    id='banner'
    className='container flex h-fit max-w-[1160px] justify-center md:pt-0 lg:justify-start 4xl:h-fit'
  >
    <div className='mt-5 flex flex-col items-center sm:-mt-0 md:px-10 lg:flex-row-reverse lg:items-start lg:justify-start lg:gap-16 lg:py-24 xl:px-0'>
      <div className='relative mb-4 w-fit items-center px-10 lg:px-0'>
        <Image
          src={lamp}
          alt='lamp'
          className='absolute bottom-0 left-0 z-10 max-h-[30%] max-w-[20%] transition duration-1000 hover:-translate-y-2 hover:translate-x-1 hover:ease-linear'
        />
        <Image
          src={stars}
          alt='stars'
          className='absolute left-5 top-[25%] z-10 size-[16%] transition duration-1000 hover:-translate-x-1 hover:translate-y-1 hover:ease-linear lg:left-0'
        />
        <Image
          src={redArrow}
          alt='redArrow'
          className='absolute -top-6 left-10 z-10 max-h-[30%] max-w-[20%] transition duration-1000 hover:-translate-x-1 hover:translate-y-1 hover:ease-linear lg:-top-10'
        />
        <Image
          src={whiteLines}
          alt='whiteLines'
          className='absolute left-[43%] top-[8%] z-10 max-h-[8%] max-w-[12%] transition duration-1000 hover:-translate-x-2 hover:translate-y-1 hover:ease-linear lg:left-[40%] lg:max-h-[10%] lg:max-w-[15%]'
        />
        <Image
          src={yellowBoldArrow}
          alt='yellowBoldArrow'
          className='absolute -top-5 right-14 z-10 max-h-[26%] max-w-[13%] transition duration-1000 hover:-translate-y-1 hover:translate-x-1 hover:ease-linear lg:right-10 lg:max-w-[17%]'
        />
        <Image
          src={airplane}
          alt='airplane'
          className='absolute -right-4 top-[40%] z-10 max-h-[35%] max-w-[35%] transition duration-1000 hover:-translate-y-2 hover:translate-x-2 hover:ease-linear lg:-right-20'
        />
        <Image
          src={yellowArrow}
          alt='yellowArrow'
          className='absolute -bottom-3 right-6 z-10 max-h-[30%] max-w-[20%] transition duration-1000 hover:-translate-x-2 hover:translate-y-1 hover:ease-linear lg:bottom-0 lg:right-0'
        />
        <Image
          src={bigImage}
          alt='big image'
          className='relative z-0 size-[100%] max-h-[500px] max-w-[517px] transition duration-1000 hover:-translate-x-2 hover:translate-y-1 hover:ease-linear'
        />
      </div>

      <div className='mt-4 flex w-full max-w-[480px] flex-col justify-center text-center lg:mb-20 lg:mt-8'>
        <div className='flex w-full flex-col items-center gap-2 lg:items-start lg:gap-6 lg:text-left'>
          <div className='relative max-w-[400px]'>
            <Image
              src={circularLogo}
              alt='circular logo'
              className='absolute -top-2 left-0 size-10 animate-spin-slow opacity-30 xs:-left-5 lg:-left-11 lg:-top-7 lg:size-24'
            />
            <Typography
              tag='h1'
              variant='h1'
              className='text-2xl text-gray-one lg:text-5xl lg:leading-[60px]'
            >
              <I18nText path='landing.info.title' />
            </Typography>
          </div>
          <Typography
            tag='p'
            variant='body1'
            className='w-full max-w-[930px] text-wrap text-sm leading-5 text-gray-two lg:text-lg'
          >
            <I18nText path='landing.info.subtitle' />
          </Typography>
        </div>
        <div className='flex flex-col items-center lg:flex-row'>
          <div className='relative mt-6 flex flex-col justify-center lg:mt-8 lg:gap-6'>
            <Link
              href={ROUTES.TELEGRAM}
              className={cn(
                buttonVariants({ size: 'lg', variant: 'primary' }),
                'flex h-[52px] w-full max-w-[132px] gap-2 bg-sky-500 px-6 text-xs font-normal hover:bg-sky-500'
              )}
            >
              <TelegramColoredIcon className='size-10 bg-sky-500' />
              <I18nText path='button.telegram' />
            </Link>
            <Image
              src={greenArrow}
              alt='greenArrow'
              className='ml-14 hidden h-[55px] w-[118px] lg:block'
            />
            <Image
              src={smallGreenArrow}
              alt='smallGreenArrow'
              className='absolute -bottom-10 -left-11 h-[47px] w-[22px] rotate-12 lg:hidden'
            />
          </div>
          <div className='mb-20 pt-14 lg:mb-0 lg:pt-2'>
            <Typography
              tag='p'
              variant='body1'
              className='text-md w-full leading-[22px] lg:max-w-[226px] lg:text-left'
            >
              <I18nText path='landing.telegram.description' />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </section>
);
