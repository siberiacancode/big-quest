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
  <section id='feedback' className='container mt-28 w-full'>
    <Carousel className='mx-auto max-w-full'>
      <div className='flex items-center justify-between'>
        <Typography tag='h3' variant='h1' className='mdx:text-3xl xsx:text-[21px]'>
          <I18nText path='landing.feedback.title' />
        </Typography>
        <div>
          <CarouselPrevious className='static right-0 top-0 translate-y-0 border-none bg-white' />
          <CarouselNext className='static right-0 top-0 translate-y-0 border-none bg-white' />
        </div>
      </div>
      <CarouselContent className='-ml-0 mt-14 w-full lgx:mt-10 mdx:-ml-0 mdx:mt-6'>
        {comments.map((comment, index) => (
          <CarouselItem
            key={index}
            className='w-full basis-1/3 px-3 xlx:basis-1/2 lgx:px-2 mdx:basis-full'
          >
            <CommentCard {...comment} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
