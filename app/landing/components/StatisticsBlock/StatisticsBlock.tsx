import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export interface StatisticsBlockProps {
  activitiesAmount: number;
  awardsAmount: number;
  participantsAmount: number;
}

export const StatisticsBlock = ({
  activitiesAmount,
  awardsAmount,
  participantsAmount
}: StatisticsBlockProps) => (
  <div className='flex w-full flex-wrap items-center justify-around bg-taiga px-5 py-7'>
    <div className='basis-1/3 px-3 py-3 text-center'>
      <Typography tag='p' className='text-[40px] font-bold text-white'>
        {participantsAmount}
      </Typography>
      <Typography className='whitespace-nowrap text-[24px] text-white'>
        <I18nText path='landing.statistics.participants' />
      </Typography>
    </div>
    <div className='basis-1/3 px-3 py-3 text-center'>
      <Typography tag='p' className='text-[40px] font-bold text-white'>
        {activitiesAmount}
      </Typography>
      <Typography className='whitespace-nowrap text-[24px] text-white'>
        <I18nText path='landing.statistics.activities' values={{ br: <br /> }} />
      </Typography>
    </div>
    <div className='basis-1/3 px-3 py-3 text-center'>
      <Typography tag='p' className='text-[40px] font-bold text-white'>
        {awardsAmount}
      </Typography>
      <Typography className='whitespace-nowrap text-[24px] text-white'>
        <I18nText path='landing.statistics.awards' />
      </Typography>
    </div>
  </div>
);
