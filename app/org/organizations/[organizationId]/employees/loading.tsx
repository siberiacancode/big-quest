import { EmployeeCardSkeleton } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

const OrganizationEmployeeLoading = () => (
  <>
    <div className='flex justify-between'>
      <Skeleton className='h-8 w-28 bg-background' />
      <Skeleton className='h-10 w-36 bg-background' />
    </div>

    <div className='grid gap-3 4xlx:grid-cols-4 3xlx:grid-cols-3 2xlx:grid-cols-2 mdx:grid-cols-1'>
      {Array(5)
        .fill({})
        .map((_, index) => (
          <div
            className='relative flex min-h-72 w-full min-w-[300px] space-y-3 rounded bg-background p-8'
            key={index}
          >
            <Skeleton className='absolute right-5 top-5 h-6 w-6 rounded-full' />
            <EmployeeCardSkeleton />
          </div>
        ))}
    </div>
  </>
);

export default OrganizationEmployeeLoading;
