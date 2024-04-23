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

ActivityCardName.displayName = 'ActivityCardName';

const ActivityCardCategory = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('text-lg font-normal text-muted-foreground', className)}
    />
  )
);

ActivityCardCategory.displayName = 'ActivityCardCategory';

const ActivityCardDivider = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('my-2 h-[1px] w-full bg-muted', className)} />
  )
);

ActivityCardDivider.displayName = 'ActivityCardDivider';

const ActivityCardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('flex flex-shrink flex-grow-0 justify-between', className)}
    />
  )
);
ActivityCardContent.displayName = 'ActivityCardContent';

const ActivityCardContentItem = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('flex items-center gap-2 text-lg font-normal text-muted-foreground', className)}
    />
  )
);
ActivityCardContentItem.displayName = 'ActivityCardContentItem';

export {
  ActivityCard,
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
  ActivityCardHeader,
  ActivityCardImage,
  ActivityCardName
};
