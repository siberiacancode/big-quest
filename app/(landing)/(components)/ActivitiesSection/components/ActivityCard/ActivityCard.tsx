import { Clock4Icon, UserRoundIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

export interface ActivityCardProps {
  image: StaticImageData;
  title: string;
  minimumAge: number;
  duration: number;
  category: ActivityCategory;
}
export const ActivityCard = ({
  image,
  category,
  minimumAge,
  duration,
  title
}: ActivityCardProps) => (
  <div className='flex max-w-[370px] flex-col'>
    <Image src={image} alt={title} />
    <div className='mt-4 flex-grow'>
      <Typography tag='p' variant='body1'>
        <I18nText
          path={`organization.activities.category.${category.toLowerCase()}` as LocaleMessageId}
        />
      </Typography>
      <Typography className='mt-2 text-xl font-bold'>{title}</Typography>
    </div>
    <div className='my-2 h-[1px] w-full bg-muted' />
    <div className='flex flex-shrink flex-grow-0 justify-between'>
      <div className='flex items-center gap-2'>
        <UserRoundIcon className='size-6 stroke-muted-foreground' />
        <Typography tag='p' variant='body1'>
          <I18nText path='landing.activities.card.minimumAge' values={{ age: minimumAge }} />
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
