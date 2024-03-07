import Image from 'next/image';

import background from '@/assets/images/background/activity.png';
import { I18nText } from '@/components/common';
import { Switch, Typography } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

interface ActivityInfoProps {
  activity: {
    id: string;
    cover?: string;
    content?: string[];
    name: string;
    description?: string;
    ageLimit: number[];
    price: number;
    nutsCount: number;
    duration: number;
    replay: boolean;
    view: ActivityView;
    status: ActivityStatus;
    category: string;
    participants: number;
    likes: number;
    schedule?: Schedule[];
  };
}

export const ActivityInfo = ({ activity }: ActivityInfoProps) => {
  const i18n = useI18n();
  const [lowerAgeLimit, upperAgeLimit] = activity.ageLimit;

  return (
    <div className='flex h-full flex-col items-end justify-between gap-4 overflow-y-auto px-5 smx:px-0'>
      <div className='grid h-screen max-h-[260px] w-full grid-cols-2 items-center gap-4 px-5 xsx:max-h-[130px] xsx:gap-2'>
        <div className='relative h-full'>
          <Image
            className='w-full rounded-lg sm:max-h-64 sm:w-[300px]'
            src={activity.cover ?? background}
            fill
            object-fit='cover'
            alt={i18n.formatMessage({ id: `activity.image.alt` }, { name: activity.name })}
          />
        </div>
        <div className='grid h-full grid-cols-2 grid-rows-2 gap-2'>
          {Array.from({ length: 4 }, (_, index) => (
            <div className='relative'>
              {activity.content && activity.content[index] ? (
                <Image
                  className='max-h-[125px] w-full max-w-[150px] rounded-lg'
                  src={activity.content[index]}
                  fill
                  object-fit='cover'
                  alt={i18n.formatMessage({ id: `activity.image.alt` }, { name: activity.name })}
                />
              ) : (
                <div className='h-full w-full rounded-lg border-2 border-dashed border-border' />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col overflow-y-auto rounded-lg border p-5'>
        <div className='flex w-full justify-between gap-24 smx:flex-col smx:gap-2'>
          <div className='flex-1 space-y-3'>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.name.label' />
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
          </div>
        </div>
        <div className='mb-8 mt-3 grid w-full grid-cols-2 gap-24 smx:grid-cols-1 smx:gap-2'>
          <Typography variant='sub1'>
            <I18nText path='field.replay.label' />
          </Typography>

          <div className='flex items-center space-x-2'>
            <Switch
              id='allow-repeat-mode'
              className='h-6 cursor-default'
              checked={activity.replay}
            />
            <Typography variant='body1' tag='label' className='text-foreground'>
              <I18nText path='field.replay.option' />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
