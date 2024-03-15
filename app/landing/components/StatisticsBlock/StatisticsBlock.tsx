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
  <div className='flex w-full flex-wrap items-center justify-between bg-taiga'>
    <Typography className='basis-1/3'>
      {participantsAmount}
      <I18nText path='landing.statistics.participants' />
    </Typography>
    <Typography className='basis-1/3'>
      {activitiesAmount}
      <I18nText path='landing.statistics.participants' />
    </Typography>
    <Typography className='basis-1/3'>
      {awardsAmount}
      <I18nText path='landing.statistics.participants' />
    </Typography>
  </div>
);
