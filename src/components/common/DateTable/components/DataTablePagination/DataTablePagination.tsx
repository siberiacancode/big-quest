import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';

import { getPageCount } from './helpers/getPageCount';
import { useDataTablePagination } from './hooks/useDataTablePagination';

interface DataTablePaginationProps extends Pagination {}

export const DataTablePagination = ({ count, limit, offset }: DataTablePaginationProps) => {
  const { functions } = useDataTablePagination();

  return (
    <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-3 md:flex-row'>
      <span className='text-b text-sm font-semibold'>
        {offset} <I18nText path='pagination.page' /> <I18nText path='pagination.from' />{' '}
        {getPageCount(limit, count)}
      </span>
      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          size='sm'
          disabled={offset === 0}
          className='border-none'
          onClick={() => functions.onPaginationButtonClick(offset - 1)}
        >
          <ChevronLeftIcon className='h-6 w-6 stroke-2' />
        </Button>

        {[1, 2, 3].map((pageIndex) => (
          <>
            {pageIndex <= getPageCount(limit, count) && (
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

        {offset > 3 && <span className='text-b mx-1 text-sm font-bold'>...</span>}

        {count / limit > 4 && (
          <Button
            variant='outline'
            size='sm'
            className='h-8 w-8 rounded-lg border border-secondary font-normal'
            onClick={() => functions.onPaginationButtonClick(getPageCount(limit, count))}
          >
            {getPageCount(limit, count)}
          </Button>
        )}

        <Button
          variant='outline'
          size='sm'
          disabled={offset + 1 >= count / limit}
          className='border-none'
          onClick={() => functions.onPaginationButtonClick(offset + 1)}
        >
          <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
      </div>
    </div>
  );
};
