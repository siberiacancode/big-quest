import { Clock5Icon, Edit3Icon, HeartIcon, UserRoundIcon, UsersRoundIcon } from 'lucide-react';
import Image from 'next/image';

import background from '@/assets/images/background/activity.png';
import { Button, Separator, Typography } from '@/components/ui';

export const ActivityCard = () => {
  return (
    <div className='w-full rounded-lg bg-background p-4'>
      <div className='relative'>
        <Image
          className='w-full rounded-lg 4xlx:max-h-72 4xl:max-h-96'
          src={background}
          alt='activity-background'
        />
        <div className='absolute top-0 flex w-full items-center justify-between p-3'>
          <div className='rounded-md bg-secondary px-3 py-2'>
            <Typography variant='sub4' tag='p'>
              Опубликован
            </Typography>
          </div>
          <Button variant='secondary' size='sm' className='rounded-full px-[10px] py-2'>
            <Edit3Icon className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <div className='mb-2 mt-3 flex justify-between text-muted-foreground'>
        <Typography variant='sub4' tag='p' className='text-muted-foreground'>
          Образование
        </Typography>
        <div className='flex gap-4'>
          <div className='flex items-center gap-2'>
            <UsersRoundIcon className='h-4 w-4 text-muted-foreground' />
            <Typography variant='body4' tag='p'>
              600
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <HeartIcon className='h-4 w-4 text-muted-foreground' />
            <Typography variant='body4' tag='p'>
              210
            </Typography>
          </div>
        </div>
      </div>
      <Typography variant='h7'>Рисуем живопись</Typography>
      <Separator className='my-4' />
      <div className='mb-1 flex justify-between'>
        <div className='flex gap-2'>
          <UserRoundIcon className='h-4 w-4 text-muted-foreground' />
          <Typography variant='body3' tag='p' className='text-foreground'>
            от 7+ лет
          </Typography>
        </div>
        <div className='flex gap-2'>
          <Clock5Icon className='h-4 w-4 text-muted-foreground' />
          <Typography variant='body3' tag='p' className='text-foreground'>
            2 ч
          </Typography>
        </div>
      </div>
    </div>
  );
};
