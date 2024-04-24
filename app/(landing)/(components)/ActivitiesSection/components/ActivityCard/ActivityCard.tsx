import { Clock4Icon, UserRoundIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

interface MediaProps {
  id: string;
  type: MediaType;
  flag: MediaFlag;
  url: string;
}

export interface ActivityCardProps {
  id: string;
  media: MediaProps[];
  name: string;
  description?: string;
  ageLimit: number[];
  duration: number;
  category: string;
}

export const ActivityCard = ({ media, category, ageLimit, duration, name }: ActivityCardProps) => {
  const activityMedia = media.find((media) => media.flag === 'COVER');

  return (
    <div className='flex w-full max-w-[413px] flex-col gap-4 lgx:max-w-[500px] 2xsx:gap-2'>
      <div className='relative w-full'>
        {activityMedia && (
          <Image
            src={activityMedia.url}
            alt={name}
            sizes='auto'
            className='w-full rounded-[30px] object-cover 2xsx:rounded-[8px]'
            fill
          />
        )}
        {!activityMedia && (
          <div className='w-full rounded-[30px] bg-muted p-1/2 2xsx:rounded-[8px]' />
        )}
      </div>

      <div className='flex flex-grow flex-col gap-3 2xsx:gap-2'>
        <Typography tag='p' variant='body1' className='text-base xsx:text-sm'>
          {category}
        </Typography>
        <Typography tag='p' variant='h5' className='font-semibold xsx:text-base	'>
          {name}
        </Typography>
      </div>
      <div className='h-[1px] w-full bg-muted' />
      <div className='flex flex-shrink flex-grow-0 justify-between'>
        <div className='flex items-center gap-3 xsx:gap-1'>
          <UserRoundIcon className='size-6 stroke-muted-foreground 2xsx:size-5 xsx:size-4' />
          <Typography tag='p' variant='body3' className='xsx:text-xs'>
            <I18nText path='landing.activities.card.minimumAge' values={{ age: ageLimit[0] }} />
          </Typography>
        </div>
        <div className='flex items-center gap-3 xsx:gap-1'>
          <Clock4Icon className='size-6 stroke-muted-foreground 2xsx:size-5 xsx:size-4' />
          <Typography tag='p' variant='body3' className='xsx:text-xs'>
            <I18nText path='landing.activities.card.duration' values={{ duration }} />
          </Typography>
        </div>
      </div>
    </div>
  );
};
