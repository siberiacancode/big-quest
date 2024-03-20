import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface InfoCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  itemsCount?: number;
}

export const InfoCardSkeleton = React.forwardRef<HTMLDivElement, InfoCardSkeletonProps>(
  ({ itemsCount = 1, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex-auto space-y-2 rounded-lg bg-background p-6', className)}
      {...props}
    >
      <div className='flex justify-between'>
        <Skeleton className='h-8 w-2/5 min-w-16 rounded-lg' />
        <Skeleton className='h-9 w-9 rounded-full' />
      </div>

      <div className='flex gap-3'>
        {Array(itemsCount)
          .fill({})
          .map((_, index) => (
            <Skeleton className='h-[60px] flex-1 rounded-xl' key={index} />
          ))}
      </div>
    </div>
  )
);
