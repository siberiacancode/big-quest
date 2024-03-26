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
  onEdit: (props: ActivityActionType) => void;
}

export const ActivityInfo = ({ activity, onEdit }: ActivityInfoProps) => {
  const i18n = useI18n();
  const defaultActiveMedia = activity.media.find((media) => media.isAvatar === true)!;
  const [lowerAgeLimit, upperAgeLimit] = activity.ageLimit;
  const [activeMedia, setActiveMedia] =
    React.useState<ActivityProps['media'][0]>(defaultActiveMedia);

  const ACTIVITY_MEDIA_AMOUNT = activity.media.length > 4;

  return (
    <div className='flex flex-col items-end gap-4 px-5 smx:px-0'>
      <div
        className={cn(
          'grid h-fit max-h-[600px] w-full grid-cols-3 gap-3 2smx:max-w-full 2smx:grid-cols-1 2smx:grid-rows-4 2smx:px-4 xsx:grid-rows-3 xsx:gap-2 xxsx:grid-rows-4',
          ACTIVITY_MEDIA_AMOUNT && '2smx:grid-rows-5 xsx:grid-rows-5 xxsx:grid-rows-5'
        )}
      >
        <div
          className={cn(
            'relative col-span-2 max-h-[418px] max-w-[418px] 2smx:row-span-3 2smx:max-w-full xsx:row-span-2 xxsx:row-span-3 2sm:h-[418px]',
            ACTIVITY_MEDIA_AMOUNT && '2smx:row-span-3 xsx:row-span-3 xxsx:row-span-3'
          )}
        >
          {activeMedia.type === 'image' && (
            <Image
              className='w-full rounded-lg 2smx:h-[360px]'
              src={activeMedia.url ?? background}
              fill
              object-fit='cover'
              alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
            />
          )}
          {activeMedia.type === 'video' && (
            <video className='h-full w-full rounded-lg border border-border' controls>
              <source src={activeMedia.url} type='video/mp4' />
            </video>
          )}
        </div>

        <div
          className={cn(
            'grid h-max grid-cols-2 gap-2 2smx:row-span-1 2smx:grid-cols-4 2smx:grid-rows-1',
            ACTIVITY_MEDIA_AMOUNT && '2smx:row-span-2'
          )}
        >
          {activity.media.map((item, index) => (
            <div className='relative' key={index}>
              <div
                className={cn('3smx:h-[85px] relative h-[100px] w-full xsx:h-[80px] xxsx:h-[60px]')}
              >
                {item.type === 'image' && (
                  <Image
                    className={cn(
                      'rounded-lg',
                      activeMedia.url === item.url && 'border-2 border-emerald-700'
                    )}
                    src={item.url}
                    fill
                    onClick={() => setActiveMedia(item)}
                    alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
                  />
                )}
                {item.type === 'video' && (
                  <video
                    className={cn(
                      activeMedia.url === item.url && 'border-2 border-emerald-700',
                      'h-full w-full flex-1 rounded-md border border-border'
                    )}
                    onClick={() => setActiveMedia(item)}
                  >
                    <source src={item.url} type='video/mp4' />
                  </video>
                )}
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
          onClick={() => onEdit('edit')}
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
