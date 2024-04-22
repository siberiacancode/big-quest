import { Clock4Icon, UserRoundIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export interface ActivityCardProps {
  id: string;
  cover: string;
  name: string;
  description?: string;
  ageLimit: number[];
  duration: number;
  category: string;
}

export const ActivityCard = ({ cover, category, ageLimit, duration, name }: ActivityCardProps) => (
  <div className='flex w-full flex-col'>
    {cover && (
      <div className='relative h-[370px]'>
        <Image src={cover} alt={name} sizes='370px' className='rounded-md object-cover' fill />
      </div>
    )}

    <div className='mt-4 flex-grow'>
      <Typography tag='p' variant='body1'>
        <I18nText
          path={`organization.activities.category.${category.toLowerCase()}` as LocaleMessageId}
        />
      </Typography>
      <Typography className='mt-2 text-xl font-bold'>{name}</Typography>
    </div>
    <div className='my-2 h-[1px] w-full bg-muted' />
    <div className='flex flex-shrink flex-grow-0 justify-between'>
      <div className='flex items-center gap-2'>
        <UserRoundIcon className='size-6 stroke-muted-foreground' />
        <Typography tag='p' variant='body1'>
          <I18nText path='landing.activities.card.minimumAge' values={{ age: ageLimit[0] }} />
        </Typography>
      </div>
      <div className='flex items-center gap-2'>
        <Clock4Icon className='size-6 stroke-muted-foreground' />
        <Typography tag='p' variant='body1'>
          <I18nText path='landing.activities.card.duration' values={{ duration }} />
        </Typography>
      </div>
    </div>
  </div>
);
