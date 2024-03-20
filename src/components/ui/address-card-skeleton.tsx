import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

type AddressCardSkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const AddressCardSkeleton = React.forwardRef<HTMLDivElement, AddressCardSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('w-full', className)} {...props}>
      <div className='mt-4 space-y-3'>
        <div className='flex justify-between gap-3'>
          <Skeleton className='h-5 flex-1' />
          <Skeleton className='h-5 flex-1' />
        </div>
        <div className='flex justify-between gap-3'>
          <Skeleton className='h-5 flex-1' />
          <Skeleton className='h-5 flex-1' />
        </div>
        <div className='flex justify-between gap-3'>
          <Skeleton className='h-5 flex-1' />
          <Skeleton className='h-5 flex-1' />
        </div>
        <div className='flex justify-between gap-3'>
          <Skeleton className='h-5 flex-1' />
          <Skeleton className='h-5 flex-1' />
        </div>
        <div className='flex justify-between gap-3'>
          <Skeleton className='h-5 flex-1' />
          <Skeleton className='h-10 flex-1' />
        </div>
      </div>
    </div>
  )
);
