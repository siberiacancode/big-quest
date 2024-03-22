'use client';

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

export const NewsSection = () => (
  <div
    className='relative flex h-screen min-h-[500px] w-full flex-col items-center justify-center px-[268px]'
    style={{
      backgroundImage: 'url(/newsBackground.webp)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <Carousel className='mx-auto max-w-full'>
      <CarouselContent className='w-full'>
        {news.map((currentNews, index) => (
          <CarouselItem key={index} className='w-full'>
            <div className='p-1'>
              <NewsCard {...currentNews} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-[156px] h-11 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100'>
        {(disabled) => <ChevronLeftIcon color={disabled ? 'white' : 'black'} />}
      </CarouselPrevious>
      <CarouselNext className='-right-[156px] h-11 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100'>
        {(disabled) => <ChevronRightIcon color={disabled ? 'white' : 'black'} />}
      </CarouselNext>
    </Carousel>
  </div>
);
