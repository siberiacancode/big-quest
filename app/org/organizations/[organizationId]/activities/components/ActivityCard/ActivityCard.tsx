import { Clock5Icon, Edit3Icon, HeartIcon, UserRoundIcon, UsersRoundIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { Button, Separator, Typography } from '@/components/ui';
import { getFileById } from '@/utils/api/requests';

import type { ActivityProps } from '../../constants/types';
import { ActivityDialog } from '../ActivityDialog/ActivityDialog';

interface ActivityCardProps {
  activity: ActivityProps;
}

export const ActivityCard = async ({ activity }: ActivityCardProps) => {
  const mediaWithUrl = await Promise.all(
    activity.media.map(async (item) => {
      const fileById = await getFileById({
        params: { id: item.id }
      });
      return { ...item, file: fileById };
    })
  );

  const extendedActivity = { ...activity, media: mediaWithUrl };
  const activityCover = extendedActivity.media.find((item) => item.flag === 'AVATAR')!;

  return (
    <div className='h-[397px] w-full rounded-lg bg-background p-4'>
      <div className='relative h-2/3'>
        <div className='mdx-h-1/2 relative h-full w-full'>
          <Image
            className='w-full rounded-lg'
            src={URL.createObjectURL(activityCover.file)}
            fill
            alt='activity-cover'
            sizes='4xlx:max-h-72'
          />
        </div>
        <div className='absolute top-0 flex w-full items-center justify-between p-3'>
          {activity.status && (
            <div className='rounded-md bg-secondary px-3 py-2'>
              <Typography variant='sub4' tag='p'>
                <I18nText
                  path={
                    `organization.activities.status.${activity.status.toLowerCase()}` as LocaleMessageId
                  }
                />
              </Typography>
            </div>
          )}
          <ActivityDialog
            trigger={
              <Button variant='secondary' size='sm' className='rounded-full px-[10px] py-2'>
                <Edit3Icon className='h-4 w-4' />
              </Button>
            }
            actionType='edit'
            activity={extendedActivity}
          />
        </div>
      </div>
      <ActivityDialog
        trigger={
          <div className='cursor-pointer'>
            <div className='mb-2 mt-3 flex justify-between text-muted-foreground'>
              {activity.category && (
                <Typography variant='sub4' tag='p' className='text-muted-foreground'>
                  {activity.category}
                </Typography>
              )}
              <div className='flex gap-4'>
                <div className='flex items-center gap-2'>
                  <UsersRoundIcon className='h-4 w-4 text-muted-foreground' />
                  <Typography variant='body4' tag='p'>
                    {activity.participants}
                  </Typography>
                </div>
                <div className='flex items-center gap-2'>
                  <HeartIcon className='h-4 w-4 text-muted-foreground' />
                  <Typography variant='body4' tag='p'>
                    {activity.likes}
                  </Typography>
                </div>
              </div>
            </div>
            <Typography variant='h7'>{activity.name}</Typography>
            <Separator className='my-4' />
            <div className='mb-1 flex justify-between'>
              <div className='flex gap-2'>
                <UserRoundIcon className='h-4 w-4 text-muted-foreground' />
                <Typography variant='body3' tag='p' className='text-foreground'>
                  <I18nText
                    path='activityCard.ageLimit.label'
                    values={{ ageMin: activity.ageLimit[0] }}
                  />
                </Typography>
              </div>
              <div className='flex gap-2'>
                <Clock5Icon className='h-4 w-4 text-muted-foreground' />
                <Typography variant='body3' tag='p' className='text-foreground'>
                  <I18nText
                    path='activityCard.duration.label'
                    values={{ duration: activity.duration / 60 }}
                  />
                </Typography>
              </div>
            </div>
          </div>
        }
        actionType='info'
        activity={extendedActivity}
      />
    </div>
  );
};
