import { Skeleton } from '@/components/ui';

export const ActivityMediaSkeleton = () => (
  <div className='grid h-fit max-h-[600px] w-full grid-cols-3 gap-3 2smx:max-w-full 2smx:grid-cols-1 2smx:grid-rows-5 xsx:gap-2'>
    <div className='relative col-span-2 max-h-[418px] max-w-[418px] 2smx:row-span-3 2smx:max-w-full 2sm:h-[418px]'>
      <Skeleton className='h-full max-h-[418px] rounded-lg 2smx:max-h-[360px]' />
    </div>

    <div className='grid h-fit grid-cols-2 gap-2 2smx:row-span-2 2smx:grid-cols-4 2smx:grid-rows-1'>
      {Array(8)
        .fill({})
        .map((_, index) => (
          <Skeleton
            key={index}
            className='3smx:h-[85px] relative h-[100px] w-full xsx:h-[80px] xxsx:h-[60px]'
          />
        ))}
    </div>
  </div>
);
