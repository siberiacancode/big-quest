'use client';

import { Clock5Icon, Edit3Icon, HeartIcon, UserRoundIcon, UsersRoundIcon } from 'lucide-react';
import Image from 'next/image';

import type { ActivityResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import { Button, Separator, Typography } from '@/components/ui';

import { EditActivityDialog } from '../EditActivityDialog/EditActivityDialog';
import { InfoAddressDialog } from '../InfoAddressDialog/InfoAddressDialog';

import { useActivityCard } from './hooks/useActivityCard';

interface ActivityCardProps {
  activity: ActivityResponse;
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { state, functions } = useActivityCard();
  const activityCover = activity.media.find((item) => item.flag === 'AVATAR')!;

  return (
    <div className='h-[397px] w-full rounded-lg bg-background p-4'>
      <div className='relative h-2/3'>
        <div className='mdx-h-1/2 relative h-full w-full'>
          {activityCover?.url && (
            <Image
              className='w-full rounded-lg'
              src={activityCover.url}
              fill
              alt='activity-cover'
              sizes='4xlx:max-h-72'
            />
          )}
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

          <Button
            onClick={functions.onEditClick}
            variant='secondary'
            size='sm'
            className='rounded-full px-[10px] py-2'
          >
            <Edit3Icon className='h-4 w-4' />
          </Button>

          <EditActivityDialog
            open={state.editDialogOpen}
            onOpenChange={functions.onEditCloseClick}
            onEdit={functions.onEdit}
            activity={activity}
          />
        </div>
      </div>
      <div
        className='cursor-pointer'
        tabIndex={0}
        onClick={functions.onInfoClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter') functions.onInfoClick();
        }}
        role='button'
      >
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
      <InfoAddressDialog
        activity={activity}
        onEdit={functions.onEdit}
        open={state.infoDialogOpen}
        onOpenChange={functions.onInfoCloseClick}
      />
    </div>
  );
};
