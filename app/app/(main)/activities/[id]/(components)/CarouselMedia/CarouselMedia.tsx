'use client';

import Image from 'next/image';

import type { ActivityResponse } from '@/api-types';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

interface CarouselMediaProps {
  activity: ActivityResponse;
}

export const CarouselMedia = ({ activity }: CarouselMediaProps) => {
  const i18n = useI18n();

  return (
    <Carousel
      className='relative w-full'
      opts={{
        loop: true
      }}
    >
      <CarouselContent>
        {activity.media.map((item, index) => (
          <CarouselItem key={index} className='aspect-square w-full'>
            <div className='relative h-full w-full'>
              <Image
                src={item.url}
                fill
                alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots
        className='absolute bottom-5 mx-auto mt-4 w-full text-center'
        activeStyle='bg-white scale-100'
        inactiveStyle='bg-transparent border border-white'
      />
    </Carousel>
  );
};
