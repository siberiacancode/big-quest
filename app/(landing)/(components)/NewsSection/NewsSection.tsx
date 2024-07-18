'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui';

import { NewsCard } from './components/NewsCard/NewsCard';
import { news } from './constants/news';

const CAROUSEL_AUTO_PLAY_DELAY = 8000;

export const NewsSection = () => (
  <section id='news' className='w-full bg-muted pt-12'>
    <Carousel
      className='mx-auto w-full max-w-[1160px] px-4 md:px-20 2xl:px-0'
      opts={{
        loop: true
      }}
      plugins={[Autoplay({ delay: CAROUSEL_AUTO_PLAY_DELAY })]}
    >
      <CarouselContent>
        {news.map((article, index) => (
          <CarouselItem key={index} className='w-full'>
            <NewsCard {...article} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <span className='hidden md:block'>
        <CarouselPrevious className='absolute left-[2%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 2xl:-left-[5%]'>
          {(disabled) => <ChevronLeftIcon color={disabled ? 'white' : 'black'} />}
        </CarouselPrevious>
        <CarouselNext className='absolute right-[2%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 2xl:-right-[5%]'>
          {(disabled) => <ChevronRightIcon color={disabled ? 'white' : 'black'} />}
        </CarouselNext>
      </span>

      <CarouselDots className='mt-4 text-center md:hidden' />
    </Carousel>
  </section>
);
