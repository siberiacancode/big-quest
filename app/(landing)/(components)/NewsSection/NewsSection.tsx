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
import { cn } from '@/lib/utils';

import { NewsCard } from './components/NewsCard/NewsCard';
import { news } from './constants/news';

interface NewsSectionProps {
  isMobile: boolean;
}

const CAROUSEL_AUTO_PLAY_DELAY = 8000;

export const NewsSection = ({ isMobile }: NewsSectionProps) => (
  <section id='news' className='mx-2 w-full bg-muted pt-14 xxsx:pt-6'>
    <Carousel
      className='container mx-auto w-full'
      opts={{
        loop: true
      }}
      plugins={[Autoplay({ delay: CAROUSEL_AUTO_PLAY_DELAY })]}
    >
      <CarouselContent className='-ml-0'>
        {news.map((currentNews, index) => (
          <CarouselItem key={index} className='mx-1 flex justify-center bg-no-repeat px-0'>
            <div className='w-full xxlx:w-[95%] 2xlx:w-[90%] 2lgx:w-full'>
              <NewsCard {...currentNews} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <span className={cn('2lgx:hidden', isMobile && 'hidden')}>
        <CarouselPrevious className='absolute -left-[5%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 xxlx:-left-[1%] 2xlx:left-[1%] lgx:size-10'>
          {(disabled) => <ChevronLeftIcon color={disabled ? 'white' : 'black'} />}
        </CarouselPrevious>
        <CarouselNext className='absolute -right-[5%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 xxlx:-right-[1%] 2xlx:right-[1%] lgx:size-10'>
          {(disabled) => <ChevronRightIcon color={disabled ? 'white' : 'black'} />}
        </CarouselNext>
      </span>

      <CarouselDots className={cn('mt-4 2lg:hidden', isMobile && 'block text-center 2lg:block')} />
    </Carousel>
  </section>
);
