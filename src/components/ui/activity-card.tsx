import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const ActivityCard = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        'flex w-full max-w-[413px] flex-col gap-4 lgx:max-w-[500px] 2xsx:gap-2',
        className
      )}
    />
  )
);
ActivityCard.displayName = 'ActivityCard';

const ActivityCardImage = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Image>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative aspect-square w-full', className)}>
      <Image
        {...props}
        sizes='370px'
        className='w-full rounded-[8px] object-cover md:rounded-[30px]'
        fill
      />
    </div>
  )
);
ActivityCardImage.displayName = 'ActivityCardImage';

const ActivityCardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('flex flex-grow flex-col gap-2 lg:gap-3', className)} />
  )
);
ActivityCardHeader.displayName = 'ActivityCardHeader';

const ActivityCardName = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('text-base font-semibold lg:text-xl', className)} />
  )
);

ActivityCardName.displayName = 'ActivityCardName';

const ActivityCardCategory = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('text-sm font-normal text-muted-foreground lg:text-base', className)}
    />
  )
);

ActivityCardCategory.displayName = 'ActivityCardCategory';

const ActivityCardDivider = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('h-[1px] w-full bg-muted', className)} />
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
      className={cn(
        'flex items-center gap-1 text-lg font-normal text-muted-foreground lg:gap-3',
        className
      )}
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
