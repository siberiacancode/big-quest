import Image from 'next/image';

import newsBackground from '@/assets/images/landing/newsBackground.webp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui';

import { NewsCard } from './components/NewsCard/NewsCard';
import { news } from './constants/news';

export const NewsSection = () => (
  <div className='relative w-full pb-[134px] pt-[197px]'>
    <Image src={newsBackground} alt='' className='absolute bottom-0 top-0 w-full' />

    <Carousel className='w-full'>
      <CarouselContent className='w-full'>
        {news.map((currentNews, index) => (
          <CarouselItem key={index} className='w-full'>
            <div className='p-1'>
              <NewsCard {...currentNews} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);
