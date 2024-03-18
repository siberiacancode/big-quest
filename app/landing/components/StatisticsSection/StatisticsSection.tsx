import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export const StatisticsSection = () => (
  <section className='flex w-full flex-wrap items-center justify-around bg-taiga px-5 py-7'>
    <div className='basis-1/3 px-3 py-3 text-center'>
      <Typography tag='p' className='text-[40px] font-bold text-white mdx:text-[32px]'>
        10000
      </Typography>
      <Typography className='whitespace-nowrap text-[24px] text-white mdx:text-[18px]'>
        <I18nText path='landing.statistics.participants' />
      </Typography>
    </div>
    <div className='basis-1/3 px-3 py-3 text-center'>
      <Typography tag='p' className='text-[40px] font-bold text-white mdx:text-[32px]'>
        3000
      </Typography>
      <Typography className='whitespace-nowrap text-[24px] text-white mdx:text-[18px]'>
        <I18nText path='landing.statistics.activities' values={{ br: <br /> }} />
      </Typography>
    </div>
    <div className='basis-1/3 px-3 py-3 text-center'>
      <Typography tag='p' className='text-[40px] font-bold text-white mdx:text-[32px]'>
        1150
      </Typography>
      <Typography className='whitespace-nowrap text-[24px] text-white mdx:text-[18px]'>
        <I18nText path='landing.statistics.awards' />
      </Typography>
    </div>
  </section>
);
