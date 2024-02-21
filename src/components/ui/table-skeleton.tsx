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
              <div className='grid w-full grid-cols-5 mdx:grid-cols-4 xsx:grid-cols-3 '>
                <div className='flex items-center py-4 pl-4 smx:pl-1'>
                  <Skeleton className='mx-3 h-4 w-full smx:mx-1' />
                </div>
                <div className='flex items-center py-4'>
                  <Skeleton className='mx-3 h-4 w-full smx:mx-1' />
                </div>
                <div className='flex items-center py-4'>
                  <Skeleton className='mx-3 h-4 w-full smx:mx-1' />
                </div>
                <div className='flex items-center py-4 xsx:hidden'>
                  <Skeleton className='mx-3 h-4 w-full smx:mx-1' />
                </div>
                <div className='flex items-center py-4 mdx:hidden'>
                  <Skeleton className='mx-3 h-4 w-full smx:mx-1' />
                </div>
              </div>
              <div className='py-4'>
                <Skeleton className='smx:rounded-xs mx-4 h-8 w-8 rounded-sm smx:h-6 smx:w-6' />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
);
