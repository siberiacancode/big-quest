import { Skeleton } from '@/components/ui';

export const ActivityMediasSkeleton = () => (
  <div className='flex w-full flex-col gap-4 md:flex-row'>
    <div className='aspect-square max-h-[418px]'>
      <Skeleton className='h-full max-h-[418px] rounded-lg' />
    </div>
    <div className='flex w-full grid-rows-4 gap-2 overflow-x-auto md:grid md:h-full md:w-fit md:grid-cols-2 md:gap-1 md:overflow-x-hidden'>
      {Array(8)
        .fill({})
        .map((_, index) => (
          <div className='relative w-[100px]'>
            <Skeleton key={index} className='size-[100px]' />
          </div>
        ))}
    </div>
  </div>
);
