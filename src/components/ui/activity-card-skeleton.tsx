import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface ActivityCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ActivityCardSkeleton = React.forwardRef<HTMLDivElement, ActivityCardSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('h-[397px] w-full rounded-lg bg-background p-4', className)}
      {...props}
    >
      <div className='relative h-2/3'>
        <Skeleton className='mdx-h-1/2 relative h-full w-full rounded-lg ' />
        <div className='absolute top-0 flex w-full items-center justify-between p-3'>
          <Skeleton className='h-8 w-24 rounded-md bg-background' />
          <Skeleton className='h-8 w-8 rounded-full bg-background' />
        </div>
      </div>
      <div className='mb-2 mt-3 flex w-full justify-between'>
        <Skeleton className='h-4 w-20' />
        <Skeleton className='h-4 w-28' />
      </div>
      <Skeleton className='mt-2 h-4 w-40' />
      <Skeleton className='my-4 h-[1px]' />
      <div className='mb-1 flex w-full justify-between'>
        <Skeleton className='h-4 w-20' />
        <Skeleton className='h-4 w-14' />
      </div>
    </div>
  )
);
