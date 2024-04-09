import { AddressCardSkeleton } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

const OrganizationAddressesPageLoading = () => (
  <>
    <div className='flex justify-between'>
      <Skeleton className='h-8 w-28 bg-background' />
      <Skeleton className='h-10 w-36 bg-background' />
    </div>

    <div className='justify-center gap-5 2xlx:grid-cols-2 xlx:flex xlx:flex-wrap 2xl:grid-cols-3 xl:grid'>
      {Array(5)
        .fill({})
        .map((_, index) => (
          <div
            className='flex min-h-72 min-w-[300px] flex-row-reverse space-y-3 rounded bg-background p-8 pr-5 pt-4'
            key={index}
          >
            <div className='ml-2 flex flex-1 justify-end'>
              <Skeleton className='float-right h-6 w-6 rounded-full pb-3' />
            </div>
            <AddressCardSkeleton />
          </div>
        ))}
    </div>
  </>
);

export default OrganizationAddressesPageLoading;
