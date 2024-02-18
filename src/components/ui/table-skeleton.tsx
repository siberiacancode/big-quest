import React from 'react';

import { cn } from '@/lib/utils';

import { Skeleton } from './skeleton';

interface TableSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  itemsCount?: number;
}

export const TableSkeleton = React.forwardRef<HTMLDivElement, TableSkeletonProps>(
  ({ itemsCount = 10, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('w-full caption-bottom rounded-lg border border-secondary', className)}
      {...props}
    >
      <div className='flex h-12 border-b border-secondary bg-secondary' />
      <div className='flex flex-col'>
        {Array(itemsCount)
          .fill({})
          .map((_, index) => (
            <div key={index} className='flex border-b border-secondary last:border-0'>
              <div className='flex items-center py-4 pl-4 smx:pl-2'>
                <Skeleton className='h-4 w-4 rounded-sm' />
              </div>
              <div className='flex w-[14%] items-center py-4 pl-4  smx:pl-1'>
                <Skeleton className='mx-4 h-4 w-full smx:mx-1' />
              </div>
              <div className='flex w-[22%] items-center py-4 '>
                <Skeleton className='mx-4 h-4 w-full max-w-48 smx:mx-1' />
              </div>
              <div className='flex w-[14%] items-center py-4'>
                <Skeleton className='mx-4 h-4 w-full smx:mx-1' />
              </div>
              <div className='flex w-[12%] items-center py-4'>
                <Skeleton className='mx-4 h-4 w-full smx:mx-1' />
              </div>
              <div className='flex w-[17%] items-center py-4'>
                <Skeleton className='mx-4 h-4 w-full smx:mx-1' />
              </div>
              <div className='flex w-[14%] items-center py-4'>
                <Skeleton className='mx-4 h-4 w-full smx:mx-1' />
              </div>
              <div className='py-4'>
                <Skeleton className='smx:rounded-xs mr-2 h-8 w-8 rounded-sm smx:h-6 smx:w-6' />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
);
