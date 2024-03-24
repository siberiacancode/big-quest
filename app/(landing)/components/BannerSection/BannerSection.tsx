'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bannerImage from '@/assets/images/landing/banner.webp';
import face1 from '@/assets/images/landing/faces/face1.png';
import face2 from '@/assets/images/landing/faces/face2.png';
import face3 from '@/assets/images/landing/faces/face3.png';
import { I18nText } from '@/components/common';
import { BigQuestLogoIcon, RhombIcon } from '@/components/icons';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/constants';

const getGreenSubtitle = (children: React.ReactNode) => (
  <span className='font-medium text-taiga'>{children}</span>
);

export const BannerSection = () => (
  <section className='flex h-screen min-h-[600px] items-center justify-center overflow-x-hidden px-20 mdx:px-11 xsx:px-5'>
    <div className='flex w-full items-center justify-between xlx:justify-center'>
      <div className='relative xsx:flex xsx:flex-col xsx:items-center'>
        <div className='absolute -left-3 top-2/3 -translate-x-full xsx:left-3'>
          <RhombIcon />
        </div>
        <div className='relative inline-block xsx:-translate-x-[15%]'>
          <Typography
            tag='h1'
            className='rounded-l-lg border-r-[3px] border-r-taiga bg-taiga/25 px-2 font-medium mdx:text-center mdx:text-2xl xsx:text-lg'
            variant='h1'
          >
            <I18nText path='landing.info.title.highlight' />
          </Typography>
          <div className='absolute right-[3px] top-0 inline-block -translate-y-full translate-x-full rounded-md rounded-bl-none bg-taiga pb-1 pl-[5px] pr-1 pt-2'>
            <BigQuestLogoIcon className='fill-white' />
          </div>
        </div>
        <Typography variant='h1' className='mdx:text-2xl xsx:text-lg'>
          <I18nText path='landing.info.title' values={{ br: <br /> }} />
        </Typography>

        <div className='mt-6 flex items-center xsx:mt-3 xsx:flex-col xsx:items-center xsx:gap-3'>
          <div className='flex pl-2'>
            <Image src={face1} alt='face1' />
            <Image src={face2} alt='face2' className='-translate-x-1/3' />
            <Image src={face3} alt='face3' className='-translate-x-2/3' />
          </div>
          <Typography
            tag='p'
            className='mdx:-ml-5 mdx:w-[60%] xsx:ml-0 xsx:w-[90%] xsx:text-center md:-ml-4'
          >
            <I18nText
              path='landing.info.subtitle'
              values={{
                green: getGreenSubtitle,
                br: <br />
              }}
            />
          </Typography>
        </div>
        <div className='mt-14 flex gap-4 xlx:mt-11 xlx:w-full mdx:mt-7 xsx:justify-center xsx:gap-2'>
          <Link
            href={ROUTES.REGISTER}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-taiga text-white hover:bg-taiga-foreground xs:basis-2/3'
            )}
          >
            <I18nText path='button.registration' />
          </Link>
          <Link
            href={ROUTES.AUTH}
            className={cn(
              buttonVariants({ size: 'lg', variant: 'ghost' }),
              'text-taiga hover:bg-taiga hover:text-white xs:basis-1/3'
            )}
          >
            <I18nText path='button.entrance' />
          </Link>
        </div>
      </div>
      <div className='relative xlx:hidden'>
        <Image
          src={bannerImage}
          alt='info image'
          className='w-[36rem] xlx:block xlx:w-96 mdx:hidden'
        />
      </div>
    </div>
  </section>
);
