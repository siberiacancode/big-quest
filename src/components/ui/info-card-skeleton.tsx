import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface InfoCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  withDescription?: boolean;
  multiplyBlockCount?: number;
}

export const InfoCardSkeleton = React.forwardRef<HTMLDivElement, InfoCardSkeletonProps>(
  ({ withDescription, multiplyBlockCount, className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-6 rounded bg-background p-5', className)} {...props}>
      <div className='flex justify-between'>
        <Skeleton className='h-8 w-2/5 min-w-16 rounded-xl' />
        <Skeleton className='h-8 w-8 rounded-full' />
      </div>

      {multiplyBlockCount && (
        <div className='flex gap-3'>
          {Array(multiplyBlockCount)
            .fill({})
            .map((_, index) => (
              <Skeleton className='h-16 flex-1 rounded-xl' key={index} />
            ))}
        </div>
      )}
      {!multiplyBlockCount && (
        <div className='space-y-3'>
          <Skeleton className='h-9 w-1/3 rounded-xl' />
          {withDescription && <Skeleton className='h-6 w-1/2 rounded-xl' />}
        </div>
      )}
    </div>
  )
);
