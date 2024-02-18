import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface InfoCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  multiplyItemsCount?: number;
}

export const InfoCardSkeleton = React.forwardRef<HTMLDivElement, InfoCardSkeletonProps>(
  ({ multiplyItemsCount = 1, className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-6 rounded bg-background p-5', className)} {...props}>
      <div className='flex justify-between'>
        <Skeleton className='h-8 w-2/5 min-w-16 rounded-xl' />
        <Skeleton className='h-8 w-8 rounded-full' />
      </div>

      <div className='flex gap-3'>
        {Array(multiplyItemsCount)
          .fill({})
          .map((_, index) => (
            <Skeleton className='h-16 flex-1 rounded-xl' key={index} />
          ))}
      </div>
    </div>
  )
);
