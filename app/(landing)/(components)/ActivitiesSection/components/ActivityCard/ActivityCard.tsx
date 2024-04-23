import { Clock4Icon, UserRoundIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export interface ActivityCardProps {
  id: string;
  media: MediaDto[];
  name: string;
  description?: string;
  ageLimit: number[];
  duration: number;
  category: string;
}

export const ActivityCard = ({ media, category, ageLimit, duration, name }: ActivityCardProps) => {
  const activityMedia = media.find((media) => media.flag === 'COVER');

  return (
    <div className='flex w-full max-w-[413px] flex-col gap-4 lgx:max-w-[500px]'>
      <div className='relative h-full max-h-[413px]'>
        {activityMedia && (
          <Image
            src={activityMedia.url}
            alt={name}
            sizes='413px'
            className='rounded-[30px] object-cover'
            fill
          />
        )}
        {!activityMedia && <div className='size-[413px] w-full rounded-[30px] bg-muted' />}
      </div>

      <div className='flex flex-grow flex-col gap-3'>
        <Typography tag='p' variant='body1' className='text-base'>
          <I18nText
            path={`organization.activities.category.${category.toLowerCase()}` as LocaleMessageId}
          />
        </Typography>
        <Typography tag='p' variant='h5' className=' font-semibold'>
          {name}
        </Typography>
      </div>
      <div className='h-[1px] w-full bg-muted' />
      <div className='flex flex-shrink flex-grow-0 justify-between'>
        <div className='flex items-center gap-3'>
          <UserRoundIcon className='size-6 stroke-muted-foreground' />
          <Typography tag='p' variant='body3'>
            <I18nText path='landing.activities.card.minimumAge' values={{ age: ageLimit[0] }} />
          </Typography>
        </div>
        <div className='flex items-center gap-3'>
          <Clock4Icon className='size-6 stroke-muted-foreground' />
          <Typography tag='p' variant='body3'>
            <I18nText path='landing.activities.card.duration' values={{ duration }} />
          </Typography>
        </div>
      </div>
    </div>
  );
};
