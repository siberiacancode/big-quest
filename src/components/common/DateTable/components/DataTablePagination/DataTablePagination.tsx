import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';

import { getPaginationNumbers } from './helpers/a';
import { getPageCount } from './helpers/getPageCount';
import { useDataTablePagination } from './hooks/useDataTablePagination';

interface DataTablePaginationProps {
  pagination: PaginationResponse;
}

export const DataTablePagination = ({ pagination }: DataTablePaginationProps) => {
  const { functions } = useDataTablePagination();

  return (
    <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-3 md:flex-row'>
      <span className='text-b text-sm font-semibold'>
        {pagination.current} <I18nText path='pagination.page' /> <I18nText path='pagination.from' />{' '}
        {getPageCount(pagination.limit, pagination.count)}
      </span>
      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          size='sm'
          disabled={pagination.current === 1}
          className='border-none'
          onClick={() => functions.onPaginationButtonClick(pagination.current - 1)}
        >
          <ChevronLeftIcon className='h-6 w-6 stroke-2' />
        </Button>

        {getPaginationNumbers(pagination).map((pageIndex) => (
          <>
            {pageIndex <= getPageCount(pagination.limit, pagination.count) && (
              <Button
                key={pageIndex}
                variant='outline'
                size='sm'
                className='h-8 w-8 rounded-lg border border-secondary font-normal'
                onClick={() => functions.onPaginationButtonClick(pageIndex)}
              >
                {pageIndex}
              </Button>
            )}
          </>
        ))}

        {pagination.current > 3 && <span className='text-b mx-1 text-sm font-bold'>...</span>}

        {getPageCount(pagination.limit, pagination.count) > 4 && (
          <Button
            variant='outline'
            size='sm'
            className='h-8 w-8 rounded-lg border border-secondary font-normal'
            onClick={() =>
              functions.onPaginationButtonClick(getPageCount(pagination.limit, pagination.count))
            }
          >
            {getPageCount(pagination.limit, pagination.count)}
          </Button>
        )}

        <Button
          variant='outline'
          size='sm'
          disabled={pagination.current + 1 >= pagination.count / pagination.limit}
          className='border-none'
          onClick={() => functions.onPaginationButtonClick(pagination.current + 1)}
        >
          <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
      </div>
    </div>
  );
};
