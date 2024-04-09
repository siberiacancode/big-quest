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

const TitleBackground = (children: React.ReactNode) => (
  <span className='relative rounded-l-lg border-r-[3px] border-r-taiga bg-taiga/25 p-1 font-medium text-taiga-foreground'>
    <div className='absolute right-[3px] top-0 inline-block -translate-y-full translate-x-full rounded-md rounded-bl-none bg-taiga p-1'>
      <BigQuestLogoIcon className='fill-white' />
    </div>
    {children}
  </span>
);

export const DesktopBannerSection = () => (
  <section className='container relative flex overflow-x-hidden px-5 pb-10'>
    <div className='absolute -left-3 top-2/3 -translate-x-full xsx:left-3'>
      <RhombIcon />
    </div>

    <div className='flex w-full items-center justify-center gap-4'>
      <div className='flex flex-col gap-2 p-2'>
        <div className='relative block p-2'>
          <Typography tag='h1' variant='h1' className='text-xl lg:text-4xl'>
            <I18nText
              path='landing.info.title.desktop'
              values={{ br: <br />, titleBackground: TitleBackground }}
            />
          </Typography>

          <div className='mt-6 flex items-center gap-4'>
            <div className='flex -space-x-4 lgx:-space-x-2'>
              {[face1, face2, face3].map((face) => (
                <Image
                  src={face}
                  alt='face'
                  className='inline-block size-12 rounded-full ring-1 ring-white lgx:size-8'
                />
              ))}
            </div>
            <Typography tag='p' variant='body1' className='text-wrap text-base lgx:text-xs'>
              <I18nText
                path='landing.info.subtitle'
                values={{
                  br: <br />,
                  green: getGreenSubtitle
                }}
              />
            </Typography>
          </div>
        </div>
        <div className='mt-8 flex w-full flex-row gap-4'>
          <div className='w-full basis-2/3'>
            <Link
              href={ROUTES.REGISTER}
              className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-full')}
            >
              <I18nText path='button.registration' />
            </Link>
          </div>
          <div className='w-full basis-1/3'>
            <Link
              href={ROUTES.AUTH}
              className={cn(
                buttonVariants({ size: 'lg', variant: 'ghost' }),
                'w-full border border-none text-taiga hover:bg-taiga hover:text-white'
              )}
            >
              <I18nText path='button.entrance' />
            </Link>
          </div>
        </div>
      </div>

      <Image src={bannerImage} alt='info image' className='w-[50%]' />
    </div>
  </section>
);
