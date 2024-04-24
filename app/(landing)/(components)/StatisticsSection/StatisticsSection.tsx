import Image from 'next/image';

import tree from '@/assets/images/landing/statistics/tree.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const StatisticsSection = () => (
  <section className='w-full bg-muted pb-[61px] pt-12'>
    <div className='container flex w-full flex-wrap justify-center gap-10 px-0 3mdx:gap-4 3smx:px-4'>
      <div className='relative flex h-[265px] w-full flex-col justify-between rounded-[30px] bg-white px-8 py-7 3mdx:h-[187px] 3mdx:w-[343px] 2xsx:w-full 2xs:max-w-[245px] 3sm:max-w-[413px]'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-5xl font-bold text-taiga-light 3mdx:text-[40px]'
        >
          3000
        </Typography>
        <Typography
          variant='h4'
          className='max-w-[154px] font-normal text-gray-two 3mdx:text-xl 3smx:max-w-none'
        >
          <I18nText path='landing.statistics.participants' />
        </Typography>
        <Image
          src={tree}
          alt='Tree'
          className='absolute -right-1 top-[25%] 3mdx:h-[88px] 3mdx:w-[37px] 3md:-right-5'
        />
      </div>
      <div className='relative flex h-[265px] w-full flex-col justify-between rounded-[30px] bg-white px-8 py-7 3mdx:h-[187px] 3mdx:w-[343px] 2xsx:w-full 2xs:max-w-[245px] 3sm:max-w-[413px]'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-5xl font-bold text-taiga-light 3mdx:text-[40px]'
        >
          200
        </Typography>
        <Typography
          variant='h4'
          className='max-w-[154px] font-normal text-gray-two 3mdx:text-xl 3smx:max-w-none'
        >
          <I18nText path='landing.statistics.activities' />
        </Typography>
        <Image
          src={tree}
          alt='Tree'
          className='absolute -right-1 top-[25%] 3mdx:h-[88px] 3mdx:w-[37px] 3md:-right-5'
        />
      </div>
      <div className='relative flex h-[265px] w-[413px] flex-col justify-between rounded-[30px] bg-white px-8 py-7 2xlx:w-[866px] 3mdx:h-[187px] 3mdx:w-[702px] 2mdx:gap-4 3smx:w-[500px]'>
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
