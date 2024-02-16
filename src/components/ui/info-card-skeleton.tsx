import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface InfoCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  multiplyItemsCount?: number;
}

export const InfoCardSkeleton = React.forwardRef<HTMLDivElement, InfoCardSkeletonProps>(
  ({ multiplyItemsCount, className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-6 rounded bg-background p-5', className)} {...props}>
      <div className='flex justify-between'>
        <Skeleton className='h-8 w-2/5 min-w-16 rounded-xl' />
        <Skeleton className='h-8 w-8 rounded-full' />
      </div>

      {multiplyItemsCount && (
        <div className='flex gap-3'>
          {Array(multiplyItemsCount)
            .fill({})
            .map((_, index) => (
              <Skeleton className='h-16 flex-1 rounded-xl' key={index} />
            ))}
        </div>
      )}
      {!multiplyItemsCount && (
        <div className='space-y-3'>
          <Skeleton className='h-9 w-1/3 rounded-xl' />
          <Skeleton className='h-6 w-1/2 rounded-xl' />
        </div>
      )}
    </div>
  )
);
