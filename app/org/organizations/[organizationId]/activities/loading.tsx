import { ActivityCardSkeleton, Skeleton } from '@/components/ui';

const ActivitiesLoading = () => (
  <>
    <div className='flex justify-between'>
      <Skeleton className='h-8 w-32 bg-background' />
      <Skeleton className='h-10 w-56 bg-background' />
    </div>

    <div className='mb-6 grid w-full grid-cols-5 gap-7 3xlx:grid-cols-4 xlx:grid-cols-3 mdx:grid-cols-2 2xsx:grid-cols-1'>
      {Array(5)
        .fill({})
        .map((_, index) => (
          <ActivityCardSkeleton key={index} />
        ))}
    </div>
  </>
);

export default ActivitiesLoading;
