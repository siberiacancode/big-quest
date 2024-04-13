import { EmployeeCardSkeleton } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

const PartnerEmployeesLoading = () => (
  <>
    <div className='flex justify-between'>
      <Skeleton className='h-8 w-28 bg-background' />
      <Skeleton className='h-10 w-36 bg-background' />
    </div>

    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 2lg:grid-cols-3'>
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

export default PartnerEmployeesLoading;
