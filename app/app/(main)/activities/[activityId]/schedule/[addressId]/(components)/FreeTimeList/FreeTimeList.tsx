'use client';

import React from 'react';
import Link from 'next/link';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { ExtendedScheduleResponse } from '@/utils/api';

import type { GroupedSchedule } from '../../../../(constants)/types';
import { FreeTimeItem } from '../FreeTimeItem/FreeTimeItem';

interface FreeTimeListProps {
  schedule: GroupedSchedule;
}

export const FreeTimeList = ({ schedule }: FreeTimeListProps) => {
  const [activeTime, setActiveTime] = React.useState<string>();
  const [activeInfo, setActiveInfo] = React.useState<ExtendedScheduleResponse>();

  /* const copyNumberOnClick = async () => {
    await navigator.clipboard.writeText(activeInfo.employeeNumber);
    toast(i18n.formatMessage({ id: 'app.activity.phone.copy' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });
  }; */

  return (
    <div className='mt-4 w-full space-y-4 md:space-y-8 '>
      <div className='flex flex-wrap gap-3'>
        {schedule.times.map((time, index) => (
          <FreeTimeItem
            time={time}
            key={index}
            className={cn(activeTime === time.start && 'bg-taiga text-white')}
            onClick={() => {
              setActiveTime(time.start);
              setActiveInfo(time.info);
            }}
          />
        ))}
      </div>

      {activeInfo && (
        <div className='pb-[120px]'>
          {!activeInfo.preEntry && (
            <div>
              <Typography variant='body2'>
                <I18nText path='page.app.activity.schedule.noPreEntry.title' />
              </Typography>
              <Typography variant='body2'>
                <I18nText path='page.app.activity.schedule.noPreEntry.description' />
              </Typography>
            </div>
          )}

          {activeInfo.preEntry && (
            <div>
              <Typography variant='body2'>
                <I18nText path='page.app.activity.schedule.preEntry' />
              </Typography>

              <Typography variant='body2'>
                <I18nText path='page.app.activity.phone' />:
                <Link href={`tel:${activeInfo?.employeeNumber}`}>
                  {' '}
                  +{activeInfo?.employeeNumber}
                </Link>
                {/* isMobile && (
                  <Link href={`tel:${activeInfo?.employeeNumber}`}>
                    {' '}
                    +{activeInfo.employeeNumber}
                  </Link>
                ) */}
                {/* !isMobile && (
                  <Button
                    variant='link'
                    onClick={copyNumberOnClick}
                    className='h-fit py-0 text-base font-normal'
                  >
                    +{activeInfo.employeeNumber}
                  </Button>
                ) */}
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
