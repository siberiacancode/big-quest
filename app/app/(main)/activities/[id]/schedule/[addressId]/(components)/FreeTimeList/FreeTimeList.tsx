'use client';

import React from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import type { GroupedSchedule } from '../../../../(constants)/types';
import { FreeTimeItem } from '../FreeTimeItem/FreeTimeItem';

interface FreeTimeListProps {
  schedule: GroupedSchedule;
  isMobile: boolean;
}

export const FreeTimeList = ({ schedule, isMobile }: FreeTimeListProps) => {
  const i18n = useI18n();
  const [activeTime, setActiveTime] = React.useState<string>();

  const activeInfo = schedule.info.find((info) => info.start === activeTime)!;

  const copy = async () => {
    await navigator.clipboard.writeText(activeInfo.employeeNumber as string);
    toast(i18n.formatMessage({ id: 'app.activity.phone.copy' }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });
  };

  return (
    <div className='mt-4 w-full space-y-4 md:space-y-8 '>
      {schedule && (
        <div className='flex flex-wrap gap-3'>
          {schedule.times.map((time, index) => (
            <FreeTimeItem
              time={time}
              key={index}
              className={cn(activeTime === time.start && 'bg-taiga text-white')}
              onClick={() => setActiveTime(time.start)}
            />
          ))}
        </div>
      )}
      {activeInfo && (
        <div className='pb-[120px]'>
          {!activeInfo?.preEntry && (
            <div>
              <Typography variant='body2'>
                <I18nText path='app.activity.schedule.noPreEntry.title' />
              </Typography>
              <Typography variant='body2'>
                <I18nText path='app.activity.schedule.noPreEntry.description' />
              </Typography>
            </div>
          )}

          {activeInfo?.preEntry && (
            <div>
              <Typography variant='body2'>
                <I18nText path='app.activity.schedule.preEntry' />
              </Typography>

              <Typography variant='body2'>
                <I18nText path='app.activity.phone' />:
                {isMobile && (
                  <Link href={`tel:${activeInfo?.employeeNumber}`}>
                    {' '}
                    +{activeInfo?.employeeNumber}
                  </Link>
                )}
                {!isMobile && (
                  <Button
                    variant='link'
                    onClick={copy}
                    className='h-fit py-0 text-base font-normal'
                  >
                    +{activeInfo?.employeeNumber}
                  </Button>
                )}
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
