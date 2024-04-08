'use client';

import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  buttonVariants,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { NewsCard } from './components/NewsCard/NewsCard';
import { news } from './constants/news';

const CAROUSEL_AUTO_PLAY_DELAY = 8000;

export const NewsSection = () => (
  <section className='relative w-full'>
    <Carousel
      className='w-full'
      opts={{
        loop: true,
        watchDrag: false
      }}
      plugins={[Autoplay({ delay: CAROUSEL_AUTO_PLAY_DELAY })]}
    >
      <CarouselContent className='-ml-0'>
        {news.map((currentNews, index) => (
          <CarouselItem
            key={index}
            style={{
              backgroundImage: 'url(/background/news.webp)'
            }}
            className='flex justify-center bg-cover bg-center bg-no-repeat py-40 pl-0 md:py-60'
          >
            <div className='max-w-[400px] lg:max-w-[800px]'>
              <NewsCard {...currentNews} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='absolute bottom-[15%] m-auto flex w-full justify-center'>
        <Button
          className={cn(
            buttonVariants({ size: 'lg' }),
            'bg-background text-taiga hover:bg-taiga-foreground'
          )}
        >
          <I18nText path='button.findOutDetails' />
        </Button>
      </div>
      <CarouselPrevious className='absolute left-[5%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 lgx:size-10 2xl:left-[15%] '>
        {(disabled) => <ChevronLeftIcon color={disabled ? 'white' : 'black'} />}
      </CarouselPrevious>
      <CarouselNext className='absolute right-[5%] top-1/2 h-12 w-12 rounded-full border-none bg-white disabled:bg-taiga disabled:opacity-100 lgx:size-10 2xl:right-[15%]'>
        {(disabled) => <ChevronRightIcon color={disabled ? 'white' : 'black'} />}
      </CarouselNext>
    </Carousel>
  </section>
);
