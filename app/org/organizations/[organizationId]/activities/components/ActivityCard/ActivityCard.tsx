import { Clock5Icon, Edit3Icon, HeartIcon, UserRoundIcon, UsersRoundIcon } from 'lucide-react';
import Image from 'next/image';

import background from '@/assets/images/background/activity.png';
import { I18nText } from '@/components/common';
import { Button, Separator, Typography } from '@/components/ui';

import { ActivityDialog } from '../ActivityDialog/ActivityDialog';

interface ActivityCardProps {
  activity?: ActivityResponse;
}

const activityObj = {
  id: '1',
  cover: '',
  content: [''],
  name: 'Рисуем живопись',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
  ageLimit: [7, 13],
  price: 700,
  duration: 120,
  replay: false,
  view: 'ONLINE' as ActivityView,
  status: 'PUBLISHED' as ActivityStatus,
  category: 'Образование',
  participants: 600,
  likes: 210,
  nutsCount: 0,
  schedule: [
    {
      address: 'адрес',
      leadingEmployeeId: 'id',
      entry: true,
      regular: true,
      date: new Date('2024-02-28T20:14:53.795Z'),
      time: {
        hour: 12,
        minutes: 33
      },
      maxNumberOfParticipants: 0,
      period: [0]
    }
  ]
};

export const ActivityCard = ({ activity = activityObj }: ActivityCardProps) => {
  return (
    <div className='w-full rounded-lg bg-background p-4'>
      <div className='relative'>
        <Image
          className='w-full rounded-lg 4xlx:max-h-72 4xl:max-h-96'
          src={activity.cover || background}
          alt='activity-cover'
        />
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
            activity={activity}
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
                  от {activity.ageLimit[0]}+ лет
                </Typography>
              </div>
              <div className='flex gap-2'>
                <Clock5Icon className='h-4 w-4 text-muted-foreground' />
                <Typography variant='body3' tag='p' className='text-foreground'>
                  {activity.duration / 60} ч
                </Typography>
              </div>
            </div>
          </div>
        }
        actionType='info'
        activity={activity}
      />
    </div>
  );
};
