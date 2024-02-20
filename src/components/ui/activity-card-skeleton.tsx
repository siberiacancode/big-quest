import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface ActivityCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ActivityCardSkeleton = React.forwardRef<HTMLDivElement, ActivityCardSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('w-full rounded-lg bg-background p-4', className)} {...props}>
      <div className='relative'>
        <Skeleton className='w-full rounded-lg pb-full 4xlx:pb-72 3xlx:pb-full 4xl:pb-96' />
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
