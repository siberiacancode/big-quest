import React from 'react';
import { Edit3Icon, WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import background from '@/assets/images/background/activity.png';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import type { ActivityActionType, ActivityProps } from '../../constants/types';

interface ActivityInfoProps {
  activity: ActivityProps;
  setActionType: (props: ActivityActionType) => void;
}

export const ActivityInfo = ({ activity, setActionType }: ActivityInfoProps) => {
  const i18n = useI18n();
  const [lowerAgeLimit, upperAgeLimit] = activity.ageLimit;
  const [activityMedia] = React.useState(activity.media);
  const [activeMediaFile, setActiveFile] = React.useState<{ url: string; isAvatar: boolean }>(
    activityMedia[0]
  );

  console.log(activity.media);
  return (
    <div className='flex flex-col items-end gap-4 px-5 smx:px-0'>
      <div className='grid h-screen max-h-[418px] w-full grid-cols-3 gap-3 xsx:max-h-[130px] xsx:gap-2'>
        <div className='relative col-span-2 h-full max-w-[418px]'>
          <Image
            className=' w-full rounded-lg sm:max-h-[418px] sm:w-[300px]'
            src={activeMediaFile.url ?? background}
            fill
            object-fit='cover'
            alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
          />
        </div>

        <div className='grid h-fit grid-cols-2 gap-2'>
          {activityMedia.map((item, index) => (
            <div className='relative' key={index}>
              <div className={cn('relative h-[100px] w-[100px]')}>
                <Image
                  className={cn(
                    'rounded-lg',
                    activeMediaFile.url === item.url && 'border-2 border-emerald-700'
                  )}
                  src={item.url}
                  fill
                  onClick={() => setActiveFile({ url: item.url, isAvatar: item.isAvatar })}
                  alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
                />
              </div>
              {item.isAvatar && (
                <div className='absolute right-0 top-0 m-2 rounded-full bg-emerald-700 p-2'>
                  <WallpaperIcon className='h-3 w-3 text-white' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex w-full flex-col rounded-lg border p-5'>
        <Edit3Icon
          className='absolute right-4 top-4 hover:cursor-pointer'
          onClick={() => setActionType('edit')}
        />
        <div className='flex w-full justify-between gap-24 smx:flex-col smx:gap-2'>
          <div className='flex-1 space-y-3'>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.title.label' />
              </Typography>
              <Typography variant='body1'>{activity.name}</Typography>
            </div>

            {activity.description && (
              <div className='flex flex-col gap-2'>
                <Typography variant='sub1'>
                  <I18nText path='field.description.label' />
                </Typography>
                <Typography variant='body1'>{activity.description}</Typography>
              </div>
            )}
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.ageLimit.label' />
              </Typography>
              <Typography variant='body1'>
                <I18nText path='field.ageLimit.years' values={{ lowerAgeLimit, upperAgeLimit }} />
              </Typography>
            </div>

            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.duration.label' />
              </Typography>
              <Typography variant='body1'>
                {activity.duration} <I18nText path='field.duration.minutes' />
                <I18nText
                  path='field.duration.hours'
                  values={{ hours: Math.ceil(activity.duration / 60) }}
                />
              </Typography>
            </div>
          </div>
          <div className='flex-1 space-y-3'>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.category.label' />
              </Typography>
              <Typography variant='body1'>{activity.category}</Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.status.label' />
              </Typography>
              <Typography variant='sub4' className='w-fit rounded-md bg-secondary px-3 py-2'>
                <I18nText
                  path={
                    `organization.activities.status.${activity.status.toLowerCase()}` as LocaleMessageId
                  }
                />
              </Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.price.label' />
              </Typography>
              <Typography variant='body1'>
                {activity.price} <I18nText path='field.price.currency' />
              </Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.replay.label' />
              </Typography>

              <Typography variant='body1'>
                <I18nText path={`field.replay.option.${activity.replay}`} />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
