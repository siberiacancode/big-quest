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
  <div className='w-full px-16'>
    <Carousel className='mx-auto max-w-full'>
      <div className='flex items-center justify-between'>
        <Typography tag='h3' variant='h1' className=''>
          <I18nText path='landing.feedback.title' />
        </Typography>
        <div className=''>
          <CarouselPrevious className='static right-0 top-0 translate-y-0 border-none bg-white' />
          <CarouselNext className='static right-0 top-0 translate-y-0 border-none bg-white' />
        </div>
      </div>
      <CarouselContent className='mx-auto mt-14 w-full'>
        {comments.map((comment, index) => (
          <CarouselItem key={index} className='w-full basis-1/3 lgx:basis-1/2 mdx:basis-full'>
            <div className='p-1'>
              <CommentCard {...comment} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);
