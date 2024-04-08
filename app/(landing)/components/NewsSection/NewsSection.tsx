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
    className='relative flex h-screen min-h-[500px] w-full flex-col items-center justify-center px-[268px] xlx:px-32 mdx:px-14 xsx:px-3'
    style={{
      backgroundImage: 'url(/background/news.webp)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <Carousel className='mx-auto max-w-full'>
      <CarouselContent className='w-full'>
        {news.map((currentNews, index) => (
          <CarouselItem key={index} className='w-full'>
            <NewsCard {...currentNews} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-[156px] h-11 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 xlx:-left-20 lgx:size-10 mdx:left-1/2 mdx:top-[100%] mdx:-translate-x-[125%] mdx:translate-y-1/2'>
        {(disabled) => <ChevronLeftIcon color={disabled ? 'white' : 'black'} />}
      </CarouselPrevious>
      <CarouselNext className='-right-[156px] h-11 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 xlx:-right-20 lgx:size-10 mdx:right-1/2 mdx:top-[100%] mdx:translate-x-[125%] mdx:translate-y-1/2'>
        {(disabled) => <ChevronRightIcon color={disabled ? 'white' : 'black'} />}
      </CarouselNext>
    </Carousel>
  </div>
);
