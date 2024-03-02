import React from 'react';

import { cn } from '@/lib/utils';

import { Separator } from './separator';
import { Skeleton } from './skeleton';

interface EmployeeCardSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EmployeeCardSkeleton = React.forwardRef<HTMLDivElement, EmployeeCardSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-1 flex-col items-center space-y-3', className)}
      {...props}
    >
      <Skeleton className='h-16 w-16 rounded-full' />
      <div className='flex flex-col items-center space-y-2'>
        <Skeleton className='h-6 w-36' />
        <Skeleton className='h-4 w-16' />
      </div>
      <Separator />
      <div className='flex w-full space-x-6 px-4'>
        <div className='w-1/3 space-y-2'>
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
        </div>
        <div className='w-2/3 space-y-2'>
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
);
