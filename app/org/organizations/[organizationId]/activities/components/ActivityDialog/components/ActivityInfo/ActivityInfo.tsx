import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { Switch } from '@/components/ui/switch';

interface ActivityInfoProps {
  activity: ActivityResponse;
}
export const ActivityInfo = ({ activity }: ActivityInfoProps) => {
  return (
    <div className='flex h-full flex-col items-end justify-between gap-4 overflow-y-auto px-5 smx:px-0'>
      <div className='flex w-full flex-col overflow-y-auto rounded-lg border p-5'>
        <div className='flex w-full justify-between gap-24 smx:flex-col smx:gap-2'>
          <div className='flex-1 space-y-3'>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.name.label' />
              </Typography>
              <Typography variant='body1'>{activity.name}</Typography>
            </div>

            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.description.label' />
              </Typography>
              <Typography variant='body1'>{activity.description}</Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.ageLimit.label' />
              </Typography>
              <Typography variant='body1'>
                {`${activity.ageLimit[0]}-${activity.ageLimit[1]}`}{' '}
                <I18nText path='field.ageLimit.years' />
              </Typography>
            </div>

            <div className='flex flex-col gap-2'>
              <Typography variant='sub1'>
                <I18nText path='field.duration.label' />
              </Typography>

              <Typography variant='body1'>
                {activity.duration} <I18nText path='field.duration.minutes' />
                {` (${Math.ceil(activity.duration / 60)} `}
                <I18nText path='field.duration.hours' />
                {`) `}
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
