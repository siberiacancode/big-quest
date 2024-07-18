import Image from 'next/image';

import tree from '@/assets/images/landing/statistics/tree.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const StatisticsSection = () => (
  <section className='w-full bg-muted py-12'>
    <div className='container grid w-full max-w-[1160px] grid-cols-1 justify-center gap-10 px-4 xlx:gap-6 3mdx:gap-4 xs:grid-cols-2 md:grid md:grid-cols-3 md:px-20 2xl:px-0'>
      <div className='relative flex h-full w-full flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white px-8 py-7 mdx:rounded-2xl lg:gap-20'>
        <Typography
          tag='h3'
          variant='h3'
          className='z-10 text-4xl font-semibold text-taiga-light md:text-5xl'
        >
          3000
        </Typography>
        <Typography
          variant='h4'
          className='z-10 max-w-[161px] text-xl font-normal text-gray-two md:text-2xl'
        >
          <I18nText path='landing.statistics.participants' />
        </Typography>
        <Image src={tree} alt='Tree' className='absolute -right-4 z-0 h-[142px]' />
      </div>
      <div className='relative flex h-full w-full flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white px-8 py-7 mdx:rounded-2xl lg:gap-20'>
        <Typography
          tag='h3'
          variant='h3'
          className='z-10 text-4xl font-semibold text-taiga-light md:text-5xl'
        >
          200
        </Typography>
        <Typography
          variant='h4'
          className='z-10 max-w-[161px] text-xl font-normal text-gray-two md:text-2xl'
        >
          <I18nText path='landing.statistics.activities' />
        </Typography>
        <Image src={tree} alt='Tree' className='absolute -right-4 z-0 h-[142px]' />
      </div>
      <div className='relative col-span-2 flex h-full w-full flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white px-8 py-7 mdx:col-span-2 mdx:rounded-2xl xsx:col-span-1 md:col-span-1 md:w-full lg:gap-20'>
        <Typography
          tag='h3'
          variant='h3'
          className='z-10 text-4xl font-semibold text-taiga-light md:text-5xl'
        >
          1150
        </Typography>
        <Typography
          variant='h4'
          className='z-10 max-w-[161px] text-xl font-normal text-gray-two md:text-2xl'
        >
          <I18nText path='landing.statistics.awards' />
        </Typography>
        <Image src={tree} alt='Tree' className='absolute -right-4 z-0 h-[142px]' />
      </div>
    </div>
  </section>
);
