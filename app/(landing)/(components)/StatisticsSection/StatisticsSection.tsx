import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const StatisticsSection = () => (
  <section className='w-full bg-taiga py-10'>
    <div className='container flex w-full flex-wrap items-center justify-around'>
      <div className='basis-1/3 text-center'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-[32px] font-bold text-white md:text-[40px]'
        >
          10000
        </Typography>
        <Typography variant='body1' className='whitespace-nowrap text-lg text-white md:text-2xl'>
          <I18nText path='landing.statistics.participants' />
        </Typography>
      </div>
      <div className='basis-1/3 text-center'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-[32px] font-bold text-white md:text-[40px]'
        >
          3000
        </Typography>
        <Typography variant='body1' className='whitespace-nowrap text-lg text-white md:text-2xl'>
          <I18nText path='landing.statistics.activities' values={{ br: <br /> }} />
        </Typography>
      </div>
      <div className='basis-1/3 text-center'>
        <Typography
          tag='h3'
          variant='h3'
          className='text-[32px] font-bold text-white md:text-[40px]'
        >
          1150
        </Typography>
        <Typography variant='body1' className='whitespace-nowrap text-lg text-white md:text-2xl'>
          <I18nText path='landing.statistics.awards' />
        </Typography>
      </div>
    </div>
  </section>
);
