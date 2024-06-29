'use client';

import Image from 'next/image';

import type { ActivityResponse } from '@/api-types';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

interface CarouselMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  activity: ActivityResponse;
}

export const CarouselMedia = ({ activity, ...props }: CarouselMediaProps) => {
  const i18n = useI18n();

  return (
    <Carousel
      className='relative w-full'
      opts={{
        loop: true
      }}
      {...props}
    >
      <CarouselContent>
        {activity.media.map((item, index) => (
          <CarouselItem key={index} className='aspect-square w-full'>
            {item.url && item.type === 'IMAGE' && (
              <div className='relative h-full w-full'>
                <Image
                  src={item.url}
                  fill
                  alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
                  priority={index === 0}
                />
              </div>
            )}
            {item.type === 'VIDEO' && (
              <div className='aspect-square h-full w-full'>
                <video autoPlay muted className='h-full w-full object-cover'>
                  <source src={item.url} type='video/mp4' />
                </video>
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots className='absolute bottom-5 mx-auto mt-4 w-full text-center' />
    </Carousel>
  );
};
