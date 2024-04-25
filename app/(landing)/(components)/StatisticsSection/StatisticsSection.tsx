import Image from 'next/image';

import tree from '@/assets/images/landing/statistics/tree.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const StatisticsSection = () => (
  <section className='w-full bg-muted pb-[61px] pt-12 xxsx:pt-10'>
    <div className='container grid w-full max-w-[1320px] grid-cols-1 justify-center gap-10 px-0 xlx:gap-6 2lgx:px-0 3mdx:gap-4 3mdx:px-4 3smx:px-4 xs:grid-cols-2 md:grid md:grid-cols-3 md:flex-nowrap 2xl:px-0 '>
      <div className='relative flex h-[265px] w-full flex-col justify-between rounded-[30px] bg-white px-8 py-7 3mdx:h-[187px] 2xsx:w-full md:max-w-full 2lg:max-w-[413px]'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-5xl font-bold text-taiga-light 3mdx:text-[40px]'
        >
          3000
        </Typography>
        <Typography
          variant='h4'
          className='max-w-[154px] font-normal text-gray-two 3mdx:text-xl 3smx:max-w-none xxsx:text-lg'
        >
          <I18nText path='landing.statistics.participants' />
        </Typography>
        <Image
          src={tree}
          alt='Tree'
          className='absolute -right-1 top-[25%] 3mdx:h-[88px] 3mdx:w-[37px] 3md:-right-5'
        />
      </div>
      <div className='relative flex h-[265px] w-full flex-col justify-between rounded-[30px] bg-white px-8 py-7 3mdx:h-[187px] 2xsx:w-full md:max-w-full 2lg:max-w-[413px]'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-5xl font-bold text-taiga-light 3mdx:text-[40px]'
        >
          200
        </Typography>
        <Typography
          variant='h4'
          className='max-w-[154px] font-normal text-gray-two 3mdx:text-xl 3smx:max-w-none xxsx:text-lg'
        >
          <I18nText path='landing.statistics.activities' />
        </Typography>
        <Image
          src={tree}
          alt='Tree'
          className='absolute -right-1 top-[25%] 3mdx:h-[88px] 3mdx:w-[37px] 3md:-right-5'
        />
      </div>
      <div className='relative col-span-2 flex h-[265px] w-full flex-col justify-between rounded-[30px] bg-white px-8 py-7 3mdx:h-[187px] 2mdx:gap-4 mdx:col-span-2 xsx:col-span-1 md:col-span-1 md:w-full'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-5xl font-bold text-taiga-light 3mdx:text-[40px]'
        >
          1150
        </Typography>
        <Typography
          variant='h4'
          className='max-w-[161px] font-normal text-gray-two 2xlx:max-w-none 3mdx:text-xl'
        >
          <I18nText path='landing.statistics.awards' />
        </Typography>
        <Image
          src={tree}
          alt='Tree'
          className='absolute -right-1 top-[25%] 3mdx:h-[88px] 3mdx:w-[37px] 3md:-right-5'
        />
      </div>
    </div>
  </section>
);
