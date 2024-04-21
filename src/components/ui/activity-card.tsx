import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const ActivityCard = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('flex w-full flex-col', className)} />
  )
);
ActivityCard.displayName = 'ActivityCard';

const ActivityCardImage = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Image>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative h-[400px]', className)}>
      <Image {...props} sizes='370px' className='rounded-2xl object-cover' fill />
    </div>
  )
);
ActivityCardImage.displayName = 'ActivityCardImage';

const ActivityCardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('mt-4 flex-grow', className)} />
  )
);
ActivityCardHeader.displayName = 'ActivityCardHeader';

const ActivityCardName = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('mt-2 text-xl font-bold', className)} />
  )
);
ActivityCardHeader.displayName = 'ActivityCardHeader';

export { ActivityCard, ActivityCardHeader, ActivityCardImage, ActivityCardName };
