import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

const CAROUSEL_AUTO_PLAY_DELAY = 8000;

export const CarouselMedia = ({ activity }: { activity: ActivityResponse }) => {
  const i18n = useI18n();

  return (
    <Carousel
      className='relative w-full'
      opts={{
        loop: true
      }}
      plugins={[Autoplay({ delay: CAROUSEL_AUTO_PLAY_DELAY })]}
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
      <CarouselDots className='absolute bottom-5 mx-auto mt-4 w-full text-center' />
    </Carousel>
  );
};
