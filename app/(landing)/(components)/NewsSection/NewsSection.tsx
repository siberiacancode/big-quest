'use client';

import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui';

import { NewsCard } from './components/NewsCard/NewsCard';
import { news } from './constants/news';

const CAROUSEL_AUTO_PLAY_DELAY = 8000;

export const NewsSection = () => (
  <section id='news' className='w-full bg-muted pt-14'>
    <Carousel
      className='container relative  mx-auto w-full px-0 pl-0'
      opts={{
        loop: true,
        watchDrag: false
      }}
      plugins={[Autoplay({ delay: CAROUSEL_AUTO_PLAY_DELAY })]}
    >
      <CarouselContent className='-ml-0'>
        {news.map((currentNews, index) => (
          <CarouselItem key={index} className='ml-0 flex justify-center bg-no-repeat'>
            <div className='w-full 3mdx:w-[702px] 3smx:w-[500px] xsx:px-4 3md:w-[866px] 2xl:w-full '>
              <NewsCard {...currentNews} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute -left-[5%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 lgx:size-10 2xl:-left-[5%] '>
        {(disabled) => <ChevronLeftIcon color={disabled ? 'white' : 'black'} />}
      </CarouselPrevious>
      <CarouselNext className='absolute -right-[5%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 lgx:size-10 2xl:-right-[5%]'>
        {(disabled) => <ChevronRightIcon color={disabled ? 'white' : 'black'} />}
      </CarouselNext>
    </Carousel>
  </section>
);
// заменять карусель при меньше 1400px куржочками
// с 900 сделать мобилку, т.е. сначала image мальчика потом ниж
