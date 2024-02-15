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
      <Skeleton className='h-8 w-full rounded-xl' />
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
          <Skeleton className='h-16 w-1/3 rounded-xl' />
          {withDescription && <Skeleton className='h-4 w-1/2 rounded-xl' />}
        </div>
      )}
    </div>
  )
);
