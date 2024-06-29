import Image from 'next/image';

import tree from '@/assets/images/landing/statistics/tree.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const StatisticsSection = () => (
  <section className='w-full bg-muted py-12'>
    <div className='container grid w-full max-w-[1320px] grid-cols-1 justify-center gap-10 xlx:gap-6 3mdx:gap-4 xs:grid-cols-2 md:grid md:grid-cols-3'>
      <div className='relative flex h-fit w-full flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white px-8 py-7 mdx:rounded-2xl lg:gap-20'>
        <Typography tag='h3' variant='h3' className='text-5xl font-semibold text-taiga-light'>
          3000
        </Typography>
        <Typography variant='h4' className='max-w-[161px] font-normal text-gray-two'>
          <I18nText path='page.landing.statistics.participants' />
        </Typography>
        <Image src={tree} alt='Tree' className='absolute -right-4 h-[142px]' />
      </div>
      <div className='relative flex h-fit w-full flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white px-8 py-7 mdx:rounded-2xl lg:gap-20'>
        <Typography tag='h3' variant='h3' className='text-5xl font-semibold text-taiga-light'>
          200
        </Typography>
        <Typography variant='h4' className='max-w-[161px] font-normal text-gray-two'>
          <I18nText path='page.landing.statistics.activities' />
        </Typography>
        <Image src={tree} alt='Tree' className='absolute -right-4 h-[142px]' />
      </div>
      <div className='relative col-span-2 flex h-fit w-full flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white px-8 py-7 mdx:col-span-2 mdx:rounded-2xl xsx:col-span-1 md:col-span-1 md:w-full lg:gap-20'>
        <Typography tag='h3' variant='h3' className='text-5xl font-semibold text-taiga-light'>
          1150
        </Typography>
        <Typography variant='h4' className='max-w-[161px] font-normal text-gray-two'>
          <I18nText path='page.landing.statistics.awards' />
        </Typography>
        <Image src={tree} alt='Tree' className='absolute -right-4 h-[142px]' />
      </div>
    </div>
  </section>
);
