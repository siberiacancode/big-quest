import { I18nText } from '@/components/common';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Typography
} from '@/components/ui';

import { CommentCard } from './components/CommentCard/CommentCard';
import { comments } from './constants/comments';

export const FeedbackSection = () => (
  <section id='feedback' className='w-full bg-muted py-12'>
    <Carousel className='container'>
      <div className='flex items-center justify-start lg:justify-center'>
        <Typography tag='h2' variant='h1' className='text-center text-[21px] lg:text-4xl'>
          <I18nText path='page.landing.feedback.title' />
        </Typography>
        <div className='absolute right-2'>
          <CarouselPrevious
            variant='ghost'
            className='static right-0 top-0 translate-y-0 border-none hover:bg-white'
          />
          <CarouselNext
            variant='ghost'
            className='static right-0 top-0 translate-y-0 border-none hover:bg-white'
          />
        </div>
      </div>
      <CarouselContent className='mt-8'>
        {comments.map((comment, index) => (
          <CarouselItem key={index} className='w-full md:basis-1/2 xl:basis-1/3'>
            <CommentCard {...comment} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
