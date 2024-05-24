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

const ActivityCardStatus = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('rounded-md bg-secondary px-3 py-2', className)} />
  )
);
ActivityCardStatus.displayName = 'ActivityCardStatus';

const ActivityCardImage = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Image>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className='relative aspect-square w-full'>
      <Image
        {...props}
        sizes='370px'
        className={cn('w-full rounded-[8px] object-cover 2md:rounded-[30px]', className)}
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

const ActivityCardBanner = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('absolute top-0 flex w-full items-center justify-between p-3', className)}
    />
  )
);
ActivityCardBanner.displayName = 'ActivityCardBanner';

const ActivityCardName = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('text-sm font-semibold 2xs:text-xl', className)} />
  )
);

ActivityCardName.displayName = 'ActivityCardName';

const ActivityCardHeaderTop = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('mb-2 mt-3 flex flex-wrap justify-between text-muted-foreground', className)}
    />
  )
);

ActivityCardHeaderTop.displayName = 'ActivityCardHeaderTop';

const ActivityCardCategory = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('text-xs font-normal text-muted-foreground 2xs:text-base', className)}
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
        'flex items-center gap-1 text-xs font-normal text-muted-foreground 2xs:text-lg lg:gap-3',
        className
      )}
    />
  )
);
ActivityCardContentItem.displayName = 'ActivityCardContentItem';
export {
  ActivityCard,
  ActivityCardBanner,
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
  ActivityCardHeader,
  ActivityCardHeaderTop,
  ActivityCardImage,
  ActivityCardName,
  ActivityCardStatus
};
