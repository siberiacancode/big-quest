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
  <section id='feedback' className='w-full bg-muted py-[72px] xxsx:py-12 xxsx:pb-0 '>
    <Carousel className='container'>
      <div className='flex items-center justify-between'>
        <Typography
          tag='h3'
          variant='h1'
          className='flex-grow pl-16 text-center mdx:text-3xl xsx:text-[21px] xxsx:pl-0'
        >
          <I18nText path='landing.feedback.title' />
        </Typography>
        <div className='w-fit pr-3'>
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
      <CarouselContent className='-ml-0 mt-20 w-full lgx:mt-10 mdx:-ml-0 mdx:mt-6'>
        {comments.map((comment, index) => (
          <CarouselItem
            key={index}
            className='basis-1/3 px-3 xlx:basis-1/2 lgx:px-2 mdx:basis-full'
          >
            <CommentCard {...comment} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
