import React from 'react';
import { Edit3Icon, WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import type { ActivityListResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

interface ActivityInfoProps {
  activity: ActivityListResponse;
  onEdit: () => void;
}

export const ActivityInfo = ({ activity, onEdit }: ActivityInfoProps) => {
  const i18n = useI18n();
  const activityCover = activity.media.find((media) => media.flag === 'AVATAR')!;
  const [lowerAgeLimit, upperAgeLimit] = activity.ageLimit;
  const [activeMedia, setActiveMedia] = React.useState(activityCover);

  return (
    <div className='scrollbar_hide flex h-full flex-col justify-between gap-4 overflow-y-auto smx:px-0'>
      <div className='flex w-full flex-col gap-4 md:flex-row'>
        <div className='relative max-h-[418px] w-full md:max-w-[418px]'>
          {activeMedia.url && activeMedia.type === 'IMAGE' && (
            <div className='p-1/2'>
              <Image
                className='rounded-lg'
                src={activeMedia.url}
                fill
                alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
              />
            </div>
          )}
          {activeMedia.type === 'VIDEO' && (
            <div className='aspect-square'>
              <video
                autoPlay
                muted
                className='h-full max-h-[418px] w-full rounded-lg border border-border object-cover'
              >
                <source src={activeMedia.url} type='video/mp4' />
              </video>
            </div>
          )}
        </div>

        <div className='flex w-full grid-rows-4 gap-2 overflow-x-scroll md:grid md:h-full md:w-fit md:grid-cols-2 md:gap-1 md:overflow-x-hidden'>
          {activity.media.map((item, index) => (
            <div className='relative' key={index}>
              <div className='relative h-[100px]'>
                {item.url && item.type === 'IMAGE' && (
                  <div className='size-[100px]'>
                    <Image
                      className={cn(
                        'w-full rounded-md',
                        activeMedia.url === item.url && 'border-2 border-emerald-700'
                      )}
                      src={item.url}
                      fill
                      onClick={() => setActiveMedia(item)}
                      alt={i18n.formatMessage(
                        { id: 'activity.image.alt' },
                        { name: activity.name }
                      )}
                    />
                  </div>
                )}
                {item.type === 'VIDEO' && (
                  <div className='size-[100px]'>
                    <video
                      autoPlay
                      muted
                      className={cn(
                        activeMedia.url === item.url && 'border-2 border-emerald-700',
                        'size-[100px] rounded-md border border-border object-cover'
                      )}
                      onClick={() => setActiveMedia(item)}
                    >
                      <source src={item.url} type='video/mp4' />
                    </video>
                  </div>
                )}
              </div>
              {item.flag === 'AVATAR' && (
                <div className='absolute right-0 top-0 m-2 rounded-full bg-emerald-700 p-2'>
                  <WallpaperIcon className='h-3 w-3 text-white' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex w-full flex-col rounded-lg border p-5'>
        <Edit3Icon className='absolute right-4 top-4 hover:cursor-pointer' onClick={onEdit} />
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
              <Typography variant='body1'>{activity.category.RU}</Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.status.label' />
              </Typography>
              <Typography variant='sub4' className='w-fit rounded-md bg-secondary px-3 py-2'>
                <I18nText
                  path={
                    `page.organization.activities.status.${activity.status.toLowerCase()}` as LocaleMessageId
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
